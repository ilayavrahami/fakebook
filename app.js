/* === FakeBook App.js === */
'use strict';

// ===================== CONFIG =====================
const CONFIG = {
  POSTS_PER_LOAD: 10,
  MAX_POSTS: 200,
  SCROLL_THRESHOLD: 300,
  AD_IMAGE_PATH: 'fre-ad.png', // Place the FRE ad image here
  CURRENT_USER: { name: 'ישראל ישראלי', avatar: 'https://i.pravatar.cc/40?img=11', id: 'me' }
};

// ===================== DATA SOURCES =====================
const NAMES = [
  'דוד כהן','שרה לוי','מיכאל ברק','נועה שמיר','יוסף אבי','רחל גולן','אמיר שפיר','תמר כץ',
  'איתן מור','לימור דן','רון אלון','גלית פז','יעקב רוזן','חן שגיא','אלי נחום','מיה טל',
  'עמית בן-דוד','שירה אדלר','ניר ורד','אורית פלד','גיא לבנון','עדן כהן','בר סגל','לי אריאל',
  'נדב שטרן','טל גרוס','עינב יצחקי','מורן קפלן','אסף בן-שלום','דנה פרידמן'
];

const COMPANY_NAMES = [
  'טכנולוגיות ABC','חברת XYZ פתרונות','סטארטאפ נשיון','הייטק IL','קמטק','רפאל','אלביט','נייס',
  'צ\'ק פוינט','מגזין דיגיטל','CloudVentures','SoftGroup','InnoTech','DataBridge','CyberShield'
];

const AVATARS = Array.from({length: 30}, (_, i) => `https://i.pravatar.cc/40?img=${i+1}`);
const IMAGES = [
  'https://picsum.photos/680/400?random=',
  'https://picsum.photos/680/500?random=',
  'https://picsum.photos/680/380?random='
];

const POST_TEXTS = [
  'שמחים לבשר על אבן דרך חדשה! החברה שלנו השיגה 10 מיליון משתמשים רשומים 🎉',
  'טכנולוגיית הבינה המלאכותית של הענן ממשיכה לשנות את כללי המשחק בתעשייה. הנה מה שחשוב לדעת ב-2025:',
  'מרגש לשתף: הצוות שלנו השלים בהצלחה את הפרויקט הגדול ביותר בתולדות החברה! 🚀',
  'עשר שנים בתחום הטכנולוגיה לימדו אותי שהצלחה אמיתית תמיד מגיעה עם פרסיסטנטיות.',
  'אנחנו מגייסים! מחפשים מפתח Full Stack מנוסה לצוות שלנו. שלחו קורות חיים!',
  'חדשות מרגשות: קיבלנו גיוס סיד של 5 מיליון דולר מקרן Ventures מובילה 🎊',
  'המשרד החדש שלנו ב-Tel Aviv פתוח רשמית! בואו לבקר 🏢',
  'שיתוף פעולה חדש עם חברת טכנולוגיה מובילה מסיליקון ואלי. ביחד נשנה את הדיגיטל!',
  'אירוע ה-Tech Meetup שלנו אתמול עבר בהצלחה גדולה. תודה לכל 200 המשתתפים!',
  'ההכנסות של Q3 עלו ב-40% ביחס לשנה שעברה. הצוות עושה עבודה מדהימה!',
  'גאים להכריז שקיבלנו פרס "חברת הטכנולוגיה הטובה ביותר של השנה" 🏆',
  'לקוחות מרוצים הם הפרסום הטוב ביותר. קיבלנו דירוג 4.9/5 בחודש האחרון!',
  'ה-Workshop בנושא cybersecurity שהעברנו אתמול משך 150 מקצוענים מהתעשייה.',
  'פיתוח תוכנה זה לא רק קוד — זה אמנות, יצירתיות וחשיבה מחוץ לקופסה 💻',
  'יום הגיוס שלנו עבר מעבר לציפיות. ראיינו 50 מועמדים מוכשרים!',
  'חשוב לנו לתת גב לקהילה. השנה תרמנו 100 שעות הדרכה לנוער בסיכון 💙',
  'טיפ שבועי: תמיד גבו את המידע שלכם. IT disaster יכול לקרות לכל אחד.',
  'פרטנרשיפ חדש! נשמח לעבוד עם הצוות המדהים של חברת CloudPro.',
  'ה-App החדש שלנו זמין עכשיו ב-App Store וב-Google Play. הורידו עכשיו!',
  'ניהול צוות מרחוק דורש כלים נכונים ותקשורת פתוחה. הנה הטיפים שלנו:',
  'Scrum, Kanban, Agile — כל שיטה טובה אם הצוות מאמין בה.',
  'הסייבר הוא האיום מספר אחד על עסקים ב-2025. האם אתם מוגנים?',
  'נשמח לראות אתכם בכנס ה-Tech Israel הגדול ב-15 לחודש!',
  'ביצענו אפגרייד מלא לתשתית ה-Cloud שלנו. מהירות פי 3 לכל הלקוחות!',
  'שנה חדשה, צוות חדש! מברכים 8 עובדים חדשים שהצטרפו אלינו החודש 🎉',
  'המודל החדש שלנו לניתוח נתונים חוסך ללקוחות 30% בעלויות תפעול.',
  'לא מפסיקים ללמוד. הצוות שלנו סיים השתלמות של 3 ימים ב-AWS.',
  'Digital transformation זה לא אופציה, זה הכרח עסקי. האם העסק שלך מוכן?',
  'גאים להיות ברשימת 50 הסטארטאפים הטובים ביותר בישראל לשנת 2025!',
  'תוכנה טובה חוסכת זמן, כסף ועצבים. שאלו אותנו איך!'
];

