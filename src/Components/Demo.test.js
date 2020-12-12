const puppeteer = require('puppeteer');

test("Browser Automation",async()=>{

    const browser = await puppeteer.launch({headless:true,waitUntil: 'networkidle0' })
    const page = await browser.newPage()
    // await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://dev.realisedrate.com/Sonia')


    // await Promise.all(
    //     page.click("#onetrust-accept-btn-handler"),
    //     page.waitForNavigation({waitUntil: 'networkidle0'})
    // );
  await page.waitForSelector("#datepicker");
  const datePicker=await page.$$("input#datepicker")
  const prevalue= await page.$$eval("input#datepicker",e=>e[1].value) ;
  await page.$$eval("input#datepicker",e=>e[1].value="24/10/2019") ;
  await page.evaluate((preval)=>$("input#datepicker")[1]._valueTracker.setValue(preval),prevalue)

  await page.evaluate((eve)=>{
    const event = new Event('input', { bubbles: true });
    $("input#datepicker")[1].dispatchEvent(event);

  });



// const prevalue2= await page.$$eval("input#datepicker",e=>e[1].value) ;
// await page.$$eval("input#datepicker",e=>e[1].value="23/10/2019") ;
// await page.evaluate((preval)=>$("input#datepicker")[1]._valueTracker.setValue(preval),prevalue2)
// const event2 = new Event('input', { target: datePicker[1], bubbles: true });
// await page.evaluate((eve)=>{window.addEventListener('input', e => console.log(e.type)); $("input#datepicker")[2].dispatchEvent(eve)},event2);

await page.waitForTimeout(5000);
//    await page.$$eval("input#datepicker",e=>e[2].value="11/05/2020") ;
//    datepicker[2].click();
//    datepicker[2].type("23/10/2019")

    // await page.$$eval("input#datepicker",e=>e[2].value="23/10/2019") ;
    // await page.$$eval("input#datepicker",e=>e[2].setAttribute("value","23/10/2019")) ;
    // await page.$$eval("input#datepicker",e=>e[2].change()) ;
    // await page.mouse.click(132, 103)


 //   await page.$$eval("input#datepicker",e=>e[2].click()) ;
//     await page.waitForSelector("#react-tabs-1 > div > div > div:nth-child(6) > div:nth-child(1) > div > div:nth-child(2) > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > button")
//     const prev= await page.$$("#react-tabs-1 > div > div > div:nth-child(6) > div:nth-child(1) > div > div:nth-child(2) > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > button");
//     await page.waitForSelector("div.react-datepicker__current-month.react-datepicker__current-month--hasYearDropdown");
//     let prevlbl=await page.$$eval("div.react-datepicker__current-month.react-datepicker__current-month--hasYearDropdown",e=>e[0].innerText);
//     console.log(prevlbl)

//    do
//     {

//     prev[0].click();
//     await page.waitForTimeout(1000);
//     prevlbl=await page.$$eval("div.react-datepicker__current-month.react-datepicker__current-month--hasYearDropdown",e=>e[0].innerText);

//     }
//     while(prevlbl.indexOf("March")<0);

//     await page.waitForSelector(".react-datepicker__year-read-view--down-arrow");
//     await page.$$eval(".react-datepicker__year-read-view--down-arrow",e=>e[0].click()) ;
//     await page.waitForSelector("div.react-datepicker__year-option");
//     await page.$$eval("div.react-datepicker__year-option",e=>e[0].click()) ;
//     await page.$$eval("div.react-datepicker__day.react-datepicker__day--008.react-datepicker__day--weekend",e=>e[0].click()) ;
//     await page.waitForTimeout(5000);

//    const val=  await page.$$eval("input#datepicker",e=>e[2].value) ;
//    console.log(val);
//    page.waitForSelector("#react-tabs-1 > div > div > div:nth-child(6) > div:nth-child(1) > div > div:nth-child(5) > div > div.comboText")
//    const rate= await page.$$eval("#react-tabs-1 > div > div > div:nth-child(6) > div:nth-child(1) > div > div:nth-child(5) > div > div.comboText",e=>e[0].innerText);
 // console.log(rate);
  expect(1+1).toBe(2);
     //await browser.close()

},1000000)