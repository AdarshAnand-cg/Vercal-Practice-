/**
 * ============================================================================
 * HAPPY BIRTHDAY DIDI (NAMRATA PRIYA THAKUR)
 * Premium Interactive Celebration Engine
 * Vanilla JavaScript (ES2022) - Zero External Dependencies
 * ============================================================================
 */

/* 1. EASY CUSTOMIZATION CONFIGURATION */
const birthdayConfig = {
  sisterName: "Didi",
  fullName: "Namrata Priya Thakur",
  nickname: "Didi",
  birthDate: "2000-10-20", // YYYY-MM-DD
  photo: "sister-photo.jpg",
  music: "birthday-music.mp3",
  brotherSignature: "Made with ❤️ by your brother"
};

/* 2. HEARTFELT LETTER CHAPTERS DATA */
const letterChapters = {
  memories: {
    title: "🌸 Cherished Childhood Memories",
    paragraphs: [
      "Dearest Didi, thinking back to our earliest days together always brings the fondest smile to my face. From silly childhood squabbles over the TV remote to sharing sweets behind everyone's backs, you were always my partner in every joyful adventure.",
      "You were never just an older sister—you were my shield, my defender, and my playmate. Even when I caused trouble or broke things, you took the blame with that gentle, forgiving smile of yours that I will never forget.",
      "Growing up under your care made my childhood so wonderfully colorful. Thank you for filling every single day of our youth with laughter, warmth, and magical memories that I will treasure forever."
    ]
  },
  guidance: {
    title: "🌟 Your Guidance, Wisdom & Grace",
    paragraphs: [
      "Whenever life felt confusing or challenging, your words were always my guiding lighthouse. You possess a unique gift of listening without judging and advising with profound wisdom and empathy.",
      "Watching you navigate life with dignity, kindness, and incredible resilience has set the benchmark for who I strive to be. You taught me the value of integrity, humility, and always standing tall in what is right.",
      "No matter how big the world gets, I always know I can turn to you for the purest advice and the warmest hug. You inspire me every single day, Didi."
    ]
  },
  wishes: {
    title: "🕊️ Prayers & Birthday Wishes For You",
    paragraphs: [
      "On this milestone 20th of October, my heart overflows with prayers for your absolute happiness, radiant health, peace of mind, and limitless success.",
      "May every goal you have quietly whispered into your heart unfold into a glorious reality. May your professional journey shine with achievements, and may your days be blessed with laughter, good health, and wonderful companions.",
      "You deserve the highest joy this universe has to offer. Never stop believing in your brilliance, because the world is so much brighter with you in it."
    ]
  },
  promise: {
    title: "🤝 A Brother’s Unbreakable Promise",
    paragraphs: [
      "Here is my sacred promise to you today and always: no matter how tall I grow, how old we become, or how busy life gets, your younger brother will always stand right by your side.",
      "Whenever you need someone to listen, celebrate with you, or defend you, I will be there. You will never have to face any storm alone.",
      "Happy Birthday, Didi! I am eternally proud, honored, and thankful to call you my sister. Here’s to a spectacular year ahead! ❤️"
    ]
  }
};

/* 3. SISTER'S WISH JAR QUOTES */
const wishJarQuotes = [
  "“You are the anchor of our family and the brightest smile in every room!”",
  "“May your year ahead be as graceful, beautiful, and inspiring as your kind soul.”",
  "“You don't just celebrate a birthday—you celebrate another year of making everyone's lives better.”",
  "“A sister is a gift to the heart, a friend to the spirit, a golden thread to the meaning of life.”",
  "“Wishing my incredible Didi endless joy, grand achievements, and deep inner peace!”",
  "“To the queen of our hearts: May your courage and grace open every door of triumph!”",
  "“Thank you for being the patient listener, the wise mentor, and the best sister on earth.”"
];

