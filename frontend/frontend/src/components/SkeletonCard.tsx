import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-brown-300 dark:border-brown-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 animate-pulse">
      <div className="p-6">
        {/* Loading Skeleton for Title */}
        <div className="bg-gradient-to-r from-brown-200 to-brown-300 h-6 mb-4 rounded w-3/4"></div>
        {/* Loading Skeleton for Description */}
        <div className="bg-gradient-to-r from-brown-200 to-brown-300 h-4 mb-4 rounded w-5/6"></div>
        {/* Loading Skeleton for Page Count */}
        <div className="bg-gradient-to-r from-brown-200 to-brown-300 h-4 mb-4 rounded w-1/2"></div>
        {/* Loading Skeleton for additional info */}
        <div className="bg-gradient-to-r from-brown-200 to-brown-300 h-4 mb-4 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
