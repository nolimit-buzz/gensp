import React from 'react';
import { motion } from 'framer-motion';

interface SalesProcessDiagramMobileProps {
    width?: number | string;
    height?: number | string;
}

const SalesProcessDiagramMobile: React.FC<SalesProcessDiagramMobileProps> = ({ width = "100%", height = "auto" }) => {
    const colors = {
        nodeBg: '#1A1D1C',
        accent: '#FF5F5F',
        textMain: '#FFFFFF',
        textSub: '#9CA3AF',
    };

    // Layout configuration for vertical layout
    const nodeWidth = 300;
    const nodeHeight = 140;
    const gap = 90;
    const viewBoxWidth = 380;
    const startX = (viewBoxWidth - nodeWidth) / 2; // Centered horizontally (40px)
    const startY = 180; // Moved down significantly to create more space

    const nodes = [
        { id: 1, title: 'Discovery', sub: ['Self-serving, surface level', 'questioning'], y: startY },
        { id: 2, title: 'Demo/Solution', sub: ['Product overview with', 'narrow feature framing'], y: startY + nodeHeight + gap },
        { id: 3, title: 'Internal Alignment', sub: ['Champion struggles to', 'sell internally'], y: startY + (nodeHeight + gap) * 2 },
        { id: 4, title: 'Commercials & Close', sub: ['Price haggling and legal,', 'security, finance hurdles'], y: startY + (nodeHeight + gap) * 3 },
    ];

    const ArrowHead = ({ id, color, rot = 0 }: { id: string, color: string, rot?: number }) => (
        <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={color} transform={`rotate(${rot})`} />
        </marker>
    );

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const drawPath = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { type: "spring" as const, duration: 1.5, bounce: 0 },
                opacity: { duration: 0.01 }
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    const popIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
    };

    // Calculate total height needed
    const totalHeight = startY + (nodeHeight + gap) * 3 + nodeHeight + 40;

    return (
        <div className="w-full overflow-visible">
            <motion.svg
                width={width}
                height={height}
                viewBox={`0 0 ${viewBoxWidth} ${totalHeight}`}
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
                style={{ display: 'block' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <defs>
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap');
                        .text-title { font-family: 'Outfit', sans-serif; font-weight: 700; fill: ${colors.textMain}; font-size: 20px; }
                        .text-sub { font-family: 'Outfit', sans-serif; font-weight: 400; fill: ${colors.textSub}; font-size: 14px; }
                        .path-coral { stroke: ${colors.accent}; stroke-width: 1.5; fill: none; }
                    `}} />
                    <ArrowHead id="arrow-coral-down" color={colors.accent} rot={90} />
                    <filter id="shadow-card" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.5" />
                    </filter>
                </defs>

                {/* Initial Text */}
                <motion.text
                    variants={fadeIn}
                    x={viewBoxWidth / 2}
                    y={20}
                    fill="#FF927E"
                    textAnchor="middle"
                    fontSize="16"
                    style={{ fill: '#FF927E' }}
                >
                    <tspan x={viewBoxWidth / 2} y={20} dy="0">"Traditional"</tspan>
                    <tspan x={viewBoxWidth / 2} y={20} dy="22">Sales Process</tspan>
                </motion.text>

                {/* Arrow to first node */}
                <motion.path
                    variants={drawPath}
                    d={`M ${startX + nodeWidth / 2} ${48} L ${startX + nodeWidth / 2} ${nodes[0].y - nodeHeight / 2 - 10}`}
                    className="path-coral"
                    stroke="#FF5F5F"
                    strokeWidth="1.5"
                    fill="none"
                    markerEnd="url(#arrow-coral-down)"
                />

                {/* Nodes & Arrows Loop */}
                {nodes.map((node, i) => (
                    <React.Fragment key={node.id}>
                        {/* The Node */}
                        <motion.g
                            variants={popIn}
                            whileHover={{ scale: 1.05 }}
                            style={{ originX: "50%", originY: "50%", transformBox: "fill-box" }}
                        >
                            {/* Background card */}
                            <rect
                                x={startX}
                                y={node.y - nodeHeight / 2}
                                width={nodeWidth}
                                height={nodeHeight}
                                rx="16"
                                fill="#1A1D1C"
                                filter="url(#shadow-card)"
                            />
                            {/* Border overlay */}
                            <rect
                                x={startX}
                                y={node.y - nodeHeight / 2}
                                width={nodeWidth}
                                height={nodeHeight}
                                rx="16"
                                fill="none"
                                stroke="#FF5F5F"
                                strokeWidth="3"
                            />
                            <text x={startX + nodeWidth / 2} y={node.y - 15} className="text-title" textAnchor="middle" fill="#FFFFFF">
                                {node.title}
                            </text>
                            <text x={startX + nodeWidth / 2} y={node.y + 15} className="text-sub" textAnchor="middle" fill="#9CA3AF">
                                {node.sub.map((line, j) => (
                                    <tspan x={startX + nodeWidth / 2} dy={j === 0 ? 0 : 20} key={j}>
                                        {line}
                                    </tspan>
                                ))}
                            </text>
                        </motion.g>

                        {/* Connection to next node (if not last) - vertical arrow pointing down */}
                        {i < nodes.length - 1 && (
                            <motion.path
                                variants={drawPath}
                                d={`M ${startX + nodeWidth / 2} ${node.y + nodeHeight / 2} L ${startX + nodeWidth / 2} ${nodes[i + 1].y - nodeHeight / 2 - 10}`}
                                className="path-coral"
                                stroke="#FF5F5F"
                                strokeWidth="1.5"
                                fill="none"
                                markerEnd="url(#arrow-coral-down)"
                            />
                        )}
                    </React.Fragment>
                ))}

            </motion.svg>
        </div>
    );
};

export default SalesProcessDiagramMobile;
