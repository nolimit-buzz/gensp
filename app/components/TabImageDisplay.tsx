import React from 'react';
import Image from 'next/image';

interface TabImageDisplayProps {
  activeMainTab: number;
}

const TabImageDisplay: React.FC<TabImageDisplayProps> = ({ activeMainTab }) => {
  const getImagePaths = () => {
    switch (activeMainTab) {
      case 0:
        return {
          desktop: '/situational-analysis.png',
          mobile: '/situational-analysis-mobile.png',
          alt: 'Situational Analysis'
        };
      case 1:
        return {
          desktop: '/value-hypothesis.png',
          mobile: '/value-hypothesis-mobile.png',
          alt: 'Value Hypothesis'
        };
      case 2:
        return {
          desktop: '/business-case.png',
          mobile: '/business-case-mobile.png',
          alt: 'Business Case'
        };
      default:
        return {
          desktop: '/situational-analysis.png',
          mobile: '/situational-analysis-mobile.png',
          alt: 'Situational Analysis'
        };
    }
  };

  const { desktop, mobile, alt } = getImagePaths();

  return (
    <div className="w-full">
      {/* Desktop Image */}
      <div className="hidden md:block">
        <Image 
          src={desktop} 
          width={1000} 
          height={1000} 
          className="w-full h-auto" 
          alt={alt} 
        />
      </div>
      {/* Mobile Image */}
      <div className="block md:hidden">
        <Image 
          src={mobile} 
          width={1000} 
          height={1000} 
          className="w-full h-auto" 
          alt={alt} 
        />
      </div>
    </div>
  );
};

export default TabImageDisplay;
