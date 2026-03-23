const ENV_API = window.BRAG_CONFIG?.ENV_API || 'http://localhost:9002';

async function updateStatus() {
    try {
        const res = await fetch(`${ENV_API}/status`);
        if (!res.ok) throw new Error('Manager offline');
        const data = await res.json();

        const container = document.getElementById('envServiceStatus');
        container.innerHTML = '';

        for (const [name, svc] of Object.entries(data.services)) {
            const card = document.createElement('div');
            card.className = 'bg-slate-800 p-3 rounded-lg border border-slate-700';

            const isRunning = svc.status === 'running';
            const statusColor = isRunning ? 'text-green-400' : 'text-red-400';
            const statusIcon = isRunning ? 'fa-check-circle' : 'fa-times-circle';

            card.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <span class="text-sm font-bold uppercase text-slate-400">${name}</span>
                    <i class="fas ${statusIcon} ${statusColor}"></i>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-xs text-slate-500">${svc.logCount} logs</span>
                    <div class="space-x-1">
                        <button onclick="controlService('${name}', '${isRunning ? 'stop' : 'start'}')" class="text-[10px] px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 transition-colors">
                            ${isRunning ? 'Stop' : 'Start'}
                        </button>
                        <button onclick="viewLogs('${name}')" class="text-[10px] px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 transition-colors">
                            Logs
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        }

        // Update Minecraft Status
        const mcStatus = document.getElementById('mcStatus');
        if (data.minecraft.connected) {
            mcStatus.innerHTML = `
                <span class="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                <span class="text-sm text-slate-400">Server Manager Online</span>
            `;
        } else {
            mcStatus.innerHTML = `
                <span class="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                <span class="text-sm text-slate-400">Server Manager Offline</span>
            `;
        }

    } catch (e) {
        console.error('Failed to update status:', e);
        const container = document.getElementById('envServiceStatus');
        container.innerHTML = '<div class="col-span-4 text-center text-slate-500 text-sm italic py-4">Environment Manager (scripts/env-manager.js) is not running on port 9002</div>';
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

        // Use the existing log element in manager.html to show these logs
        const logElement = document.getElementById('logs');
        logElement.innerHTML = `<div class="text-purple-400 border-b border-slate-700 pb-1 mb-2">--- Showing logs for ${name.toUpperCase()} ---</div>`;

        logs.forEach(entry => {
            const div = document.createElement('div');
            div.className = 'text-slate-300';
            div.innerText = `[${new Date(entry.timestamp).toLocaleTimeString()}] ${entry.message}`;
            logElement.appendChild(div);
        });
        logElement.scrollTop = logElement.scrollHeight;
    } catch (e) {
        alert('Failed to fetch logs');
    }
}

document.getElementById('btnEnvStatus').addEventListener('click', updateStatus);

document.getElementById('btnEnvInit').addEventListener('click', async () => {
    if (confirm('This will restart the node, re-deploy all contracts and seed fresh data. Continue?')) {
        try {
            await fetch(`${ENV_API}/init`, { method: 'POST' });
            alert('Initialization started. Check logs for progress.');
            updateStatus();
        } catch (e) {
            alert('Failed to start initialization');
        }
    }
});

document.getElementById('btnMcStart').addEventListener('click', async () => {
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
});

document.getElementById('btnMcStop').addEventListener('click', async () => {
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
});

document.getElementById('btnMcRestart').addEventListener('click', async () => {
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
});

document.getElementById('btnInjectAddon').addEventListener('click', async () => {
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
});

// Auto-update status every 5 seconds
setInterval(updateStatus, 5000);
updateStatus();

// Export to global scope for onclick handlers
window.controlService = controlService;
window.viewLogs = viewLogs;
