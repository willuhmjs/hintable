import { expect, test } from '@playwright/test';
import words from '$lib/data/words.json' assert { type: 'json' };

test('index page has expected h2', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'title' })).toBeVisible();
});

test('hint button works correctly', async ({ page }) => {
	await page.goto('/');
	for (let i = 1; i < 5; i++) {
		const hintboxes = await page.$$('.hintbox');
		expect(hintboxes).toHaveLength(i);
		await page.click('#hintbutton');
	}
});

test('guessing latest word works correctly', async ({ page }) => {
	const word: string = words[0].word;
	await page.goto('/');
	await page.locator('#guessInput').fill(word);
	await page.locator('#guessInput').press('Enter');
	await expect(page.isVisible('#hint-5')).resolves.toBeTruthy();
	await expect(page.locator('#hint-5').innerText()).resolves.toContain(word);
});
