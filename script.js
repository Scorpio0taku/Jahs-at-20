// ============================================
// Login
// ============================================
const MAX_ATTEMPTS   = 3;
const LOCKOUT_MS     = 5 * 60 * 1000; // 5 minutes
const STORAGE_KEY    = 'bday_auth';

const loginScreen  = document.getElementById('login-screen');
const loginNameEl  = document.getElementById('login-name');
const loginPassEl  = document.getElementById('login-pass');
const loginBtn     = document.getElementById('login-btn');
const loginError   = document.getElementById('login-error');
const loginLockout = document.getElementById('login-lockout');

// Persist session so a refresh doesn't kick them out
function isAuthenticated() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw).auth === true : false;
  } catch { return false; }
}

function markAuthenticated() {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ auth: true }));
}

// Lockout state lives in localStorage so it survives refreshes within the window
function getLockout() {
  try { return JSON.parse(localStorage.getItem('bday_lockout') || 'null'); }
  catch { return null; }
}

function setLockout(data) {
  localStorage.setItem('bday_lockout', JSON.stringify(data));
}

function clearLockout() {
  localStorage.removeItem('bday_lockout');
}

let countdownInterval = null;

function startLockoutCountdown(until) {
  loginBtn.disabled = true;
  loginNameEl.disabled = true;
  loginPassEl.disabled = true;
  loginError.textContent = '';

  function tick() {
    const remaining = until - Date.now();
    if (remaining <= 0) {
      clearInterval(countdownInterval);
      clearLockout();
      loginLockout.textContent = '';
      loginBtn.disabled = false;
      loginNameEl.disabled = false;
      loginPassEl.disabled = false;
      loginNameEl.focus();
      return;
    }
    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    loginLockout.textContent =
      'Too many attempts. Try again in ' + mins + ':' + secs.toString().padStart(2, '0') + '.';
  }

  tick();
  countdownInterval = setInterval(tick, 1000);
}

function attemptLogin() {
  const lockout = getLockout();
  if (lockout && Date.now() < lockout.until) {
    startLockoutCountdown(lockout.until);
    return;
  } else if (lockout) {
    clearLockout();
  }

  const name     = loginNameEl.value.trim();
  const password = loginPassEl.value;

  if (!name || !password) {
    loginError.textContent = 'Please enter both your name and password.';
    return;
  }

  const match = guests.find(
    function(g) { return g.name.toLowerCase() === name.toLowerCase() && g.password === password; }
  );

  if (match) {
    markAuthenticated();
    clearLockout();
    loginError.textContent = '';
    loginLockout.textContent = '';
    loginBtn.textContent = '✓ Welcome!';
    loginBtn.disabled = true;
    setTimeout(() => {
      loginScreen.classList.add('hidden');
    }, 1500);
  } else {
    const existing = getLockout() || { attempts: 0, until: null };
    const attempts = existing.attempts + 1;

    if (attempts >= MAX_ATTEMPTS) {
      const until = Date.now() + LOCKOUT_MS;
      setLockout({ attempts: attempts, until: until });
      startLockoutCountdown(until);
    } else {
      setLockout({ attempts: attempts, until: null });
      const left = MAX_ATTEMPTS - attempts;
      loginError.textContent =
        'Incorrect name or password. ' + left + ' attempt' + (left === 1 ? '' : 's') + ' remaining.';
    }
  }
}

loginBtn.addEventListener('click', attemptLogin);
loginPassEl.addEventListener('keydown', function(e) { if (e.key === 'Enter') attemptLogin(); });
loginNameEl.addEventListener('keydown', function(e) { if (e.key === 'Enter') loginPassEl.focus(); });

// On load: skip login if already authenticated this session
if (isAuthenticated()) {
  loginScreen.classList.add('hidden');
} else {
  var lockout = getLockout();
  if (lockout && Date.now() < lockout.until) {
    startLockoutCountdown(lockout.until);
  }
  loginNameEl.focus();
}

// ============================================
// Tab switching
// ============================================
const tabs   = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    // Update active tab button immediately
    tabs.forEach(t => {
      t.classList.toggle('is-active', t === tab);
      t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
    });

    // Fade out current panel
    const current = document.querySelector('.panel.is-active');
    if (current) {
      current.style.opacity = '0';
      current.style.transition = 'opacity 0.3s ease';
    }

    // After delay, swap panels and fade in
    setTimeout(() => {
      panels.forEach(p => {
        p.classList.remove('is-active');
        p.style.opacity = '';
        p.style.transition = '';
      });
      const next = document.getElementById(target);
      if (next) {
        next.classList.add('is-active');
      }
    }, 500); // 0.5s fade out + pause feels natural — change to 2000 for a full 2s if you prefer
  });
});
// ============================================
// Background music
// ============================================
const audio       = document.getElementById('bg-audio');
const musicToggle = document.getElementById('music-toggle');
const musicIcon   = document.getElementById('music-icon');
let   musicPaused = false; // user explicitly paused?

