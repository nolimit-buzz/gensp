import React from 'react';
import Image from 'next/image';

interface TabImageDisplayProps {
  activeMainTab: number;
}

const TabImageDisplay: React.FC<TabImageDisplayProps> = ({ activeMainTab }) => {
  switch (activeMainTab) {
    case 0:
      return (
        <div className="w-full" key="tab-0">
          <div className="hidden md:block">
            <Image 
              key="desktop-0"
              src="/situational-analysis.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Situational Analysis"
              priority
            />
          </div>
          <div className="block md:hidden">
            <Image 
              key="mobile-0"
              src="/situational-analysis-mobile.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Situational Analysis"
              priority
            />
          </div>
        </div>
      );
    case 1:
      return (
        <div className="w-full" key="tab-1">
          <div className="hidden md:block">
            <Image 
              key="desktop-1"
              src="/value-hypothesis.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Value Hypothesis"
              priority
            />
          </div>
          <div className="block md:hidden">
            <Image 
              key="mobile-1"
              src="/value-hypothesis-mobile.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Value Hypothesis"
              priority
            />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="w-full" key="tab-2">
          <div className="hidden md:block">
            <Image 
              key="desktop-2"
              src="/business-case.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Business Case"
              priority
            />
          </div>
          <div className="block md:hidden">
            <Image 
              key="mobile-2"
              src="/business-case-mobile.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Business Case"
              priority
            />
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full" key="tab-default">
          <div className="hidden md:block">
            <Image 
              key="desktop-default"
              src="/situational-analysis.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Situational Analysis"
              priority
            />
          </div>
          <div className="block md:hidden">
            <Image 
              key="mobile-default"
              src="/situational-analysis-mobile.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Situational Analysis"
              priority
            />
          </div>
        </div>
      );
  }
};

export default TabImageDisplay;
