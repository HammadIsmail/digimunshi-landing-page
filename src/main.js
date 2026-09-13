/**
 * DigiMunshi Landing Page - Client Logic
 * Handles Lucide Icon initialization, Language Switching (Urdu/English), Video Demo Controls, FAQ Accordion, and Download Handlers
 */

import {
  createIcons,
  Globe,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Download,
  Check,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Lock,
  MessageCircle,
  Clock,
  Cloud,
  ChevronDown,
  User,
  Bot,
  Heart,
  Plus,
  Minus,
} from 'lucide';

export function refreshIcons() {
  createIcons({
    icons: {
      Globe,
      Play,
      Pause,
      Volume2,
      VolumeX,
      Maximize,
      Minimize,
      Download,
      Check,
      CheckCircle,
      ShieldCheck,
      Sparkles,
      Lock,
      MessageCircle,
      Clock,
      Cloud,
      ChevronDown,
      User,
      Bot,
      Heart,
      Plus,
      Minus,
    },
  });
}

// Initial icon mount
document.addEventListener('DOMContentLoaded', refreshIcons);
refreshIcons();

// --- Bilingual Dictionary ---
const translations = {
  ur: {
    brand_title: 'ڈیجیٹل منشی',
    nav_features: 'خصوصیات',
    nav_demo: 'ڈیمو ویڈیو',
    nav_how: 'کیسے کام کرتا ہے',
    nav_faqs: 'سوالات',
    header_download_btn: 'ڈاؤن لوڈ کریں',
    btn_download: 'ڈاؤن لوڈ کریں',
    hero_badge: 'پاکستان کا پہلا AI صوتی کھاتہ رجسٹر',
    hero_title: 'بولیں اور کھاتہ لکھیں — بغیر ٹائپنگ کے',
    hero_subtitle: 'کریانہ، جنرل اسٹور اور ہول سیلرز کے لیے آواز سے چلنے والا تیز ترین رجسٹر۔ بس مائیک دبائیں اور بولیں، حساب کتاب فوری محفوظ!',
    cta_android_label: 'اینڈرائیڈ کے لیے براہ راست',
    cta_download_main: 'ڈاؤن لوڈ کریں (Android APK)',
    cta_watch_demo: 'ڈیمو ویڈیو دیکھیں',
    trust_free: '100% مفت استعمال',
    trust_offline: 'محفوظ کلاؤڈ بیک اپ',
    trust_whatsapp: 'واٹس ایپ رسیدیں',
    demo_tag: 'عملی نمونہ',
    demo_title: 'دیکھیں ڈیجیٹل منشی کیسے کام کرتا ہے',
    demo_subtitle: 'صرف ایک منٹ میں جانیے کہ آپ اپنی دکان کا سارا ادھار اور وصولی کس طرح بول کر لکھ سکتے ہیں۔',
    video_prompt_title: 'بولیں اور جادو دیکھیں!',
    video_prompt_sub: 'ویڈیو چلانے کے لیے اوپر کلک کریں',
    vf_1_title: '1 سیکنڈ میں اندراج',
    vf_1_sub: 'بغیر اسپیلنگ لکھے فوری کھاتہ',
    vf_2_title: '1000+ پر حفاظتی تصدیق',
    vf_2_sub: 'بڑی رقم پر غلطی کا کوئی امکان نہیں',
    vf_3_title: 'واٹس ایپ الرٹ',
    vf_3_sub: 'گاہک کو فوری میسج اور یاددہانی',
    features_tag: 'اہم خصوصیات',
    features_title: 'دکانداروں کی ہر ضرورت کا مکمل حل',
    features_subtitle: 'روایتی کاپی اور رجسٹر کے جھنجھٹ کو ختم کریں، اپنے کاروبار کو جدید اور محفوظ بنائیں۔',
    feat_1_title: 'اردو اور پنجابی صوتی شناخت',
    feat_1_desc: 'پاکستانی لہجے کے مطابق تربیت یافتہ AI۔ چاہے آپ اردو میں بولیں یا ملا جلا، ڈیجیٹل منشی نام اور رقم درست سمجھتا ہے۔',
    feat_2_title: 'حفاظتی تصدیق (Guardrails)',
    feat_2_desc: '1000 روپے سے زائد وصولی یا پورا کھاتہ صاف کرنے سے پہلے ایپ خودکار تصدیق مانگتی ہے تاکہ کوئی غلط اندراج نہ ہو۔',
    feat_3_title: 'ایک کلک پر واٹس ایپ رسید',
    feat_3_desc: 'گاہک کو بقایا رقم کا میسج یا مکمل کھاتہ تفصیل واٹس ایپ پر بھیج کر ادھار کی وصولی کو تین گنا تیز کریں۔',
    feat_4_title: 'ریئل ٹائم کلاؤڈ سنک اور سیکیورٹی',
    feat_4_desc: 'آپ کا سارا کھاتہ 100% محفوظ کلاؤڈ پر محفوظ رہتا ہے۔ فون خراب یا تبدیل ہونے کی صورت میں بھی صرف اپنا نمبر اور پن لگائیں، سارا ریکارڈ فوری واپس!',
    feat_5_title: '4 ہندسوں کا محفوظ پن کوڈ',
    feat_5_desc: 'آپ کے علاوہ کوئی دوسرا شخص دکان کا کھاتہ نہیں کھول سکتا۔ پن کوڈ سیکیورٹی ہر وقت فعال رہتی ہے۔',
    feat_6_title: 'کل واجب الوصول ادھار ڈیش بورڈ',
    feat_6_desc: 'ایک نظر میں جانیے کہ مارکیٹ میں آپ کا کتنا پیسہ پھنسا ہوا ہے، اور کن گاہکوں سے آج رقم وصول کرنی ہے۔',
    how_tag: 'طریقہ کار',
    how_title: 'استعمال کرنے کا آسان ترین طریقہ',
    how_subtitle: 'نہ ٹائپنگ کی ضرورت، نہ انگریزی سیکھنے کی فکر۔ 3 آسان مراحل:',
    step_1_title: 'بٹن دبائیں اور بولیں',
    step_1_desc: 'مائیک کا بٹن دبائیں اور عام انداز میں بولیں: "عثمان کو پانچ سو روپے کا گھی ادھار دیا"۔',
    step_2_title: 'فوری صوتی تصدیق',
    step_2_desc: 'ڈیجیٹل منشی آپ کو آواز میں جواب دے کر بتائے گا اور سکرین پر اندراج محفوظ کر دے گا۔',
    step_3_title: 'واٹس ایپ رسید شیئر',
    step_3_desc: 'ضرورت پڑنے پر گاہک کو ایک کلک سے واٹس ایپ پر رسید یا یاددہانی کا پیغام بھیج دیں۔',
    faq_tag: 'عمومی سوالات',
    faq_title: 'اکثر پوچھے جانے والے سوالات',
    faq_subtitle: 'اگر آپ کے ذہن میں کوئی سوال ہے تو یہاں جواب موجود ہے:',
    faq_q1: 'کیا ڈیجیٹل منشی استعمال کرنا بالکل مفت ہے؟',
    faq_a1: 'جی ہاں! بنیادی صوتی کھاتہ، گاہکوں کا اندراج، اور واٹس ایپ شیئرنگ تمام دکانداروں کے لیے بالکل مفت ہے۔',
    faq_q2: 'کیا یہ اردو اور پنجابی لہجہ ٹھیک سے سمجھتا ہے؟',
    faq_a2: 'بالکل! ڈیجیٹل منشی کا صوتی AI ماڈل خاص طور پر پاکستانی کریانہ، جنرل اسٹورز، اور بازاروں کے لہجے اور عام اعداد (جیسے ڈیڑھ سو، ڈھائی ہزار، پندرہ سو) کے لیے ڈیزائن کیا گیا ہے۔',
    faq_q3: 'اگر میرا فون چوری یا خراب ہو جائے تو کیا کھاتہ ختم ہو جائے گا؟',
    faq_a3: 'ہرگز نہیں! آپ کا سارا حساب کتاب محفوظ کلاؤڈ پر بیک اپ رہتا ہے۔ نئے فون میں اپنا فون نمبر اور پن کوڈ درج کریں اور سارا ڈیٹا فوری واپس حاصل کریں۔',
    faq_q4: 'کیا میں گاہک کا کھاتہ غلطی سے ڈیلیٹ کر سکتا ہوں؟',
    faq_a4: 'نہیں۔ ڈیجیٹل منشی میں سخت ڈیلیٹ گارڈ ریلز موجود ہیں، کھاتہ صاف کرنے سے پہلے واضح تصدیق پوچھی جاتی ہے اور پرانا ڈیٹا مکمل محفوظ رہتا ہے۔',
    banner_pill: 'آج ہی شروعات کریں',
    banner_title: 'اپنی دکان کا کھاتہ ڈیجیٹل بنائیں اور وصولی تیز کریں!',
    banner_sub: 'ابھی فری اینڈرائیڈ ایپ ڈاؤن لوڈ کریں اور کاپی پنسل کے جھنجھٹ سے ہمیشہ کے لیے نجات پائیں۔',
    qr_label: 'فون سے کیمرہ اسکین کر کے ڈاؤن لوڈ کریں',
    footer_desc: 'پاکستان کے تمام دکانداروں اور تاجروں کے لیے جدید ترین AI صوتی کھاتہ حل۔',
    footer_quick_links: 'فوری لنکس',
    footer_contact: 'رابطہ اور مدد',
  },
  en: {
    brand_title: 'DigiMunshi',
    nav_features: 'Features',
    nav_demo: 'Demo Video',
    nav_how: 'How It Works',
    nav_faqs: 'FAQs',
    header_download_btn: 'Download',
    btn_download: 'Download',
    hero_badge: 'Pakistan’s First AI Voice Ledger for Merchants',
    hero_title: 'Speak & Record Ledger — Zero Typing Needed',
    hero_subtitle: 'The fastest voice-powered khata app for Kiryana, general stores, and wholesalers. Simply tap the mic, speak in Urdu, and your ledger is instantly recorded!',
    cta_android_label: 'Direct for Android',
    cta_download_main: 'Download (Android APK)',
    cta_watch_demo: 'Watch Demo Video',
    trust_free: '100% Free to Use',
    trust_offline: 'Real-Time Cloud Sync',
    trust_whatsapp: 'WhatsApp Receipts',
    demo_tag: 'Interactive Demo',
    demo_title: 'See How DigiMunshi Works in Action',
    demo_subtitle: 'Discover how you can manage all customer dues and payments in under 60 seconds with voice commands.',
    video_prompt_title: 'Speak & Watch the Magic!',
    video_prompt_sub: 'Click above to play the demo video',
    vf_1_title: '1-Second Voice Entry',
    vf_1_sub: 'No spelling or manual typing needed',
    vf_2_title: '1,000+ Payment Guardrail',
    vf_2_sub: 'Automatic confirmation prevents mistakes',
    vf_3_title: 'Instant WhatsApp Alerts',
    vf_3_sub: 'Send balance reminders directly to customers',
    features_tag: 'Key Features',
    features_title: 'Everything Pakistani Merchants Need',
    features_subtitle: 'Eliminate manual paper registers and protect your shop credit with an intelligent digital assistant.',
    feat_1_title: 'Urdu & Punjabi Speech Recognition',
    feat_1_desc: 'Trained on Pakistani dialect variations. Whether you speak colloquial Urdu or mixed language, DigiMunshi parses names and amounts reliably.',
    feat_2_title: 'Safety Guardrails',
    feat_2_desc: 'Payments exceeding Rs. 1,000 and full khata clear commands strictly require your verbal or tap confirmation before saving.',
    feat_3_title: '1-Click WhatsApp Reminders',
    feat_3_desc: 'Send payment reminder summaries or full statements to your customers via WhatsApp in one tap to recover credit 3x faster.',
    feat_4_title: 'Real-Time Cloud Sync & Security',
    feat_4_desc: 'All your customer khata entries are securely backed up to the cloud in real time. Switch or restore to a new phone instantly using your phone number and PIN.',
    feat_5_title: '4-Digit Secure PIN',
    feat_5_desc: 'Keep your financial numbers private. PIN security ensures only you can access your shop records.',
    feat_6_title: 'Total Outstanding Dues Dashboard',
    feat_6_desc: 'Instantly view your total receivables in the market, top debtor accounts, and cash collected today.',
    how_tag: 'Workflow',
    how_title: 'As Easy As 1-2-3',
    how_subtitle: 'No complex accounting skills required. Just three simple steps:',
    step_1_title: 'Tap the Mic & Speak',
    step_1_desc: 'Press the mic button and speak naturally: e.g. "Gave Usman Rs. 500 worth of cooking oil on credit".',
    step_2_title: 'Instant Voice Confirmation',
    step_2_desc: 'DigiMunshi speaks back to confirm the entry and automatically saves it to the customer account.',
    step_3_title: 'Share WhatsApp Receipt',
    step_3_desc: 'Share a digital receipt or ledger reminder directly to the customer’s WhatsApp with one tap.',
    faq_tag: 'FAQs',
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Got questions? We have answers:',
    faq_q1: 'Is DigiMunshi completely free to use?',
    faq_a1: 'Yes! Core voice bookkeeping, customer accounts, and WhatsApp sharing are completely free for all store owners.',
    faq_q2: 'Does it understand Urdu numbers and colloquial slang?',
    faq_a2: 'Absolutely! DigiMunshi is tailored for Pakistani market phrasing like "derh so", "dhai hazar", "pandrah so", and common merchant terms.',
    faq_q3: 'What happens if my smartphone is lost or damaged?',
    faq_a3: 'Your data is securely backed up in the cloud. Simply install DigiMunshi on your new phone, enter your phone number & PIN, and everything restores instantly.',
    faq_q4: 'Can I accidentally delete a customer khata?',
    faq_a4: 'No. DigiMunshi has strict deletion guardrails. Clearing a khata always requires explicit confirmation, and deleted entries are safely soft-cancelled.',
    banner_pill: 'Get Started Today',
    banner_title: 'Digitize Your Shop Khata & Accelerate Recoveries!',
    banner_sub: 'Download the free Android app now and say goodbye to lost receipts and paper notebooks forever.',
    qr_label: 'Scan with your phone camera to download APK',
    footer_desc: 'The leading AI voice-powered ledger built specifically for Pakistani merchants and store owners.',
    footer_quick_links: 'Quick Links',
    footer_contact: 'Support & Contact',
  },
};