const COMMENT_TEXTS = [
  'מדהים! כל הכבוד לצוות 👏','פוסט מעולה, תודה על השיתוף!','ממש מרשים!',
  'מזל טוב! 🎉 המשיכו כך!','תודה על המידע החשוב','נשמע מדהים, רוצה לדעת יותר!',
  'כל הכבוד על ההישגים! 💪','שיתוף מצוין, תמיד אפשר ללמוד','אחלה חדשות!',
  'זה בדיוק מה שהתעשייה צריכה','פרויקט מרתק מאוד!','ממש השראה לכולם 🙏',
  'חשוב מאוד לשתף ידע!','עבודה יפה מאוד!','איזה הישג מרשים!'
];

const REACTIONS = ['👍','❤️','😂','😮','😢','😡'];
const REACTION_WEIGHTS = [60, 20, 8, 5, 4, 3]; // weighted random

// ===================== STATE =====================
let state = {
  posts: [],
  leads: JSON.parse(localStorage.getItem('fb_leads') || '[]'),
  comments: JSON.parse(localStorage.getItem('fb_comments') || '{}'),
  likes: JSON.parse(localStorage.getItem('fb_likes') || '{}'),
  totalLoaded: 0,
  loading: false,
  demoMode: false,
  demoInterval: null
};

// ===================== UTILS =====================
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function pickRandom(arr) { return arr[rand(0, arr.length - 1)]; }

function weightedRandom(items, weights) {
  const total = weights.reduce((s, w) => s + w, 0);
  let r = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return items[i];
  }
  return items[0];
}

function formatCount(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace('.0','') + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0','') + 'K';
  return n.toString();
}

function timeAgo(ts) {
  const diff = (Date.now() - ts) / 1000;
  if (diff < 60) return 'לפני רגע';
  if (diff < 3600) return `לפני ${Math.floor(diff/60)} דקות`;
  if (diff < 86400) return `לפני ${Math.floor(diff/3600)} שעות`;
  return `לפני ${Math.floor(diff/86400)} ימים`;
}

function saveToLocalStorage() {
  localStorage.setItem('fb_likes', JSON.stringify(state.likes));
  localStorage.setItem('fb_comments', JSON.stringify(state.comments));
}

function showToast(msg, duration = 2500) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), duration);
}

function generateId() { return Date.now().toString(36) + Math.random().toString(36).slice(2); }

// ===================== POST GENERATOR =====================
function generatePost(index) {
  const name = pickRandom(NAMES);
  const avatarIdx = rand(1, 30);
  const company = Math.random() > 0.5 ? pickRandom(COMPANY_NAMES) : null;
  const hasImage = Math.random() > 0.4;
  const imgSeed = rand(10, 300);
  const likes = rand(5, 3000);
  const comments = rand(0, 180);
  const shares = rand(0, 80);
  const text = pickRandom(POST_TEXTS);
  const ts = Date.now() - rand(60000, 72 * 3600000);

  return {
    id: `post_${index}_${generateId()}`,
    type: 'regular',
    author: name,
    authorSub: company,
    avatar: `https://i.pravatar.cc/40?img=${avatarIdx}`,
    text,
    image: hasImage ? `${IMAGES[rand(0,2)]}${imgSeed}` : null,
    likes,
    comments,
    shares,
    timestamp: ts,
    reactions: [
      weightedRandom(REACTIONS, REACTION_WEIGHTS),
      weightedRandom(REACTIONS, REACTION_WEIGHTS),
      weightedRandom(REACTIONS, REACTION_WEIGHTS)
    ].filter((v, i, a) => a.indexOf(v) === i).slice(0, 3)
  };
}

