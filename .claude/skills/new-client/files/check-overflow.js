// Usage: PORT=3005 node check-overflow.js  — prints any page that is wider than the screen, then "done".
const { chromium } = require("playwright");
const base = `http://localhost:${process.env.PORT || 3000}`;
const pages = ["/", "/about", "/services", "/portfolio", "/portfolio/linen-house", "/news", "/news/small-living-room-feel-generous", "/contact"];
const sizes = [[390, 844], [844, 390], [768, 1024], [1024, 768], [1280, 800], [1920, 1080]];
(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  for (const [w, h] of sizes) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, isMobile: w < 1000, hasTouch: w < 1000 });
    const page = await ctx.newPage();
    for (const p of pages) {
      await page.goto(base + p, { waitUntil: "networkidle" });
      const { vw, sw } = await page.evaluate(() => ({ vw: document.documentElement.clientWidth, sw: document.documentElement.scrollWidth }));
      if (sw > vw) console.log(`OVERFLOW ${w}x${h} ${p}: page ${sw}px wide on a ${vw}px screen`);
    }
    await ctx.close();
  }
  console.log("done");
  await browser.close();
})();
