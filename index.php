<?php
$pageTitle = "MALEK HADI | GHOST_OPERATOR";
include 'includes/header.php';
?>

<div class="crt-overlay"></div>
<div class="scanlines"></div>
<canvas id="matrix-bg"></canvas>
<div id="hacker-console" class="hacker-console"></div>
<div id="cursor-trail"></div>

<main class="terminal">
    <!-- Hero / Ghost Identity -->
    <section id="hero" class="ghost-section">
        <div class="glitch-wrapper">
            <h1 class="ghost-title" data-text="MALEK HADI">MALEK HADI</h1>
        </div>
        <div class="typewriter">
            <p>> CYBERSECURITY SPECIALIST_</p>
            <p class="ghost-tagline">> I am the ghost_</p>
            <p>> GHOST OPERATOR DETECTED...</p>
        </div>
    </section>

    <!-- About Me -->
    <section id="about" class="ghost-section">
        <h2 class="section-header">0x01 // About Me</h2>
        <div class="content-box">
            <p>I am Malek Hadi, a cybersecurity specialist focused on offensive and defensive operations.</p>
            <p>I am interested in penetration testing in networks and web applications, SOC analysts (Tier 1, Tier 2, and Tier 3), and my goal is always the next level.</p>
        </div>
    </section>

    <!-- Contact Info (Non-Button Display) -->
    <section id="contact" class="ghost-section">
        <div class="contact-grid">
            <div class="contact-block">
                <h2 class="section-header">0x02 // My Emails</h2>
                <div class="content-box mono-text">
                    <p>m7alek2hadi10@gmail.com</p>
                    <p>mhmwdhady434@gmail.com</p>
                </div>
            </div>
            <div class="contact-block">
                <h2 class="section-header">0x03 // My Linkedin</h2>
                <div class="content-box mono-text">
                    <p>Connect with me on professional network:</p>
                    <a href="https://www.linkedin.com/in/malek-hadi-aa9315416" target="_blank" class="ghost-btn" style="margin-top:10px; display:inline-block;">[ VIEW_LINKEDIN_PROFILE ]</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Roadmap -->
    <section id="roadmap" class="ghost-section">
        <h2 class="section-header">0x04 // My learning roadmap</h2>
        <div id="roadmap-root" class="roadmap-container"></div>
    </section>

    <!-- Next Level Goals -->
    <section id="goals" class="ghost-section">
        <h2 class="section-header">0x05 // Next Level Goals</h2>
        <div class="goals-flex">
            <div class="goal-item">OSCP</div>
            <div class="goal-arrow">>></div>
            <div class="goal-item">CPTS</div>
            <div class="goal-arrow">>></div>
            <div class="goal-item">CRTP</div>
            <div class="goal-arrow">>></div>
            <div class="goal-item">...</div>
        </div>
    </section>

    <?php
    // Helper function for dynamic file display
    function displayGhostFiles($dir, $typeLabel = "DOCUMENT") {
        $allFiles = glob($dir . "*.{png,pdf,PNG,PDF}", GLOB_BRACE);
        if (count($allFiles) > 0) {
            $groups = [];
            foreach ($allFiles as $file) {
                $info = pathinfo($file);
                $base = $info['filename'];
                $ext = strtolower($info['extension']);
                $groups[$base][$ext] = $file;
            }
            foreach ($groups as $base => $exts) {
                echo "<div class='cert-card'>";
                if (isset($exts['png'])) {
                    echo "<img src='" . $exts['png'] . "' alt='$base' class='cert-preview'>";
                } else {
                    echo "<div class='pdf-visual-placeholder'>
                            <div class='ghost-badge'>$typeLabel</div>
                            <div class='ghost-icon-pdf'></div>
                          </div>";
                }
                $target = isset($exts['pdf']) ? $exts['pdf'] : $exts['png'];
                $targetExt = pathinfo($target, PATHINFO_EXTENSION);
                echo "<button class='ghost-btn view-cert-btn' data-src='$target' data-type='$targetExt'>[ VIEW ]</button>";
                echo "</div>";
            }
        } else {
            echo "<div class='cert-placeholder'><p>[ NO " . strtoupper($typeLabel) . "S FOUND ]</p><p>Upload to /$dir folder.</p></div>";
        }
    }
    ?>

    <!-- Education -->
    <section id="education" class="ghost-section">
        <h2 class="section-header">0x06 // Education</h2>
        <div class="cert-display">
            <div class="cert-grid-v2">
                <?php displayGhostFiles("education/", "DEGREE"); ?>
            </div>
        </div>
    </section>

    <!-- My CV -->
    <section id="cv" class="ghost-section">
        <h2 class="section-header">0x07 // My CV</h2>
        <div class="cert-display">
            <div class="cert-grid-v2">
                <?php displayGhostFiles("cv/", "CURRICULUM VITAE"); ?>
            </div>
        </div>
    </section>

    <!-- Certificates -->
    <section id="certificates" class="ghost-section">
        <h2 class="section-header">0x08 // My certificates and courses</h2>
        <div class="cert-display">
            <div class="cert-grid-v2">
                <?php displayGhostFiles("certs/", "CERTIFICATE"); ?>
            </div>
        </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="ghost-section">
        <h2 class="section-header">0x09 // Download my practical projects and home labs</h2>
        <div class="project-list-v2">
            <?php
            $projects = [
                "sql_injection_detection",
                "Small-internal-network-penetration-testing",
                "secure-project",
                "Lab-sonrt",
                "SOC-analyst-lab",
                "keylogger",
                "IDOR-real-website",
                "Hardening-Windows10",
                "Hardening-linux-server",
                "DFIR"
            ];
            foreach ($projects as $proj) {
                $extensions = ['zip', 'rar', 'pdf', 'pptx', 'ppt', 'ppsx'];
                $foundFile = "#";
                $extLabel = "NOT_FOUND";
                
                foreach ($extensions as $ext) {
                    if (file_exists("projects/$proj.$ext")) {
                        $foundFile = "projects/$proj.$ext";
                        $extLabel = strtoupper($ext);
                        break;
                    }
                }

                echo "<div class='project-row'>";
                echo "<span class='proj-name'>" . str_replace('-', ' ', $proj) . "</span>";
                
                $isSensitive = ($proj === "keylogger");
                
                if ($foundFile !== "#") {
                    echo "<div class='download-container'>";
                    if ($isSensitive) {
                        echo "<span class='pass-hint'>PASS: infected</span>";
                    }
                    echo "<a href='$foundFile' class='ghost-btn " . ($isSensitive ? "warn-btn" : "") . "' download>[ DOWNLOAD_$extLabel ]</a>";
                    echo "</div>";
                } else {
                    echo "<span class='ghost-btn' style='opacity:0.3'>[ FILE_MISSING ]</span>";
                }
                echo "</div>";
            }
            ?>
        </div>
        <div class="security-disclaimer">
            <p>> [!] NOTICE: The password for the project named Keylogger is: infected </p>
        </div>
    </section>
</main>

<!-- Lightbox Overlay -->
<div id="cert-lightbox" class="lightbox">
    <span class="close-lightbox">&times;</span>
    <div class="lightbox-content">
        <img id="lightbox-img" src="" alt="Certificate View">
        <iframe id="lightbox-pdf" src="" frameborder="0"></iframe>
    </div>
</div>

<?php include 'includes/footer.php'; ?>
