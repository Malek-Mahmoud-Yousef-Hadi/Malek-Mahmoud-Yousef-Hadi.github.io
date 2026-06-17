// Malek Hadi - Pure JS Roadmap (No React needed for maximum compatibility)
window.addEventListener('load', () => {
    const container = document.getElementById('roadmap-root');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    const baseWidth = 1400; // Original design width
    const baseHeight = 850; // Increased base height to ensure bottom nodes are visible
    const nodeWidth = 220; // Expanded node width

    // Nodes definition with absolute virtual coordinates
    const nodes = [
        { id: 'A', title: 'Network Fundamental', x: 20, y: 300, type: 'start' },
        { id: 'L', title: 'BSc Cybersecurity (Al al-Bayt)', x: 20, y: 50, type: 'isolated' },
        { id: 'B', title: 'Basics: Win, Linux & Crypto', x: 350, y: 50, type: 'child' },
        { id: 'C', title: 'Basics: Py, Web, PHP, C++, SQL', x: 350, y: 200, type: 'child' },
        { id: 'D', title: 'CCNA', x: 350, y: 350, type: 'child' },
        { id: 'E', title: 'Cyber Security Essential', x: 350, y: 500, type: 'child' },
        { id: 'G', title: 'Book:Linux Basics for Hackers', x: 700, y: 50, type: 'child' },
        { id: 'H', title: 'CCNA Security', x: 700, y: 350, type: 'child' },
        { id: 'F', title: 'CyberOps Associate', x: 700, y: 500, type: 'child' },
        { id: 'I', title: 'eJPTv2', x: 700, y: 650, type: 'child' },
        { id: 'K', title: 'eCIRv1', x: 1050, y: 500, type: 'child' },
        { id: 'J', title: 'eWAPTv2', x: 1050, y: 650, type: 'child' },
    ];

    const connections = [
        { from: 'A', to: 'B' },
        { from: 'A', to: 'C' },
        { from: 'A', to: 'D' },
        { from: 'A', to: 'E' },
        { from: 'B', to: 'G' },
        { from: 'D', to: 'H' },
        { from: 'E', to: 'F' },
        { from: 'E', to: 'I' },
        { from: 'F', to: 'K' },
        { from: 'I', to: 'J' },
    ];

    // Create a wrapper for scaling
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.width = `${baseWidth}px`;
    wrapper.style.height = `${baseHeight}px`;
    wrapper.style.transformOrigin = 'top left';
    
    // Create SVG for connections
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", baseWidth);
    svg.setAttribute("height", baseHeight);
    svg.setAttribute("style", "position: absolute; top: 0; left: 0; pointer-events: none; z-index: 5;");
    
    // Define arrowhead
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    marker.setAttribute("id", "arrowhead");
    marker.setAttribute("markerWidth", "10");
    marker.setAttribute("markerHeight", "7");
    marker.setAttribute("refX", "0");
    marker.setAttribute("refY", "3.5");
    marker.setAttribute("orient", "auto");
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", "0 0, 10 3.5, 0 7");
    polygon.setAttribute("fill", "#00ff41");
    marker.appendChild(polygon);
    defs.appendChild(marker);
    svg.appendChild(defs);
    wrapper.appendChild(svg);

    // Scaling logic
    function scaleRoadmap() {
        const containerWidth = container.offsetWidth;
        let scale = 1;
        
        if (containerWidth < baseWidth) {
            scale = containerWidth / baseWidth;
        }

        wrapper.style.transform = `scale(${scale})`;
        // Add extra padding to container height on mobile to ensure visibility
        const extraPadding = containerWidth < 768 ? 50 : 0;
        container.style.height = `${(baseHeight * scale) + extraPadding}px`;
        container.style.width = '100%';
    }

    // Render Connections
    connections.forEach(conn => {
        const start = nodes.find(n => n.id === conn.from);
        const end = nodes.find(n => n.id === conn.to);
        if (start && end) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", start.x + 110);
            line.setAttribute("y1", start.y + 25);
            line.setAttribute("x2", end.x + 110);
            line.setAttribute("y2", end.y + 25);
            line.setAttribute("stroke", "#00ff41");
            line.setAttribute("stroke-width", "1");
            line.setAttribute("marker-end", "url(#arrowhead)");
            line.setAttribute("opacity", "0.4");
            svg.appendChild(line);
        }
    });

    // Render Nodes
    nodes.forEach(node => {
        const div = document.createElement('div');
        div.className = `roadmap-node-v2 ${node.type}`;
        div.innerText = node.title;
        div.style.position = 'absolute';
        div.style.left = `${node.x}px`;
        div.style.top = `${node.y}px`;
        div.style.border = '1px solid #00ff41';
        div.style.padding = '12px';
        div.style.backgroundColor = '#000';
        div.style.color = '#00ff41';
        div.style.fontSize = '0.85rem';
        div.style.zIndex = '10';
        div.style.width = `${nodeWidth}px`;
        div.style.textAlign = 'center';
        div.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.2)';
        div.style.textTransform = 'uppercase';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        div.style.minHeight = '50px';
        wrapper.appendChild(div);
    });

    container.appendChild(wrapper);
    scaleRoadmap();
    window.addEventListener('resize', scaleRoadmap);
});