function generateAdPost() {
  return {
    id: 'fre_ad_post',
    type: 'ad',
    author: 'FRE Electro Market',
    authorSub: 'חנות ציוד מחשוב',
    avatar: null,
    text: 'ציוד מחשוב לעסקים במחירים משתלמים.',
    bullets: [
      'מחירים אטרקטיביים',
      'שירות ותמיכה ישירה מבעלי החברה',
      'ניסיון עם חברות גדולות במשק'
    ],
    image: CONFIG.AD_IMAGE_PATH,
    likes: rand(180, 640),
    comments: rand(40, 130),
    shares: rand(20, 60),
    timestamp: Date.now() - rand(1800000, 7200000),
    reactions: ['👍', '❤️', '😮'],
    cta: 'קבלו הצעת מחיר'
  };
}

// ===================== RENDER POST =====================
function renderPost(post) {
  const el = document.createElement('div');
  el.className = `card post ${post.type === 'ad' ? 'post--ad' : ''} post-enter`;
  el.id = `post-${post.id}`;

  const userLiked = state.likes[post.id] === true;
  const postComments = state.comments[post.id] || [];
  const currentLikes = post.likes + (userLiked ? 1 : 0);

  const authorLogoHtml = post.type === 'ad'
    ? `<div class="modal__brand-icon" style="width:40px;height:40px;font-size:11px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1877f2,#6C4BEF);color:white;font-weight:800;flex-shrink:0;">FRE</div>`
    : `<img src="${post.avatar}" alt="${post.author}" class="post__avatar" loading="lazy" />`;

  const sponsoredHtml = post.type === 'ad'
    ? `<div class="post__info"><span class="post__sponsored">ממומן</span><span style="color:#8a8d91"> · </span><span style="color:var(--text-secondary);font-size:13px">ממומן</span></div>`
    : `<div class="post__info">${post.authorSub ? `<span style="font-size:13px;color:var(--text-secondary)">${post.authorSub}</span><span style="color:#8a8d91"> · </span>` : ''}<span style="font-size:13px;color:var(--text-secondary)">${timeAgo(post.timestamp)}</span> <svg viewBox="0 0 16 16" width="14" height="14" fill="#65676b"><path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM7 11.5V7H5.5V5.5h3V11.5H7z" opacity=".5"/></svg></div>`;

  const imageHtml = post.image
    ? post.type === 'ad'
      ? `<div class="post__image-wrap" onclick="openLeadModal()" style="cursor:pointer;" title="קבלו הצעת מחיר">
          <img src="${post.image}" alt="FRE Electro Market" class="post__image" loading="lazy" onerror="this.parentElement.innerHTML='<div style=\'background:linear-gradient(135deg,#1877f2,#6C4BEF);min-height:280px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;color:white;padding:32px;text-align:center;\'><div style=\'font-size:48px;font-weight:900;\'>FRE</div><div style=\'font-size:20px;font-weight:700;\'>Electro Market</div><div style=\'font-size:15px;opacity:.9;\'>ציוד מחשוב לעסקים במחירים משתלמים</div><div style=\'margin-top:8px;font-size:13px;opacity:.7;\'>⚡ מחירים אטרקטיביים · שירות אישי · ניסיון מוכח</div></div>';" />
        </div>`
      : `<div class="post__image-wrap"><img src="${post.image}" alt="" class="post__image" loading="lazy" /></div>`
    : '';

  const bulletsHtml = post.bullets
    ? `<ul class="post__bullets">${post.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
    : '';

  const adCtaHtml = post.type === 'ad'
    ? `<div class="post__ad-cta">
        <div>
          <div class="post__ad-cta-text">fre-electro.co.il</div>
          <div class="post__ad-cta-title">FRE Electro Market</div>
        </div>
        <button class="btn btn--primary" onclick="openLeadModal()">קבלו הצעת מחיר</button>
      </div>`
    : '';

  const reactionsStr = post.reactions.slice(0, 3).join('');
  const commentCount = postComments.length + post.comments;

  const commentsHtml = postComments.map(c => `
    <div class="comment" id="comment-${c.id}">
      <img src="${c.avatar}" alt="${c.author}" />
      <div>
        <div class="comment__bubble">
          <div class="comment__author">${c.author}</div>
          <div class="comment__text">${c.text}</div>
        </div>
        <div class="comment__meta">
          <span>${timeAgo(c.ts)}</span>
          <button onclick="likeComment('${c.id}')">אהבתי</button>
          ${c.isOwn ? `<button class="delete-comment" onclick="deleteComment('${post.id}','${c.id}')">מחק</button>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="post__header">
      ${authorLogoHtml}
      <div class="post__meta">
        <div class="post__author">${post.author}</div>
        ${sponsoredHtml}
      </div>
      <button class="post__more" aria-label="אפשרויות">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#65676b"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
      </button>
    </div>
    <div class="post__body">
      <div class="post__text ${post.text.length < 80 && !post.image ? 'post__text--large' : ''}">${post.text}</div>
      ${bulletsHtml}
    </div>
    ${imageHtml}
    ${adCtaHtml}
    <div class="post__stats">
      <div class="post__reactions" onclick="showReactionPicker('${post.id}')">
        <span class="reaction-emoji">${reactionsStr}</span>
        <span class="post__stats-count" id="likes-count-${post.id}">${formatCount(currentLikes)}</span>
      </div>
      <div class="post__stats-right">
        <span onclick="toggleComments('${post.id}')">${formatCount(commentCount)} תגובות</span>
        <span>${formatCount(post.shares)} שיתופים</span>
      </div>
    </div>
    <div class="post__actions">
      <button class="post__action-btn ${userLiked ? 'liked' : ''}" id="like-btn-${post.id}" onclick="toggleLike('${post.id}', this)" aria-label="אהבתי">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="${userLiked ? '#1877f2' : 'none'}" stroke="${userLiked ? '#1877f2' : 'currentColor'}" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
        <span>אהבתי</span>
      </button>
      <button class="post__action-btn" onclick="toggleComments('${post.id}')" aria-label="תגובה">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        <span>תגובה</span>
      </button>
      <button class="post__action-btn" onclick="sharePost('${post.id}')" aria-label="שיתוף">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        <span>שיתוף</span>
      </button>
    </div>
    <div class="post__comments" id="comments-${post.id}" style="display:none;">
      <div id="comments-list-${post.id}">${commentsHtml}</div>
      <div class="comment-input-wrap">
        <img src="${CONFIG.CURRENT_USER.avatar}" alt="אני" />
        <input type="text" class="comment-input" placeholder="כתוב תגובה..." id="comment-input-${post.id}" onkeydown="handleCommentKey(event,'${post.id}')" dir="rtl" />
        <button class="comment-send" onclick="submitComment('${post.id}')" aria-label="שלח">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    </div>
  `;

  return el;
}

// ===================== FEED LOADING =====================
function loadMorePosts() {
  if (state.loading || state.totalLoaded >= CONFIG.MAX_POSTS) return;
  state.loading = true;

  const loader = document.getElementById('feedLoader');
  if (loader) loader.style.display = 'block';

  setTimeout(() => {
    const container = document.getElementById('postsContainer');
    const count = Math.min(CONFIG.POSTS_PER_LOAD, CONFIG.MAX_POSTS - state.totalLoaded);

    for (let i = 0; i < count; i++) {
      const post = generatePost(state.totalLoaded + i);
      state.posts.push(post);
      const el = renderPost(post);
      container.appendChild(el);
    }

    state.totalLoaded += count;
    state.loading = false;
    if (loader) loader.style.display = 'none';

    if (state.totalLoaded >= CONFIG.MAX_POSTS) {
      const endEl = document.getElementById('feedEnd');
      if (endEl) endEl.style.display = 'block';
    }
  }, 600 + Math.random() * 400);
}

function initFeed() {
  const container = document.getElementById('postsContainer');

  // Insert FRE ad post FIRST
  const adPost = generateAdPost();
  state.posts.push(adPost);
  const adEl = renderPost(adPost);
  container.appendChild(adEl);

  // Load first batch
  loadMorePosts();

  // Infinite scroll
  window.addEventListener('scroll', () => {
    const scrollBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
    if (scrollBottom < CONFIG.SCROLL_THRESHOLD && !state.loading && state.totalLoaded < CONFIG.MAX_POSTS) {
      loadMorePosts();
    }
  }, { passive: true });
}

// ===================== INTERACTIONS =====================
function toggleLike(postId, btn) {
  const liked = state.likes[postId];
  state.likes[postId] = !liked;
  saveToLocalStorage();

  const post = state.posts.find(p => p.id === postId);
  if (!post) return;

  if (state.likes[postId]) {
    btn.classList.add('liked');
    btn.querySelector('svg').setAttribute('fill', '#1877f2');
    btn.querySelector('svg').setAttribute('stroke', '#1877f2');
    post.likes++;
  } else {
    btn.classList.remove('liked');
    btn.querySelector('svg').setAttribute('fill', 'none');
    btn.querySelector('svg').setAttribute('stroke', 'currentColor');
    post.likes--;
  }

  const countEl = document.getElementById(`likes-count-${postId}`);
  if (countEl) {
    countEl.textContent = formatCount(post.likes + (state.likes[postId] ? 1 : 0));
    countEl.classList.add('count-update');
    setTimeout(() => countEl.classList.remove('count-update'), 300);
  }
}

function toggleComments(postId) {
  const el = document.getElementById(`comments-${postId}`);
  if (!el) return;
  const isHidden = el.style.display === 'none';
  el.style.display = isHidden ? 'flex' : 'none';
  if (isHidden) {
    const input = document.getElementById(`comment-input-${postId}`);
    if (input) input.focus();
  }
}

function handleCommentKey(event, postId) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    submitComment(postId);
  }
}

