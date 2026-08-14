document.addEventListener('DOMContentLoaded', () => {
    // Matrix Effect
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas ? canvas.getContext('2d') : null;
    if (canvas && ctx) {
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
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // Decipher Effect for Titles
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
        const originalText = header.innerText;
        header.addEventListener('mouseover', () => {
            let iterations = 0;
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
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
    if (consoleEl) {
        setInterval(() => {
            const p = document.createElement('p');
            p.innerText = `> ${logs[Math.floor(Math.random() * logs.length)]}`;
            consoleEl.appendChild(p);
            if (consoleEl.childNodes.length > 8) consoleEl.removeChild(consoleEl.firstChild);
        }, 2000);
    }

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
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- STATIC CONTENT INJECTION ---
    
    function renderCerts(containerId, fileList, folder) {
        const container = document.getElementById(containerId);
        if (!container || !Array.isArray(fileList)) return;

        // Group files by name to handle PDF/PNG pairs
        const groups = {};
        fileList.forEach(file => {
            const name = file.substring(0, file.lastIndexOf('.'));
            const ext = file.substring(file.lastIndexOf('.') + 1).toLowerCase();
            if (!groups[name]) groups[name] = {};
            groups[name][ext] = file;
        });

        Object.keys(groups).forEach(name => {
            const group = groups[name];
            const isPdf = !!group.pdf;
            const isPng = !!group.png || !!group.jpg || !!group.jpeg;
            const mainFile = isPdf ? group.pdf : (group.png || group.jpg || group.jpeg);
            if (!mainFile) return;

            const type = isPdf ? 'pdf' : 'png';
            const preview = group.png || group.jpg || group.jpeg;

            const card = document.createElement('div');
            card.className = 'cert-card';
            
            let visual = '';
            if (preview) {
                visual = `<img src="${folder}/${preview}" class="cert-preview" alt="Certificate">`;
            } else {
                visual = `
                    <div class="pdf-visual-placeholder">
                        <div class="ghost-badge">SECURE_DOC</div>
                        <div class="ghost-icon-pdf"></div>
                    </div>`;
            }

            card.innerHTML = `
                ${visual}
                <button class="ghost-btn view-cert-btn" data-src="${folder}/${mainFile}" data-type="${type}">[ VIEW ]</button>
            `;
            container.appendChild(card);
        });
    }

    function renderProjects() {
        const container = document.getElementById('projects-list');
        if (!container || !window.MalekConfig || !window.MalekConfig.projects) return;

        window.MalekConfig.projects.forEach(proj => {
            const row = document.createElement('div');
            row.className = 'project-row';
            
            const format = proj.format || 'zip';
            const filePath = `projects/${proj.id}.${format}`;

            row.innerHTML = `
                <span class="proj-name">${proj.name}</span>
                <div class="download-container">
                    ${proj.hasPassword ? '<span class="pass-hint">PASS: infected</span>' : ''}
                    <a href="${filePath}" 
                       class="ghost-btn ${proj.hasPassword ? 'warn-btn' : ''}" 
                       download="${proj.id}.${format}"
                       target="_blank"
                       rel="noopener noreferrer">
                        [ DOWNLOAD_${format.toUpperCase()} ]
                    </a>
                </div>
            `;
            container.appendChild(row);
        });
    }

    function renderWorkExperience() {
        const container = document.getElementById('work-experience-list');
        if (!container || !window.MalekConfig || !Array.isArray(window.MalekConfig.workExperience)) return;

        window.MalekConfig.workExperience.forEach(work => {
            const card = document.createElement('article');
            card.className = 'experience-card';
            const filePath = `work_experience/${work.file}`;

            card.innerHTML = `
                <div class="experience-card-header">
                    <div>
                        <h3 class="experience-title">${work.title}</h3>
                        <p class="experience-role">${work.role}</p>
                    </div>
                    <div class="experience-meta">
                        <span>${work.company}</span>
                        <span>${work.dates} · ${work.duration}</span>
                    </div>
                </div>
                <p class="experience-description">${work.description}</p>
                <a href="${filePath}" 
                   class="ghost-btn download-work-btn" 
                   download="${work.file}"
                   target="_blank"
                   rel="noopener noreferrer">
                    [ download-work ]
                </a>
            `;
            container.appendChild(card);
        });
    }

    // Initialize Renders
    if (typeof MalekConfig !== 'undefined') {
        renderCerts('certs-list', MalekConfig.certificates, 'certs');
        renderCerts('cv-list', MalekConfig.cv, 'cv');
        renderWorkExperience();
        renderProjects();
    }

    // Lightbox Logic (Dynamic delegation)
    const lightbox = document.getElementById('cert-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxPdf = document.getElementById('lightbox-pdf');
    const closeBtn = document.querySelector('.close-lightbox');

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.view-cert-btn');
        if (btn) {
            const src = btn.getAttribute('data-src');
            const type = btn.getAttribute('data-type').toLowerCase();

            if (type === 'png' || type === 'jpg' || type === 'jpeg') {
                lightboxImg.src = src;
                lightboxImg.style.display = 'block';
                lightboxPdf.style.display = 'none';
            } else if (type === 'pdf') {
                lightboxPdf.src = src;
                lightboxPdf.style.display = 'block';
                lightboxImg.style.display = 'none';
            }

            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
            lightboxPdf.src = '';
            document.body.style.overflow = 'auto';
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeBtn.click();
        });
    }
});
