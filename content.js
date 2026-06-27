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
    src: "Images/IMG-20260621-WA0023.jpg",
  },
  {
    type: 'video',
    embedUrl: 'video/VID-20260621-WA0016.mp4',
  },
  {
    type: 'image',
    src: "Images/IMG-20260621-WA0022.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20260621-WA0021.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20260621-WA0020.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20260621-WA0015.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20260621-WA0019.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20260621-WA0014.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20260624-WA0002.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20260624-WA0003.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20260624-WA0005.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20260624-WA0004.jpg",
  },
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
    from: 'AOG',
    embedUrl: 'video/VID-20260626-WA0000.mp4',
    note: 'HAPPY BIRTHDAY ❤️'
  },
  {
    from: 'Another Friend',
    embedUrl: 'https://drive.google.com/file/d/1lZ2YX10Btsss72nZF4w3gk3IGEwLwNBz/view?usp=drivesdk',
    note: 'Drive videos work here too — replace FILE_ID'
  },
  {
    type: 'audio',
    from: 'Creative Oyin',
    src: 'audio/PTT-20260624-WA0023.mp3',
    note: ''
  },
  {
    type: 'audio',
    from: 'Morire Temunu',
    src: 'audio/PTT-20260621-WA0008.opus',
    note: ''
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
    name: 'Ethan',
    message: 'Happy birthday to someone truly special! Its amazing to have you in my life, and I hope today is as wonderful and bright as you are. Wishing you all the joy, laughter, and unforgettable moments today and always.May this year bring you endless happiness, exciting adventures, and all the things your heart desires. Thank you for being you – a constant source of light and inspiration. Sending you the biggest birthday wishes and lots of love! Happy birthday Jahsmine ❤️❤️❤️'
  },
  {
    name: 'Dabira(SNL 2024)',
    message: `Happy Birthday Jemima‼️‼️🥳🥳🎊🎊 I pray that you're surrounded with God's unfailing love, that divine wisdom, health and direction is your purpose. I pray that you experience God's favour bountifully, that everything you lay your hand upon prospers and that all your heart's desires that align with God's will for your life is granted. Have an amazing day and prosperous year ahead♥️♥️`
  }
];