function submitComment(postId) {
  const input = document.getElementById(`comment-input-${postId}`);
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const comment = {
    id: generateId(),
    postId,
    author: CONFIG.CURRENT_USER.name,
    avatar: CONFIG.CURRENT_USER.avatar,
    text,
    ts: Date.now(),
    isOwn: true
  };

  if (!state.comments[postId]) state.comments[postId] = [];
  state.comments[postId].push(comment);
  saveToLocalStorage();

  const listEl = document.getElementById(`comments-list-${postId}`);
  if (listEl) {
    const commentEl = document.createElement('div');
    commentEl.className = 'comment post-enter';
    commentEl.id = `comment-${comment.id}`;
    commentEl.innerHTML = `
      <img src="${comment.avatar}" alt="${comment.author}" />
      <div>
        <div class="comment__bubble">
          <div class="comment__author">${comment.author}</div>
          <div class="comment__text">${comment.text}</div>
        </div>
        <div class="comment__meta">
          <span>לפני רגע</span>
          <button onclick="likeComment('${comment.id}')">אהבתי</button>
          <button class="delete-comment" onclick="deleteComment('${postId}','${comment.id}')">מחק</button>
        </div>
      </div>
    `;
    listEl.appendChild(commentEl);
    commentEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  input.value = '';
  showToast('התגובה נוספה ✓');
}

function deleteComment(postId, commentId) {
  if (!state.comments[postId]) return;
  state.comments[postId] = state.comments[postId].filter(c => c.id !== commentId);
  saveToLocalStorage();

  const el = document.getElementById(`comment-${commentId}`);
  if (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-20px)';
    el.style.transition = 'all 0.3s ease';
    setTimeout(() => el.remove(), 300);
  }
  showToast('התגובה נמחקה');
}

