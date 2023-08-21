import { test, expect } from '@playwright/test';

const breweriesList: string[] = [
	'Austria',
	'England',
	'France',
	'Isle of Man',
	'Ireland'
]

// ui tests chromium, firefox, webkit
breweriesList.forEach(brewery => {
	test(`has title ${brewery} @ui`, async ({ page }) => {
		await page.goto(`https://www.openbrewerydb.org/breweries/${brewery}`);

		await expect(page.locator('h1')).toContainText(`${brewery}`);
	});
})

// api tests https://api.openbrewerydb.org/v1/breweries/search?query={query}
breweriesList.forEach(brewery => {
	test(`search for breweries in ${brewery} @api`, async ({ request }) => {
		const response = await request.get(`https://api.openbrewerydb.org/v1/breweries/search?query=${brewery}`);

		await expect(response.status()).toBe(200);
		await expect(response.ok()).toBeTruthy();
	});
})