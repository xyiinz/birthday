// Global Variables
const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('overlay');
const bgMusic = document.getElementById('bg-music');

startBtn.addEventListener('click', () => {
    // Tambahkan efek zoom out sedikit sebelum hilang
    overlay.style.transform = 'scale(1.1)';
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        bgMusic.play();
        
        // Munculkan Modal
        const modal = document.getElementById('wish-modal');
        if(modal) modal.style.display = 'flex';
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
    
    await typeWriter('age-display', 'Selamat Ulang Tahun ke-23, Pramesti Regita Cahyani ♡', 80);
}

// Fitur Tiup Lilin (Interaktif)
document.addEventListener('DOMContentLoaded', () => {
    const flame = document.getElementById('flame');
    const cakeArea = document.getElementById('cake-area');
    const instruction = document.getElementById('cake-instruction');

    if (cakeArea) {
        cakeArea.addEventListener('click', () => {
            if (flame && !flame.classList.contains('extinguished')) {
                flame.style.display = 'none'; 
                flame.classList.add('extinguished');
                
                instruction.innerHTML = "✨ Yeay! Semoga semua doa Regita dikabulkan semesta! ✨";
                instruction.style.color = "#d81b60";
                instruction.style.fontSize = "1.2rem";
                
                // Hujan cinta & bintang
                for(let i = 0; i < 50; i++) {
                    setTimeout(createLoveDrop, i * 60);
                }
            }
        });
    }
});

function createLoveDrop() {
    const heart = document.createElement('div');
    const items = ['❤️', '💖', '✨', '🌸', '🎂', '🎉'];
    heart.innerHTML = items[Math.floor(Math.random() * items.length)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.zIndex = '9999';
    heart.style.pointerEvents = 'none';
    heart.style.transition = `transform ${Math.random() * 2 + 3}s linear, opacity 2s`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
    }, 100);
    
    setTimeout(() => heart.remove(), 5000);
}

// Reveal Note Logic
function revealNote(element, message) {
    if (!element.classList.contains('revealed')) {
        element.style.transform = "scale(0)";
        setTimeout(() => {
            element.classList.add('revealed');
            element.innerHTML = message;
            element.style.transform = "scale(1)";
        }, 300);
        createHeartBlast(element);
    }
}

function createHeartBlast(el) {
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '🌸';
        heart.style.position = 'absolute';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.transition = 'all 0.8s ease-out';
        el.appendChild(heart);

        const x = (Math.random() - 0.5) * 150;
        const y = (Math.random() - 0.5) * 150;

        setTimeout(() => {
            heart.style.transform = `translate(${x}px, ${y}px)`;
            heart.style.opacity = '0';
        }, 10);
        setTimeout(() => heart.remove(), 8000);
    }
}

// Countdown
setInterval(() => {
    const nextBirthday = new Date('February 17, 2027 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = nextBirthday - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('countdown').innerHTML = `<div>${d}d</div> : <div>${h}h</div> : <div>${m}m</div> : <div>${s}s</div>`;
}, 1000);

// Bubbles
setInterval(() => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.width = bubble.style.height = Math.random() * 20 + 10 + "px";
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.position = 'fixed';
    bubble.style.bottom = '-10px';
    bubble.style.borderRadius = '50%';
    bubble.style.background = 'rgba(255, 182, 197, 0.4)';
    bubble.style.zIndex = '-1';
    bubble.style.animation = `rise ${Math.random() * 5 + 5}s linear forwards`;
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 8000);
}, 400);

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Kecepatan berbeda untuk setiap item (Parallax)
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
    const p3 = document.querySelector('.p3');
    const p4 = document.querySelector('.p4');
    const p5 = document.querySelector('.p5');
    const p6 = document.querySelector('.p6');

    if(p1) p1.style.transform = `translateY(${scrolled * 0.3}px)`;
    if(p2) p2.style.transform = `translateY(${scrolled * -0.2}px)`;
    if(p3) p3.style.transform = `translateY(${scrolled * 0.15}px)`;
    if(p4) p4.style.transform = `translateY(${scrolled * -0.4}px)`;
    if(p5) p5.style.transform = `translateY(${scrolled * 0.25}px)`;
    if(p6) p6.style.transform = `translateY(${scrolled * -0.1}px)`;
});
// Reset posisi saat mouse keluar dari kartu
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});

// Music Toggle Logic
let isPlaying = false;
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const icon = document.getElementById('music-icon');
    if (isPlaying) {
        music.pause();
        icon.innerHTML = "🔇";
    } else {
        music.play();
        icon.innerHTML = "🎵";
    }
    isPlaying = !isPlaying;
}

// Perbaikan fungsi tiup lilin agar lebih responsif
document.getElementById('cake-area').addEventListener('click', function() {
    const flame = document.getElementById('flame');
    if (flame && !flame.classList.contains('extinguished')) {
        flame.style.opacity = '0';
        flame.classList.add('extinguished');
        
        // Trigger konfeti otomatis
        confettiExplosion();
        
        document.getElementById('cake-instruction').innerHTML = 
            "<span style='color: #ff4d6d; font-size: 1.5rem;'>Wish kamu sudah terbang ke langit! ✨</span>";
    }
});

function confettiExplosion() {
    for(let i=0; i<100; i++) {
        setTimeout(createLoveDrop, i * 20);
    }
}

const modal = document.getElementById('wish-modal');
const closeModal = document.querySelector('.close-modal');

// Modifikasi fungsi startBtn yang sudah ada
startBtn.addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        bgMusic.play();
        
        // Munculkan Pop-up setelah overlay hilang
        modal.style.display = 'flex';
    }, 1000);
});

// Fungsi menutup modal
closeModal.onclick = function() {
    modal.style.display = 'none';
    runIntro(); // Jalankan animasi typewriter setelah modal ditutup
}

// Menutup modal jika klik di luar area box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        runIntro();
    }
}

const nav = document.querySelector('.modern-nav');

nav.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { clientWidth, clientHeight } = nav;
    
    // Memberikan efek miring sedikit mengikuti mouse
    const moveX = (offsetX - clientWidth / 2) / 15;
    const moveY = (offsetY - clientHeight / 2) / 10;
    
    nav.style.transform = `perspective(1000px) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
});

nav.addEventListener('mouseleave', () => {
    nav.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.text-content p').forEach(p => observer.observe(p));