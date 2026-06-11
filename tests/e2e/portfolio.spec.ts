import { test, expect } from '@playwright/test';

test.describe('Portfolio — Zero Console Errors', () => {
  test('page loads without JS errors from our code', async ({ page }) => {
    const errors: string[] = [];

    page.on('pageerror', (err) => {
      errors.push(err.message);
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const ourErrors = errors.filter(
      (e) =>
        !e.includes('cloudflare') &&
        !e.includes('spoofer') &&
        !e.includes('extension') &&
        !e.includes('Third-party'),
    );

    expect(ourErrors).toEqual([]);
  });

  test('doctype is standards mode', async ({ page }) => {
    await page.goto('/');
    const doctype = await page.evaluate(() => {
      return document.compatMode === 'CSS1Compat';
    });
    expect(doctype).toBe(true);
  });
});

test.describe('Portfolio — Sections Render', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('navbar renders with all nav items', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('header button:has-text("Alfan Januar")')).toBeVisible();
    for (const label of ['Home', 'Projects', 'Experience', 'Skills', 'Contact']) {
      await expect(page.locator(`button:has-text("${label}")`).first()).toBeVisible();
    }
  });

  test('hero section renders with headline and CTA buttons', async ({ page }) => {
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('h1:has-text("Hi, I\'m Alfan Januar")')).toBeVisible();
    await expect(page.locator('h2:has-text("Frontend & Mobile Developer")')).toBeVisible();
    await expect(page.locator('button:has-text("View My Work")')).toBeVisible();
    await expect(page.locator('button:has-text("Get in Touch")')).toBeVisible();
  });

  test('real projects section renders with cards', async ({ page }) => {
    await expect(page.locator('h2:has-text("Real Projects")')).toBeVisible();
    const cards = page.locator('.group');
    expect(await cards.count()).toBeGreaterThanOrEqual(2);
  });

  test('portfolio projects section renders with cards', async ({ page }) => {
    await expect(page.locator('h2:has-text("Portfolio Projects")')).toBeVisible();
  });

  test('experience section renders', async ({ page }) => {
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('h2:has-text("Work Experience")')).toBeVisible();
  });

  test('tech stack section renders', async ({ page }) => {
    await expect(page.locator('#skills')).toBeVisible();
    await expect(page.locator('h2:has-text("Tech Stack")')).toBeVisible();
  });

  test('contact section renders with form', async ({ page }) => {
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('h2:has-text("Get in Touch")')).toBeVisible();
    await expect(page.locator('#contact-name')).toBeVisible();
    await expect(page.locator('#contact-email')).toBeVisible();
    await expect(page.locator('#contact-message')).toBeVisible();
  });

  test('footer renders with social links', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer a[title="Alfan on GitHub"]')).toBeVisible();
    await expect(page.locator('footer a[title="Alfan on LinkedIn"]')).toBeVisible();
  });
});

test.describe('Portfolio — Navigation', () => {
  test('clicking nav items scrolls to sections', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.locator('button:has-text("Projects")').first().click();
    await page.waitForTimeout(500);

    const projectsVisible = await page.locator('#projects').evaluate((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= -100 && rect.top < window.innerHeight;
    });
    expect(projectsVisible).toBe(true);
  });

  test('View My Work scrolls to projects', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.locator('button:has-text("View My Work")').click();
    await page.waitForTimeout(500);

    const projectsVisible = await page.locator('#projects').evaluate((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= -100 && rect.top < window.innerHeight;
    });
    expect(projectsVisible).toBe(true);
  });
});

test.describe('Portfolio — Modal', () => {
  test('opens on View Details click and closes on Close Details', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const firstViewDetails = page.locator('button:has-text("View Details")').first();
    await firstViewDetails.scrollIntoViewIfNeeded();
    await firstViewDetails.click();

    await expect(page.locator('[data-purpose="modal-container"]')).toBeVisible();

    await page.locator('button:has-text("Close Details")').click();

    await page.waitForTimeout(300);
    await expect(page.locator('[data-purpose="modal-container"]')).not.toBeVisible();
  });

  test('closes on backdrop click', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const firstViewDetails = page.locator('button:has-text("View Details")').first();
    await firstViewDetails.scrollIntoViewIfNeeded();
    await firstViewDetails.click();

    await expect(page.locator('[data-purpose="modal-container"]')).toBeVisible();

    await page.locator('.fixed.inset-0').click({ position: { x: 10, y: 10 } });

    await page.waitForTimeout(300);
    await expect(page.locator('[data-purpose="modal-container"]')).not.toBeVisible();
  });

  test('modal shows project details', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const firstViewDetails = page.locator('button:has-text("View Details")').first();
    await firstViewDetails.scrollIntoViewIfNeeded();
    await firstViewDetails.click();

    await expect(page.locator('[data-purpose="project-details"]')).toBeVisible();
    await expect(page.locator('h3:has-text("Project Overview")')).toBeVisible();
    await expect(page.locator('h3:has-text("Integrated Tech Stack")')).toBeVisible();
  });
});

test.describe('Portfolio — Contact Form', () => {
  test('submit button is disabled when fields are empty', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeDisabled();
  });

  test('submit button enables when required fields are filled', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.locator('#contact-name').fill('Test User');
    await page.locator('#contact-email').fill('test@example.com');
    await page.locator('#contact-message').fill('Hello world');

    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeEnabled();
  });
});

test.describe('Portfolio — Hover Interactions', () => {
  test('project card applies translateY on hover', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const card = page.locator('.group').first();
    await card.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    await card.hover();
    await page.waitForTimeout(400);

    const translate = await card.evaluate((el) => getComputedStyle(el).translate);
    expect(translate).not.toBe('none');
    expect(translate).not.toBe('');
  });
});
