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
    embedUrl: 'https://drive.google.com/file/d/1lZ2YX10Btsss72nZF4w3gk3IGEwLwNBz/view?usp=drivesdk',
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
    name: 'Akinlawon Judah',
    message: 'Happy Birthday, Jasmine! 🎉🥳 Today, I just want to celebrate the amazing person you are. Thank you for being such a wonderful friend. I truly appreciate your kindness, your support, and all the good moments we’ve shared together. You have a way of making people smile wherever you go, and your sense of humor never fails to brighten the day. You are genuinely one of the funniest people I know, and being around you is always a joy. Your personality, confidence, and caring heart make you a truly special person. One thing I truly admire about you is your love for God. Over time, I’ve observed the way you carry yourself, the values you hold, and the faith you live by. It is inspiring to see how dedicated you are to God and how you strive to live as a true Christian. Please keep it up. The world needs more people with hearts like yours. Your faith, kindness, and sincerity shine through in everything you do. You have a wonderful soul, Jasmine. You are the kind of person whose presence brings warmth, encouragement, and positivity to others. Never underestimate the impact you have on the people around you. As you celebrate another year of life, I pray that God continues to bless you abundantly, guide your steps, strengthen your faith, and grant you success in all that you do. May this new year of your life be filled with joy, peace, favor, and countless beautiful memories. And of course, never forget this important fact: you may be short, but you’re definitely mighty! 😂 Your height has never stopped you from having a huge personality, a strong spirit, and a remarkable ability to make a difference wherever you go. Have an incredible birthday, Jasmine. Enjoy your special day to the fullest you deserve all the love, happiness, and celebration in the world. Happy Birthday once again! From you dearest tall good looking wonderful  and not forgetting friend. Judah 😌😌😌😌❤️🎂🎈🎁'
  },
  {
    name: 'A Third Friend',
    message: 'Happy birthday! Hope your day is as wonderful as you are.'
  }
];