/* 4. WEB AUDIO SYNTHESIZER (Guaranteed Offline Audio Fallback) */
class AudioCelebrationEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingSynthesized = false;
    this.synthInterval = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChime(freq = 523.25, duration = 0.4) {
    this.initContext();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playFanfare() {
    this.initContext();
    const notes = [
      { f: 523.25, d: 0.15, delay: 0 },
      { f: 659.25, d: 0.15, delay: 150 },
      { f: 783.99, d: 0.25, delay: 300 },
      { f: 1046.50, d: 0.5, delay: 500 }
    ];
    notes.forEach(n => {
      setTimeout(() => this.playChime(n.f, n.d), n.delay);
    });
  }

  toggleSynthesizedMelody() {
    if (this.isPlayingSynthesized) {
      this.stopSynthesizedMelody();
      return false;
    }
    this.initContext();
    this.isPlayingSynthesized = true;
    const melodyNotes = [261.63, 261.63, 293.66, 261.63, 349.23, 329.63, 261.63, 261.63, 293.66, 261.63, 392.00, 349.23];
    let noteIndex = 0;
    this.synthInterval = setInterval(() => {
      if (!this.isPlayingSynthesized) return;
      this.playChime(melodyNotes[noteIndex], 0.35);
      noteIndex = (noteIndex + 1) % melodyNotes.length;
    }, 450);
    return true;
  }

  stopSynthesizedMelody() {
    this.isPlayingSynthesized = false;
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }
}

const audioEngine = new AudioCelebrationEngine();

