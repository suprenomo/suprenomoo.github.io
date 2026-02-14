// Configuration - Edit these for your relationship
const CONFIG = {
    // Set your reunion date (Year, Month (0-11), Day, Hour, Minute)
    reunionDate: new Date(2026, 8, 10, 54, 56), // Example: June 14, 2024 at 6:00 PM
    
    
    // Distance in kilometers (optional)
    distance: 70,
    
    // Messages for random selection
    loveMessages: [
        "Cada día te extraño más, pero cada día estamos más cerca.",
        "Eres lo último que pienso antes de dormir y lo primero al despertar.",
        "La distancia es temporal, pero nuestro amor es eterno.",
        "Contando los días para verte sonreír en persona.",
        "Eres mi persona favorita en todo el mundo.",
        "Incluso a miles de kilómetros, siento tu amor cálido.",
        "Nuestro amor es más fuerte que cualquier distancia."
    ]
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeartRain();
    startCountdown();
    initScrollAnimations();
});

// Floating Hearts Animation
function initHeartRain() {
    const container = document.getElementById('hearts-container');
    const heartSymbols = ['❤️', '💖', '💕', '💗', '💝', '💘'];
    
    setInterval(() => {
        if (document.hidden) return; // Don't animate if tab is hidden
        
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 800);
}

// Countdown Timer
function startCountdown() {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = CONFIG.reunionDate.getTime() - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        } else {
            // Reunion time reached!
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            
            if (!window.celebrationShown) {
                showToast('¡Es hora de reunirse! 💕');
                createConfetti();
                window.celebrationShown = true;
            }
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Time Zone Clocks
function updateClocks() {
    const now = new Date();
    
    // Format time
    const formatTime = (date, timeZone) => {
        return new Intl.DateTimeFormat('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: timeZone || undefined
        }).format(date);
    };
    
    // Update time displays
    document.getElementById('time-me').textContent = formatTime(now, CONFIG.myTimeZone);
    document.getElementById('time-you').textContent = formatTime(now, CONFIG.partnerTimeZone);
}

// Interactive Actions
function sendVirtualHug() {
    showToast('¡Abrazo virtual enviado con amor! 🤗');
    createFloatingEmojis('🤗', 10);
    createHeartBurst();
}

function sendKiss() {
    showToast('¡Beso enviado! 💋 Muah😘!');
    createFloatingEmojis('💋', 8);
    createHeartBurst();
}

function showToast(text, seconds = 3) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = text;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, seconds * 3000);
}

function sendMemory() {
    const messages = [
        "Recuerdo cuando nos vimos por primera vez...",
        "No puedo esperar para verte de nuevo",
        "Nuestra próxima aventura está por venir"
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    showToast(randomMsg + ' 💭');
    createFloatingEmojis('📸', 5);
}

function showToast(text, seconds = 3) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = text;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, seconds * 3000);
}

function sendPromise() {
    const promises = [
        "Prometo amarte cada día más",
        "Prometo estar ahí siempre que me necesites",
        "Prometo hacer realidad nuestros sueños juntos",
        "Prometo que valdrá la pena la espera"
    ];
    const randomPromise = promises[Math.floor(Math.random() * promises.length)];
    showToast(randomPromise + ' 🤝');
    createFloatingEmojis('✨', 12);
}

function showToast(text, seconds = 3) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = text;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, seconds * 3000);
}


function playLoveSong() {
    showToast('Reproduciendo nuestra canción... 🎵');
    // Here you could add actual audio playback
    // const audio = new Audio('path-to-song.mp3');
    // audio.play();
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('toast-show');
    
    setTimeout(() => {
        toast.classList.remove('toast-show');
    }, 3000);
}

// Image Modal
function openModal(index) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    const images = [
        { src: 'http://static.photos/couple/1024x576/1', caption: 'Nuestra primera foto juntos - Un día inolvidable' },
        { src: 'http://static.photos/nature/1024x576/2', caption: 'El lugar mágico donde nuestra historia comenzó' },
        { src: 'http://static.photos/travel/1024x576/3', caption: 'Planeando más aventuras juntos' }
    ];
    
    modalImg.src = images[index].src;
    modalCaption.textContent = images[index].caption;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Visual Effects
function createFloatingEmojis(emoji, count) {
    const container = document.getElementById('hearts-container');
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.textContent = emoji;
            el.style.position = 'absolute';
            el.style.left = '50%';
            el.style.top = '50%';
            el.style.fontSize = '30px';
            el.style.pointerEvents = 'none';
            el.style.zIndex = '100';
            el.style.transform = `translate(-50%, -50%)`;
            
            // Random trajectory
            const angle = (Math.random() * Math.PI * 2);
            const velocity = 100 + Math.random() * 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity - 100;
            
            el.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 },
                { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 1, offset: 0.2 },
                { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`, opacity: 0 }
            ], {
                duration: 1500,
                easing: 'ease-out'
            }).onfinish = () => el.remove();
            
            container.appendChild(el);
        }, i * 100);
    }
}

function createHeartBurst() {
    createFloatingEmojis('❤️', 15);
}

function createConfetti() {
    const colors = ['#ef4444', '#ec4899', '#f472b6', '#fb7185', '#fda4af'];
    const container = document.getElementById('hearts-container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('section > div').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    
    toggle.addEventListener('click', () => {
        // Create mobile menu if doesn't exist
        let mobileMenu = document.getElementById('mobile-menu');
        
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.id = 'mobile-menu';
            mobileMenu.className = 'fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden';
            mobileMenu.innerHTML = `
                <button onclick="document.getElementById('mobile-menu').remove()" class="absolute top-4 right-4 text-gray-700">
                    <i data-lucide="x" class="w-8 h-8"></i>
                </button>
                <a href="#inicio" onclick="document.getElementById('mobile-menu').remove()" class="text-2xl font-['Dancing_Script'] text-red-600">Inicio</a>
                <a href="#tiempo" onclick="document.getElementById('mobile-menu').remove()" class="text-2xl font-['Dancing_Script'] text-red-600">Contador</a>
                <a href="#fotos" onclick="document.getElementById('mobile-menu').remove()" class="text-2xl font-['Dancing_Script'] text-red-600">Recuerdos</a>
                <a href="#carta" onclick="document.getElementById('mobile-menu').remove()" class="text-2xl font-['Dancing_Script'] text-red-600">Carta</a>
            `;
            document.body.appendChild(mobileMenu);
            lucide.createIcons();
        } else {
            mobileMenu.remove();
        }
    });
}

// Random Love Quote Rotation
setInterval(() => {
    if (Math.random() > 0.7) { // 30% chance every 10 seconds
        const msg = CONFIG.loveMessages[Math.floor(Math.random() * CONFIG.loveMessages.length)];
        showToast('💭 ' + msg);
    }
}, 10000);

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
    if (e.key === 'h' || e.key === 'H') {
        sendVirtualHug();
    }
    if (e.key === 'k' || e.key === 'K') {
        sendKiss();
    }
});

// Service Worker for offline support (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // You can register a service worker here for PWA capabilities
        console.log('App loaded - ready for offline love! 💕');
    });
}

function playLoveSong() {
  const song = document.getElementById("loveSong");
  song.play();
}

function playLoveSong() {
  const song = document.getElementById("loveSong");

  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}
