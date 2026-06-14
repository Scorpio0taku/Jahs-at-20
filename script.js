// ============================================
// Tab switching
// ============================================
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => {
      t.classList.toggle('is-active', t === tab);
      t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
    });

    panels.forEach(p => {
      p.classList.toggle('is-active', p.id === target);
    });
  });
});

// ============================================
// Variety helpers (rotation + tape/pin accents)
// ============================================
const ROTATIONS = ['rot-1', 'rot-2', 'rot-3', 'rot-4', 'rot-5', 'rot-6'];
const ACCENTS = ['tape-rose', 'tape-sage', 'tape-mustard', 'pin'];

function pick(list, i) {
  return list[i % list.length];
}

// ============================================
// Memories
// ============================================
function youtubeId(url) {
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

function buildMemoryCard(item, index) {
  const card = document.createElement('div');
  card.className = `card ${pick(ROTATIONS, index)} ${pick(ACCENTS, index)}`;

  const media = document.createElement('div');
  media.className = 'card-media';

  if (item.type === 'image') {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption || 'A memory';
    img.loading = 'lazy';
    img.tabIndex = 0;
    img.style.cursor = 'pointer';
    const open = () => openLightbox(item.src, img.alt);
    img.addEventListener('click', open);
    img.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
    media.appendChild(img);

  } else if (item.type === 'video') {
    const placeholder = document.createElement('button');
    placeholder.type = 'button';
    placeholder.className = 'video-placeholder';
    placeholder.setAttribute('aria-label', 'Play video: ' + (item.caption || 'memory'));

    const thumb = item.thumbnail || (youtubeId(item.embedUrl)
      ? `https://img.youtube.com/vi/${youtubeId(item.embedUrl)}/hqdefault.jpg`
      : null);

    if (thumb) {
      placeholder.style.backgroundImage = `url('${thumb}')`;
    }

    const playIcon = document.createElement('span');
    playIcon.className = 'play-icon';
    playIcon.setAttribute('aria-hidden', 'true');
    placeholder.appendChild(playIcon);

    placeholder.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = item.embedUrl;
      iframe.title = item.caption || 'Memory video';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      media.innerHTML = '';
      media.appendChild(iframe);
    });

    media.appendChild(placeholder);
  }

  card.appendChild(media);

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
  memories.forEach((item, i) => {
    grid.appendChild(buildMemoryCard(item, i));
  });
}

// ============================================
// Messages
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
  messages.forEach((item, i) => {
    grid.appendChild(buildMessageCard(item, i));
  });
}

// ============================================
// Lightbox
// ============================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
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
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
});

// ============================================
// Init
// ============================================
renderMemories();
renderMessages();
