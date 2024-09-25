import { NextApiRequest, NextApiResponse } from 'next';
import { chromium } from 'playwright';

const search = async (req, res) => {
const searchTerm = req.body.searchTerm;
try {
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('(link unavailable)');

// Perform search
await page.fill('input[name="searchTerm"]', searchTerm);
await page.click('button[type="submit"]');

// Get search results
const results = await page.$$eval('.search-result', (elements) =>
elements.map((element) => element.textContent)
);

await browser.close();
res.status(200).json(results);
} catch (error) {
res.status(500).json({ error: error.message });
}
};

export default search;