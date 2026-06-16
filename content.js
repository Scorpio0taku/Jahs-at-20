// ============================================
// GUESTS — each friend's login credentials
//
// Names are case-insensitive. Passwords are case-sensitive.
// Add one object per person who will receive the link.
//
//   { name: 'Exact Name', password: 'theirpassword' }
//
// IMPORTANT: keep this file private — don't share it publicly.
// ============================================
const guests = [
  { name: 'Jahsmine',   password: 'SEMILORE' },
  { name: 'Torres',  password: 'semilore'  },
  { name: 'Guest',   password: 'imtresspassing'  }
  // Add more guests here...
];

// ============================================
// MEMORIES — photos or shared video clips
//
// PHOTOS:
//   { type: 'image', src: 'URL', caption: 'optional', from: 'optional' }
//
// VIDEOS (YouTube or Drive embed):
//   { type: 'video', embedUrl: 'EMBED_URL', caption: 'optional', from: 'optional', thumbnail: 'optional' }
//
//   YouTube  → https://www.youtube.com/embed/VIDEO_ID
//   Drive    → https://drive.google.com/file/d/FILE_ID/preview
// ============================================
const memories = [
  {
    type: 'image',
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23f0dede'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%235c3030' text-anchor='middle' dy='.3em'%3EAdd a photo here%3C/text%3E%3C/svg%3E",
    caption: 'A lovely memory',
    from: 'Example'
  },
  {
    type: 'video',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    caption: 'Example video — swap for a real one',
    from: 'Example'
  }
];

// ============================================
// WISHES — personal birthday video messages
// Each card shows as a wider 16:9 video.
//
//   { from: 'Name', embedUrl: 'EMBED_URL', note: 'optional short line', thumbnail: 'optional' }
//
//   YouTube  → https://www.youtube.com/embed/VIDEO_ID
//   Drive    → https://drive.google.com/file/d/FILE_ID/preview
// ============================================
const wishes = [
  {
    from: 'Example Friend',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    note: 'Replace with a real birthday video message'
  },
  {
    from: 'Another Friend',
    embedUrl: 'https://drive.google.com/file/d/FILE_ID/preview',
    note: 'Drive videos work here too — replace FILE_ID'
  }
];

// ============================================
// MESSAGES — written notes from friends
//
//   { name: 'Name', message: 'Their message', photo: 'optional avatar URL' }
// ============================================
const messages = [
  {
    name: 'Inioluwa Folowosele',
    message: 'Happy birthday Jahsmine. I wish you all the best life has to offer. Keep shining❤️🎊'
  },
  {
    name: 'Another Friend',
    message: 'Add as many message objects as you like — the grid handles them all.'
  },
  {
    name: 'A Third Friend',
    message: 'Happy birthday! Hope your day is as wonderful as you are.'
  }
];