function likeComment(commentId) {
  showToast('אהבת את התגובה ❤️');
}

function sharePost(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (post) {
    post.shares++;
    showToast('הפוסט שותף בהצלחה 🔗');
  }
}

function showReactionPicker(postId) {
  // Simple toggle - just show a mini tooltip
  showToast('בחר תגובה: 👍 ❤️ 😂 😮 😢 😡');
}

// ===================== RIGHT SIDEBAR DATA =====================
function populateRightSidebar() {
  const peopleEl = document.getElementById('suggestedPeople');
  if (!peopleEl) return;

  for (let i = 0; i < 5; i++) {
    const name = NAMES[rand(0, NAMES.length - 1)];
    const avatarIdx = rand(5, 70);
    const mutual = rand(1, 20);
    peopleEl.innerHTML += `
      <div class="widget__person">
        <img src="https://i.pravatar.cc/44?img=${avatarIdx}" alt="${name}" />
        <div class="widget__person-info">
          <div class="widget__person-name">${name}</div>
          <div class="widget__person-meta">${mutual} חברים משותפים</div>
        </div>
        <button class="widget__person-add" onclick="this.textContent='נשלח';this.disabled=true;">הוסף</button>
      </div>
    `;
  }

  const groupsEl = document.getElementById('suggestedGroups');
  if (!groupsEl) return;

  const groups = ['הייטק ישראל','טכנולוגיה ועסקים','מפתחים IL','סטארטאפ נשיון','IT Professionals IL'];
  groups.forEach((g, i) => {
    groupsEl.innerHTML += `
      <div class="widget__group">
        <img src="https://picsum.photos/44/44?random=${200 + i}" alt="${g}" />
        <div>
          <div class="widget__group-name">${g}</div>
          <div class="widget__group-meta">${formatCount(rand(1000, 50000))} חברים</div>
        </div>
      </div>
    `;
  });
}

