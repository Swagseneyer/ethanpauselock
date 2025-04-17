# YouTube Pause Lock

This Chrome extension prevents you from pausing a YouTube video within **1 minute after resuming playback**.
You can pause the video freely at any time **except** during the cooldown period that starts when you hit Play.

---

## 🔧 Features

- ✅ You can pause anytime, except after resuming playback.
- ⏳ Once "Play" is pressed, pausing is disabled for 60 seconds.
- 🔒 If you try to pause within that window, playback resumes automatically.
- 🧠 Useful for productivity or avoiding accidental interruptions.

---

## 🖥️ Installation (Developer Mode)

1. Download or clone this repository:

   ```bash
   git clone https://github.com/Swagseneyer/ethanpauselock.git
   ```
2. Open Chrome and go to:

   ```
   chrome://extensions/
   ```
3. Enable **Developer Mode** (top right corner).
4. Click **Load unpacked**.
5. Select the folder where the extension files are located (`ethanpauselock`).
6. Open any YouTube video and test it!

---

## 📁 File Structure

```text
youtube-pause-lock/
├── manifest.json      // Chrome extension manifest file
├── content.js         // Script injected into YouTube pages
├── README.md          // This file
```
