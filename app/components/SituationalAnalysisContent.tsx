import React from 'react';

const SituationalAnalysisContent: React.FC = () => {
  return (
    <>
      {/* Section 1: Wildfire Risk */}
      <div className="space-y-1">
        <h3 className="text-[9px] font-bold text-white leading-tight">
          1. Wildfire risk: the existential problem that's insanely expensive to solve
        </h3>
        <div className="space-y-2">
          <p className="text-[9px] font-bold text-white/90 leading-tight">What they're doing</p>
          <ul className="space-y-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Acme has now undergrounded 1,000 miles of lines in high fire-risk areas, removing 8.4% of system-wide ignition risk since 2023 and targeting 1,600 miles undergrounded and ~18% risk reduction by the end of 2026. <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-white/40 ml-1">Acme Corporation</span></li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• The cost per mile of undergrounding has fallen from $4M to $3.1M in 2025 as they scale the program. <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-white/40 ml-1">Acme Corporation</span></li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Their wildfire plan says operational programs (vegetation management, inspections, system hardening) can achieve about a 40% risk reduction in high fire-risk zones over 1–2 years. <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-white/40 ml-1">CancerHub</span></li>
          </ul>
          <p className="text-[9px] font-bold text-white/90 leading-tight pt-1">Why this is still a massive challenges</p>
          <ul className="space-y-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Even at the improved $3.1M/mile, those 1,000 miles already represent roughly $3.1B of capital. A full 10,000-mile undergrounding vision is tens of billions in today's dollars.</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Wildfire safety is largely funded through customer bills and wildfire fund contributions, plus some securitized debt. The Q3 2025 earnings materials show "unrecoverable net interest" associated with wildfire fund financing and other debt that isn't fully in rates. <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-white/40 ml-1">Q3 CapitolX</span></li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Their own wildfire mitigation update is explicit that even after big risk reductions, there's residual tail risk; and earnings guidance can't cleanly forecast wildfire-related costs because they depend on weather, legal outcomes, and policy.</li>
          </ul>
          <p className="text-[9px] font-bold text-white/90 leading-tight pt-1">What it costs them if they don't solve it</p>
          <ul className="space-y-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Another catastrophic fire could easily be a tens-of-billions-of-dollars event (based on past fire settlements and bankruptcy history), triggering rating downgrades, political blowback, and equity dilution.</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Failing to keep ignition metrics moving down threatens their "safety certificate" and cost recovery. <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-white/40 ml-1">Q3 CapitolX</span></li>
          </ul>
          <p className="text-[9px] font-normal text-white/50 italic leading-tight pt-1">
            So wildfire risk is not just a line item—it's existential risk on the balance sheet and license to operate, with a cost base in the tens of billions.
          </p>
        </div>
      </div>


      {/* Section 2: Affordability */}
      <div className="space-y-1">
        <h3 className="text-[9px] font-bold text-white leading-tight">
          2. Affordability vs capital intensity: caught between angry customers and a $73B capex plan
        </h3>
        <div className="space-y-2">
          <p className="text-[9px] font-bold text-white/90 leading-tight">Where bills are today</p>
          <ul className="space-y-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Acme rates have risen ~101% from 2015 to 2025. <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-white/40 ml-1">NBC Bay Area</span></li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• 2024 alone added about $440/year to the average residential bill.</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• In 2025, average monthly bills are around $294, and about 1 in 5 customers is behind on payments. <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-white/40 ml-1">SF Chronicle</span></li>
          </ul>
          <p className="text-[9px] font-bold text-white/90 leading-tight pt-1">Their plan to stabilize bills</p>
          <ul className="space-y-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Acme's 2027–2030 General Rate Case proposal implies a 3.6% bill increase in 2027, but expiring charges mean total bills are expected to be flat.</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• DOE's $15B federal loan guarantee (Project Polaris) is framed to save customers up to $1B.</li>
          </ul>
          <p className="text-[9px] font-bold text-white/90 leading-tight pt-1">The challenge</p>
          <p className="text-[9px] font-normal text-white/60 leading-tight">
            At the same time, Acme has a $73B 2026–2030 capital plan. Any slip—capex overruns, wildfire surprises, O&M savings not materializing—shows up either as higher bills or weakened credit.
          </p>
        </div>
      </div>

      {/* Section 3: Data Centers & Grid Build */}
      <div className="space-y-1">
        <h3 className="text-[9px] font-bold text-white leading-tight">
          3. Executing a $73B grid build for AI/data centers & electrification without tripping over themselves
        </h3>
        <div className="space-y-2">
          <p className="text-[9px] font-bold text-white/90 leading-tight">The plan</p>
          <ul className="space-y-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Acme expects about 10 GW of new demand over the next decade, largely from data centers.</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• As of late 2025, they report 9.6 GW of data-center projects in their interconnection queue.</li>
          </ul>
          <p className="text-[9px] font-bold text-white/90 leading-tight pt-1">Execution challenges</p>
          <ul className="space-y-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Pipeline volatility: The pipeline has already shrunk from earlier quarters (~10 GW down to 9.6 GW).</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Permitting & interconnection timing: Large data centers need new substations and transmission upgrades.</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Management has committed to avoiding ramped capex beyond what credit metrics can support.</li>
          </ul>
          <p className="text-[9px] font-normal text-white/50 italic leading-tight pt-1">
            Delay or cancellation reduces the incremental revenue counted on to spread fixed costs and lower average bills.
          </p>
        </div>
      </div>

      {/* Section 4: Regulatory */}
      <div className="space-y-1">
        <h3 className="text-[9px] font-bold text-white leading-tight">
          4. Regulatory and policy uncertainty: CPUC, wildfire law, and cost of capital
        </h3>
        <div className="space-y-2">
          <p className="text-[9px] font-normal text-white/70 leading-tight">
            The Q3 2025 earnings deck maps out a dense calendar: cost of capital decisions, wildfire fund reviews, and safety certificate renewals through 2026.
          </p>
          <p className="text-[9px] font-bold text-white/90 leading-tight pt-1">Key friction points</p>
          <ul className="space-y-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Acme has asked to raise Authorized ROE from 10.3% to 11.3%, adding ~$5.50/month to bills.</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• SB 254 obligations remain a massive $18B liability for the Wildfire Fund.</li>
          </ul>
        </div>
      </div>

      {/* Section 5: O&M Efficiency */}
      <div className="space-y-1">
        <h3 className="text-[9px] font-bold text-white leading-tight">
          5. Sustained O&M efficiency and organizational change
        </h3>
        <div className="space-y-2">
          <ul className="space-y-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• 2023 reduction: 5.5%</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• 2024 reduction: 4%</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Ongoing target: 2-3%</li>
          </ul>
          <p className="text-[9px] font-normal text-white/70 leading-tight pt-1">
            The easy wins are already baked in. Deeper savings now require re-engineering work management and reskilling a unionized workforce.
          </p>
          <p className="text-[9px] text-white/90 font-normal italic leading-tight">
            Under-delivery here undermines their entire narrative of a simple, affordable model.
          </p>
        </div>
      </div>

      {/* Section 6: Customer Trust */}
      <div className="space-y-1">
        <h3 className="text-[9px] font-bold text-white leading-tight">
          6. Customer trust and social licence: lowest satisfaction in the sector
        </h3>
        <div className="space-y-2">
          <p className="text-[9px] font-normal text-white/70 leading-tight inline">• ACSI 2025 satisfaction score: 66 (down 8% from 72)</p>
          <p className="text-[9px] font-normal text-white/70 leading-tight pt-1">
            Last among all major U.S. utilities. This directly constrains their leverage for rate increases and big infrastructure programs.
          </p>
        </div>
      </div>

      {/* Section 7: Digital & AI */}
      <div className="space-y-1">
        <h3 className="text-[9px] font-bold text-white leading-tight">
          7. Digital, AI, and data: high expectations, messy reality
        </h3>
        <div className="space-y-2">
          <ul className="space-y-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Layering AI on top of decades of legacy systems and siloed operational datasets.</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Stalling at "cool pilot, no scale" across 28k employees.</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• Expanded attack surface as they open the grid to virtual power plants.</li>
          </ul>
        </div>
      </div>

      {/* Section 8: Gas Business */}
      <div className="space-y-1">
        <h3 className="text-[9px] font-bold text-white leading-tight">
          8. Gas business and the risk of stranded assets
        </h3>
        <div className="space-y-2">
          <p className="text-[9px] font-normal text-white/70 leading-tight">
            As gas consumption falls, fixed costs don't. Remaining customers could see charges rise sharply.
          </p>
          <p className="text-[9px] font-normal text-white/60 leading-tight pt-1">
            If regulators decide gas assets are no longer "used and useful," portions of the rate base could be written down.
          </p>
        </div>
      </div>

      {/* Summary Conclusion */}
      <div className="mt-6">
        <p className="text-[9px] text-white font-bold mb-2 tracking-tight leading-tight">Executive tensions view</p>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-white/90 leading-tight">Safety vs affordability</p>
            <p className="text-[9px] text-white/50 leading-tight">Undergrounding is a $5B+ need, but 1 in 5 can't keep up with bills.</p>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-white/90 leading-tight">Growth vs execution risk</p>
            <p className="text-[9px] text-white/50 leading-tight">Data centers can lower bills but the pipeline is highly fluid.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SituationalAnalysisContent;
