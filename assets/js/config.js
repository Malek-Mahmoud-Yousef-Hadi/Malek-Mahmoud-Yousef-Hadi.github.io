const MalekConfig = {
    // List your certificates here (filename only, must be in /certs folder)
    // Supports .png and .pdf. If both exist with same name, PDF is the target.
    certificates: [
        "ccna1.png",
        "ccna2.png",
        "ccna3.png",
        "ccna4.png",
        "ccna5.png",
        "ccna6.png",
        "ccna-sec.png",
        "ccna-secu.png",
        "cyberops.png",
        "cyberops-c.png",
        "cybers.png",
        "cyberse.png",
        "ecir.png",
        "warior.png"
    ],
 
    // List your education documents here (must be in /education folder)
    education: [
        //"Bachelor-Degree-Arabic.pdf",
        //"Bachelor-Degree-English.pdf"
        "com.png"
    ],

    // List your CV files here (must be in /cv folder)
    cv: [
       // "Malek-Hadi-CV.pdf"
        "Malek_Mahmoud_Hadi_CV.pdf",
        "Malek_Mahmoud_Hadi_CV.png"
    ],

    // List your projects here. 
    // Format: { id: "filename-without-extension", name: "Display Name", hasPassword: true/false, format: "zip/rar/pdf/ppsx" }
    // Files must be in /projects folder.
    projects: [
        { id: "sql_injection_detection", name: "SQL Injection Detection", hasPassword: false, format: "rar" },
        { id: "Small-internal-network-penetration-testing", name: "Internal Network Pen-Test", hasPassword: false, format: "pdf" },
        { id: "secure-project", name: "Secure Project", hasPassword: false, format: "rar" },
        { id: "Lab-sonrt", name: "Lab Snort", hasPassword: false, format: "ppsx" },
        { id: "SOC-analyst-lab", name: "SOC Analyst Lab", hasPassword: false, format: "pdf" },
        { id: "keylogger", name: "Keylogger", hasPassword: true, format: "rar" },
        { id: "IDOR-real-website", name: "IDOR Real Website", hasPassword: false, format: "pdf" },
        { id: "Hardening-Windows10", name: "Hardening Windows 10", hasPassword: false, format: "rar" },
        { id: "Hardening-linux-server", name: "Hardening Linux Server", hasPassword: false, format: "pdf" },
        { id: "DFIR", name: "DFIR Project", hasPassword: false, format: "rar" }
    ]
};
