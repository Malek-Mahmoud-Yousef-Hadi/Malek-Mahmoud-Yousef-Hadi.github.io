document.addEventListener('DOMContentLoaded', () => {
    // Matrix Effect
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ff41";
        ctx.font = fontSize + "px arial";
        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 33);

    // Decipher Effect for Titles
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
        const originalText = header.innerText;
        header.addEventListener('mouseover', () => {
            let iterations = 0;
            const interval = setInterval(() => {
                header.innerText = originalText.split("").map((letter, index) => {
                    if (index < iterations) return originalText[index];
                    return letters[Math.floor(Math.random() * 26)];
                }).join("");
                if (iterations >= originalText.length) clearInterval(interval);
                iterations += 1 / 3;
            }, 30);
        });
    });

    // Add a typing effect to certain elements
    const elements = document.querySelectorAll('.content-box p');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.transition = 'opacity 2s';
            el.style.opacity = '1';
        }, index * 500);
    });

    // Hacker Console Logs
    const consoleEl = document.getElementById('hacker-console');
    const logs = [
        "Initializing scan...",
        "Target: 192.168.1.104",
        "Bypassing firewall...",
        "Accessing kernel...",
        "Buffer overflow detected",
        "Ghost operator active",
        "Encryption: AES-256",
        "Deciphering BSc Degree...",
        "Tracing network path...",
        "SOC Alert: Tier 3 response"
    ];
    setInterval(() => {
        const p = document.createElement('p');
        p.innerText = `> ${logs[Math.floor(Math.random() * logs.length)]}`;
        consoleEl.appendChild(p);
        if (consoleEl.childNodes.length > 8) consoleEl.removeChild(consoleEl.firstChild);
    }, 2000);

    // Cursor Trail
    document.addEventListener('mousemove', (e) => {
        const trail = document.getElementById('cursor-trail');
        if (trail) {
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
        }
    });

    // Smooth scroll
    document.querySelectorAll('.side-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lightbox Logic
    const lightbox = document.getElementById('cert-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxPdf = document.getElementById('lightbox-pdf');
    const closeBtn = document.querySelector('.close-lightbox');

    document.querySelectorAll('.view-cert-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const src = btn.getAttribute('data-src');
            const type = btn.getAttribute('data-type').toLowerCase();

            if (type === 'png') {
                lightboxImg.src = src;
                lightboxImg.style.display = 'block';
                lightboxPdf.style.display = 'none';
            } else if (type === 'pdf') {
                lightboxPdf.src = src;
                lightboxPdf.style.display = 'block';
                lightboxImg.style.display = 'none';
            }

            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        lightboxPdf.src = '';
        document.body.style.overflow = 'auto';
    });

    // Close on click outside content
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeBtn.click();
        }
    });

    console.log("Ghost system active...");
});
