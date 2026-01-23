import React from 'react';
import { motion } from 'framer-motion';

const ReferencePill: React.FC<{ label: string }> = ({ label }) => (
  <motion.span
    whileHover={{
      scale: 1.1,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.3)'
    }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[7.5px] font-medium text-white/40 ml-1 cursor-pointer transition-colors"
  >
    {label}
  </motion.span>
);

interface ValueHypothesisContentProps {
  activeInnerTab: number;
}

const ValueHypothesisContent: React.FC<ValueHypothesisContentProps> = ({ activeInnerTab }) => {
  return (
    <div className="space-y-8">
      {activeInnerTab === 0 && ( /* Value Hypothesis 2 - Grid & Load Growth */
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-[9px] font-bold text-white leading-tight">
              Value Hypothesis 2
            </h3>
            <p className="text-[9px] font-bold text-white leading-tight">
              “Acme can turn its $73B grid & load-growth plan into a net affordability and earnings engine — if it gets the bill math, large-load strategy, and O&M execution right.”
            </p>
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-white leading-tight pt-1">Core idea (customer-facing):</p>
              <p className="text-[9px] font-normal text-white/70 leading-tight">
                Acme wants to invest $73B through 2030 to handle ~10 GW of new data-center and electrification load, while promising flat or modestly increasing bills after massive 2024 hikes.
                <ReferencePill label="CPUC Case" />
              </p>
              <p className="text-[9px] font-normal text-white/70 leading-tight">
                To make that math work, three things must hold simultaneously:
              </p>
              <ul className="space-y-1 pl-1">
                <li className="text-[9px] font-normal text-white/70 leading-tight">• Large loads show up (and stay) where planned,</li>
                <li className="text-[9px] font-normal text-white/70 leading-tight">• O&M keeps falling 2–3% annually, and</li>
                <li className="text-[9px] font-normal text-white/70 leading-tight">• Financing benefits (like DOE’s $15B low-cost loan <ReferencePill label="LPO Program" /> and wildfire fund reforms) actually flow through to customers</li>
              </ul>
              <p className="text-[9px] font-normal text-white/70 leading-tight pt-1">
                our company’s hypothesis: by building a coherent affordability & growth playbook, Acme can use growth and efficiency to relieve bill pressure and hit its earnings/credit targets, rather than letting these forces work against each other.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[9px] font-bold text-white leading-tight pt-1">Subthemes / potential workstreams</p>
            <ul className="space-y-4">
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">Affordability “Flight Simulator” for the C-Suite</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Create a single, trusted model that connects: grid capex by category, data-center / large load pipeline scenarios, O&M reduction paths, financing (DOE loans, securitizations, wildfire fund costs), rate-design choices and assistance programs, to outcomes like: residential bills through 2030, arrears and write-offs, FFO/debt and EPS.</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Let execs test “what if this project slips?” or “what if we push another $X into wildfire capex?” and see immediate bill and earnings impacts.</p>
              </li>
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">Large-Load Strategy & Tariff Design (Data Centers, Industrial Hubs)</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Analyze the 9–10 GW large-load pipeline scenario-by-scenario: probability of completion, location risk (grid constraints, wildfire, politics), community benefit potential.</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Design tariffs and cost-allocation schemes so each incremental GW: covers its own infrastructure costs, helps reduce average residential/small-business bills, and can be transparently defended at CPUC and in the press.</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Outcome: growth that clearly shows up as bill relief, not just higher system complexity.</p>
              </li>
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">O&M Savings Roadmap Tied to Actual Work</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Map Acme’s O&M savings commitment (already cutting hundreds of millions per year) onto concrete operational levers: vegetation cycles, field crew utilization, outage management & truck rolls, digital tools/automation.</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Prioritize 5–10 initiatives with the best ratio of: savings, time-to-impact, implementation risk. Build tracking and benefit-realization discipline so the CFO can see those savings and regulators can see evidence of “doing our part.”</p>
              </li>
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">Customer-Side Affordability & Arrears Management Strategy</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Use our company’s customer analytics and research expertise to segment: who is most behind on bills, who is most at risk of future arrears, which programs (REACH, Match My Payment, CARE, etc.) are under-utilized.</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Redesign outreach, eligibility, and UX so existing assistance dollars (and the new $50M Acme committed for past-due support) go to the highest-risk, highest-impact households, reducing bad debt and social/political friction.</p>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-[9px] text-white font-bold mb-2 tracking-tight leading-tight opacity-50">Lens Check for Hypothesis 2</p>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Relevance — Very high</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Direct hit on Acme’s stated narrative: big capex + load growth + O&M reductions + DOE financing = stable bills and rising earnings.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• In the center of the CFO, CEO, and regulatory VP job scopes.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Impact — Very high</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• $73B capex and 10 GW of new demand is transformational. A few percent improvement in allocation or O&M performance translates into enormous value.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• A robust plan that actually bends the bill curve could soften opposition to future proceedings and protect ROE.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Urgency — High</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Near-term: 2026 earnings guidance, rate-change milestones in 2025–2027, and GRC proceedings already in motion.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• Cost of delay: each year’s mix of capex, O&M, and load growth “locks in” through rate base and political expectations.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Meaningfulness — Very high</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• This is literally the board and Wall Street story: can Acme grow and invest while stabilizing bills?</p>
                  <p className="text-[9px] text-white/50 leading-tight">• Success is directly tied to CEO commitments and could define the careers of the CFO and key regulatory leaders.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Confidence — Medium-high</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Strong external evidence: $73B plan, earnings guidance, DOE loan, rate stabilization messaging, big rate increase backlash, arrears data.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• our company has proven patterns in rate strategy, large-load analysis, and O&M benchmarking with other utilities.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Differentiation — High on integration</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Many advisors work on pieces of this (capex, rates, CX).</p>
                  <p className="text-[9px] text-white/50 leading-tight">• our company’s edge is in creating a joined-up affordability + growth model that includes customer insight, not just finance and engineering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeInnerTab === 1 && ( /* Value Hypothesis 1 - Wildfire Risk */
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-[9px] font-bold text-white leading-tight">
              Value Hypothesis 1
            </h3>
            <p className="text-[9px] font-bold text-white leading-tight">
              “Acme can hit its wildfire risk targets with 10–20% less total capital by optimizing where and how it invests in undergrounding and mitigation.”
            </p>
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-white leading-tight pt-1">Core idea (customer-facing):</p>
              <p className="text-[9px] font-normal text-white/70 leading-tight">
                Acme is already committing billions to wildfire mitigation and undergrounding — with cost per mile now around $3.1M, down from $4M thanks to process improvements.
                <ReferencePill label="Q3 Investor Brief" />
              </p>
              <p className="text-[9px] font-normal text-white/70 leading-tight">
                Given the sheer scale (700+ miles underground <ReferencePill label="WMP 2025" /> plus 500 miles other wildfire upgrades by 2026, and more beyond), even modest improvements in portfolio targeting and execution could unlock hundreds of millions to low single-digit billions in avoided or redeployed spend while still meeting safety and regulatory expectations.
              </p>
              <p className="text-[9px] font-normal text-white/70 leading-tight pt-1">
                our company’s hypothesis: with better risk–cost analytics, program design, and execution discipline, Acme can buy more risk reduction per dollar and strengthen its story with CPUC and legislators.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[9px] font-bold text-white leading-tight pt-1">Subthemes / potential workstreams</p>
            <ul className="space-y-4">
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">Risk–Cost Targeting Engine for Wildfire Investments</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Build a unified model that ranks circuits/segments by:</p>
                <ul className="pl-4 space-y-1">
                  <li className="text-[9px] font-normal text-white/60 leading-tight">• ignition risk and potential fire consequences,</li>
                  <li className="text-[9px] font-normal text-white/60 leading-tight">• cost per mile for undergrounding vs covered conductor vs targeted vegetation,</li>
                  <li className="text-[9px] font-normal text-white/60 leading-tight">• customer / equity factors (DACs, PSPS fatigue, critical facilities),</li>
                  <li className="text-[9px] font-normal text-white/60 leading-tight">• constructability and permitting friction.</li>
                </ul>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Use it to stress-test current plans and propose alternative portfolios: “Here’s a scenario with the same risk reduction but 12–15% less capital,” or “Here’s how to get 5% more risk reduction with the same budget.”</p>
              </li>
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">Undergrounding Strategy & CPUC Narrative Design</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Co-develop a “why these miles?” framework that Acme can use in: Wildfire Mitigation Plans (WMP), undergrounding applications, GRC testimony.</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Explicitly quantify: risk reduction per dollar, comparison vs cheaper mitigations, community benefits (fewer PSPS, equity outcomes). Goal: reduce the likelihood of capex being cut or heavily conditioned in CPUC decisions.</p>
              </li>
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">Execution Efficiency & Cost Curve Acceleration</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Benchmark Acme’s per-mile undergrounding and vegetation costs against peer utilities. Identify where innovations (local contractors, construction methods, work bundling, trench standards) are working and where they’re not, to push below the current ~$3.1M/mile cost. Design field and contractor playbooks that translate into repeatable cost reductions.</p>
              </li>
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">Outcome & Assurance Dashboard for Board and Regulators</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Create an executive dashboard that tracks: ignition metrics, miles undergrounded / hardened, spend vs plan, risk reduction achieved vs promised. Gives the board and CPUC tangible evidence that safety targets are being hit efficiently, not just expensively.</p>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-[9px] text-white font-bold mb-2 tracking-tight leading-tight opacity-50">Lens Check for Hypothesis 1</p>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Relevance — Very high</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Directly maps to top priorities: wildfire mitigation and undergrounding, safety certificate, and CPUC scrutiny.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• Clearly in scope for COO, Chief Safety Officer, regulatory leadership, and CFO.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Impact — Very high</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Undergrounding/mitigation is a multi-billion dollar program. Shifting 10–20% of spend via better targeting/efficiency could mean hundreds of millions to {'>'}$1B+ in capital avoided or better used, and a stronger case for maintaining ROE.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Urgency — Very high</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Active WMP cycles, undergrounding plans and GRC are all on the 2026–2030 time horizon; Acme is mid-stream, not planning in theory.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• Each year of “good but not optimal” spend locks in billions into rate base.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Meaningfulness — Career-defining</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Success is directly visible to: Board (safety, spend discipline), CPUC, Governor/legislature.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• Another catastrophic fire or perception of wasteful undergrounding would be career-ending for multiple execs; getting this right is the opposite.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Confidence — High</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Strong support from Acme’s own numbers on undergrounding scale and cost trajectory, and Wildfire Mitigation Plan detail.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• our company has deep experience in risk modeling, asset planning, and regulatory strategy at other IOUs (pattern fits).</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Differentiation — Moderate to high</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Plenty of firms can “do modeling”; fewer combine: utility-specific risk/asset expertise, regulatory storytelling, and customer/community impact framing under one roof.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• our company’s positioning as a strategy + analytics + CX partner (not just an engineering consultant) is an advantage here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeInnerTab === 2 && ( /* Value Hypothesis 3 - Trust & Regulatory Permission */
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-[9px] font-bold text-white leading-tight">
              Value Hypothesis 3
            </h3>
            <p className="text-[9px] font-bold text-white leading-tight">
              “Acme can rebuild trust and regulatory permission by radically improving the experience of its hardest-hit customers (PSPS/EPSS, high bills, arrears) over the next 24–36 months.”
            </p>
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-white leading-tight pt-1">Core idea (customer-facing):</p>
              <p className="text-[9px] font-normal text-white/70 leading-tight">
                Acme has: some of the highest bills in the U.S., 1 in 5 customers behind on payments <ReferencePill label="Arrears Analysis" /> owing roughly $700 on average <ReferencePill label="Customer Impact Study" />, and a long history of PSPS/wildfire-related outages and media scrutiny.
              </p>
              <p className="text-[9px] font-normal text-white/70 leading-tight">
                Even with slight bill decreases in late 2025 and forecast stability in 2026, customers still feel the pain and distrust from years of spikes and outages.
              </p>
              <p className="text-[9px] font-normal text-white/70 leading-tight pt-1">
                our company’s hypothesis: if Acme dramatically improves the lived experience of the customers who are most impacted by PSPS, wildfires, and bill pressure, it can: reduce complaints and political heat, strengthen its narrative in rate cases, and actually increase adoption of programs that lower system cost (EE, DR, assistance, DERs).
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[9px] font-bold text-white leading-tight pt-1">Subthemes / potential workstreams</p>
            <ul className="space-y-4">
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">“Who Hurts Most?” – Deep Customer Pain Mapping</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Use data and research to identify: PSPS-exposed rural/foothill communities, urban/suburban “rate-shock” customers, small business segments at risk of closure, and map each group’s: outage history, bill trajectory, arrears status, program participation.</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Build personas and pain maps that execs and regulators can immediately understand.</p>
              </li>
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">PSPS / Wildfire Experience Redesign</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Redesign the end-to-end PSPS/EPSS experience: notification cadence and clarity, proactive offers (battery programs, resilience plans, community resources), after-event follow-up with targeted support.</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Measure impact on: complaint rates, assistance uptake, trust/satisfaction in PSPS areas.</p>
              </li>
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">Bill, Assistance & Energy Management UX Overhaul</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Simplify how customers: understand their bill (what’s driving cost), see future bill trajectory, discover and enroll in help (REACH, Match My Payment, CARE, LIHEAP, etc.).</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Use A/B testing to maximize: arrears reduction, program participation, digital self-service.</p>
              </li>
              <li className="space-y-1">
                <p className="text-[9px] font-bold text-white/90 leading-tight">Evidence Pack for CPUC & Legislators</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Turn the above into a quantitative and qualitative evidence pack: PSPS-area complaint reductions, arrears stabilization or decline, program uptake in disadvantaged communities, to support: undergrounding/mitigation approvals, rate cases, ROE discussions.</p>
                <p className="text-[9px] font-normal text-white/60 leading-tight">Helps Acme argue: “We’re not just investing in assets; we’re measurably improving our customers’ experience and protecting vulnerable groups.”</p>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-[9px] text-white font-bold mb-2 tracking-tight leading-tight opacity-50">Lens Check for Hypothesis 3</p>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Relevance — High</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Directly aligned with affordability, wildfire/PSPS, and public trust concerns that are front-page news and a constant theme in legislative and CPUC discourse.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• In the job scope of Chief Customer Officer, regulatory team, and indirectly CEO.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Impact — Medium-high (with leverage)</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• CX doesn’t change billions of capex directly, but: fewer complaints & better satisfaction → more regulatory goodwill, fewer penalties, better targeting of assistance → less bad debt, better political optics, higher program participation → lower system costs over time.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• Also raises odds that big plans (Hypotheses 1 & 2) get approved and accepted.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Urgency — High</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Customers are currently in arrears and angry, not theoretically unhappy.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• Acme is actively rolling out credits and assistance; the next 1–2 years are critical to shift narrative from “worst in class” to “improving.”</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Meaningfulness — High</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Politically salient; will show up in: headlines, CPUC public comment, local government reactions to projects.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• For a Chief Customer Officer or exec sponsor, success here would be career-making because it flips a long-term negative story.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Confidence — Medium-high</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Plenty of utility benchmarks show CX improvements driving regulatory and program outcomes; Acme’s own public numbers on arrears, assistance and credits validate the pain and the levers.</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-white leading-tight">Differentiation — High</p>
                <div className="pl-1 space-y-1">
                  <p className="text-[9px] text-white/50 leading-tight">• Many firms offer CX projects; far fewer combine: CX research, utility program design, behavioral science, and deep regulatory context.</p>
                  <p className="text-[9px] text-white/50 leading-tight">• our company’s existing footprint in utility customer strategy gives you credibility and speed that generic CX agencies won’t have.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* How to Use These Hypotheses */}
      <div className="mt-8 space-y-4">
        <h3 className="text-[9px] font-bold text-white opacity-60">How to Use These Hypotheses</h3>
        <div className="space-y-3">
          <p className="text-[9px] font-normal text-white/70 leading-tight">
            For internal our company execs, these are essentially three big bets:
          </p>
          <ul className="space-y-1 pl-1">
            <li className="text-[9px] font-bold text-white/90 leading-tight">• Safety at least cost</li>
            <li className="text-[9px] font-bold text-white/90 leading-tight">• Growth-powered affordability and earnings</li>
            <li className="text-[9px] font-bold text-white/90 leading-tight">• Trust and permission to operate</li>
          </ul>
          <p className="text-[9px] font-normal text-white/70 leading-tight pt-1">
            Each comes with clear subthemes and workstreams you can shape into:
          </p>
          <ul className="space-y-1 pl-1">
            <li className="text-[9px] font-normal text-white/70 leading-tight">• discovery questions,</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• joint working sessions,</li>
            <li className="text-[9px] font-normal text-white/70 leading-tight">• and co-authored POVs or roadmaps with Acme.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ValueHypothesisContent;