/* 5. CANVAS 1: TWINKLING STARS & SHOOTING STARS ENGINE */
class StarsEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.stars = [];
    this.shootingStars = [];
    this.count = 140;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.init();
  }

  init() {
    this.resize();
    this.stars = [];
    for (let i = 0; i < this.count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        speedY: Math.random() * 0.15 + 0.05
      });
    }
  }

  spawnShootingStar() {
    this.shootingStars.push({
      x: Math.random() * (this.width * 0.7),
      y: Math.random() * (this.height * 0.4),
      length: Math.random() * 90 + 60,
      speed: Math.random() * 12 + 10,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      opacity: 1
    });
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw twinkling stars
    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];
      s.alpha += s.twinkleSpeed;
      if (s.alpha > 1 || s.alpha < 0.15) {
        s.twinkleSpeed = -s.twinkleSpeed;
      }
      s.y -= s.speedY;
      if (s.y < 0) s.y = this.height;

      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, s.alpha))})`;
      this.ctx.shadowBlur = 4;
      this.ctx.shadowColor = '#fbcfe8';
      this.ctx.fill();
    }

    // Draw shooting stars
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const ss = this.shootingStars[i];
      const tailX = ss.x - Math.cos(ss.angle) * ss.length;
      const tailY = ss.y - Math.sin(ss.angle) * ss.length;

      const grad = this.ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
      grad.addColorStop(0.3, `rgba(251, 191, 36, ${ss.opacity * 0.8})`);
      grad.addColorStop(1, 'rgba(244, 63, 94, 0)');

      this.ctx.beginPath();
      this.ctx.moveTo(ss.x, ss.y);
      this.ctx.lineTo(tailX, tailY);
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.opacity -= 0.02;

      if (ss.opacity <= 0 || ss.x > this.width + 100 || ss.y > this.height + 100) {
        this.shootingStars.splice(i, 1);
      }
    }
  }
}

/* 6. CANVAS 2: CONTINUOUS FIREWORKS ENGINE */
class FireworksEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.rockets = [];
    this.particles = [];
    this.colors = ['#f43f5e', '#fb7185', '#fbbf24', '#fef08a', '#a855f7', '#38bdf8', '#34d399'];
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.resize();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  launch(targetX = null, targetY = null) {
    const startX = Math.random() * (this.width * 0.8) + this.width * 0.1;
    const startY = this.height;
    const destX = targetX !== null ? targetX : Math.random() * (this.width * 0.7) + this.width * 0.15;
    const destY = targetY !== null ? targetY : Math.random() * (this.height * 0.45) + 60;
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];

    const angle = Math.atan2(destY - startY, destX - startX);
    const speed = 12 + Math.random() * 4;

    this.rockets.push({
      x: startX,
      y: startY,
      targetX: destX,
      targetY: destY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color,
      trail: []
    });
  }

  explode(x, y, color) {
    const particleCount = 45 + Math.floor(Math.random() * 30);
    audioEngine.playChime(600 + Math.random() * 400, 0.15);

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 / particleCount) * i + (Math.random() * 0.2);
      const speed = Math.random() * 5 + 1.5;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        decay: Math.random() * 0.02 + 0.012,
        color,
        size: Math.random() * 2.5 + 1.2
      });
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update & draw rockets
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 5) r.trail.shift();

      r.x += r.vx;
      r.y += r.vy;

      // Draw rocket trail
      this.ctx.beginPath();
      this.ctx.moveTo(r.x, r.y);
      for (let t of r.trail) {
        this.ctx.lineTo(t.x, t.y);
      }
      this.ctx.strokeStyle = r.color;
      this.ctx.lineWidth = 2.5;
      this.ctx.stroke();

      // Check detonation
      const dist = Math.hypot(r.x - r.targetX, r.y - r.targetY);
      if (dist < 15 || r.y <= r.targetY) {
        this.explode(r.targetX, r.targetY, r.color);
        this.rockets.splice(i, 1);
      }
    }

    // Update & draw particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08; // subtle gravity
      p.vx *= 0.98; // air drag
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.shadowBlur = 6;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
      this.ctx.shadowBlur = 0;
    }
  }
}

/* 7. CANVAS 3: CONTINUOUS CONFETTI ENGINE */
class ConfettiEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.pieces = [];
    this.colors = ['#f43f5e', '#fb7185', '#fbbf24', '#fef08a', '#c084fc', '#38bdf8', '#34d399', '#ffffff'];
    this.shapes = ['rect', 'circle', 'heart'];
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.resize();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  burst(count = 60, originX = null, originY = null) {
    const x = originX !== null ? originX : this.width / 2;
    const y = originY !== null ? originY : this.height * 0.35;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      this.pieces.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: Math.random() * 7 + 4,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        shape: this.shapes[Math.floor(Math.random() * this.shapes.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        alpha: 1,
        decay: Math.random() * 0.008 + 0.005
      });
    }
  }

  shower(count = 12) {
    for (let i = 0; i < count; i++) {
      this.pieces.push({
        x: Math.random() * this.width,
        y: -20,
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * 2.2 + 1.2,
        size: Math.random() * 7 + 4,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        shape: this.shapes[Math.floor(Math.random() * this.shapes.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 6,
        alpha: 1,
        decay: 0.0025
      });
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = this.pieces.length - 1; i >= 0; i--) {
      const p = this.pieces[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1; // gravity
      p.vx *= 0.99;
      p.rotation += p.rotationSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > this.height + 30) {
        this.pieces.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0, p.alpha);

      if (p.shape === 'rect') {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
      } else if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // heart shape
        this.ctx.beginPath();
        const topCurveHeight = p.size * 0.3;
        this.ctx.moveTo(0, topCurveHeight);
        this.ctx.bezierCurveTo(0, 0, -p.size / 2, 0, -p.size / 2, topCurveHeight);
        this.ctx.bezierCurveTo(-p.size / 2, (p.size + topCurveHeight) / 2, 0, (p.size + topCurveHeight) / 2, 0, p.size);
        this.ctx.bezierCurveTo(0, (p.size + topCurveHeight) / 2, p.size / 2, (p.size + topCurveHeight) / 2, p.size / 2, topCurveHeight);
        this.ctx.bezierCurveTo(p.size / 2, 0, 0, 0, 0, topCurveHeight);
        this.ctx.fill();
      }

      this.ctx.restore();
    }
  }
}

/* 8. CONTINUOUS FLOATING BALLOONS, BUBBLES & HEARTS BUILDER */
function initContinuousFloatingElements() {
  const balloonLayer = document.getElementById('balloon-layer');
  const bubbleLayer = document.getElementById('bubble-layer');
  const heartsLayer = document.getElementById('hearts-layer');

  if (balloonLayer) {
    for (let i = 0; i < 8; i++) {
      createBalloon(balloonLayer);
    }
    setInterval(() => {
      if (document.hidden) return;
      createBalloon(balloonLayer);
    }, 2800);
  }

  if (bubbleLayer) {
    for (let i = 0; i < 18; i++) {
      createBubble(bubbleLayer);
    }
    setInterval(() => {
      if (document.hidden) return;
      createBubble(bubbleLayer);
    }, 2200);
  }

  if (heartsLayer) {
    for (let i = 0; i < 14; i++) {
      createHeart(heartsLayer);
    }
    setInterval(() => {
      if (document.hidden) return;
      createHeart(heartsLayer);
    }, 2600);
  }
}

function createBalloon(parent) {
  const balloon = document.createElement('div');
  balloon.className = 'floating-balloon';
  const colors = [
    { color: '#f43f5e', glow: 'rgba(244, 63, 94, 0.45)' },
    { color: '#a855f7', glow: 'rgba(168, 85, 247, 0.45)' },
    { color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.45)' },
    { color: '#ec4899', glow: 'rgba(236, 72, 153, 0.45)' },
    { color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.45)' }
  ];
  const choice = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.floor(Math.random() * 22 + 40);
  const left = Math.random() * 92;
  const duration = Math.random() * 12 + 14;
  const delay = Math.random() * 4;
  const drift = (Math.random() - 0.5) * 80;
  const rot = (Math.random() - 0.5) * 24;

  balloon.style.left = `${left}%`;
  balloon.style.setProperty('--b-size', `${size}px`);
  balloon.style.setProperty('--b-color', choice.color);
  balloon.style.setProperty('--b-glow', choice.glow);
  balloon.style.setProperty('--drift-x', `${drift}px`);
  balloon.style.setProperty('--b-rot', `${rot}deg`);
  balloon.style.animationDuration = `${duration}s`;
  balloon.style.animationDelay = `${delay}s`;

  parent.appendChild(balloon);

  setTimeout(() => {
    if (balloon.parentNode) {
      balloon.parentNode.removeChild(balloon);
    }
  }, (duration + delay) * 1000);
}

function createBubble(parent) {
  const bubble = document.createElement('div');
  bubble.className = 'floating-bubble';
  const size = Math.floor(Math.random() * 28 + 14);
  const left = Math.random() * 95;
  const duration = Math.random() * 12 + 10;
  const delay = Math.random() * 6;
  const drift = (Math.random() - 0.5) * 60;

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${left}%`;
  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `${delay}s`;
  bubble.style.setProperty('--drift-x', `${drift}px`);

  parent.appendChild(bubble);

  setTimeout(() => {
    if (bubble.parentNode) {
      bubble.parentNode.removeChild(bubble);
    }
  }, (duration + delay) * 1000);
}

