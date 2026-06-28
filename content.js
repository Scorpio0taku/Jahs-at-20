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
    type: 'video',
    embedUrl: 'video/3f82ecc691424f1faa9835894f47ee8c.mp4',
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
    type: 'video',
    embedUrl: 'video/InShot_20260627_045911980.mp4',
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
    type: 'video',
    embedUrl: 'video/320961755c84405ebe675b98d406b8c0.mp4',
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
    type: 'video',
    embedUrl: 'video/2d8774901f5e4f609ece2476930132e0.mp4',
  },
  {
    type: 'image',
    src: "Images/IMG-20260624-WA0004.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20240825-WA0046.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20240827-WA0132(1).jpg",
  },
  {
    type: 'video',
    embedUrl: 'video/VID-20251225-WA0018.mp4',
  },
  {
    type: 'image',
    src: "Images/IMG-20240827-WA0199.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20240827-WA0201.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20250825-WA0018.jpg",
  },
  {
    type: 'video',
    embedUrl: 'video/VID-20251225-WA0017.mp4',
  },
  {
    type: 'image',
    src: "Images/IMG-20250825-WA0070.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG-20250913-WA0071.jpg",
  },
  {
    type: 'video',
    embedUrl: 'video/VID-20251225-WA0016.mp4',
  },
  {
    type: 'image',
    src: "Images/cbb09242f9c244faae87c21ef76089b9.jpg",
  },
  {
    type: 'image',
    src: "Images/IMG_3470.JPG",
  },
  {
    type: 'video',
    embedUrl: 'video/VID-20251224-WA0034.mp4',
  },
  {
    type: 'image',
    src: "Images/8ac2a4219ee64755b84d0afc9cdc0ee1.jpg",
  },
  {
    type: 'image',
    src: "Images/4fa38e0c2847491b998983ce7939b2b9.jpg",
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
    from: 'AOG',
    embedUrl: 'video/VID-20260626-WA0000.mp4',
    note: 'HAPPY BIRTHDAY ❤️'
  },
  {
    from: 'AJaoizzy',
    embedUrl: 'video/VID-20260627-WA0013.mp4',
    note: ''
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
    src: 'audio/PTT-20260621-WA0008.mp3',
    note: ''
  },
  {
    type: 'audio',
    from: 'Your favourite brother',
    src: 'audio/06-27-2026 04.10.mp3',
    note: '4am thoughts'
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
  },
  {
    name: 'Inioluwa Folowosele',
    message: ` Dear Jahsmine,

I write this letter to pay homage to someone who has been an indescribable gift in my life.

You are such a wonderful, caring, and intentional soul. I count myself blessed to call you my dearest friend.

I’m grateful that our paths crossed, and even more grateful for every memory we’ve shared since then: the support, the prayers, the long calls, the games, the moments we’ve stood up for each other, the words of affirmation. The gift of you is one I will never take for granted.

Thank you for saying yes to the Lord. Thank you for choosing to walk this path with Him. Thank you for not giving up. Thank you for putting in the effort, for showing up, and for being who you are.

I just want you to know that I love you deeply. I appreciate you, and I value you beyond words.

My prayer for you is that you experience God’s very best in every season of your life. I pray that every dream He has placed within you and every destiny He has ordained for you will be fulfilled in Jesus’ name. I pray that your impact on this world will echo from generation to generation and that your life will stand as a testimony of God’s grace and faithfulness.

Thank you for being one of God’s kindest gifts to me.

With love and gratitude,

HAPPY BIRTHDAY JAHS❤️ `
  }
];