function setMusicIcon(playing) {
  musicIcon.textContent = playing ? '❚❚' : '▶';
  musicToggle.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
}

musicToggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    musicPaused = false;
  } else {
    audio.pause();
    musicPaused = true;
  }
  setMusicIcon(!audio.paused);
});

// Auto-play on first user interaction (browser policy)
document.addEventListener('click', function startMusic() {
  if (audio.paused && !musicPaused) {
    audio.play().then(() => setMusicIcon(true)).catch(() => {});
  }
  document.removeEventListener('click', startMusic);
}, { once: true });

audio.addEventListener('play',  () => setMusicIcon(true));
audio.addEventListener('pause', () => setMusicIcon(false));

// Pause music when ANY iframe video is clicked to play
function pauseMusicForVideo() {
  if (!audio.paused) {
    audio.pause();
    // Don't set musicPaused = true so it can resume logic if desired
  }
}

// Stop all other media when a new one plays
function stopAllOtherMedia(current) {
  document.querySelectorAll('audio, video').forEach(el => {
    if (el !== current && el.id !== 'bg-audio') {
      el.pause();
      el.currentTime = 0;
    }
  });
}

// ============================================
// Variety helpers
// ============================================
const ROTATIONS = ['rot-1','rot-2','rot-3','rot-4','rot-5','rot-6'];
const ACCENTS   = ['tape-red','tape-black','tape-red-light','pin'];

function pick(list, i) { return list[i % list.length]; }

// ============================================
// Shared: build a video card media section
// ============================================
function youtubeId(url) {
  const m = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

function buildVideoMedia(item, label) {
  const media = document.createElement('div');
  media.className = 'card-media';

  const placeholder = document.createElement('button');
  placeholder.type = 'button';
  placeholder.className = 'video-placeholder';
  placeholder.setAttribute('aria-label', 'Play video: ' + label);

  const thumb = item.thumbnail || (youtubeId(item.embedUrl)
    ? `https://img.youtube.com/vi/${youtubeId(item.embedUrl)}/hqdefault.jpg`
    : null);
  if (thumb) placeholder.style.backgroundImage = `url('${thumb}')`;

  const playIcon = document.createElement('span');
  playIcon.className = 'play-icon';
  playIcon.setAttribute('aria-hidden', 'true');
  placeholder.appendChild(playIcon);

  placeholder.addEventListener('click', () => {
    pauseMusicForVideo();  // pause bg music when video loads
    stopAllOtherMedia(null);
    const iframe = document.createElement('iframe');
    iframe.src = item.embedUrl;
    iframe.title = label;
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    media.innerHTML = '';
    media.appendChild(iframe);
  });

  media.appendChild(placeholder);
  return media;
}

// ============================================
// Memories
// ============================================
function buildMemoryCard(item, index) {
  const card = document.createElement('div');
  card.className = `card ${pick(ROTATIONS, index)} ${pick(ACCENTS, index)}`;

  if (item.type === 'image') {
    const media = document.createElement('div');
    media.className = 'card-media';
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption || 'A memory';
    img.loading = 'lazy';
    img.tabIndex = 0;
    img.style.cursor = 'pointer';
    const open = () => openLightbox(item.src, img.alt);
    img.addEventListener('click', open);
    img.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    media.appendChild(img);
    card.appendChild(media);
  } else if (item.type === 'video') {
    card.appendChild(buildVideoMedia(item, item.caption || 'memory video'));
  }

  if (item.caption) {
    const caption = document.createElement('p');
    caption.className = 'card-caption';
    caption.textContent = item.caption;
    card.appendChild(caption);
  }
  if (item.from) {
    const from = document.createElement('p');
    from.className = 'card-from';
    from.textContent = 'From ' + item.from;
    card.appendChild(from);
  }
  return card;
}

function renderMemories() {
  const grid = document.getElementById('memories-grid');
  memories.forEach((item, i) => grid.appendChild(buildMemoryCard(item, i)));
}

// ============================================
// Birthday Wishes (personal video messages)
// ============================================
function buildWishCard(item, index) {
  const card = document.createElement('div');
  card.className = `card wish-card ${pick(ROTATIONS, index)} ${pick(ACCENTS, index)}`;

  if (item.type === 'audio') {
    const audioWrap = document.createElement('div');
    audioWrap.className = 'audio-wrap';

    const label = document.createElement('p');
    label.className = 'audio-label';
    label.textContent = 'Voice message';

    const player = document.createElement('audio');
    player.controls = true;
    player.src = item.src;
    player.addEventListener('play', () => {
      pauseMusicForVideo();
      stopAllOtherMedia(player);
    });

    audioWrap.appendChild(label);
    audioWrap.appendChild(player);
    card.appendChild(audioWrap);
  } else {
    card.appendChild(buildVideoMedia(item, item.from + "'s birthday wish"));
  }

  const name = document.createElement('p');
  name.className = 'wish-name';
  name.textContent = item.from;
  card.appendChild(name);

  if (item.note) {
    const note = document.createElement('p');
    note.className = 'wish-note';
    note.textContent = item.note;
    card.appendChild(note);
  }

  return card;
}

function renderWishes() {
  const grid = document.getElementById('wishes-grid');
  wishes.forEach((item, i) => grid.appendChild(buildWishCard(item, i)));
}

// ============================================
// Messages (written)
// ============================================
function buildMessageCard(item, index) {
  const card = document.createElement('div');
  card.className = `card msg-card ${pick(ROTATIONS, index)} ${pick(ACCENTS, index)}`;

  const header = document.createElement('div');
  header.className = 'msg-header';

  if (item.photo) {
    const avatar = document.createElement('img');
    avatar.className = 'msg-avatar';
    avatar.src = item.photo;
    avatar.alt = '';
    avatar.loading = 'lazy';
    header.appendChild(avatar);
  }

  const name = document.createElement('p');
  name.className = 'msg-name';
  name.textContent = item.name;
  header.appendChild(name);
  card.appendChild(header);

  const text = document.createElement('p');
  text.className = 'msg-text';
  text.textContent = item.message;
  card.appendChild(text);

  return card;
}

function renderMessages() {
  const grid = document.getElementById('messages-grid');
  messages.forEach((item, i) => grid.appendChild(buildMessageCard(item, i)));
}

// ============================================
// Lightbox
// ============================================
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
});

