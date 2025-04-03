
import React from "react";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
}

const TimelineItem = ({ title, organization, period, description }: TimelineItemProps) => {
  return (
    <div className="relative pl-6 border-l border-white/10 hover:border-white/30 transition-colors duration-300">
      <div className="absolute -left-1.5 top-1">
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </div>
      <h3 className="text-xl font-bold text-white font-poppins">{title}</h3>
      <p className="text-gray-300 font-poppins">{organization}</p>
      <p className="text-gray-400 mt-1 text-sm font-poppins">{period}</p>
      <p className="text-gray-400 mt-2 text-sm leading-relaxed font-poppins">
        {description}
      </p>
    </div>
  );
};

export default TimelineItem;