function createHeart(parent) {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  const symbols = ['❤️', '💖', '✨', '💕', '🌸', '👑'];
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  const size = Math.floor(Math.random() * 16 + 18);
  const left = Math.random() * 94;
  const duration = Math.random() * 14 + 12;
  const delay = Math.random() * 5;
  const drift = (Math.random() - 0.5) * 80;

  heart.style.left = `${left}%`;
  heart.style.setProperty('--heart-size', `${size}px`);
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.setProperty('--heart-drift', `${drift}px`);

  parent.appendChild(heart);

  setTimeout(() => {
    if (heart.parentNode) {
      heart.parentNode.removeChild(heart);
    }
  }, (duration + delay) * 1000);
}

/* 9. INTERACTIVE CLICK SPARKLE BURST */
function initClickSparkles() {
  document.addEventListener('pointerdown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    for (let i = 0; i < 7; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'click-sparkle';
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 45 + 15;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;
      const colors = ['#f43f5e', '#fbbf24', '#fef08a', '#c084fc', '#38bdf8'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;
      sparkle.style.backgroundColor = color;
      sparkle.style.boxShadow = `0 0 8px ${color}`;
      sparkle.style.setProperty('--dx', `${dx}px`);
      sparkle.style.setProperty('--dy', `${dy}px`);

      document.body.appendChild(sparkle);

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 800);
    }
  });
}

/* 10. 3D CARD PERSPECTIVE MOUSE EFFECT */
function init3DCardParallax() {
  const card = document.getElementById('main-birthday-card');
  const glare = document.getElementById('card-glare');
  if (!card) return;

  let isHovered = false;

  card.addEventListener('pointerenter', () => {
    isHovered = true;
  });

  card.addEventListener('pointerleave', () => {
    isHovered = false;
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    if (glare) {
      glare.style.setProperty('--mouse-x', '50%');
      glare.style.setProperty('--mouse-y', '50%');
    }
  });

  window.addEventListener('pointermove', (e) => {
    if (!isHovered) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg
    const rotateY = ((x - centerX) / centerX) * 9;

    card.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

    if (glare) {
      const percX = Math.round((x / rect.width) * 100);
      const percY = Math.round((y / rect.height) * 100);
      glare.style.setProperty('--mouse-x', `${percX}%`);
      glare.style.setProperty('--mouse-y', `${percY}%`);
    }
  });
}

