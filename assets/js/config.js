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
    ],

    internships: [
        {
            title: "Hands-on Network Infrastructure Training",
            company: "Al al-Bayt University",
            dates: "July – August 2025",
            duration: "2 months",
            field: "Computer Networks & Network Infrastructure",
            description: "Completed two months of intensive, hands-on training focused on the university's real-world network infrastructure. During the training, I was directly involved in the physical installation and connectivity of the network rather than only studying networking concepts theoretically.",
            tasks: [
                "Physically installed and connected network cables throughout an entire university building.",
                "Personally routed, organized, and connected network cables to switches and network points.",
                "Worked directly with the physical network infrastructure and gained practical experience in network cabling and connectivity.",
                "Identified and followed the university's existing network structure and learned how different network components were interconnected.",
                "Worked hands-on with switches and routers and learned their fundamental roles within the network.",
                "Studied and applied fundamental networking concepts, including IP addressing, subnetting, network segmentation, network topology, and device connectivity.",
                "Applied theoretical networking knowledge to an actual network infrastructure environment.",
                "Developed practical understanding of how a network is physically built, connected, organized, and prepared for operation.",
                "Gained experience troubleshooting basic physical connectivity issues during the cabling and connection process."
            ],
            keyAchievement: "Successfully participated in the physical deployment of network cabling for an entire university building, personally handling the cable connections and switch connectivity as part of the practical network infrastructure team."
        }
    ]
};

window.MalekConfig = MalekConfig;