let currentLang = 'ur';

function setLanguage(lang) {
  currentLang = lang;
  const html = document.documentElement;
  const isRtl = lang === 'ur';

  html.setAttribute('lang', lang);
  html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = isRtl ? 'English' : 'اردو';
  }

  localStorage.setItem('digimunshi_lang', lang);
  refreshIcons();
}

// Initialize Language Switcher
const langToggleBtn = document.getElementById('langToggleBtn');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'ur' ? 'en' : 'ur';
    setLanguage(nextLang);
  });
}

// Load saved language if available
const savedLang = localStorage.getItem('digimunshi_lang');
if (savedLang && (savedLang === 'ur' || savedLang === 'en')) {
  setLanguage(savedLang);
}

// --- Interactive Demo Video Player Controls ---
const video = document.getElementById('demoVideo');
const overlay = document.getElementById('videoOverlay');
const playBtn = document.getElementById('playBtnTrigger');
const ctrlPlay = document.getElementById('ctrlPlayPause');
const ctrlMute = document.getElementById('ctrlMute');
const ctrlFullscreen = document.getElementById('ctrlFullscreen');
const progressFill = document.getElementById('progressFill');
const progressTrack = document.getElementById('progressTrack');
const videoTime = document.getElementById('videoTime');

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function updatePlayButtonState(isPlaying) {
  if (!ctrlPlay) return;
  if (isPlaying) {
    ctrlPlay.innerHTML = '<i data-lucide="pause" class="w-4 h-4"></i>';
  } else {
    ctrlPlay.innerHTML = '<i data-lucide="play" class="w-4 h-4"></i>';
  }
  refreshIcons();
}