/* 11. INTERACTIVE BIRTHDAY CAKE WITH CANDLE BLOW */
function initBirthdayCake(fireworksEngine, confettiEngine) {
  const cake = document.getElementById('interactive-cake');
  const flame = document.getElementById('candle-flame');
  const smoke = document.getElementById('candle-smoke');
  const blowBtn = document.getElementById('btn-blow-candle');
  const blowIcon = document.getElementById('blow-btn-icon');
  const blowText = document.getElementById('blow-btn-text');
  const statusMsg = document.getElementById('cake-status-msg');

  if (!cake || !flame) return;

  let isLit = true;
  let relightTimer = null;

  function toggleCandle() {
    if (isLit) {
      isLit = false;
      flame.classList.add('blown-out');
      if (smoke) {
        smoke.classList.remove('smoking');
        void smoke.offsetWidth;
        smoke.classList.add('smoking');
      }

      if (blowIcon) blowIcon.textContent = '✨';
      if (blowText) blowText.textContent = 'Wish Made! Relight Candle';
      if (statusMsg) {
        statusMsg.textContent = '🎉 Your wish has been sent to the stars! Confetti time!';
        statusMsg.style.color = '#fbbf24';
      }

      audioEngine.playFanfare();
      confettiEngine.burst(80);
      fireworksEngine.launch();
      fireworksEngine.launch();

      clearTimeout(relightTimer);
      relightTimer = setTimeout(() => {
        if (!isLit) {
          relightCandle();
        }
      }, 6000);
    } else {
      relightCandle();
    }
  }

  function relightCandle() {
    isLit = true;
    flame.classList.remove('blown-out');
    if (smoke) smoke.classList.remove('smoking');
    if (blowIcon) blowIcon.textContent = '🕯️';
    if (blowText) blowText.textContent = 'Make a Wish & Blow Candle';
    if (statusMsg) {
      statusMsg.textContent = 'Candle relit! Ready for your next magical wish!';
      statusMsg.style.color = '#e2d9f3';
    }
    audioEngine.playChime(784, 0.25);
  }

  cake.addEventListener('click', toggleCandle);
  cake.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCandle();
    }
  });

  if (blowBtn) {
    blowBtn.addEventListener('click', toggleCandle);
  }
}

/* 12. DYNAMIC AGE & MILESTONE CALCULATOR */
function initAgeCalculator() {
  const ageDisplay = document.getElementById('stat-age-years');
  const daysDisplay = document.getElementById('stat-days-lived');

  const birthDate = new Date(birthdayConfig.birthDate + 'T00:00:00');
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    years--;
  }

  if (ageDisplay) {
    ageDisplay.textContent = years.toString();
  }

  const diffTime = Math.abs(today - birthDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (daysDisplay) {
    daysDisplay.textContent = diffDays.toLocaleString() + '+';
  }
}

