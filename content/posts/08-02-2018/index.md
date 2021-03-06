---
title: "How To Handle Pesky Modals In Your Puppeteer Tests"
date: "2018-08-02"
category: "tech"
postType: "post"
tags:
    - testing
    - programming
    - Puppeteer
    - jest
---

If you've worked on any large e-commerce sites, you've probably run into an iPerception Modal. Every major brand seems to have this survey and it will inevitably pop up right as you are trying to do something important. The good news for most users is you won't ever see it again if you close it. But, for developers, you'll see this modal over and over if you're running visual regression tests or integration tests.

### What's the iPerception Modal?

![iPerception Modal](./iperceptionModal.png 'iPerception Modal')

### The Problem with the Modal

In my partucular case, I was running integration tests on an ecommerce funnel of a site I'm currently working on. The flow starts at the home page and then clicks through a series of steps to the confirmation page. As I wrote the tests, I would run the test after each additional step to make sure they were passing. While working on step 3, I suddenly began to get test failures on step 2 which had been passing previously.

I set headless to true in the Puppeteer config and watched the tests in the browser. I quickly realized the iPerception modal had began popping up in step 2, blocking my test from clicking the proper CTA to continue the flow, hence the failing test.

### Find and Handle the Modal in Puppeteer

I had to check for the modal on each page and close it if I wanted the test to pass and continue to the next step. I was hoping there was simple way for me to set up the modal not to show, after all, this is on my local environment. But in this case, it is a large code base with many agencies working on it and I don't have access to the code that is triggering the modal. So I had to find a way to test for the modal and close it before trying to click the CTA to the next step of the funnel.

I tried to identify the modal by an ID or a class, but they use neither. My guess is this is to avoid ad blockers. I figured out the only selector in the modal I really need to target was the 'NO' CTA. I just had to check for this CTA on the page and if it exists, click it to close the modal. I found since it was an image, I could just use the src attribute as a selector. So now, before each screenshot and click of a CTA, Puppeteer checks for the 'NO' CTA, if it exists, it clicks it and continues with the test. I added this as a helper library as I would have to call it multiple times in multiple tests.

Below is the module I added to my test. I ended up having to call it on every page. The modal is not set for just the home page. In my case, it came up in every page over the course of writing the tests.

`gist:bennewton999/e00dca728345183190a204ad2341bd97?file=checkForSurvey.js`

Here is an example of how I used the module above in my tests. I now use this in all my Puppeteer tests for this particular site. Without it, my tests would fail randomly all the time.

`gist:bennewton999/e00dca728345183190a204ad2341bd97?file=sampleTest.js`

This helper became a necessity for every test I have written so far. If you have something similar that may take over the pages you are trying to write Puppeteer tests for, I hope this helps you. Let me know in the comments if you use this to remove an iPerception modal on your tests. And let me know if you have a different way of handling this.
