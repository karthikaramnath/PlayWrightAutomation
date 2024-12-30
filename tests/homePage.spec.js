const {test, expect} = require('@playwright/test');


test.only('Ethiopian Airlines', async ({browser}) => {

    const context = await browser.newContext();
     const page = await context.newPage();
     await page.goto("https://dx.dx13.cert.aws.sabre.com/dx/ETDX/#/home");

     // selecting origin and destination
     await page.locator("#airport-selection-origin").click();
     await page.locator("#airport-selection-origin").fill("ADD");
     await page.locator("#react-autowhatever-airport-selection-origin-auto-suggest").click();
     await page.locator("#airport-selection-destination").click();
     await page.locator("#airport-selection-destination").fill("ACC");
     await page.locator("#react-autowhatever-airport-selection-destination-auto-suggest").click();

     // passenger selection
     await page.locator(".passenger-selection-button").click();
     // adding child pax type
     await page.locator(".passenger-selection-option.passenger-type-chd .btn-increment").click();

     // Cabin class selection
     await page.locator("#cabin-class-selection").click();
     await page.locator("#cabin-class-selection").selectOption("Economy");

     // date selection
     await page.locator("#t-departureDate--input").fill("2025-01-04");
     await page.locator("#t-returnDate--input").fill("2025-01-28");

     // click submit button

     await page.locator("#searchSubmit").click();

     await expect(page).toHaveTitle('Ethiopian Airlines - Flight selection');

     await page.locator('.dxp-flight-table-section > :nth-child(2) .spark-text-center.itinerary-part-offer-price-button.economy').click()
    await page.locator(".ducp-component-button.brand-select-button.spark-btn--primary.spark-btn--md.EF").click();
     
    await expect(page).toHaveTitle('Ethiopian Airlines - Flight selection');
    // await page.locator('.dxp-flight-table-section > :nth-child(2) .spark-text-center.itinerary-part-offer-price-button.economy').click()
   // await page.locator(".ducp-component-button.brand-select-button.spark-btn--primary.spark-btn--md.EF").click();
    

   // await page.locator(".dxp-flight-selection .dxp-button.primary.continue").click();

   // await page.locator('.dxp-flight-selection .dxp-button.primary.continue').waitFor({ state: 'visible' });

    // Click the button
    //await page.locator('.dxp-flight-selection .dxp-button.primary.continue').click();

     // await page.locator(".spark-text-center.itinerary-part-offer-price-button.economy").click();

    
 
 });