function togglePlay() {
  if (!video) return;

  if (video.paused) {
    video.play().then(() => {
      if (overlay) overlay.style.display = 'none';
      updatePlayButtonState(true);
    }).catch(() => {
      simulateVideoPlayback();
    });
  } else {
    video.pause();
    updatePlayButtonState(false);
  }
}

if (playBtn) playBtn.addEventListener('click', togglePlay);
if (overlay) overlay.addEventListener('click', togglePlay);
if (ctrlPlay) ctrlPlay.addEventListener('click', togglePlay);

if (video) {
  video.addEventListener('timeupdate', () => {
    if (video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (videoTime) {
        videoTime.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
      }
    }
  });

  video.addEventListener('ended', () => {
    if (overlay) overlay.style.display = 'flex';
    updatePlayButtonState(false);
    if (progressFill) progressFill.style.width = '0%';
  });
}

if (progressTrack && video) {
  progressTrack.addEventListener('click', (e) => {
    const rect = progressTrack.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (video.duration) {
      video.currentTime = pos * video.duration;
    }
  });
}

if (ctrlMute && video) {
  ctrlMute.addEventListener('click', () => {
    video.muted = !video.muted;
    ctrlMute.innerHTML = video.muted
      ? '<i data-lucide="volume-x" class="w-4 h-4"></i>'
      : '<i data-lucide="volume-2" class="w-4 h-4"></i>';
    refreshIcons();
  });
}