// ===================== LEAD MODAL =====================
function openLeadModal() {
  const overlay = document.getElementById('leadModalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const firstInput = overlay.querySelector('input');
    if (firstInput) firstInput.focus();
  }, 250);
}

function closeLeadModal() {
  const overlay = document.getElementById('leadModalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  // Reset form after close
  setTimeout(() => {
    const form = document.getElementById('leadForm');
    const success = document.getElementById('leadSuccess');
    if (form) { form.style.display = ''; form.reset(); }
    if (success) success.style.display = 'none';
    clearAllErrors();
  }, 300);
}

// Close on overlay click
document.getElementById('leadModalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeLeadModal();
});

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLeadModal();
});

// ===================== FORM VALIDATION =====================
function clearAllErrors() {
  document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}

function setError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  const errEl = document.getElementById(`err-${fieldId}`);
  if (field) field.classList.add('error');
  if (errEl) errEl.textContent = msg;
}

function validateIsraeliPhone(phone) {
  const cleaned = phone.replace(/[\s\-]/g, '');
  return /^(05\d{8}|07\d{8}|\+9725\d{8}|0[23489]\d{7})$/.test(cleaned);
}

function validateEmail(email) {
  return !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  clearAllErrors();

  const company = document.getElementById('company').value.trim();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const consent = document.getElementById('consent').checked;
  const quantity = document.getElementById('quantity').value;
  const notes = document.getElementById('notes').value.trim();

  let valid = true;

  if (!company) { setError('company', 'שם החברה הוא שדה חובה'); valid = false; }
  if (!name) { setError('name', 'שם מלא הוא שדה חובה'); valid = false; }
  if (!phone) { setError('phone', 'מספר טלפון הוא שדה חובה'); valid = false; }
  else if (!validateIsraeliPhone(phone)) { setError('phone', 'מספר טלפון לא תקין (לדוגמה: 050-1234567)'); valid = false; }
  if (email && !validateEmail(email)) { setError('email', 'כתובת אימייל לא תקינה'); valid = false; }
  if (!consent) { setError('consent', 'יש לאשר יצירת קשר על מנת להמשיך'); valid = false; }

  if (!valid) return;

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.textContent = 'שולח...';
  submitBtn.disabled = true;

  setTimeout(() => {
    const lead = {
      id: generateId(),
      timestamp: Date.now(),
      company,
      name,
      phone,
      email,
      quantity,
      notes
    };

    state.leads.push(lead);
    localStorage.setItem('fb_leads', JSON.stringify(state.leads));

    document.getElementById('leadForm').style.display = 'none';
    document.getElementById('leadSuccess').style.display = 'block';
    document.getElementById('leadSuccess').scrollIntoView({ block: 'center', behavior: 'smooth' });

    submitBtn.textContent = 'שלח';
    submitBtn.disabled = false;
  }, 1200);
});

// ===================== DEMO MODE =====================
function toggleDemo() {
  state.demoMode = !state.demoMode;
  const banner = document.getElementById('demoBanner');
  const btn = document.getElementById('demoToggle');

  if (state.demoMode) {
    banner.style.display = 'flex';
    btn.classList.add('active');
    startDemoMode();
    showToast('מצב הדגמה הופעל 🎬');
  } else {
    banner.style.display = 'none';
    btn.classList.remove('active');
    stopDemoMode();
    showToast('מצב הדגמה כובה');
  }
}

