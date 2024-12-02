describe('Task 1', () => {
    it('Check the title is correct', async () => {
        await browser.url('https://www.epam.com/');
        await expect(browser).toHaveTitle('EPAM | Software Engineering & Product Development Services')

    });

    
})