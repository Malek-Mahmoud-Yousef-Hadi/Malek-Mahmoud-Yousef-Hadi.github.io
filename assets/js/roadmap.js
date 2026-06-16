const { useState, useEffect } = React;

const Node = ({ title, x, y, type }) => (
    <div 
        className={`roadmap-node-v2 ${type}`}
        style={{
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            border: '1px solid #00ff41',
            padding: '12px',
            backgroundColor: '#000',
            color: '#00ff41',
            fontSize: '0.75rem',
            zIndex: 10,
            width: '180px',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0, 255, 65, 0.2)',
            textTransform: 'uppercase'
        }}
    >
        {title}
    </div>
);

const Arrow = ({ start, end }) => {
    const startX = start.x + 90;
    const startY = start.y + 20;
    const endX = end.x + 90;
    const endY = end.y + 20;
    
    // Simple SVG line for the arrow
    return (
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}>
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#00ff41" />
                </marker>
            </defs>
            <line 
                x1={startX} y1={startY} 
                x2={endX} y2={endY} 
                stroke="#00ff41" 
                strokeWidth="1" 
                markerEnd="url(#arrowhead)"
                opacity="0.4"
            />
        </svg>
    );
};

const Roadmap = () => {
    const nodes = [
        { id: 'A', title: 'Network Fundamental', x: 50, y: 300, type: 'start' },
        { id: 'L', title: 'BSc Cybersecurity (Al al-Bayt)', x: 50, y: 50, type: 'isolated' },
        { id: 'B', title: 'Basics: Win, Linux & Crypto', x: 350, y: 50, type: 'child' },
        { id: 'C', title: 'Basics: Py, Web, PHP, C++, SQL', x: 350, y: 200, type: 'child' },
        { id: 'D', title: 'CCNA', x: 350, y: 350, type: 'child' },
        { id: 'E', title: 'Cyber Security Essential', x: 350, y: 500, type: 'child' },
        { id: 'G', title: 'Book:Linux Basics for Hackers', x: 650, y: 50, type: 'child' },
        { id: 'H', title: 'CCNA Security', x: 650, y: 350, type: 'child' },
        { id: 'F', title: 'CyberOps Associate', x: 650, y: 500, type: 'child' },
        { id: 'I', title: 'eJPTv2', x: 650, y: 650, type: 'child' },
        { id: 'K', title: 'eCIRv1', x: 950, y: 500, type: 'child' },
        { id: 'J', title: 'eWAPTv2', x: 950, y: 650, type: 'child' },
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

    return (
        <div style={{ position: 'relative', width: '1200px', height: '800px' }}>
            {nodes.map(node => <Node key={node.id} {...node} />)}
            {connections.map((conn, idx) => {
                const start = nodes.find(n => n.id === conn.from);
                const end = nodes.find(n => n.id === conn.to);
                return <Arrow key={idx} start={start} end={end} />;
            })}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('roadmap-root'));
root.render(<Roadmap />);
