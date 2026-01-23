import React from 'react';
import Image from 'next/image';

interface TabImageDisplayProps {
  activeMainTab: number;
}

const TabImageDisplay: React.FC<TabImageDisplayProps> = ({ activeMainTab }) => {
  switch (activeMainTab) {
    case 0:
      return (
        <div className="w-full">
          <div className="hidden md:block">
            <Image 
              src="/situational-analysis.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Situational Analysis" 
            />
          </div>
          <div className="block md:hidden">
            <Image 
              src="/situational-analysis-mobile.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Situational Analysis" 
            />
          </div>
        </div>
      );
    case 1:
      return (
        <div className="w-full">
          <div className="hidden md:block">
            <Image 
              src="/value-hypothesis.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Value Hypothesis" 
            />
          </div>
          <div className="block md:hidden">
            <Image 
              src="/value-hypothesis-mobile.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Value Hypothesis" 
            />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="w-full">
          <div className="hidden md:block">
            <Image 
              src="/business-case.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Business Case" 
            />
          </div>
          <div className="block md:hidden">
            <Image 
              src="/business-case-mobile.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Business Case" 
            />
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full">
          <div className="hidden md:block">
            <Image 
              src="/situational-analysis.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Situational Analysis" 
            />
          </div>
          <div className="block md:hidden">
            <Image 
              src="/situational-analysis-mobile.png" 
              width={1000} 
              height={1000} 
              className="w-full h-auto" 
              alt="Situational Analysis" 
            />
          </div>
        </div>
      );
  }
};

export default TabImageDisplay;
