/**
 * router.js - Hash-based SPA Router for brag.charity
 */

const router = {
    routes: {
        'home': { view: 'views/home.html', init: typeof initHome !== 'undefined' ? initHome : null },
        'marketplace': { view: 'views/marketplace.html', init: typeof initMarketplace !== 'undefined' ? initMarketplace : null },
        'manager': { view: 'views/manager.html', init: typeof initManager !== 'undefined' ? initManager : null, protected: true },
        'product': { view: 'views/product.html', init: typeof initProduct !== 'undefined' ? initProduct : null },
        'login': { view: 'views/login.html', init: typeof initLogin !== 'undefined' ? initLogin : null },
        'privacy': { view: 'views/privacy.html' },
        'terms': { view: 'views/terms.html' }
    },

    defaultRoute: 'home',

    async init() {
        window.addEventListener('hashchange', () => this.handleRouting());
        await this.handleRouting();
    },

    async handleRouting() {
        let hash = window.location.hash.substring(2) || this.defaultRoute; // Remove #/
        let [path, queryString] = hash.split('?');

        // Parse query params if any
        const params = new URLSearchParams(queryString);

        let route = this.routes[path];

        // Fallback for sub-paths or unknown routes
        if (!route) {
            route = this.routes[this.defaultRoute];
            path = this.defaultRoute;
        }

        // Protection check
        if (route.protected && localStorage.getItem('wallet_connected') !== 'true') {
            this.navigateTo('login');
            return;
        }

        await this.loadView(path, route);
        this.updateActiveLinks(path);

        // Run initialization logic for the page if it exists
        if (typeof route.init === 'function') {
            route.init();
        } else if (path === 'home' && typeof initHome === 'function') {
            initHome();
        } else if (path === 'marketplace' && typeof initMarketplace === 'function') {
            initMarketplace();
        } else if (path === 'manager' && typeof initManager === 'function') {
            initManager();
        } else if (path === 'product' && typeof initProduct === 'function') {
            initProduct();
        } else if (path === 'login' && typeof initLogin === 'function') {
            initLogin();
        }
    },

    async loadView(name, route) {
        const root = document.getElementById('app-root');
        try {
            const response = await fetch(route.view);
            if (!response.ok) throw new Error(`Failed to load view: ${name}`);
            const html = await response.text();
            root.innerHTML = html;

            // Scroll to top or to specific anchor if present in query
            if (window.location.hash.includes('#donate')) {
               document.getElementById('donate')?.scrollIntoView();
            } else {
               window.scrollTo(0, 0);
            }

        } catch (error) {
            console.error(error);
            root.innerHTML = `<div class="p-20 text-center">Error loading page content.</div>`;
        }
    },

    navigateTo(path, anchor = '') {
        window.location.hash = `#/${path}${anchor}`;
    },

    updateActiveLinks(path) {
        document.querySelectorAll('[data-nav]').forEach(el => {
            if (el.getAttribute('data-nav') === path) {
                el.classList.add('active');
                if (el.classList.contains('text-slate-500')) {
                    el.classList.remove('text-slate-500');
                    el.classList.add('text-indigo-400');
                }
            } else {
                el.classList.remove('active');
                if (el.getAttribute('data-nav') === 'manager' && !el.classList.contains('text-slate-500')) {
                    el.classList.add('text-slate-500');
                }
            }
        });
    }
};

window.addEventListener('DOMContentLoaded', () => router.init());
