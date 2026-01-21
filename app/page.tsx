const BusinessCaseDiagram = ({ width = 700, height = 700 }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 700 700"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        {/* Background */}
        <rect width="700" height="700" fill="black" />

        {/* Center Node */}
        <circle cx="350" cy="350" r="110" fill="#24322D" />
        <text
          x="350"
          y="340"
          textAnchor="middle"
          fill="white"
          fontSize="28"
          fontWeight="600"
        >
          Business
        </text>
        <text
          x="350"
          y="375"
          textAnchor="middle"
          fill="white"
          fontSize="28"
          fontWeight="600"
        >
          Case
        </text>

        {/* Connector Lines */}
        <g stroke="#4FF0D8" strokeWidth="2">
          <line x1="350" y1="240" x2="350" y2="150" />
          <line x1="450" y1="300" x2="560" y2="230" />
          <line x1="450" y1="400" x2="560" y2="470" />
          <line x1="350" y1="460" x2="350" y2="580" />
          <line x1="250" y1="400" x2="140" y2="470" />
          <line x1="250" y1="300" x2="140" y2="230" />
        </g>

        {/* Outer Nodes */}
        {[
          { cx: 350, cy: 120, label: "Strategic\nInitiatives" },
          { cx: 590, cy: 210, label: "Challenges" },
          { cx: 590, cy: 490, label: "Stakeholder\nLandscape" },
          { cx: 350, cy: 610, label: "Target\nOutcomes" },
          { cx: 110, cy: 490, label: "Cost of\nInaction" },
          { cx: 110, cy: 210, label: "Business\nObjectives" },
        ].map((node, index) => (
          <g key={index}>
            <circle cx={node.cx} cy={node.cy} r="42" fill="#24322D" />
            <text
              x={node.cx}
              y={node.cy + 60}
              textAnchor="middle"
              fill="#4FF0D8"
              fontSize="14"
              fontWeight="500"
              whiteSpace="pre-line"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default BusinessCaseDiagram;