function startDemoMode() {
  state.demoInterval = setInterval(() => {
    // Pick a random post and increase its likes
    const posts = document.querySelectorAll('.post');
    if (!posts.length) return;

    const randomPost = posts[rand(0, Math.min(posts.length - 1, 5))];
    const postId = randomPost.id.replace('post-', '');
    const countEl = document.getElementById(`likes-count-${postId}`);
    const post = state.posts.find(p => p.id === postId);

    if (post && countEl) {
      const increment = rand(1, 8);
      post.likes += increment;
      countEl.textContent = formatCount(post.likes);
      countEl.classList.add('count-update');
      setTimeout(() => countEl.classList.remove('count-update'), 300);
    }

    // Occasionally add a fake comment to ad post
    if (Math.random() > 0.7) {
      const adPostId = 'fre_ad_post';
      const fakeComment = {
        id: generateId(),
        postId: adPostId,
        author: pickRandom(NAMES),
        avatar: `https://i.pravatar.cc/32?img=${rand(1, 70)}`,
        text: pickRandom(COMMENT_TEXTS),
        ts: Date.now(),
        isOwn: false
      };

      if (!state.comments[adPostId]) state.comments[adPostId] = [];
      state.comments[adPostId].push(fakeComment);
      saveToLocalStorage();

      const listEl = document.getElementById(`comments-list-${adPostId}`);
      if (listEl) {
        const commentEl = document.createElement('div');
        commentEl.className = 'comment post-enter';
        commentEl.id = `comment-${fakeComment.id}`;
        commentEl.innerHTML = `
          <img src="${fakeComment.avatar}" alt="${fakeComment.author}" />
          <div>
            <div class="comment__bubble">
              <div class="comment__author">${fakeComment.author}</div>
              <div class="comment__text">${fakeComment.text}</div>
            </div>
            <div class="comment__meta"><span>לפני רגע</span><button onclick="likeComment('${fakeComment.id}')">אהבתי</button></div>
          </div>
        `;
        // Only show if comments visible
        const commentsSection = document.getElementById(`comments-${adPostId}`);
        if (commentsSection && commentsSection.style.display !== 'none') {
          listEl.appendChild(commentEl);
        }
      }
    }
  }, 2500);
}

function stopDemoMode() {
  if (state.demoInterval) {
    clearInterval(state.demoInterval);
    state.demoInterval = null;
  }
}

// ===================== MOBILE MENU =====================
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
});

document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('mobileMenuBtn');
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// ===================== ADMIN PAGE =====================
function isAdminPage() {
  return window.location.pathname === '/admin' ||
         window.location.hash === '#/admin' ||
         window.location.search.includes('admin=1');
}

function renderAdminPage() {
  document.querySelector('.topnav')?.remove();
  document.getElementById('mainLayout')?.remove();
  document.querySelector('.mobile-menu')?.remove();
  document.querySelector('.demo-banner')?.remove();
  document.querySelector('.fab')?.remove();
  document.getElementById('leadModalOverlay')?.remove();

  document.body.innerHTML = `
    <div class="admin-page" id="adminPage">
      <div class="admin-login" id="adminLogin">
        <h1>FakeBook Admin</h1>
        <p>פאנל ניהול לידים</p>
        <div class="form-group">
          <input type="password" id="adminPassword" placeholder="הזן סיסמה" class="admin-search" style="text-align:center" onkeydown="if(event.key==='Enter')adminLogin()" />
        </div>
        <button class="btn btn--primary" style="width:100%;margin-top:8px" onclick="adminLogin()">כניסה</button>
        <div id="adminLoginErr" style="color:var(--fb-red);margin-top:8px;font-size:14px;"></div>
        <div style="margin-top:16px"><a href="/" style="color:var(--fb-blue);font-size:14px;">← חזרה לפיד</a></div>
      </div>
      <div class="admin-dashboard" id="adminDashboard" style="display:none;"></div>
    </div>
  `;

  document.body.style.background = '#f0f2f5';
}

function adminLogin() {
  const pwd = document.getElementById('adminPassword').value;
  if (pwd === 'admin123') {
    document.getElementById('adminLogin').style.display = 'none';
    renderAdminDashboard();
  } else {
    document.getElementById('adminLoginErr').textContent = 'סיסמה שגויה';
  }
}

