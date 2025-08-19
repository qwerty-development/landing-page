import React from "react";

export interface TitleCardProps {
  index?: string | number;
  title?: string;
  subtitle?: string;
  tags?: React.ReactNode;
  className?: string;
}

/**
 * Simple TitleCard component — minimal structure so you can start customizing.
 */
const TitleCard: React.FC<TitleCardProps> = ({
  index,
  title,
  subtitle,
  tags,
  className = "",
}) => {
  return (
    <article
      className={`bg-white/80 p-6 rounded-xl shadow-sm w-full max-w-md mx-auto ${className}`}
      aria-label={title ?? "title card"}
    >
      <div className="flex items-start gap-4">
        {index !== undefined && (
          <span className="text-2xl font-bold text-gray-800">{index}</span>
        )}

        <div className="flex-1">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      </div>

      {tags && <div className="mt-4 text-sm text-gray-700">{tags}</div>}
    </article>
  );
};

export default TitleCard;
