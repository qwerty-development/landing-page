import React from "react";
import { ArrowRight } from "lucide-react";

export interface TitleCardProps {
  number?: string | number;
  title?: string;
  description?: string;
  features?: string[];
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * Reusable TitleCard used in HowItWorks and other lists.
 */
const TitleCard: React.FC<TitleCardProps> = ({
  number,
  title,
  description,
  features,
  active = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group rounded-3xl transition-all duration-700 border relative overflow-hidden text-left w-full ${
        active
          ? "bg-white/5 border-white/20 backdrop-blur-xl"
          : "border-white/10 hover:border-white/20 hover:bg-white/5"
      } ${className}`}
    >
      {/* Parent padding wrapper */}
      <div className="p-6">
        {/* Second div contains two divs: number (justify-start) and content (title+subtitle) */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 flex justify-start items-start">
            <div
              className={`text-4xl font-thin transition-all duration-700 ${
                active ? "text-white" : "text-gray-600"
              }`}
            >
              {number}
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-2xl font-light text-white mb-2">{title}</h3>
            {description && (
              <p className="text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Tags / features under the two divs */}
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4 animate-fade-in">
            {features.map((f, i) => (
              <span
                key={i}
                className="text-sm px-4 py-2 bg-white/10 rounded-full text-gray-300"
              >
                {f}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Arrow and progress remain absolute so layout doesn't shift */}
      <div className="absolute top-6 right-6">
        <ArrowRight
          className={`w-5 h-5 text-white transition-all duration-500 ${
            active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        />
      </div>

      {active && (
        <div className="absolute bottom-0 left-0 h-px bg-white/20 w-full">
          <div className="h-full bg-white animate-progress" />
        </div>
      )}
    </button>
  );
};

export default TitleCard;