function renderAdminDashboard() {
  const leads = JSON.parse(localStorage.getItem('fb_leads') || '[]');
  const dash = document.getElementById('adminDashboard');
  dash.style.display = 'block';

  const todayLeads = leads.filter(l => new Date(l.timestamp).toDateString() === new Date().toDateString()).length;

  dash.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
      <h1>🎯 פאנל ניהול לידים — FRE Electro Market</h1>
      <a href="/" class="btn btn--ghost btn--sm">← חזרה לפיד</a>
    </div>
    <div class="admin-stats">
      <div class="admin-stat"><div class="admin-stat__value">${leads.length}</div><div class="admin-stat__label">סה"כ לידים</div></div>
      <div class="admin-stat"><div class="admin-stat__value">${todayLeads}</div><div class="admin-stat__label">לידים היום</div></div>
      <div class="admin-stat"><div class="admin-stat__value">${leads.filter(l=>l.quantity==='100+').length}</div><div class="admin-stat__label">לידים גדולים (100+)</div></div>
    </div>
    <div class="admin-controls">
      <input type="text" class="admin-search" placeholder="חפש לפי שם / חברה / טלפון..." id="adminSearchInput" oninput="filterAdminTable()" />
      <button class="btn btn--primary" onclick="exportCSV()">📥 ייצוא CSV</button>
      <button class="btn btn--ghost" onclick="renderAdminDashboard()">🔄 רענן</button>
    </div>
    <div class="admin-table-wrap">
      <table class="admin-table" id="adminTable">
        <thead>
          <tr>
            <th>#</th>
            <th>תאריך</th>
            <th>שם</th>
            <th>חברה</th>
            <th>טלפון</th>
            <th>אימייל</th>
            <th>כמות</th>
            <th>הערות</th>
            <th>פעולות</th>
          </tr>
        </thead>
        <tbody id="adminTableBody">
          ${leads.length === 0 ? '<tr><td colspan="9"><div class="admin-empty">אין לידים עדיין. הפעל מצב הדגמה והגש טופס!</div></td></tr>' : leads.map((l, i) => `
            <tr data-id="${l.id}" data-search="${(l.name + l.company + l.phone + l.email).toLowerCase()}">
              <td>${i + 1}</td>
              <td style="white-space:nowrap">${new Date(l.timestamp).toLocaleDateString('he-IL')} ${new Date(l.timestamp).toLocaleTimeString('he-IL', {hour:'2-digit',minute:'2-digit'})}</td>
              <td><strong>${l.name}</strong></td>
              <td>${l.company}</td>
              <td dir="ltr">${l.phone}</td>
              <td dir="ltr">${l.email || '—'}</td>
              <td>${l.quantity}</td>
              <td style="max-width:200px;word-break:break-word">${l.notes || '—'}</td>
              <td><button class="btn btn--danger" onclick="deleteLead('${l.id}')">מחק</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function filterAdminTable() {
  const q = document.getElementById('adminSearchInput').value.toLowerCase();
  document.querySelectorAll('#adminTableBody tr[data-id]').forEach(row => {
    row.style.display = row.dataset.search.includes(q) ? '' : 'none';
  });
}

function deleteLead(id) {
  if (!confirm('למחוק ליד זה?')) return;
  state.leads = state.leads.filter(l => l.id !== id);
  localStorage.setItem('fb_leads', JSON.stringify(state.leads));
  renderAdminDashboard();
  showToast('ליד נמחק');
}

function exportCSV() {
  const leads = JSON.parse(localStorage.getItem('fb_leads') || '[]');
  if (!leads.length) { alert('אין לידים לייצוא'); return; }

  const headers = ['#','תאריך','שם','חברה','טלפון','אימייל','כמות מחשבים','הערות'];
  const rows = leads.map((l, i) => [
    i + 1,
    new Date(l.timestamp).toLocaleDateString('he-IL') + ' ' + new Date(l.timestamp).toLocaleTimeString('he-IL'),
    l.name, l.company, l.phone, l.email || '', l.quantity, l.notes || ''
  ].map(v => `"${String(v).replace(/"/g, '""')}"`).join(','));

  const csv = '\uFEFF' + [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `fre_leads_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// Expose functions globally for admin page
window.adminLogin = adminLogin;
window.filterAdminTable = filterAdminTable;
window.deleteLead = deleteLead;
window.exportCSV = exportCSV;
window.renderAdminDashboard = renderAdminDashboard;

// ===================== INIT =====================
function init() {
  if (isAdminPage()) {
    renderAdminPage();
    return;
  }

  populateRightSidebar();
  initFeed();

  // Demo toggle button
  document.getElementById('demoToggle').addEventListener('click', toggleDemo);

  // Handle /admin navigation
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      window.location.href = '?admin=1';
    }
  });
}

// Global expose
window.openLeadModal = openLeadModal;
window.closeLeadModal = closeLeadModal;
window.toggleLike = toggleLike;
window.toggleComments = toggleComments;
window.submitComment = submitComment;
window.deleteComment = deleteComment;
window.sharePost = sharePost;
window.showReactionPicker = showReactionPicker;
window.likeComment = likeComment;
window.handleCommentKey = handleCommentKey;
window.toggleDemo = toggleDemo;

// Start
document.addEventListener('DOMContentLoaded', init);
