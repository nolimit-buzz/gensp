import React from 'react';
import { motion } from 'framer-motion';

interface SalesProcessDiagramProps {
    width?: number | string;
    height?: number | string;
}

const SalesProcessDiagram: React.FC<SalesProcessDiagramProps> = ({ width = "100%", height = "auto" }) => {
    const colors = {
        nodeBg: '#1A1D1C',
        accent: '#FF5F5F',
        textMain: '#FFFFFF',
        textSub: '#9CA3AF',
    };

    // Layout configuration
    const nodeWidth = 280;
    const nodeHeight = 130;
    const gap = 80;
    const startX = 250;
    const startY = 220;

    const nodes = [
        { id: 1, title: 'Discovery', sub: ['Self-serving, surface level', 'questioning'], x: startX },
        { id: 2, title: 'Demo/Solution', sub: ['Product overview with', 'narrow feature framing'], x: startX + nodeWidth + gap },
        { id: 3, title: 'Internal Alignment', sub: ['Champion struggles to', 'sell internally'], x: startX + (nodeWidth + gap) * 2 },
        { id: 4, title: 'Commercials & Close', sub: ['Price haggling and legal,', 'security, finance hurdles'], x: startX + (nodeWidth + gap) * 3 },
    ];

    // Path definitions
    // 1. Curve up and RIGHT (forward): Customer Ghosts
    const p1Start = nodes[0].x + nodeWidth + 30;
    const pathGhost = `
        M ${p1Start} ${startY}
        Q ${p1Start + 60} ${startY - 100} ${p1Start + 120} ${startY - 120}
    `;

    // 2. Curve down and LEFT (drop off): Decision Stalls
    const p2Start = nodes[1].x + nodeWidth + 30;
    const pathStall = `
        M ${p2Start} ${startY}
        Q ${p2Start - 40} ${startY + 100} ${p2Start - 100} ${startY + 130}
    `;

    // 3. Curve loop up and LEFT (backwards): Priorities Change
    const p3Start = nodes[2].x + nodeWidth + 30;
    const pathPriority = `
        M ${p3Start} ${startY}
        C ${p3Start + 60} ${startY - 100}, ${p3Start - 40} ${startY - 160}, ${p3Start - 120} ${startY - 120}
    `;

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

    return (
        <div className="w-full overflow-visible">
            <motion.svg
                width={width}
                height={height}
                viewBox="0 0 1700 400"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <defs>
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap');
                        .text-title { font-family: 'Outfit', sans-serif; font-weight: 700; fill: ${colors.textMain}; font-size: 22px; }
                        .text-sub { font-family: 'Outfit', sans-serif; font-weight: 400; fill: ${colors.textSub}; font-size: 15px; }
                        .text-label { font-family: 'Outfit', sans-serif; font-weight: 700; fill: ${colors.accent}; font-size: 15px; }
                        .path-coral { stroke: ${colors.accent}; stroke-width: 1.5; fill: none; }
                    `}} />
                    <ArrowHead id="arrow-coral" color={colors.accent} />
                    <filter id="shadow-card" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.5" />
                    </filter>
                </defs>

                {/* Initial Text */}
                <motion.text
                    variants={fadeIn}
                    x="0"
                    y={startY}
                    className="fill-[#FF927E]"
                    textAnchor="start"
                    fontSize="18"
                >
                    <tspan x="0" dy="-10">"Traditional"</tspan>
                    <tspan x="0" dy="25">Sales Process</tspan>
                </motion.text>

                {/* Arrow to first node */}
                <motion.path
                    variants={drawPath}
                    d={`M 150 ${startY} L ${nodes[0].x - 10} ${startY}`}
                    className="path-coral"
                />

                {/* Nodes & Arrows Loop */}
                {nodes.map((node, i) => (
                    <React.Fragment key={node.id}>
                        {/* The Node */}
                        <motion.g
                            variants={popIn}
                            whileHover={{ scale: 1.05 }} // Keep hover effect
                            style={{ originX: "50%", originY: "50%", transformBox: "fill-box" }}
                        >
                            <rect
                                x={node.x}
                                y={startY - nodeHeight / 2}
                                width={nodeWidth}
                                height={nodeHeight}
                                rx="16"
                                fill={colors.nodeBg}
                                stroke={colors.accent}
                                strokeWidth="1.5"
                                filter="url(#shadow-card)"
                            />
                            <text x={node.x + 24} y={startY - 15} className="text-title" textAnchor="start" fill={colors.textMain}>
                                {node.title}
                            </text>
                            <text x={node.x + 24} y={startY + 15} className="text-sub" textAnchor="start" fill="#9CA3AF">
                                {node.sub.map((line, j) => (
                                    <tspan x={node.x + 24} dy={j === 0 ? 0 : 20} key={j}>
                                        {line}
                                    </tspan>
                                ))}
                            </text>
                        </motion.g>

                        {/* Connection to next node (if not last) */}
                        {i < nodes.length - 1 && (
                            <motion.path
                                variants={drawPath}
                                d={`M ${node.x + nodeWidth} ${startY} L ${nodes[i + 1].x - 10} ${startY}`}
                                className="path-coral"
                                markerEnd={i === 2 ? "url(#arrow-coral)" : undefined} // Arrowhead only on last connection in loop (Node 3->4)
                            />
                        )}
                    </React.Fragment>
                ))}

                {/* Curve 1: Customer Ghosts (After Node 1) */}
                <motion.path variants={drawPath} d={pathGhost} className="path-coral" markerEnd="url(#arrow-coral)" />
                <motion.text variants={fadeIn} x={p1Start + 130} y={startY - 125} className="fill-[#FF927E]" textAnchor="start">
                    <tspan x={p1Start + 130} dy="0">Customer Ghosts: Low</tspan>
                    <tspan x={p1Start + 130} dy="20">conviction, low urgency</tspan>
                </motion.text>

                {/* Curve 2: Decision Stalls (After Node 2) */}
                <motion.path variants={drawPath} d={pathStall} className="path-coral" markerEnd="url(#arrow-coral)" />
                <motion.text variants={fadeIn} x={p2Start - 100} y={startY + 150} className="fill-[#FF927E]" textAnchor="end">
                    <tspan x={p2Start - 100} dy="0">Decision Stalls: "We'll</tspan>
                    <tspan x={p2Start - 100} dy="20">get back to you"</tspan>
                </motion.text>

                {/* Curve 3: Priorities Change (After Node 3) */}
                <motion.path variants={drawPath} d={pathPriority} className="path-coral" markerEnd="url(#arrow-coral)" />
                <motion.text variants={fadeIn} x={p3Start - 120} y={startY - 130} className="fill-[#FF927E]" textAnchor="end">
                    <tspan x={p3Start - 120} dy="0">Priorities Change: Lost</tspan>
                    <tspan x={p3Start - 120} dy="20">to 'no decision'</tspan>
                </motion.text>

            </motion.svg>
        </div>
    );
};

export default SalesProcessDiagram;
