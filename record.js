const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function record() {
    console.log('Starting Playwright automated video recording...');
    
    // Launch browser (slowMo: 40 slows down operations so they are readable on video)
    const browser = await chromium.launch({ 
        headless: true,
        slowMo: 30
    });
    
    // Set up context with 9:16 vertical viewport (perfect for Reels/Shorts)
    const width = 540;
    const height = 960;
    
    const context = await browser.newContext({
        viewport: { width, height },
        recordVideo: {
            dir: path.join(__dirname, 'recordings'),
            size: { width, height }
        }
    });

    const page = await context.newPage();
    
    // Navigate to the deployed site
    console.log('Navigating to https://neurostack-gray.vercel.app/ ...');
    await page.goto('https://neurostack-gray.vercel.app/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); // Wait to show the landing page

    // Inject cursor style and ripple animations to make mouse actions visible on video
    await page.addStyleTag({
        content: `
            * { cursor: none !important; }
            .playwright-cursor {
                position: fixed;
                width: 20px;
                height: 20px;
                background: rgba(0, 229, 255, 0.4);
                border: 2px solid rgba(0, 229, 255, 0.9);
                border-radius: 50%;
                pointer-events: none;
                z-index: 999999;
                transform: translate(-50%, -50%);
                transition: transform 0.1s ease;
                box-shadow: 0 0 10px rgba(0, 229, 255, 0.8);
            }
            .playwright-cursor.clicking {
                transform: translate(-50%, -50%) scale(0.7);
                background: rgba(0, 255, 102, 0.8);
                border-color: rgba(0, 255, 102, 1);
                box-shadow: 0 0 10px rgba(0, 255, 102, 0.8);
            }
            .click-ripple {
                position: fixed;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: rgba(0, 255, 102, 0.4);
                border: 2px solid rgba(0, 255, 102, 0.8);
                pointer-events: none;
                z-index: 999998;
                transform: translate(-50%, -50%) scale(0);
                animation: ripple 0.5s ease-out forwards;
            }
            @keyframes ripple {
                to {
                    transform: translate(-50%, -50%) scale(2.2);
                    opacity: 0;
                }
            }
        `
    });

    // Create the visual cursor DOM element
    await page.evaluate(() => {
        const cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        cursor.className = 'playwright-cursor';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
        document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));
    });

    // Custom helper to move mouse smoothly to selector
    async function moveAndClick(selector) {
        const element = await page.locator(selector).first();
        const box = await element.boundingBox();
        if (!box) return;

        const targetX = box.x + box.width / 2;
        const targetY = box.y + box.height / 2;

        // Perform smooth path move
        console.log(`Moving mouse to: ${selector}`);
        await page.mouse.move(targetX, targetY, { steps: 15 });
        await page.waitForTimeout(400);

        // Click with visual ripple
        await page.evaluate(({ x, y }) => {
            const ripple = document.createElement('div');
            ripple.className = 'click-ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 500);
        }, { x: targetX, y: targetY });

        console.log(`Clicking: ${selector}`);
        await page.mouse.down();
        await page.waitForTimeout(100);
        await page.mouse.up();
        await page.waitForTimeout(600);
    }

    // --- Video Action Sequence ---
    
    // 1. Hover around title area to orient the viewer
    await page.mouse.move(width / 2, 200, { steps: 10 });
    await page.waitForTimeout(1000);

    // 2. Smoothly scroll down page to showcase supplements grid
    console.log('Scrolling down to show cards...');
    for (let i = 0; i < 5; i++) {
        await page.mouse.wheel(0, 150);
        await page.waitForTimeout(150);
    }
    await page.waitForTimeout(2000);

    // 3. Scroll back up to search bar
    console.log('Scrolling back up to search...');
    for (let i = 0; i < 5; i++) {
        await page.mouse.wheel(0, -150);
        await page.waitForTimeout(150);
    }
    await page.waitForTimeout(1000);

    // 4. Click Search input & Type "Sleep"
    await moveAndClick('#search-input');
    console.log('Typing query: "Sleep"...');
    await page.keyboard.type('Sleep', { delay: 150 });
    await page.waitForTimeout(2000);

    // 5. Select sleep filter pill to filter cards
    await moveAndClick('.filter-pill[data-category="Stress & Sleep"]');
    await page.waitForTimeout(1500);

    // 6. Click "Add to Stack" on Ashwagandha card
    const firstAddButton = '.supp-card >> text="Add to Stack"';
    await moveAndClick(firstAddButton);
    await page.waitForTimeout(1500);

    // 7. Click on card details to show PubMed research modal
    await moveAndClick('.supp-card h3');
    console.log('Detailed modal opened. Loading PubMed research...');
    await page.waitForTimeout(4000); // Hold research modal on screen to show NCBI data loading

    // 8. Close Modal
    await moveAndClick('#modal-close');
    await page.waitForTimeout(1000);

    // 9. Open active stack drawer
    await moveAndClick('#btn-open-drawer');
    await page.waitForTimeout(2500); // View stack items

    // 10. Smooth move to copy stack button
    await moveAndClick('#btn-copy-stack');
    await page.waitForTimeout(2000);

    // Close to write the WebM file
    console.log('Finalizing and saving video output...');
    await context.close();
    await browser.close();

    // Check saved files
    const recDir = path.join(__dirname, 'recordings');
    const files = fs.readdirSync(recDir);
    const videoFile = files.find(f => f.endsWith('.webm'));

    if (videoFile) {
        const oldPath = path.join(recDir, videoFile);
        const newPath = path.join(recDir, 'neurostack_walkthrough.webm');
        fs.renameSync(oldPath, newPath);
        console.log(`WALKTHROUGH VIDEO SAVED AT: ${newPath}`);
    } else {
        console.log('No video file found in recordings directory.');
    }
}

record().catch(err => {
    console.error('Error during video recording:', err);
});
