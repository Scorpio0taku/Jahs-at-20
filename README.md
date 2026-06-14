# Jahs-at-20

# Jahsmine's Birthday Site

A scrapbook-style site with three tabs: **Home**, **Memories** (photos + videos), and **Messages** (notes from friends).

## Files

- `index.html` — page structure and tabs
- `styles.css` — all styling (the corkboard/scrapbook look)
- `script.js` — tab switching + renders memories/messages from `content.js`
- `content.js` — **the file you'll edit** to add real content

## Adding content

Open `content.js`. There are two arrays:

- `memories` — one object per photo or video
- `messages` — one object per friend's message

Each entry follows a small template explained in the comments at the top of the file. Copy an existing object, paste it into the array, and fill in your details.

### Adding videos (up to 50)

Videos are embedded from YouTube or Google Drive rather than stored in the repo, so the site stays light and fast on mobile. Each video shows as a tappable thumbnail and only loads when clicked.

- **YouTube**: turn `youtube.com/watch?v=XXXXXXXX` into `https://www.youtube.com/embed/XXXXXXXX`
- **Google Drive**: set sharing to "Anyone with the link", then turn `drive.google.com/file/d/XXXXXXXX/view` into `https://drive.google.com/file/d/XXXXXXXX/preview`

## Before you publish

- Replace `[Sister's Name]` in `index.html` (in the header) with her actual name.
- Replace the example entries in `content.js` with real photos, videos, and messages.

## Deploying

Same as before — push this folder to a GitHub repo and enable GitHub Pages (Settings → Pages → set source to the branch/root).
