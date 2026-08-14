document.addEventListener('DOMContentLoaded', () => {
    // Matrix background
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas ? canvas.getContext('2d') : null;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%';
    const fontSize = 16;
    let drops = [];

    function resizeMatrix() {
        if (!canvas || !ctx) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drops = Array.from({ length: Math.ceil(canvas.width / fontSize) }, () => 1);
    }

    function drawMatrix() {
        if (!canvas || !ctx) return;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff41';
        ctx.font = `${fontSize}px arial`;

        drops.forEach((drop, index) => {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, index * fontSize, drop * fontSize);
            if (drop * fontSize > canvas.height && Math.random() > 0.975) drops[index] = 0;
            drops[index] += 1;
        });
    }

    resizeMatrix();
    window.addEventListener('resize', resizeMatrix);
    window.setInterval(drawMatrix, 33);

    // Decipher effect for section headers
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
        const originalText = header.innerText;
        header.addEventListener('mouseover', () => {
            let iterations = 0;
            const interval = window.setInterval(() => {
                header.innerText = originalText.split('').map((letter, index) => {
                    if (index < iterations) return originalText[index];
                    return letters[Math.floor(Math.random() * 26)];
                }).join('');
                if (iterations >= originalText.length) window.clearInterval(interval);
                iterations += 1 / 3;
            }, 30);
        });
    });

    // Hacker console logs
    const consoleEl = document.getElementById('hacker-console');
    const logs = [
        'Initializing scan...',
        'Target: 192.168.1.104',
        'Bypassing firewall...',
        'Accessing kernel...',
        'Buffer overflow detected',
        'Ghost operator active',
        'Encryption: AES-256',
        'Deciphering professional experience...',
        'Tracing network path...',
        'SOC Alert: Tier 3 response'
    ];

    if (consoleEl) {
        window.setInterval(() => {
            const p = document.createElement('p');
            p.innerText = `> ${logs[Math.floor(Math.random() * logs.length)]}`;
            consoleEl.appendChild(p);
            if (consoleEl.childNodes.length > 8) consoleEl.removeChild(consoleEl.firstChild);
        }, 2000);
    }

    // Cursor trail
    document.addEventListener('mousemove', event => {
        const trail = document.getElementById('cursor-trail');
        if (!trail) return;
        trail.style.left = `${event.clientX}px`;
        trail.style.top = `${event.clientY}px`;
    });

    // Smooth navigation
    document.querySelectorAll('.side-nav a').forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    function getFileExtension(file) {
        const dot = file.lastIndexOf('.');
        return dot === -1 ? '' : file.slice(dot + 1).toLowerCase();
    }

    function getBaseName(file) {
        const dot = file.lastIndexOf('.');
        return dot === -1 ? file : file.slice(0, dot);
    }

    function renderDocumentCards(containerId, fileList, folder) {
        const container = document.getElementById(containerId);
        if (!container || !Array.isArray(fileList)) return;

        const groups = {};
        fileList.forEach(file => {
            const name = getBaseName(file);
            const ext = getFileExtension(file);
            if (!groups[name]) groups[name] = {};
            groups[name][ext] = file;
        });

        Object.keys(groups).forEach(name => {
            const group = groups[name];
            const mainFile = group.pdf || group.png || group.jpg || group.jpeg;
            if (!mainFile) return;

            const type = getFileExtension(mainFile);
            const preview = group.png || group.jpg || group.jpeg;
            const card = document.createElement('div');
            card.className = 'cert-card';

            const visual = preview
                ? `<img src="${folder}/${preview}" class="cert-preview" alt="${name} preview">`
                : `<div class="pdf-visual-placeholder"><div class="ghost-badge">SECURE_DOC</div><div class="ghost-icon-pdf"></div></div>`;

            card.innerHTML = `
                ${visual}
                <button class="ghost-btn view-cert-btn" type="button" data-src="${folder}/${mainFile}" data-type="${type}">[ VIEW ]</button>
            `;
            container.appendChild(card);
        });
    }

    function renderProjects() {
        const container = document.getElementById('projects-list');
        if (!container || !window.MalekConfig) return;

        window.MalekConfig.projects.forEach(project => {
            const format = project.format || 'zip';
            const filePath = `projects/${project.id}.${format}`;
            const row = document.createElement('div');
            row.className = 'project-row';
            row.innerHTML = `
                <span class="proj-name">${project.name}</span>
                <div class="download-container">
                    ${project.hasPassword ? '<span class="pass-hint">PASS: infected</span>' : ''}
                    <a href="${filePath}" class="ghost-btn project-download-btn ${project.hasPassword ? 'warn-btn' : ''}" download="${project.id}.${format}">
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
                <a href="${filePath}" class="ghost-btn download-work-btn" download="${work.file}">[ download-work ]</a>
            `;
            container.appendChild(card);
        });
    }

    if (window.MalekConfig) {
        renderDocumentCards('certs-list', window.MalekConfig.certificates, 'certs');
        renderDocumentCards('cv-list', window.MalekConfig.cv, 'cv');
        renderWorkExperience();
        renderProjects();
    }

    // Intelligent Background Blob Preparation for PDFs to prevent browser blocking and viewer opening
    const preparedBlobs = {};

    function prepareBlobForLink(linkEl) {
        const href = linkEl.getAttribute('href');
        if (!href || preparedBlobs[href] || getFileExtension(href) !== 'pdf') return;
        
        fetch(href)
            .then(res => res.blob())
            .then(blob => {
                const blobUrl = window.URL.createObjectURL(blob);
                preparedBlobs[href] = blobUrl;
                linkEl.setAttribute('href', blobUrl);
            })
            .catch(() => {
                // Fallback to original href if fetch fails
            });
    }

    // Pre-prepare blobs when user hovers or focuses on download buttons
    document.addEventListener('mouseover', event => {
        const btn = event.target.closest('.download-work-btn, .project-download-btn');
        if (btn) prepareBlobForLink(btn);
    });

    document.addEventListener('focusin', event => {
        const btn = event.target.closest('.download-work-btn, .project-download-btn');
        if (btn) prepareBlobForLink(btn);
    });

    // Also prepare immediately on render for smooth experience
    window.setTimeout(() => {
        document.querySelectorAll('.download-work-btn, .project-download-btn').forEach(btn => {
            prepareBlobForLink(btn);
        });
    }, 500);

    // Document preview for certificates and CVs
    const lightbox = document.getElementById('cert-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxPdf = document.getElementById('lightbox-pdf');
    const closeBtn = document.querySelector('.close-lightbox');

    function openDocument(src, type) {
        if (!lightbox || !lightboxImg || !lightboxPdf) return;
        const normalizedType = type.toLowerCase();
        if (['png', 'jpg', 'jpeg', 'webp'].includes(normalizedType)) {
            lightboxImg.src = src;
            lightboxImg.style.display = 'block';
            lightboxPdf.style.display = 'none';
        } else {
            lightboxPdf.src = src;
            lightboxPdf.style.display = 'block';
            lightboxImg.style.display = 'none';
        }
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    document.addEventListener('click', event => {
        const trigger = event.target.closest('.view-cert-btn');
        if (!trigger) return;
        openDocument(trigger.dataset.src, trigger.dataset.type || 'pdf');
    });

    function closeDocument() {
        if (!lightbox) return;
        lightbox.style.display = 'none';
        if (lightboxImg) lightboxImg.src = '';
        if (lightboxPdf) lightboxPdf.src = '';
        document.body.style.overflow = 'auto';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeDocument);
    if (lightbox) {
        lightbox.addEventListener('click', event => {
            if (event.target === lightbox) closeDocument();
        });
    }
});
