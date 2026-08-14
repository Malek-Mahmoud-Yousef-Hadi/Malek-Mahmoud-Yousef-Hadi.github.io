// Malek Hadi - Pure JS Roadmap (GitHub Pages compatible)
window.addEventListener('load', () => {
    const container = document.getElementById('roadmap-root');
    if (!container) return;

    container.innerHTML = '';

    const baseWidth = 1400;
    const baseHeight = 930;
    const nodeWidth = 220;
    const nodeHeight = 50;

    const nodes = [
        { id: 'A', title: 'Network Fundamental', x: 20, y: 300, type: 'start' },
        { id: 'L', title: 'BSc Cybersecurity (Al al-Bayt)', x: 20, y: 50, type: 'isolated' },
        { id: 'B', title: 'Basics: Win, Linux & Crypto', x: 350, y: 50, type: 'child' },
        { id: 'C', title: 'Basics: Py, Web, PHP, C++, SQL', x: 350, y: 200, type: 'child' },
        { id: 'D', title: 'CCNA', x: 350, y: 350, type: 'child' },
        { id: 'E', title: 'Cyber Security Essential', x: 350, y: 500, type: 'child' },
        { id: 'G', title: 'Book: Linux Basics for Hackers', x: 700, y: 50, type: 'child' },
        { id: 'H', title: 'CCNA Security', x: 700, y: 350, type: 'child' },
        { id: 'F', title: 'CyberOps Associate', x: 700, y: 500, type: 'child' },
        { id: 'I', title: 'eJPTv2', x: 700, y: 650, type: 'child' },
        { id: 'K', title: 'eCIRv1', x: 1050, y: 500, type: 'child' },
        { id: 'J', title: 'eWAPTv2', x: 1050, y: 650, type: 'child' },
        { id: 'OSCP', title: 'OSCP', x: 1050, y: 800, type: 'child' }
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
        { from: 'I', to: 'OSCP' }
    ];

    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.width = `${baseWidth}px`;
    wrapper.style.height = `${baseHeight}px`;
    wrapper.style.transformOrigin = 'top left';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', baseWidth);
    svg.setAttribute('height', baseHeight);
    svg.setAttribute('viewBox', `0 0 ${baseWidth} ${baseHeight}`);
    svg.setAttribute('style', 'position:absolute;top:0;left:0;pointer-events:none;z-index:5;');

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker.setAttribute('id', 'arrowhead');
    marker.setAttribute('markerWidth', '10');
    marker.setAttribute('markerHeight', '7');
    marker.setAttribute('refX', '0');
    marker.setAttribute('refY', '3.5');
    marker.setAttribute('orient', 'auto');

    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
    polygon.setAttribute('fill', '#00ff41');
    marker.appendChild(polygon);
    defs.appendChild(marker);
    svg.appendChild(defs);
    wrapper.appendChild(svg);

    connections.forEach(({ from, to }) => {
        const start = nodes.find(node => node.id === from);
        const end = nodes.find(node => node.id === to);
        if (!start || !end) return;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', start.x + nodeWidth / 2);
        line.setAttribute('y1', start.y + nodeHeight / 2);
        line.setAttribute('x2', end.x + nodeWidth / 2);
        line.setAttribute('y2', end.y + nodeHeight / 2);
        line.setAttribute('stroke', '#00ff41');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('marker-end', 'url(#arrowhead)');
        line.setAttribute('opacity', '0.4');
        svg.appendChild(line);
    });

    nodes.forEach(node => {
        const div = document.createElement('div');
        div.className = `roadmap-node-v2 ${node.type}`;
        div.innerText = node.title;
        Object.assign(div.style, {
            position: 'absolute',
            left: `${node.x}px`,
            top: `${node.y}px`,
            width: `${nodeWidth}px`,
            minHeight: `${nodeHeight}px`,
            padding: '12px',
            border: '1px solid #00ff41',
            backgroundColor: '#000',
            color: '#00ff41',
            fontSize: '0.85rem',
            zIndex: '10',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0, 255, 65, 0.2)',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });
        wrapper.appendChild(div);
    });

    function scaleRoadmap() {
        const containerWidth = container.clientWidth;
        const scale = Math.min(1, containerWidth / baseWidth);
        wrapper.style.transform = `scale(${scale})`;
        container.style.height = `${baseHeight * scale}px`;
        container.style.width = '100%';
    }

    container.appendChild(wrapper);
    scaleRoadmap();
    window.addEventListener('resize', scaleRoadmap);
});
