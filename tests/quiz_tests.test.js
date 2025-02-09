// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://carlbondin.github.io/Quiz/');
});

test('Quiz is shown on load', async ({ page }) => {
    await page.getByRole('heading', { name: 'Sports Quiz' }).click();
});

test.describe('Quiz submissions scores', () => {
    test('Submission of a perfect score should show perfect result and modal', async ({page}) => {
        await page.getByText('France').click();
        await page.getByText('11').click();
        await page.getByText('Soccer', {exact: true}).click();
        await page.getByText('USA', {exact: true}).click();
        await page.getByText('Novak Djokovic').click();
        await page.getByText('1', {exact: true}).click();
        await page.getByText('New England Patriots').click();
        await page.getByText('5', {exact: true}).click();
        await page.getByText('Usain Bolt').click();
        await page.getByText('The Stanley Cup').click();
        await page.getByRole('button', {name: 'Submit'}).click();

        await expect(page.getByRole('heading', {name: 'Quiz Results'})).toBeVisible();
        await expect(page.getByText('You got 10 out of 10 correct!')).toBeVisible();
    });

    test('Submission of a 8/10 score should show corresponding result and modal', async ({ page }) => {
        await page.getByText('Germany').first().click();
        await page.getByText('9', { exact: true }).click();
        await page.getByText('Soccer', { exact: true }).click();
        await page.getByText('USA', { exact: true }).click();
        await page.getByText('Novak Djokovic').click();
        await page.getByText('1', { exact: true }).click();
        await page.getByText('New England Patriots').click();
        await page.getByText('5', { exact: true }).click();
        await page.getByText('Usain Bolt').click();
        await page.getByText('The Stanley Cup').click();
        await page.getByRole('button', { name: 'Submit' }).click();

        await expect(page.getByRole('heading', { name: 'Quiz Results' })).toBeVisible();
        await expect(page.getByText('You got 8 out of 10 correct!')).toBeVisible();
    });
});

test('When reviewing incorrect answers, the correct answer is marked as green and the incorrect answer is marked in red', async ({ page }) => {
    await page.getByText('Germany').first().click();
    await page.getByText('9', { exact: true }).click();
    await page.getByText('Soccer', { exact: true }).click();
    await page.getByText('USA', { exact: true }).click();
    await page.getByText('Novak Djokovic').click();
    await page.getByText('1', { exact: true }).click();
    await page.getByText('New England Patriots').click();
    await page.getByText('5', { exact: true }).click();
    await page.getByText('Usain Bolt').click();
    await page.getByText('The Stanley Cup').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Review Answers' }).click();

    await expect(page.getByText('Germany').first()).toHaveCSS('background-color', 'rgb(255, 134, 128)');
    await expect(page.getByText('9', { exact: true })).toHaveCSS('background-color', 'rgb(255, 134, 128)');
    await expect(page.getByText('France')).toHaveCSS('background-color', 'rgb(200, 247, 197)');
    await expect(page.getByText('11')).toHaveCSS('background-color', 'rgb(200, 247, 197)');
});
