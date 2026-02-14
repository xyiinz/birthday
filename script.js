// Start Experience
const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('overlay');
const bgMusic = document.getElementById('bg-music');

startBtn.addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        bgMusic.play();
        runIntro();
    }, 1000);
});

// Typewriter Function
function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    return new Promise(resolve => {
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

async function runIntro() {
    await typeWriter('date-display', '17 Februari 2026', 100);
    await new Promise(r => setTimeout(r, 500));
    await typeWriter('age-display', 'Selamat Ulang Tahun ke-23, Regita ♡', 80);
}

// Global Bubbles Animation
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 20 + 10 + "px";
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.background = `rgba(255, ${Math.random() * 100 + 100}, ${Math.random() * 100 + 150}, 0.3)`;
    bubble.style.position = 'fixed';
    bubble.style.bottom = '-10px';
    bubble.style.borderRadius = '50%';
    bubble.style.zIndex = '-1';
    bubble.style.animation = `rise ${Math.random() * 5 + 5}s linear forwards`;
    
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 8000);
}

setInterval(createBubble, 300);

// Style rise animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes rise {
    to { transform: translateY(-110vh) translateX(${Math.random() * 50}px); opacity: 0; }
}
`;
document.head.appendChild(style);

// Countdown to Next Birthday (Feb 17, 2027)
function updateCountdown() {
    const nextBirthday = new Date('February 17, 2027 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = nextBirthday - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div>${d}d</div> : <div>${h}h</div> : <div>${m}m</div> : <div>${s}s</div>
    `;
}
setInterval(updateCountdown, 1000);

// Fungsi untuk Reveal Note
function revealNote(element, message) {
    if (!element.classList.contains('revealed')) {
        element.style.transform = "scale(0)";
        setTimeout(() => {
            element.classList.add('revealed');
            element.innerHTML = message;
            element.style.transform = "scale(1)";
        }, 300);
        
        // Tambahkan efek confetti kecil jika mau (opsional)
        createHeartBlast(element);
    }
}

// Efek hati kecil saat klik note
function createHeartBlast(el) {
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = '20px';
        heart.style.transition = 'all 1s ease-out';
        heart.style.pointerEvents = 'none';
        el.appendChild(heart);

        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;

        setTimeout(() => {
            heart.style.transform = `translate(${x}px, ${y}px)`;
            heart.style.opacity = '0';
        }, 10);

        setTimeout(() => heart.remove(), 1000);
    }
}

// Tambahan agar scroll ke section wish lebih halus setelah intro
async function runIntro() {
    await typeWriter('date-display', '17 Februari 2026', 100);
    await new Promise(r => setTimeout(r, 500));
    await typeWriter('age-display', 'Selamat Ulang Tahun ke-23, Pramesti Regita Cahyani ♡', 80);
    
    // Auto scroll halus ke arah Wish setelah 2 detik
    setTimeout(() => {
        document.getElementById('wish').scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}