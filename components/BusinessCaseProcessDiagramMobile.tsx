import React from 'react';
import { motion } from 'framer-motion';

interface BusinessCaseProcessDiagramMobileProps {
    width?: number | string;
    height?: number | string;
}

const BusinessCaseProcessDiagramMobile: React.FC<BusinessCaseProcessDiagramMobileProps> = ({ width = "100%", height = "auto" }) => {
    const colors = {
        nodeBg: '#1A1D1C',
        accent: '#6FD8C8', // Teal/Aqua
        textMain: '#FFFFFF',
        textSub: '#9CA3AF',
        lastNodeBg: '#6B8E85', // Sage/Greenish
    };

    // Layout configuration for vertical layout
    const nodeWidth = 300;
    const nodeHeight = 100;
    const gap = 40;
    const viewBoxWidth = 380;
    const startX = (viewBoxWidth - nodeWidth) / 2; // Centered horizontally
    const diamondSize = 160;
    const diamondY = 200; // Moved down further to avoid title overlap
    const startY = diamondY + diamondSize / 2 + gap + 80; // Increased gap after diamond to avoid overlap with first node

    // Nodes Data - vertical layout
    const nodes = [
        {
            id: 1,
            title: 'Co-Creation Discovery',
            sub: ['Co-author the problem,', 'metrics, cost of inaction'],
            y: startY
        },
        {
            id: 2,
            title: 'Value-Led Demo',
            sub: ['Clearly illustrate how to', 'achieve desired metrics'],
            y: startY + nodeHeight + gap
        },
        {
            id: 3,
            title: 'Internal Alignment',
            sub: ['Equip champions with', 'tailored business case'],
            y: startY + (nodeHeight + gap) * 2
        },
        {
            id: 4,
            title: 'Commercials & Close',
            sub: ['Finalize cocreated value', 'story and success plan'],
            y: startY + (nodeHeight + gap) * 3,
            specialBg: true
        },
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
                        .text-title-teal { font-family: 'Outfit', sans-serif; font-weight: 700; fill: ${colors.accent}; font-size: 18px; }
                        .text-title-white { font-family: 'Outfit', sans-serif; font-weight: 700; fill: ${colors.textMain}; font-size: 18px; }
                        .text-sub { font-family: 'Outfit', sans-serif; font-weight: 400; fill: ${colors.textSub}; font-size: 14px; }
                        .text-sub-italic { font-family: 'Outfit', sans-serif; font-weight: 400; fill: ${colors.accent}; font-size: 13px; font-style: italic; }
                        .text-label { font-family: 'Outfit', sans-serif; font-weight: 500; fill: ${colors.accent}; font-size: 16px; }
                        .path-teal { stroke: ${colors.accent}; stroke-width: 2.5; fill: none; stroke-linecap: round; }
                    `}} />
                    <ArrowHead id="arrow-teal-down" color={colors.accent} rot={90} />
                    <filter id="shadow-card" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.5" />
                    </filter>
                </defs>

                {/* Initial Text */}
                <motion.text
                    variants={fadeIn}
                    x={viewBoxWidth / 2}
                    y={10}
                    fill="#6FD8C8"
                    textAnchor="middle"
                    fontSize="16"
                    style={{ fill: '#6FD8C8' }}
                >
                    <tspan x={viewBoxWidth / 2} y={10} dy="0">Business Case-</tspan>
                    <tspan x={viewBoxWidth / 2} y={10} dy="22">Driven Process</tspan>
                </motion.text>

                {/* Arrow to diamond */}
                <motion.path
                    variants={drawPath}
                    d={`M ${viewBoxWidth / 2} ${60} L ${viewBoxWidth / 2} ${diamondY - diamondSize / 2 - 20}`}
                    className="path-teal"
                    stroke="#6FD8C8"
                    strokeWidth="2.5"
                    fill="none"
                    markerEnd="url(#arrow-teal-down)"
                />

                {/* --- DIAMOND NODE (Start) --- */}
                <motion.g
                    variants={popIn}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                    style={{ originX: "50%", originY: "50%", transformBox: "fill-box" }}
                >
                    {/* Diamond Shape Background */}
                    <rect
                        x={viewBoxWidth / 2 - diamondSize / 2}
                        y={diamondY - diamondSize / 2}
                        width={diamondSize}
                        height={diamondSize}
                        rx="8"
                        fill="#000000"
                        filter="url(#shadow-card)"
                        transform={`rotate(45 ${viewBoxWidth / 2} ${diamondY})`}
                    />
                    {/* Diamond Border */}
                    <rect
                        x={viewBoxWidth / 2 - diamondSize / 2}
                        y={diamondY - diamondSize / 2}
                        width={diamondSize}
                        height={diamondSize}
                        rx="8"
                        fill="none"
                        stroke="#6FD8C8"
                        strokeWidth="3"
                        transform={`rotate(45 ${viewBoxWidth / 2} ${diamondY})`}
                    />

                    {/* Content (No Rotation) */}
                    {/* Icon Placeholder (Circles) */}
                    <circle cx={viewBoxWidth / 2} cy={diamondY - 40} r="7" fill={colors.accent} />
                    <circle cx={viewBoxWidth / 2 - 12} cy={diamondY - 28} r="5" fill={colors.accent} />
                    <circle cx={viewBoxWidth / 2 + 12} cy={diamondY - 28} r="5" fill={colors.accent} />
                    <circle cx={viewBoxWidth / 2} cy={diamondY - 16} r="3" fill={colors.accent} />

                    <text x={viewBoxWidth / 2} y={diamondY + 8} className="text-title-teal" textAnchor="middle">
                        Value Hypothesis
                    </text>

                    <text x={viewBoxWidth / 2} y={diamondY + 35} className="text-sub-italic" textAnchor="middle" fill="#A0AEC0">
                        <tspan x={viewBoxWidth / 2} dy="0">A draft business case as</tspan>
                        <tspan x={viewBoxWidth / 2} dy="14">the anchor for the sales</tspan>
                        <tspan x={viewBoxWidth / 2} dy="14">process</tspan>
                    </text>
                </motion.g>

                {/* Arrow from diamond to first node */}
                <motion.path
                    variants={drawPath}
                    d={`M ${viewBoxWidth / 2} ${diamondY + diamondSize / 2} L ${viewBoxWidth / 2} ${nodes[0].y - nodeHeight / 2 - 10}`}
                    className="path-teal"
                    stroke="#6FD8C8"
                    strokeWidth="2.5"
                    fill="none"
                    markerEnd="url(#arrow-teal-down)"
                />

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
                            {/* Background card */}
                            <rect
                                x={startX}
                                y={node.y - nodeHeight / 2}
                                width={nodeWidth}
                                height={nodeHeight}
                                rx="16"
                                fill={node.specialBg ? colors.lastNodeBg : colors.nodeBg}
                                filter="url(#shadow-card)"
                            />
                            {/* Border overlay for all nodes */}
                            <rect
                                x={startX}
                                y={node.y - nodeHeight / 2}
                                width={nodeWidth}
                                height={nodeHeight}
                                rx="16"
                                fill="none"
                                stroke={colors.accent}
                                strokeWidth="3"
                            />
                            <text x={startX + nodeWidth / 2} y={node.y - 15} className="text-title-white" textAnchor="middle">
                                {node.title}
                            </text>
                            <text x={startX + nodeWidth / 2} y={node.y + 15} className="text-sub" textAnchor="middle" fill={node.specialBg ? '#E6FFFA' : '#9CA3AF'}>
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
                                className="path-teal"
                                stroke="#6FD8C8"
                                strokeWidth="2.5"
                                fill="none"
                                markerEnd={i === nodes.length - 2 ? "url(#arrow-teal-down)" : undefined}
                            />
                        )}
                    </React.Fragment>
                ))}

            </motion.svg>
        </div>
    );
};

export default BusinessCaseProcessDiagramMobile;
