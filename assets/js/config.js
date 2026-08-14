const MalekConfig = {
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


    cv: [
        "Malek_Mahmoud_Hadi_CV.pdf",
        "Malek_Mahmoud_Hadi_CV.png"
    ],

    projects: [
        { id: "sql_injection_detection", name: "SQL Injection Detection", hasPassword: false, format: "rar" },
        { id: "Small-internal-network-penetration-testing", name: "Internal Network Pen-Test", hasPassword: false, format: "pdf" },
        { id: "secure-project", name: "Secure Project", hasPassword: false, format: "rar" },
        { id: "Lab-sonrt", name: "Lab Snort", hasPassword: false, format: "ppsx" },
        { id: "SOC-analyst-lab", name: "SOC Analyst Lab", hasPassword: false, format: "pdf" },
        { id: "keylogger", name: "Keylogger", hasPassword: true, format: "rar" },
        { id: "web-exploitation-cylab-picoctf", name: "Web Exploitation — CYLab Security Academy / PicoCTF", hasPassword: false, format: "pdf" },
        { id: "Hardening-Windows10", name: "Hardening Windows 10", hasPassword: false, format: "rar" },
        { id: "Hardening-linux-server", name: "Hardening Linux Server", hasPassword: false, format: "pdf" },
        { id: "DFIR", name: "DFIR Project", hasPassword: false, format: "rar" }
    ],

    workExperience: [
        {
            id: "full-web-penetration-testing-real-website",
            title: "Full Web Penetration Testing Real Website",
            role: "Web Penetration Tester",
            company: "Confidential Security Engagement",
            dates: "May – June",
            duration: "2 months",
            description: "I conducted an authorized web penetration test and found an IDOR vulnerability due to broken access control, leading to unauthorized access to sensitive API data.",
            file: "full-web-penetration-testing-real-website.pdf",
            format: "pdf"
        },
        {
            id: "black-box-internal-network-penetration-testing",
            title: "Black Box Internal Network Penetration Testing",
            role: "Network Penetration Tester",
            company: "Confidential Security Engagement",
            dates: "July",
            duration: "1 month",
            description: "I conducted an authorized black-box penetration test on an internal network and identified security weaknesses. I discovered and documented 25 findings ranging from Critical to Informational severity. I performed vulnerability validation, risk assessment, and provided remediation recommendations through a professional penetration testing report.",
            file: "black-box-internal-network-penetration-testing.rar",
            format: "rar"
        }
    ]
};

window.MalekConfig = MalekConfig;
