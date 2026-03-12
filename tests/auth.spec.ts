import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Authentication Flow', () => {
  const loginUrl = `file://${path.resolve('frontend/login.html')}`;
  const managerUrl = `file://${path.resolve('frontend/manager.html')}`;

  test('should redirect unauthenticated users to login page', async ({ page }) => {
    // Clear any existing session
    await page.goto(loginUrl);
    await page.evaluate(() => localStorage.removeItem('brag_session'));

    // Try to access manager page
    await page.goto(managerUrl);

    // Should be redirected to login
    await expect(page).toHaveURL(/login\.html/);
  });

  test('should login with email and see address', async ({ page }) => {
    await page.goto(loginUrl);

    // Switch to email tab
    await page.click('#tabEmail');

    // Fill form
    await page.fill('#email', 'test@example.com');
    await page.fill('#password', 'any-password');

    // Mock the fetch response for login-email
    // Note: Since we are using file:// protocol, the fetch would normally go to localhost:9000
    // We can intercept it if needed, but the UI logic will just try to call it.
    // However, if the bridge isn't running, it will fail.
    // For a pure UI test, we can mock the fetch in the browser context.

    await page.evaluate(() => {
      window.fetch = async (url, init) => {
        if (typeof url === 'string' && url.includes('/auth/login-email')) {
          return {
            ok: true,
            status: 200,
            json: async () => ({
              success: true,
              sessionId: 'mock-session-id',
              address: '0xmockaddress123',
              email: 'test@example.com'
            })
          } as any;
        }
        if (typeof url === 'string' && url.includes('/auth/session')) {
           return {
             ok: true,
             status: 200,
             json: async () => ({ address: '0xmockaddress123', email: 'test@example.com' })
           } as any;
        }
        return { ok: false, status: 404 } as any;
      };
    });

    await page.click('#btnLoginEmail');

    // Should redirect to manager
    await expect(page).toHaveURL(/manager\.html/);

    // Should show the mock address in the header
    // In app.js initNavbarAuth(), it adds an 0x... text element before the buttons
    const addrDisplay = page.locator('nav span.text-font-mono');
    // Actually looking at initNavbarAuth:
    // addrDisplay.className = 'text-[10px] font-mono text-slate-500 hidden sm:inline';
    const addrDisplay2 = page.locator('nav span.font-mono');
    await expect(addrDisplay2).toBeVisible();
    await expect(addrDisplay2).toContainText('0xmock');
  });

  test('should show linking banner when token is present', async ({ page }) => {
    await page.goto(`${loginUrl}?token=LINK123`);

    const banner = page.locator('#linkingStatus');
    await expect(banner).toBeVisible();
    await expect(page.locator('#displayToken')).toHaveText('LINK123');
  });

  test('should logout successfully', async ({ page }) => {
     // Setup a mock session
     await page.goto(loginUrl);
     await page.evaluate(() => {
       localStorage.setItem('brag_session', JSON.stringify({
         sessionId: 'mock-session',
         address: '0x123'
       }));
     });

     await page.goto(managerUrl);

     // Mock session check
     await page.evaluate(() => {
       window.fetch = async (url) => {
         if (typeof url === 'string' && url.includes('/auth/session')) {
            return { ok: true, status: 200, json: async () => ({ address: '0x123' }) } as any;
         }
         return { ok: false, status: 404 } as any;
       };
     });

     // In initNavbarAuth, it creates a button with text "Logout"
     const logoutBtn = page.getByRole('button', { name: 'Logout' });
     await expect(logoutBtn).toBeVisible();
     await logoutBtn.click();

     // Should be redirected to login and localStorage cleared
     await expect(page).toHaveURL(/login\.html/);
     const session = await page.evaluate(() => localStorage.getItem('brag_session'));
     expect(session).toBeNull();
  });
});