/* 13. PHOTO CUSTOMIZER / PREVIEW */
function initPhotoSection() {
  const fileInput = document.getElementById('photo-file-input');
  const customImg = document.getElementById('sister-custom-img');
  const placeholder = document.getElementById('photo-placeholder');
  const filterBtn = document.getElementById('btn-toggle-frame-filter');
  const photoBox = document.getElementById('photo-display-box');

  if (customImg && placeholder && birthdayConfig.photo) {
    const testImg = new Image();
    testImg.src = birthdayConfig.photo;
    testImg.onload = () => {
      customImg.src = birthdayConfig.photo;
      customImg.classList.remove('hidden');
      placeholder.classList.add('hidden');
    };
    testImg.onerror = () => {
      customImg.classList.add('hidden');
      placeholder.classList.remove('hidden');
    };
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file && customImg && placeholder) {
        const reader = new FileReader();
        reader.onload = (event) => {
          customImg.src = event.target.result;
          customImg.classList.remove('hidden');
          placeholder.classList.add('hidden');
          audioEngine.playChime(659, 0.2);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (filterBtn && photoBox) {
    let glowModes = ['glow-magenta', 'glow-gold', 'glow-violet'];
    let currentModeIndex = 0;
    filterBtn.addEventListener('click', () => {
      currentModeIndex = (currentModeIndex + 1) % glowModes.length;
      if (currentModeIndex === 0) {
        photoBox.style.boxShadow = '0 0 35px rgba(244, 63, 94, 0.55)';
      } else if (currentModeIndex === 1) {
        photoBox.style.boxShadow = '0 0 45px rgba(251, 191, 36, 0.65)';
      } else {
        photoBox.style.boxShadow = '0 0 45px rgba(168, 85, 247, 0.65)';
      }
      audioEngine.playChime(523, 0.15);
    });
  }
}

/* 14. INTERACTIVE LETTER TABS */
function initLetterTabs() {
  const tabs = [
    { btn: document.getElementById('tab-btn-memories'), key: 'memories' },
    { btn: document.getElementById('tab-btn-guidance'), key: 'guidance' },
    { btn: document.getElementById('tab-btn-wishes'), key: 'wishes' },
    { btn: document.getElementById('tab-btn-promise'), key: 'promise' }
  ];

  const letterTopic = document.getElementById('letter-topic');
  const letterBody = document.getElementById('letter-body');

  tabs.forEach(tab => {
    if (!tab.btn) return;
    tab.btn.addEventListener('click', () => {
      tabs.forEach(t => {
        if (t.btn) {
          t.btn.classList.remove('active');
          t.btn.setAttribute('aria-selected', 'false');
        }
      });

      tab.btn.classList.add('active');
      tab.btn.setAttribute('aria-selected', 'true');

      const data = letterChapters[tab.key];
      if (data && letterTopic && letterBody) {
        letterTopic.textContent = data.title;
        letterBody.replaceChildren();

        data.paragraphs.forEach(pText => {
          const p = document.createElement('p');
          p.className = 'letter-paragraph';
          p.textContent = pText;
          letterBody.appendChild(p);
        });

        audioEngine.playChime(440, 0.15);
      }
    });
  });
}

/* 15. SURPRISE BUTTON & MODAL */
function initSurpriseFeature(fireworksEngine, confettiEngine) {
  const surpriseBtn = document.getElementById('btn-surprise');
  const surpriseModal = document.getElementById('surprise-modal');
  const closeModalBtn = document.getElementById('btn-close-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const wishJarOutput = document.getElementById('wish-jar-output');
  const pullWishBtn = document.getElementById('btn-pull-wish');

  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', () => {
      if (surpriseModal) {
        surpriseModal.classList.remove('hidden');
      }

      audioEngine.playFanfare();

      for (let i = 0; i < 5; i++) {
        setTimeout(() => fireworksEngine.launch(), i * 350);
      }
      confettiEngine.burst(120);
    });
  }

  function closeModal() {
    if (surpriseModal) {
      surpriseModal.classList.add('hidden');
    }
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && surpriseModal && !surpriseModal.classList.contains('hidden')) {
      closeModal();
    }
  });

  if (pullWishBtn && wishJarOutput) {
    let quoteIndex = 0;
    pullWishBtn.addEventListener('click', () => {
      quoteIndex = (quoteIndex + 1) % wishJarQuotes.length;
      wishJarOutput.style.opacity = '0';
      setTimeout(() => {
        wishJarOutput.textContent = wishJarQuotes[quoteIndex];
        wishJarOutput.style.opacity = '1';
        confettiEngine.burst(30);
        audioEngine.playChime(698, 0.2);
      }, 200);
    });
  }
}

/* 16. MUSIC PLAYER & CONTROLS */
function initMusicControls() {
  const audio = document.getElementById('birthday-audio');
  const toggleBtn = document.getElementById('btn-music-toggle');
  const label = document.getElementById('music-btn-label');

  if (!toggleBtn) return;

  let isPlaying = false;

  toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      if (audio) {
        audio.play().then(() => {
          isPlaying = true;
          updateMusicUI(true);
        }).catch(() => {
          audioEngine.toggleSynthesizedMelody();
          isPlaying = true;
          updateMusicUI(true);
        });
      } else {
        audioEngine.toggleSynthesizedMelody();
        isPlaying = true;
        updateMusicUI(true);
      }
    } else {
      if (audio) audio.pause();
      audioEngine.stopSynthesizedMelody();
      isPlaying = false;
      updateMusicUI(false);
    }
  });

  function updateMusicUI(active) {
    if (active) {
      toggleBtn.classList.add('playing');
      if (label) label.textContent = 'Pause Music';
    } else {
      toggleBtn.classList.remove('playing');
      if (label) label.textContent = 'Play Music';
    }
  }
}

