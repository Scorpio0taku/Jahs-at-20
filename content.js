// ============================================
// MEMORIES
// One object per photo or video. Order = display order.
//
// PHOTOS:
//   { type: 'image', src: 'IMAGE_URL', caption: 'optional', from: 'optional' }
//
// VIDEOS:
//   { type: 'video', embedUrl: 'EMBED_URL', caption: 'optional', from: 'optional', thumbnail: 'optional' }
//
// Getting an embed URL:
//   YouTube     — turn  youtube.com/watch?v=XXXXXXXX
//                 into   https://www.youtube.com/embed/XXXXXXXX
//   Google Drive — set sharing to "Anyone with the link", then turn
//                 drive.google.com/file/d/XXXXXXXX/view
//                 into   https://drive.google.com/file/d/XXXXXXXX/preview
//
// "thumbnail" is optional. YouTube thumbnails are generated automatically.
// For Drive videos you can add a thumbnail image URL, or leave it out —
// it'll show a generic placeholder until tapped.
// ============================================
const memories = [
  {
    type: 'image',
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23efe6d6'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='22' fill='%236b5a47' text-anchor='middle' dy='.3em'%3EAdd%20a%20photo%20here%3C/text%3E%3C/svg%3E",
    caption: 'Replace me with a real photo!',
    from: 'Example'
  },
  {
    type: 'video',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    caption: 'Example video — swap the embed link for a real memory',
    from: 'Example'
  },
  {
    type: 'image',
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23efe6d6'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='22' fill='%236b5a47' text-anchor='middle' dy='.3em'%3EAnother%20photo%20here%3C/text%3E%3C/svg%3E",
    caption: 'Another placeholder',
    from: 'Example'
  },
  {
    type: 'video',
    embedUrl: 'https://drive.google.com/file/d/FILE_ID/preview',
    caption: 'Example Drive video — replace FILE_ID with a real one',
    from: 'Example'
  }
];

// ============================================
// MESSAGES
// One object per message. "photo" is optional.
//   { name: 'Friend name', message: 'Their message', photo: 'optional photo URL' }
// ============================================
const messages = [
  {
    name: 'Example Friend',
    message: 'Replace this with a real birthday message from a friend!'
  },
  {
    name: 'Another Friend',
    message: 'Add as many message objects as you like — the grid fits them automatically.'
  },
  {
    name: 'A Third Friend',
    message: 'Happy birthday! Hope your day is as wonderful as you are. 💛'
  }
];
