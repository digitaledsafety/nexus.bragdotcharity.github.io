/**
 * router.js - Simple client-side router for brag.charity SPA
 */

const router = {
    routes: {
        'home': { view: 'views/home.html', cleanup: typeof cleanupHome !== 'undefined' ? cleanupHome : null },
        'marketplace': { view: 'views/marketplace.html', cleanup: typeof cleanupMarketplace !== 'undefined' ? cleanupMarketplace : null },
        'manager': { view: 'views/manager.html', cleanup: typeof cleanupManager !== 'undefined' ? cleanupManager : null },
        'product': { view: 'views/product.html', cleanup: typeof cleanupProduct !== 'undefined' ? cleanupProduct : null },
        'login': { view: 'views/login.html', cleanup: typeof cleanupLogin !== 'undefined' ? cleanupLogin : null },
    },
    currentRoute: null,

    async init() {
        // Handle browser back/forward buttons
        window.onpopstate = () => this.handleRoute();

        // Initial route handling
        await this.handleRoute();
    },

    async navigateTo(routeName, paramsOrHash = '') {
        const newUrl = new URL(window.location.origin + window.location.pathname);
        newUrl.searchParams.set('page', routeName);

        let hash = '';
        if (typeof paramsOrHash === 'string') {
            if (paramsOrHash.startsWith('?')) {
                const extraParams = new URLSearchParams(paramsOrHash);
                for (const [key, value] of extraParams) {
                    if (key !== 'page') newUrl.searchParams.set(key, value);
                }
            } else if (paramsOrHash.startsWith('#')) {
                hash = paramsOrHash;
            }
        }

        window.history.pushState({}, '', newUrl.pathname + newUrl.search + hash);
        await this.handleRoute();

        if (hash) {
            const element = document.querySelector(hash);
            if (element) element.scrollIntoView();
        }
    },

    async handleRoute() {
        // Cleanup previous route if applicable
        if (this.currentRoute) {
            const cleanupFunc = this.getCleanupFunction(this.currentRoute);
            if (cleanupFunc) cleanupFunc();
        }

        const urlParams = new URLSearchParams(window.location.search);
        let routeName = urlParams.get('page') || 'home';

        // Support direct access to .html files as routes if coming from old links
        const path = window.location.pathname;
        if (path.includes('marketplace.html')) routeName = 'marketplace';
        else if (path.includes('manager.html')) routeName = 'manager';
        else if (path.includes('product.html')) routeName = 'product';
        else if (path.includes('login.html')) routeName = 'login';

        const route = this.routes[routeName] || this.routes['home'];
        this.currentRoute = routeName;

        try {
            // Update visibility of UI elements
            this.updateUIVisibility(routeName);

            // Fetch and inject view
            const response = await fetch(route.view);
            if (!response.ok) throw new Error(`Failed to load view: ${response.statusText}`);
            const html = await response.text();

            const viewport = document.getElementById('app-viewport');
            if (viewport) {
                viewport.innerHTML = html;
            }

            // Initialize page-specific logic
            const initFunc = this.getInitFunction(routeName);
            if (initFunc) {
                await initFunc();
            }

            // Update active link in nav
            this.updateActiveLink(routeName);

            // Scroll to top if no hash
            if (!window.location.hash) {
                window.scrollTo(0, 0);
            }

        } catch (error) {
            console.error('Routing error:', error);
            const viewport = document.getElementById('app-viewport');
            if (viewport) {
                viewport.innerHTML = `<div class="text-center py-20"><h2>View not found</h2><p>${error.message}</p><button onclick="router.navigateTo('home')" class="btn-primary px-6 py-2 mt-4 rounded-full">Go Home</button></div>`;
            }
        }
    },

    getInitFunction(routeName) {
        switch(routeName) {
            case 'home': return typeof initHome !== 'undefined' ? initHome : null;
            case 'marketplace': return typeof initMarketplace !== 'undefined' ? initMarketplace : null;
            case 'manager': return typeof initManager !== 'undefined' ? initManager : null;
            case 'product': return typeof initProduct !== 'undefined' ? initProduct : null;
            case 'login': return typeof initLogin !== 'undefined' ? initLogin : null;
            default: return null;
        }
    },

    getCleanupFunction(routeName) {
        switch(routeName) {
            case 'home': return typeof cleanupHome !== 'undefined' ? cleanupHome : null;
            case 'marketplace': return typeof cleanupMarketplace !== 'undefined' ? cleanupMarketplace : null;
            case 'manager': return typeof cleanupManager !== 'undefined' ? cleanupManager : null;
            case 'product': return typeof cleanupProduct !== 'undefined' ? cleanupProduct : null;
            case 'login': return typeof cleanupLogin !== 'undefined' ? cleanupLogin : null;
            default: return null;
        }
    },

    updateUIVisibility(routeName) {
        const nav = document.getElementById('main-nav');
        const footer = document.getElementById('main-footer');
        const risk = document.getElementById('risk-disclosure');
        const cartBtn = document.getElementById('cartBtn');
        const viewport = document.getElementById('app-viewport');

        if (routeName === 'login') {
            if (nav) nav.classList.add('hidden');
            if (footer) footer.classList.add('hidden');
            if (risk) risk.classList.add('hidden');
            document.body.classList.add('justify-center');
            if (viewport) viewport.classList.remove('flex-grow');
        } else {
            if (nav) nav.classList.remove('hidden');
            if (footer) footer.classList.remove('hidden');
            if (risk) risk.classList.remove('hidden');
            document.body.classList.remove('justify-center');
            if (viewport) viewport.classList.add('flex-grow');

            if (routeName === 'marketplace' || routeName === 'product') {
                if (cartBtn) cartBtn.classList.remove('hidden');
            } else {
                if (cartBtn) cartBtn.classList.add('hidden');
            }
        }
    },

    updateActiveLink(routeName) {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.dataset.route === routeName) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Also update mobile menu links
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            if (link.dataset.route === routeName) {
                link.classList.add('text-indigo-400');
                link.classList.remove('text-slate-300');
            } else {
                link.classList.remove('text-indigo-400');
                link.classList.add('text-slate-300');
            }
        });
    }
};

// Initialize router when core is ready
window.addEventListener('DOMContentLoaded', async () => {
    // Wait for core to be ready if it's already initializing
    if (typeof coreReady !== 'undefined') {
        await coreReady;
    }
    router.init();
});
