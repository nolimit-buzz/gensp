import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BusinessCaseDiagramProps {
    width?: number | string;
    height?: number | string;
}

const BusinessCaseDiagram: React.FC<BusinessCaseDiagramProps> = ({ width = 800, height = 800 }) => {
    // Constants
    const colors = {
        text: '#6FD8C8',
        nodeBg: '#171E1CB2',
        edges: '#6FD8C8',
        white: '#FFFFFF',
    };

    const center = { x: 400, y: 300 };
    const rCenter = 100;
    const rSmall = 42;

    const posStratInit = { x: 273, y: 173 };
    const posBusObj = { x: 130, y: 250 };
    const posCostInaction = { x: 273, y: 427 };
    const posTargetOutcomes = { x: 400, y: 540 };
    const posSuccessPlan = { x: 550, y: 540 };
    const posStakeholder = { x: 527, y: 427 };
    const posIndustry = { x: 680, y: 300 };
    const posChallenges = { x: 527, y: 173 };

    const getLineCoords = (p1: { x: number, y: number }, p2: { x: number, y: number }, r1: number, r2: number) => {
        const dx = p2.x - p1.x; const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist === 0) return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
        const cos = dx / dist; const sin = dy / dist;
        return { x1: p1.x + r1 * cos, y1: p1.y + r1 * sin, x2: p2.x - r2 * cos, y2: p2.y - r2 * sin };
    };

    // Define lines with levels
    const lines = [
        // Level 1 Lines
        { ...getLineCoords(center, posStratInit, rCenter, rSmall), level: 1 },
        { ...getLineCoords(center, posCostInaction, rCenter, rSmall), level: 1 },
        { ...getLineCoords(center, posStakeholder, rCenter, rSmall), level: 1 },

        // Level 2 Lines
        { ...getLineCoords(posStratInit, posBusObj, rSmall, rSmall), level: 2 },
        { ...getLineCoords(posCostInaction, posTargetOutcomes, rSmall, rSmall), level: 2 },
        { ...getLineCoords(posStakeholder, posIndustry, rSmall, rSmall), level: 2 },

        // Level 3 Lines
        { ...getLineCoords(posTargetOutcomes, posSuccessPlan, rSmall, rSmall), level: 3 },
        { ...getLineCoords(posIndustry, posChallenges, rSmall, rSmall), level: 3 },
    ];

    // Animation State
    const [animationState, setAnimationState] = useState("visible");

    useEffect(() => {
        // Switch to 'pulse' after entrance animation completes
        const timer = setTimeout(() => {
            setAnimationState("pulse");
        }, 2500); // 2.5s covers the entrance sequence
        return () => clearTimeout(timer);
    }, []);

    // Timings
    const T_CENTER = 0;
    const T_L1_EDGE = 0.2;
    const T_L1_NODE = 0.7;
    const T_L2_EDGE = 0.9;
    const T_L2_NODE = 1.4;
    const T_L3_EDGE = 1.6;
    const T_L3_NODE = 2.1;

    // Variants
    const centerNodeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { delay: T_CENTER, type: 'spring' as const, stiffness: 200, damping: 20 }
        },
        pulse: {
            scale: 1,
            opacity: 1
        },
        hover: {
            scale: 1.1,
            filter: "drop-shadow(0 0 15px rgba(23, 30, 28, 0.8))",
            cursor: "pointer",
            transition: { type: "spring" as const, stiffness: 300 }
        }
    };

    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (level: number) => {
            let delay = 0;
            if (level === 1) delay = T_L1_EDGE;
            if (level === 2) delay = T_L2_EDGE;
            if (level === 3) delay = T_L3_EDGE;
            return {
                pathLength: 1,
                opacity: 1,
                transition: { delay, duration: 0.6, ease: "easeOut" as const }
            };
        },
        pulse: {
            pathLength: 1,
            opacity: [1, 0.4, 1], // Pulse effect
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const
            }
        }
    };

    const peripheralNodeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (level: number) => {
            let delay = 0;
            if (level === 1) delay = T_L1_NODE;
            if (level === 2) delay = T_L2_NODE;
            if (level === 3) delay = T_L3_NODE;
            return {
                scale: 1,
                opacity: 1,
                transition: { delay, type: 'spring' as const, stiffness: 200, damping: 20 }
            };
        },
        pulse: {
            scale: 1,
            opacity: 1
        },
        hover: {
            scale: 1.1,
            filter: "drop-shadow(0 0 10px rgba(111, 216, 200, 0.3))",
            cursor: "pointer",
            transition: { type: "spring" as const, stiffness: 300 }
        }
    };

    return (
        <motion.svg
            width={width}
            height={height}
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate={animationState}
        >
            <defs>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
                    .bg-circle { fill: ${colors.nodeBg}; }
                    .text-teal { fill: ${colors.text}; font-family: 'Outfit', sans-serif; font-weight: 700; }
                    .text-white { fill: ${colors.white}; font-family: 'Outfit', sans-serif; font-weight: 700; text-anchor: middle; }
                    .line { stroke: ${colors.edges}; stroke-width: 1.5; }
                    .icon-stroke { stroke: ${colors.white}; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
                    .icon-fill { fill: ${colors.white}; }
                `}} />
            </defs>

            {/* Center Node */}
            <motion.g
                variants={centerNodeVariants}
                style={{ originX: "50%", originY: "50%", transformBox: "fill-box" }}
                whileHover="hover"
            >
                <circle cx={center.x} cy={center.y} r={rCenter} className="bg-circle" />
                <text x={center.x} y={center.y - 10} fontSize="28" className="text-white">Business</text>
                <text x={center.x} y={center.y + 25} fontSize="28" className="text-white">Case</text>
            </motion.g>

            {/* Lines */}
            {lines.map((l, i) => (
                <motion.line
                    key={i}
                    x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                    className="line"
                    variants={lineVariants}
                    custom={l.level}
                />
            ))}

            {/* Level 1 Nodes */}
            {/* Strategic Initiatives */}
            <motion.g
                style={{ x: posStratInit.x, y: posStratInit.y, originX: "50%", originY: "50%", transformBox: "fill-box" }}
                variants={peripheralNodeVariants}
                custom={1}
                whileHover="hover"
            >
                <circle cx="0" cy="0" r={rSmall} className="bg-circle" />
                <g transform="scale(0.8)">
                    <path d="M-10 -10 H 10 M-10 0 H 10 M-10 10 H 5" className="icon-stroke" />
                    <path d="M5 5 L10 10 L5 15" className="icon-stroke" />
                    <line x1="10" y1="10" x2="10" y2="0" className="icon-stroke" />
                </g>
                <text x="0" y="-70" fontSize="14" className="text-teal" textAnchor="middle">Strategic</text>
                <text x="0" y="-55" fontSize="14" className="text-teal" textAnchor="middle">Initiatives</text>
            </motion.g>

            {/* Cost of Inaction */}
            <motion.g
                style={{ x: posCostInaction.x, y: posCostInaction.y, originX: "50%", originY: "50%", transformBox: "fill-box" }}
                variants={peripheralNodeVariants}
                custom={1}
                whileHover="hover"
            >
                <circle cx="0" cy="0" r={rSmall} className="bg-circle" />
                <g transform="scale(0.8)">
                    <path d="M-22 -15 H -18 V 5 H -14 L -20 12 L -26 5 H -22 Z" className="icon-stroke" />
                    <path d="M-6 -25 H 6 V 10 H 12 L 0 25 L -12 10 H -6 Z" className="icon-stroke" />
                    <path d="M18 -15 H 22 V 5 H 26 L 20 12 L 14 5 H 18 Z" className="icon-stroke" />
                </g>
                <text x="-55" y="10" fontSize="14" className="text-teal" textAnchor="end">Cost of</text>
                <text x="-55" y="30" fontSize="14" className="text-teal" textAnchor="end">Inaction</text>
            </motion.g>

            {/* Stakeholder Landscape */}
            <motion.g
                style={{ x: posStakeholder.x, y: posStakeholder.y, originX: "50%", originY: "50%", transformBox: "fill-box" }}
                variants={peripheralNodeVariants}
                custom={1}
                whileHover="hover"
            >
                <circle cx="0" cy="0" r={rSmall} className="bg-circle" />
                <image href="/stakeholder.svg" x="-26" y="-26" width="52" height="52" />
                <text x="55" y="5" fontSize="14" className="text-teal" textAnchor="start">Stakeholder</text>
                <text x="55" y="20" fontSize="14" className="text-teal" textAnchor="start">Landscape</text>
            </motion.g>

            {/* Level 2 Nodes */}
            {/* Business Objectives */}
            <motion.g
                style={{ x: posBusObj.x, y: posBusObj.y, originX: "50%", originY: "50%", transformBox: "fill-box" }}
                variants={peripheralNodeVariants}
                custom={2}
                whileHover="hover"
            >
                <circle cx="0" cy="0" r={rSmall} className="bg-circle" />
                <g transform="scale(0.8)">
                    <circle cx="0" cy="0" r="30" className="icon-stroke" />
                    <circle cx="0" cy="0" r="20" className="icon-stroke" />
                    <circle cx="0" cy="0" r="10" className="icon-stroke" />
                    <path d="M0 0 L20 -20" className="icon-stroke" />
                    <path d="M16 -16 L24 -16 L24 -24 L16 -24 Z" className="icon-stroke" />
                </g>
                <text x="-55" y="-10" fontSize="14" className="text-teal" textAnchor="end">Business</text>
                <text x="-55" y="10" fontSize="14" className="text-teal" textAnchor="end">Objectives</text>
            </motion.g>

            {/* Target Outcomes */}
            <motion.g
                style={{ x: posTargetOutcomes.x, y: posTargetOutcomes.y, originX: "50%", originY: "50%", transformBox: "fill-box" }}
                variants={peripheralNodeVariants}
                custom={2}
                whileHover="hover"
            >
                <circle cx="0" cy="0" r={rSmall} className="bg-circle" />
                <g transform="scale(0.8)">
                    <circle cx="0" cy="0" r="20" className="icon-stroke" />
                    <line x1="0" y1="-25" x2="0" y2="-15" className="icon-stroke" />
                    <line x1="0" y1="15" x2="0" y2="25" className="icon-stroke" />
                    <line x1="-25" y1="0" x2="-15" y2="0" className="icon-stroke" />
                    <line x1="15" y1="0" x2="25" y2="0" className="icon-stroke" />
                    <circle cx="0" cy="0" r="4" className="icon-stroke" />
                </g>
                <text x="0" y="65" fontSize="14" className="text-teal" textAnchor="middle">Target</text>
                <text x="0" y="80" fontSize="14" className="text-teal" textAnchor="middle">Outcomes</text>
            </motion.g>

            {/* Industry Trends */}
            <motion.g
                style={{ x: posIndustry.x, y: posIndustry.y, originX: "50%", originY: "50%", transformBox: "fill-box" }}
                variants={peripheralNodeVariants}
                custom={2}
                whileHover="hover"
            >
                <circle cx="0" cy="0" r={rSmall} className="bg-circle" />
                <g transform="scale(0.8)">
                    <rect x="-20" y="5" width="8" height="15" className="icon-stroke" />
                    <rect x="-8" y="-5" width="8" height="25" className="icon-stroke" />
                    <rect x="4" y="-15" width="8" height="35" className="icon-stroke" />
                    <polyline points="-25,0 -10,-10 5,-20 20,-15" className="icon-stroke" />
                    <circle cx="-25" cy="0" r="2" fill={colors.white} />
                    <circle cx="-10" cy="-10" r="2" fill={colors.white} />
                    <circle cx="5" cy="-20" r="2" fill={colors.white} />
                    <circle cx="20" cy="-15" r="2" fill={colors.white} />
                </g>
                <text x="55" y="5" fontSize="14" className="text-teal" textAnchor="start">Industry</text>
                <text x="55" y="20" fontSize="14" className="text-teal" textAnchor="start">Trends</text>
            </motion.g>

            {/* Level 3 Nodes */}
            {/* Challenges */}
            <motion.g
                style={{ x: posChallenges.x, y: posChallenges.y, originX: "50%", originY: "50%", transformBox: "fill-box" }}
                variants={peripheralNodeVariants}
                custom={3}
                whileHover="hover"
            >
                <circle cx="0" cy="0" r={rSmall} className="bg-circle" />
                <g transform="scale(0.8)">
                    <path d="M0 -25 L25 20 H-25 Z" className="icon-stroke" />
                    <line x1="0" y1="-10" x2="0" y2="10" className="icon-stroke" strokeWidth="2.5" />
                    <circle cx="0" cy="15" r="2" fill={colors.white} />
                </g>
                <text x="0" y="-55" fontSize="14" className="text-teal" textAnchor="middle">Challenges</text>
            </motion.g>

            {/* Success Plan */}
            <motion.g
                style={{ x: posSuccessPlan.x, y: posSuccessPlan.y, originX: "50%", originY: "50%", transformBox: "fill-box" }}
                variants={peripheralNodeVariants}
                custom={3}
                whileHover="hover"
            >
                <circle cx="0" cy="0" r={rSmall} className="bg-circle" />
                <g transform="scale(0.75)">
                    <circle cx="-15" cy="-10" r="4" className="icon-stroke" />
                    <circle cx="0" cy="0" r="4" className="icon-stroke" />
                    <circle cx="15" cy="10" r="4" className="icon-stroke" />
                    <path d="M-11 -10 Q -5 -10 0 -4 T 11 10" className="icon-stroke" fill="none" />
                    <path d="M12 10 L8 6 M12 10 L8 14" className="icon-stroke" strokeWidth="1" />
                </g>
                <text x="0" y="65" fontSize="14" className="text-teal" textAnchor="middle">Success</text>
                <text x="0" y="80" fontSize="14" className="text-teal" textAnchor="middle">Plan</text>
            </motion.g>

        </motion.svg>
    );
};

export default BusinessCaseDiagram;
