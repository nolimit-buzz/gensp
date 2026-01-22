import React from 'react';
import { motion } from 'framer-motion';

interface BusinessCaseProcessDiagramProps {
    width?: number | string;
    height?: number | string;
}

const BusinessCaseProcessDiagram: React.FC<BusinessCaseProcessDiagramProps> = ({ width = "100%", height = "auto" }) => {
    const colors = {
        nodeBg: '#1A1D1C',
        accent: '#6FD8C8', // Teal/Aqua
        textMain: '#FFFFFF',
        textSub: '#9CA3AF',
        lastNodeBg: '#6B8E85', // Sage/Greenish
    };

    // Layout configuration
    const nodeWidth = 260;
    const nodeHeight = 120;
    const gap = 40;
    const startX = 310;
    const startY = 250;
    const diamondSize = 220;

    // Precise calculation for rotated diamond tips
    const diamondHalfDiagonal = (diamondSize * Math.sqrt(2)) / 2;
    const diamondRightTip = startX + diamondHalfDiagonal;

    // Nodes Data
    const nodes = [
        {
            id: 1,
            title: 'Co-Creation Discovery',
            sub: ['Co-author the problem,', 'metrics, cost of inaction'],
            x: diamondRightTip + gap
        },
        {
            id: 2,
            title: 'Value-Led Demo',
            sub: ['Clearly illustrate how to', 'achieve desired metrics'],
            x: diamondRightTip + gap + nodeWidth + gap
        },
        {
            id: 3,
            title: 'Internal Alignment',
            sub: ['Equip champions with', 'tailored business case'],
            x: diamondRightTip + gap + (nodeWidth + gap) * 2
        },
        {
            id: 4,
            title: 'Commercials & Close',
            sub: ['Finalize cocreated value', 'story and success plan'],
            x: diamondRightTip + gap + (nodeWidth + gap) * 3,
            specialBg: true
        },
    ];

    // Branch Paths - Start from the center of the gap between cards
    const p1Start = nodes[0].x + nodeWidth + gap / 2;
    const pathConviction = `
        M ${p1Start} ${startY}
        Q ${p1Start + 30} ${startY - 130} ${p1Start + 90} ${startY - 150}
    `;

    const p2Start = nodes[1].x + nodeWidth + gap / 2;
    const pathMomentum = `
        M ${p2Start} ${startY}
        Q ${p2Start + 30} ${startY + 120} ${p2Start + 100} ${startY + 120}
    `;

    const p3Start = nodes[2].x + nodeWidth + gap / 2;
    const pathBuying = `
        M ${p3Start} ${startY}
        Q ${p3Start + 30} ${startY - 150} ${p3Start + 90} ${startY - 170}
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
                viewBox="0 0 1800 400"
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
                        .text-title-teal { font-family: 'Outfit', sans-serif; font-weight: 700; fill: ${colors.accent}; font-size: 20px; }
                        .text-title-white { font-family: 'Outfit', sans-serif; font-weight: 700; fill: ${colors.textMain}; font-size: 20px; }
                        .text-sub { font-family: 'Outfit', sans-serif; font-weight: 400; fill: ${colors.textSub}; font-size: 15px; }
                        .text-sub-italic { font-family: 'Outfit', sans-serif; font-weight: 400; fill: ${colors.accent}; font-size: 14px; font-style: italic; }
                        .text-label { font-family: 'Outfit', sans-serif; font-weight: 500; fill: ${colors.accent}; font-size: 16px; }
                        .path-teal { stroke: ${colors.accent}; stroke-width: 2.5; fill: none; stroke-linecap: round; }
                    `}} />
                    <ArrowHead id="arrow-teal" color={colors.accent} />
                    <filter id="shadow-card" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.5" />
                    </filter>
                </defs>

                {/* --- Left Label --- */}
                <motion.text
                    variants={fadeIn}
                    x="0"
                    y={startY}
                    className="text-label"
                    textAnchor="start"
                    fontSize="20"
                >
                    <tspan x="0" dy="-15">Business Case-</tspan>
                    <tspan x="0" dy="25">Driven Process</tspan>
                </motion.text>

                {/* --- DIAMOND NODE (Start) --- */}
                <motion.g
                    variants={popIn}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                    style={{ originX: "50%", originY: "50%", transformBox: "fill-box" }}
                >
                    {/* Diamond Shape */}
                    <rect
                        x={startX - diamondSize / 2}
                        y={startY - diamondSize / 2}
                        width={diamondSize}
                        height={diamondSize}
                        rx="8" // Slight rounding
                        fill="#000000"
                        stroke={colors.accent}
                        strokeWidth="2"
                        transform={`rotate(45 ${startX} ${startY})`}
                        filter="url(#shadow-card)"
                    />

                    {/* Content (No Rotation) */}
                    {/* Icon Placeholder (Circles) */}
                    <circle cx={startX} cy={startY - 50} r="8" fill={colors.accent} />
                    <circle cx={startX - 15} cy={startY - 35} r="6" fill={colors.accent} />
                    <circle cx={startX + 15} cy={startY - 35} r="6" fill={colors.accent} />
                    <circle cx={startX} cy={startY - 20} r="4" fill={colors.accent} />

                    <text x={startX} y={startY + 10} className="text-title-teal" textAnchor="middle">
                        Value Hypothesis
                    </text>

                    <text x={startX} y={startY + 40} className="text-sub-italic" textAnchor="middle" fill="#FFFFFF" style={{ fontSize: '13px', fontStyle: 'italic', fill: '#A0AEC0' }}>
                        <tspan x={startX} dy="0">A draft business case as</tspan>
                        <tspan x={startX} dy="16">the anchor for the sales</tspan>
                        <tspan x={startX} dy="16">process</tspan>
                    </text>
                </motion.g>

                {/* --- Main Flow Arrows (Between Nodes) --- */}
                {/* Diamond -> Node 1 */}
                <motion.path variants={drawPath} d={`M ${diamondRightTip} ${startY} L ${nodes[0].x} ${startY}`} className="path-teal" strokeWidth="2.5" />

                {/* Nodes Loop */}
                {nodes.map((node, i) => (
                    <React.Fragment key={node.id}>
                        {/* The Node */}
                        <motion.g
                            variants={popIn}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                            style={{ originX: "50%", originY: "50%", transformBox: "fill-box" }}
                        >
                            <rect
                                x={node.x}
                                y={startY - nodeHeight / 2}
                                width={nodeWidth}
                                height={nodeHeight}
                                rx="16"
                                fill={node.specialBg ? colors.lastNodeBg : colors.nodeBg}
                                stroke={node.specialBg ? 'none' : colors.accent}
                                strokeWidth={node.specialBg ? 0 : 1.5}
                                filter="url(#shadow-card)"
                            />
                            <text x={node.x + 20} y={startY - 15} className="text-title-white" textAnchor="start">
                                {node.title}
                            </text>
                            <text x={node.x + 20} y={startY + 15} className="text-sub" textAnchor="start" fill={node.specialBg ? '#E6FFFA' : '#9CA3AF'}>
                                {node.sub.map((line, j) => (
                                    <tspan x={node.x + 20} dy={j === 0 ? 0 : 20} key={j}>
                                        {line}
                                    </tspan>
                                ))}
                            </text>
                        </motion.g>

                        {/* Arrow to Next Node (if present) */}
                        {i < nodes.length - 1 && (
                            <motion.path
                                variants={drawPath}
                                d={`M ${node.x + nodeWidth} ${startY} L ${nodes[i + 1].x - (i === nodes.length - 2 ? 12 : 0)} ${startY}`}
                                className="path-teal"
                                strokeWidth="2.5"
                                markerEnd={i === nodes.length - 2 ? "url(#arrow-teal)" : undefined}
                            />
                        )}
                    </React.Fragment>
                ))}

                {/* --- Branching Curves --- */}

                {/* 1. Early Customer Conviction */}
                <motion.path variants={drawPath} d={pathConviction} className="path-teal" markerEnd="url(#arrow-teal)" />
                <motion.text variants={fadeIn} x={p1Start + 100} y={startY - 155} className="text-label" textAnchor="start">
                    <tspan x={p1Start + 100} dy="0">Early customer conviction</tspan>
                    <tspan x={p1Start + 100} dy="20">or a clear "no"</tspan>
                </motion.text>

                {/* 2. Internal Momentum */}
                <motion.path variants={drawPath} d={pathMomentum} className="path-teal" markerEnd="url(#arrow-teal)" />
                <motion.text variants={fadeIn} x={p2Start + 100} y={startY + 110} className="text-label" textAnchor="start">
                    <tspan x={p2Start + 100} dy="0">Internal momentum</tspan>
                    <tspan x={p2Start + 100} dy="20">powered by a shared value</tspan>
                    <tspan x={p2Start + 100} dy="20">story, not a slide dump</tspan>
                </motion.text>

                {/* 3. Buying Groups */}
                <motion.path variants={drawPath} d={pathBuying} className="path-teal" markerEnd="url(#arrow-teal)" />
                <motion.text variants={fadeIn} x={p3Start + 100} y={startY - 175} className="text-label" textAnchor="start">
                    <tspan x={p3Start + 100} dy="0">Buying groups aligned,</tspan>
                    <tspan x={p3Start + 100} dy="20">clear exec endorsement</tspan>
                </motion.text>

            </motion.svg>
        </div>
    );
};

export default BusinessCaseProcessDiagram;