/* 17. CINEMATIC INTRO OVERLAY & REPLAY */
function initCinematicIntro(fireworksEngine, confettiEngine) {
  const overlay = document.getElementById('intro-overlay');
  const enterBtn = document.getElementById('btn-enter-celebration');
  const replayBtn = document.getElementById('btn-replay-intro');

  function enterCelebration() {
    if (overlay) {
      overlay.classList.add('dismissed');
    }
    audioEngine.playFanfare();
    confettiEngine.burst(90);
    fireworksEngine.launch();
    fireworksEngine.launch();
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', enterCelebration);
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      if (overlay) {
        overlay.classList.remove('dismissed');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        confettiEngine.shower(20);
        fireworksEngine.launch();
      }
    });
  }

  setTimeout(() => {
    if (overlay && !overlay.classList.contains('dismissed')) {
      fireworksEngine.launch();
    }
  }, 1200);

  setTimeout(() => {
    if (overlay && !overlay.classList.contains('dismissed')) {
      fireworksEngine.launch();
      confettiEngine.shower(25);
    }
  }, 2600);
}

/* 18. SCROLL REVEAL (IntersectionObserver) */
function initScrollObserver() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('revealed'));
  }
}

/* 19. POPULATE CONFIGURATION STRINGS */
function applyConfig() {
  const sisterNameDisplay = document.getElementById('sister-name-display');
  if (sisterNameDisplay) {
    sisterNameDisplay.textContent = birthdayConfig.nickname || birthdayConfig.sisterName;
  }

  const introName = document.getElementById('intro-name');
  if (introName) {
    introName.textContent = birthdayConfig.fullName;
  }

  const captionName = document.getElementById('photo-caption-name');
  if (captionName) {
    captionName.textContent = `${birthdayConfig.fullName} (${birthdayConfig.nickname})`;
  }

  const sig = document.getElementById('footer-made-by');
  if (sig && birthdayConfig.brotherSignature) {
    sig.textContent = birthdayConfig.brotherSignature;
  }
}

/* 20. MASTER INITIALIZATION ON DOM READY */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();

  // Canvases
  const starsCanvas = document.getElementById('stars-canvas');
  const fireworksCanvas = document.getElementById('fireworks-canvas');
  const confettiCanvas = document.getElementById('confetti-canvas');

  const starsEngine = starsCanvas ? new StarsEngine(starsCanvas) : null;
  const fireworksEngine = fireworksCanvas ? new FireworksEngine(fireworksCanvas) : null;
  const confettiEngine = confettiCanvas ? new ConfettiEngine(confettiCanvas) : null;

  window.addEventListener('resize', () => {
    if (starsEngine) starsEngine.resize();
    if (fireworksEngine) fireworksEngine.resize();
    if (confettiEngine) confettiEngine.resize();
  });

  // Master continuous 60fps animation loop
  function mainAnimationLoop() {
    if (starsEngine) starsEngine.draw();
    if (fireworksEngine) fireworksEngine.update();
    if (confettiEngine) confettiEngine.update();
    requestAnimationFrame(mainAnimationLoop);
  }
  requestAnimationFrame(mainAnimationLoop);

  // Continuous shooting star streaks every 3.5 seconds
  setInterval(() => {
    if (document.hidden) return;
    if (starsEngine) {
      starsEngine.spawnShootingStar();
    }
  }, 3500);

  // Continuous automatic fireworks every 4.2 seconds
  setInterval(() => {
    if (document.hidden) return;
    if (fireworksEngine) {
      fireworksEngine.launch();
    }
  }, 4200);

  // Continuous celebratory confetti rain every 5.5 seconds
  setInterval(() => {
    if (document.hidden) return;
    if (confettiEngine) {
      confettiEngine.shower(14);
    }
  }, 5500);

  // Continuous floating elements, sparkles & 3D tilt
  initContinuousFloatingElements();
  initClickSparkles();
  init3DCardParallax();
  initBirthdayCake(fireworksEngine, confettiEngine);
  initAgeCalculator();
  initPhotoSection();
  initLetterTabs();
  initSurpriseFeature(fireworksEngine, confettiEngine);
  initMusicControls();
  initCinematicIntro(fireworksEngine, confettiEngine);
  initScrollObserver();
});
