const ENV_API = 'http://localhost:9002';
let statusInterval;

function initEnvControl() {
    setupEnvListeners();

    // Auto-update status every 5 seconds
    if (statusInterval) clearInterval(statusInterval);
    statusInterval = setInterval(updateStatus, 5000);
    updateStatus();

    // Export to global scope for onclick handlers
    window.controlService = controlService;
    window.viewLogs = viewLogs;
}

function cleanupEnvControl() {
    if (statusInterval) {
        clearInterval(statusInterval);
        statusInterval = null;
    }
}

async function updateStatus() {
    const container = document.getElementById('envServiceStatus');
    if (!container) return;

    try {
        const res = await fetch(`${ENV_API}/status`);
        if (!res.ok) throw new Error('Manager offline');
        const data = await res.json();

        container.innerHTML = '';

        for (const [name, svc] of Object.entries(data.services)) {
            const card = document.createElement('div');
            card.className = 'bg-white/5 p-4 rounded-2xl border border-white/5';

            const isRunning = svc.status === 'running';
            const statusColor = isRunning ? 'text-emerald-500' : 'text-red-500';
            const statusIcon = isRunning ? 'fa-check-circle' : 'fa-times-circle';

            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">${name}</span>
                    <i class="fas ${statusIcon} ${statusColor} text-xs"></i>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold text-slate-600">${svc.logCount} LOGS</span>
                    <div class="flex space-x-1">
                        <button onclick="controlService('${name}', '${isRunning ? 'stop' : 'start'}')" class="text-[9px] font-black uppercase tracking-tighter px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                            ${isRunning ? 'Stop' : 'Start'}
                        </button>
                        <button onclick="viewLogs('${name}')" class="text-[9px] font-black uppercase tracking-tighter px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                            Logs
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        }

        // Update Minecraft Status
        const mcStatus = document.getElementById('mcStatus');
        if (mcStatus) {
            if (data.minecraft.connected) {
                mcStatus.innerText = 'ONLINE';
                mcStatus.className = 'text-[10px] font-black text-emerald-500';
            } else {
                mcStatus.innerText = 'OFFLINE';
                mcStatus.className = 'text-[10px] font-black text-red-500';
            }
        }

    } catch (e) {
        console.error('Failed to update status:', e);
        if (container) container.innerHTML = '<div class="col-span-4 text-center text-slate-500 text-sm italic py-4">Environment Manager (scripts/env-manager.js) is not running on port 9002</div>';
    }
}

async function controlService(name, action) {
    try {
        await fetch(`${ENV_API}/${action}?service=${name}`, { method: 'POST' });
        setTimeout(updateStatus, 500);
    } catch (e) {
        alert(`Failed to ${action} ${name}`);
    }
}

async function viewLogs(name) {
    try {
        const res = await fetch(`${ENV_API}/logs?service=${name}`);
        const logs = await res.json();

        const logElement = document.getElementById('logs');
        if (!logElement) return;
        logElement.innerHTML = `<div class="text-indigo-400 border-b border-white/5 pb-2 mb-3 font-black uppercase tracking-widest text-[9px] flex items-center"><i class="fas fa-terminal mr-2"></i> Log Stream: ${name}</div>`;

        logs.forEach(entry => {
            const div = document.createElement('div');
            div.className = 'text-slate-400 mb-1';
            div.innerHTML = `<span class="text-slate-600 mr-2">[${new Date(entry.timestamp).toLocaleTimeString()}]</span> ${entry.message}`;
            logElement.appendChild(div);
        });
        logElement.scrollTop = logElement.scrollHeight;
    } catch (e) {
        alert('Failed to fetch logs');
    }
}

function setupEnvListeners() {
    // Check if element exists before adding listener (for new mobile-friendly manager)
    const btnStatus = document.getElementById('btnEnvStatus');
    if (btnStatus) btnStatus.onclick = updateStatus;

    const btnInit = document.getElementById('btnEnvInit');
    if (btnInit) {
        btnInit.onclick = async () => {
            if (confirm('This will restart the node, re-deploy all contracts and seed fresh data. Continue?')) {
                try {
                    await fetch(`${ENV_API}/init`, { method: 'POST' });
                    alert('Initialization started. Check logs for progress.');
                    updateStatus();
                } catch (e) {
                    alert('Failed to start initialization');
                }
            }
        };
    }

    const btnMcStart = document.getElementById('btnMcStart');
    if (btnMcStart) {
        btnMcStart.onclick = async () => {
            try {
                const res = await fetch(`${ENV_API}/minecraft/start`, { method: 'POST' });
                const data = await res.json();
                if (data.success) {
                    alert('Minecraft servers starting...');
                } else {
                    alert('Failed to start Minecraft servers: ' + (data.error || 'Unknown error'));
                }
            } catch (e) {
                alert('Failed to connect to Environment Manager');
            }
        };
    }

    const btnMcStop = document.getElementById('btnMcStop');
    if (btnMcStop) {
        btnMcStop.onclick = async () => {
            try {
                const res = await fetch(`${ENV_API}/minecraft/stop`, { method: 'POST' });
                const data = await res.json();
                if (data.success) {
                    alert('Minecraft servers stopping...');
                } else {
                    alert('Failed to stop Minecraft servers: ' + (data.error || 'Unknown error'));
                }
            } catch (e) {
                alert('Failed to connect to Environment Manager');
            }
        };
    }

    const btnMcRestart = document.getElementById('btnMcRestart');
    if (btnMcRestart) {
        btnMcRestart.onclick = async () => {
            try {
                const res = await fetch(`${ENV_API}/minecraft/restart`, { method: 'POST' });
                const data = await res.json();
                if (data.success) {
                    alert('Minecraft servers restarting...');
                } else {
                    alert('Failed to restart Minecraft servers: ' + (data.error || 'Unknown error'));
                }
            } catch (e) {
                alert('Failed to connect to Environment Manager');
            }
        };
    }

    const btnInjectAddon = document.getElementById('btnInjectAddon');
    if (btnInjectAddon) {
        btnInjectAddon.onclick = async () => {
            try {
                const res = await fetch(`${ENV_API}/minecraft/inject`, { method: 'POST' });
                const data = await res.json();
                if (data.success) {
                    alert('Addon injected successfully to all managed servers!');
                } else {
                    alert('Injection failed: ' + (data.error || 'Unknown error'));
                }
            } catch (e) {
                alert('Failed to connect to Environment Manager for injection');
            }
        };
    }
}
