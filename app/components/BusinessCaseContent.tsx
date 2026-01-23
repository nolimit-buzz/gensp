import React from 'react';

interface BusinessCaseContentProps {
  activeInnerTab: number;
}

const BusinessCaseContent: React.FC<BusinessCaseContentProps> = ({ activeInnerTab }) => {
  return (
    <div className="space-y-8">
      {activeInnerTab === 0 && (
        /* Persona Overview */
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-[9px] font-bold text-white leading-tight">
              5. Impacted Initiatives
            </h3>
            <p className="text-[9px] font-normal text-white/70 leading-tight">
              This control tower would directly support and sharpen:
            </p>
            <ul className="space-y-2 pt-2 pl-1">
              <li className="text-[9px] font-normal text-white/70 leading-tight">
                • The $63B–$73B capex program (pacing, mix, and prioritization).
              </li>
              <li className="text-[9px] font-normal text-white/70 leading-tight">
                • The non-fuel O&M lean program (2–3% annual reductions).
              </li>
              <li className="text-[9px] font-normal text-white/70 leading-tight">
                • Data center / large-load strategy (tariffs, siting, connection timing).
              </li>
              <li className="text-[9px] font-normal text-white/70 leading-tight">
                • Near-term and future GRC and cost-of-capital filings.
              </li>
              <li className="text-[9px] font-normal text-white/70 leading-tight">
                • Investor relations and rating-agency engagement around ROE, credit, and
                affordability.
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeInnerTab === 1 && (
        /* Business Case Draft */
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-[9px] font-bold text-white leading-tight">
              Headline / Objective
            </h3>
            <p className="text-[9px] font-bold text-white leading-tight">
              Align Acme’s $73B Grid Investment, 10 GW Load Growth, and Affordability
              Commitments into a Single Financial Model That Protects 9%+ EPS Growth and Credit
              Strength.
            </p>
          </div>

          {/* ...rest of the content kept in original file for brevity... */}
        </div>
      )}
    </div>
  );
};

export default BusinessCaseContent;