// ============================================
// Upload to Cloudinary
// ============================================
const CLOUD_NAME    = 'dx7sgtdun';
const UPLOAD_PRESET = 'Jahsmine';
const uploadInput   = document.getElementById('upload-input');
const uploadStatus  = document.getElementById('upload-status');
const uploadGrid    = document.getElementById('upload-preview-grid');

uploadInput.addEventListener('change', async () => {
  const file = uploadInput.files[0];
  if (!file) return;

  uploadStatus.textContent = 'Uploading...';

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);
  formData.append('folder', 'Birthday');

  try {
    const isVideo = file.type.startsWith('video/');
    const endpoint = isVideo
      ? `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`
      : `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const res  = await fetch(endpoint, { method: 'POST', body: formData });
    const data = await res.json();

    if (data.secure_url) {
      uploadStatus.textContent = 'Uploaded successfully!';
      uploadInput.value = '';

      // Show it instantly in the grid
      const card = document.createElement('div');
      card.className = `card ${pick(ROTATIONS, uploadGrid.children.length)} ${pick(ACCENTS, uploadGrid.children.length)}`;

      const media = document.createElement('div');
      media.className = 'card-media';

      if (isVideo) {
        const vid = document.createElement('video');
        vid.src = data.secure_url;
        vid.controls = true;
        vid.style.width = '100%';
        vid.style.height = '100%';
        media.appendChild(vid);
      } else {
        const img = document.createElement('img');
        img.src = data.secure_url;
        img.alt = 'Your memory';
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openLightbox(data.secure_url, 'Your memory'));
        media.appendChild(img);
      }

      card.appendChild(media);
      uploadGrid.appendChild(card);

      console.log('Cloudinary URL (save this!):', data.secure_url);
    } else {
      uploadStatus.textContent = 'Upload failed. Please try again.';
    }
  } catch (err) {
    uploadStatus.textContent = 'Something went wrong. Check your connection.';
    console.error(err);
  }
});

// ============================================
// Init
// ============================================
renderMemories();
renderWishes();
renderMessages();