if (ctrlFullscreen) {
  ctrlFullscreen.addEventListener('click', () => {
    const frame = document.getElementById('videoFrame');
    if (!frame) return;
    if (!document.fullscreenElement) {
      frame.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  });
}

// Fallback voice playback animation if local MP4 is absent
function simulateVideoPlayback() {
  if (overlay) {
    const tLine = overlay.querySelector('.transcript-line');
    const tRes = overlay.querySelector('.transcript-result');
    if (tLine && tRes) {
      tLine.textContent = 'صوتی اندراج: "حماد کے نام 2000 روپے ادھار لکھو"...';
      tRes.textContent = 'پروسیسنگ جاری ہے...';
      setTimeout(() => {
        tLine.textContent = 'ٹھیک ہے، حماد کے کھاتے میں 2000 روپے درج ہو گئے۔';
        tRes.textContent = 'کل بقایا ادھار: Rs. 27,000';
      }, 2000);
    }
  }
}

// --- FAQ Accordion ---
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const questionBtn = item.querySelector('.faq-question');
  if (questionBtn) {
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach((i) => {
        i.classList.remove('active');
        const chevron = i.querySelector('.faq-chevron');
        if (chevron) chevron.classList.remove('rotate-180');
      });

      if (!isActive) {
        item.classList.add('active');
        const chevron = item.querySelector('.faq-chevron');
        if (chevron) chevron.classList.add('rotate-180');
      }
    });
  }
});

// --- Download APK Trigger & Toast Notification ---
const APK_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1cSu6zdQlEwOfCWcl_FoPNSZ2t7KN89Js';
const toast = document.getElementById('downloadToast');

function triggerDownload(e) {
  if (e) e.preventDefault();
  
  if (toast) {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  window.open(APK_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
}

const heroDownloadBtn = document.getElementById('heroDownloadBtn');
const footerDownloadBtn = document.getElementById('footerDownloadBtn');
if (heroDownloadBtn) heroDownloadBtn.addEventListener('click', triggerDownload);
if (footerDownloadBtn) footerDownloadBtn.addEventListener('click', triggerDownload);
