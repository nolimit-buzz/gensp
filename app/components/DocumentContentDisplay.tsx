import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import SituationalAnalysisContent from './SituationalAnalysisContent';
import ValueHypothesisContent from './ValueHypothesisContent';
import BusinessCaseContent from './BusinessCaseContent';

interface DocumentContentDisplayProps {
  activeMainTab: number;
  activeInnerTab: number;
  setActiveInnerTab: (tabIndex: number) => void;
  innerTabs: string[];
}

const DocumentContentDisplay: React.FC<DocumentContentDisplayProps> = ({
  activeMainTab,
  activeInnerTab,
  setActiveInnerTab,
  innerTabs,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-4">
      {/* Inner Document Tabs */}
      <div className="flex items-center justify-start">
        {innerTabs.map((tab, idx) => (
          <React.Fragment key={tab}>
            <motion.button
              onClick={() => setActiveInnerTab(idx)}
              whileHover={{ scale: 1.05, y: -2, backgroundColor: activeInnerTab === idx ? '#4A4D50' : '#323639' }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 rounded-full text-[8px] transition-all cursor-pointer ${activeInnerTab === idx
                ? 'bg-[#3A3D40] text-white font-bold'
                : 'bg-[#2A2D30] text-white/90 hover:bg-[#323639]'
                }`}
            >
              {tab}
            </motion.button>
            {idx < innerTabs.length - 1 && (
              <div className="mx-1 md:mx-4 w-[1px] h-4 bg-white/10" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Document Card */}
      <div className="bg-[#151719] rounded-t-[24px] overflow-hidden flex flex-col h-[600px] lg:h-[800px]">
        {/* Header */}
        <div className="border-b border-white/5 flex items-stretch h-14">
          {/* Logo Section */}
          <div className="px-2 lg:px-6 flex items-center justify-center border-r border-white/5">
            <svg className='w-6 md:w-8' width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.09289 2.96308C3.17109 2.96308 4.04222 3.83885 4.04222 4.90685C4.04222 5.98197 3.17109 6.85061 2.09289 6.85061C1.01469 6.85061 0.143555 5.98197 0.143555 4.90685C0.143555 3.83885 1.01469 2.96308 2.09289 2.96308ZM19.0371 2.4718C19.844 2.4718 20.5009 3.12684 20.5009 3.93141C20.5009 4.73597 19.844 5.38389 19.0371 5.38389C18.2302 5.38389 17.5733 4.73597 17.5733 3.93141C17.5733 3.12684 18.2302 2.4718 19.0371 2.4718ZM20.8793 7.60534C21.6862 7.60534 22.3431 8.26038 22.3431 9.06494C22.3431 9.8695 21.6862 10.5245 20.8793 10.5245C20.0725 10.5245 19.4155 9.8695 19.4155 9.06494C19.4155 8.26038 20.0725 7.60534 20.8793 7.60534ZM18.6801 11.9272C19.4941 11.9272 20.1439 12.5822 20.1439 13.3868C20.1439 14.1914 19.4941 14.8464 18.6801 14.8464C17.8732 14.8464 17.2234 14.1914 17.2234 13.3868C17.2234 12.5822 17.8732 11.9272 18.6801 11.9272ZM12.0466 15.8574C12.8535 15.8574 13.5104 16.5125 13.5104 17.317C13.5104 18.1216 12.8535 18.7766 12.0466 18.7766C11.2398 18.7766 10.5828 18.1216 10.5828 17.317C10.5828 16.5125 11.2398 15.8574 12.0466 15.8574ZM7.69097 16.9966C8.49784 16.9966 9.15476 17.6517 9.15476 18.4562C9.15476 19.2608 8.49784 19.9159 7.69097 19.9159C6.88411 19.9159 6.22719 19.2608 6.22719 18.4562C6.22719 17.6517 6.88411 16.9966 7.69097 16.9966ZM2.61414 11.9628C3.6852 11.9628 4.56347 12.8314 4.56347 13.9066C4.56347 14.9817 3.6852 15.8503 2.61414 15.8503C1.53594 15.8503 0.664805 14.9817 0.664805 13.9066C0.664805 12.8314 1.53594 11.9628 2.61414 11.9628ZM11.0113 4.28029C13.4319 4.28029 15.3955 6.23829 15.3955 8.65198C15.3955 11.0657 13.4319 13.0237 11.0113 13.0237C8.59066 13.0237 6.62705 11.0657 6.62705 8.65198C6.62705 6.23829 8.59066 4.28029 11.0113 4.28029ZM7.06976 0.143555C7.87662 0.143555 8.53354 0.798597 8.53354 1.60316C8.53354 2.40772 7.87662 3.05564 7.06976 3.05564C6.26289 3.05564 5.60597 2.40772 5.60597 1.60316C5.60597 0.798597 6.26289 0.143555 7.06976 0.143555Z" fill="#71D5CB" />
              <path fillRule="evenodd" clipRule="evenodd" d="M20.7935 8.72372L19.3583 4.90739L19.444 4.87891L20.8792 8.70236L20.7935 8.72372ZM2.18562 4.89315L6.86974 1.68202L6.91972 1.7461L2.23561 4.95723L2.18562 4.89315ZM7.5695 2.09498L9.22607 4.67955L9.19037 4.70803L7.53379 2.11634L7.5695 2.09498ZM2.8354 14.2133L11.0897 8.55996L11.1683 8.67388L2.91395 14.3272L2.8354 14.2133ZM3.1353 15.1816L6.83403 18.3571L6.78405 18.4069L3.09246 15.2314L3.1353 15.1816ZM8.32638 18.0723L11.3182 17.6522L11.3254 17.7163L8.32638 18.1364V18.0723ZM13.289 9.67068L18.8514 13.188L18.7585 13.309L13.1961 9.79173L13.289 9.67068ZM19.1584 12.5685L20.815 10.0409L20.865 10.0836L19.2084 12.6113L19.1584 12.5685Z" fill="#71D5CB" fillOpacity="0.6" />
            </svg>
          </div>

          {/* GenSP Section */}
          <div className="flex-1 flex items-center px-4 lg:px-6 border-r border-white/5">
            <span className="text-white font-bold text-[10px] lg:text-[13px] tracking-tight">GenSP</span>
          </div>

          {/* Helpful Section */}
          <div className="flex items-center px-2 md:px-6 gap-6">
            <span className="flex-shrink-0 text-[7px] md:text-[9px] text-[#71D5CB] uppercase font-medium">Was this helpful</span>
            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.2, rotate: -10 }} whileTap={{ scale: 0.9 }}>
                <ThumbsUp className="w-2 h-2 md:w-3.5 md:h-3.5 text-white/40 cursor-pointer hover:text-white transition-colors" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                <ThumbsDown className="w-2 h-2 md:w-3.5 md:h-3.5 text-white/40 cursor-pointer hover:text-white transition-colors" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-4 custom-scrollbar">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Situational Analysis Content */}
            {activeMainTab === 0 && (
              <SituationalAnalysisContent />
            )}

            {/* Value Hypothesis Content */}
            {activeMainTab === 1 && (
              <ValueHypothesisContent activeInnerTab={activeInnerTab} />
            )}

            {/* Business Case Content */}
            {activeMainTab === 2 && (
              <BusinessCaseContent activeInnerTab={activeInnerTab} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentContentDisplay;
