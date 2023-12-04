
import { expect, test } from '@playwright/test';

test('index page has expected h2', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'title' })).toBeVisible();
});
