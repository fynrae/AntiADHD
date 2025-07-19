# AntiADHD

Black out YouTube video

## Why?

I’ve noticed a trend in commentary videos where the main topic is buried under random gameplay — Fortnite, Subway Surfers, GTA chaos, you name it.

Personally? I don’t need all that. I just want the **audio**, not a circus.  
These kinds of videos overstimulate my ADHD brain and ruin my attention span — so I made this tool to block the visual chaos.

## Functionality

Right now, this is in early development, but I sure I will continue developing this

## Usage

### Blacking out videos

1. Open any YouTube video.
2. Right-click → **Inspect** → Go to the **Console** tab.
3. Copy the contents of the function `blackoutVideo` in [`src/main.js`] and paste it into the console.
4. Done! The video will go black, and you can focus on the audio.

### Unblacking out videos

1. Do step #1 and #2 as described in the first section
3. Copy the contents of the function `unBlackoutVideo` in [`src/main.js`] and paste it into the console.
4. Done! The video will back to normal.

## Feedbacks

If you have any idea, tricks to prevent this further and more efficent, don't be shy opening a pull request!

If you encountered any error, you can open a issue!
