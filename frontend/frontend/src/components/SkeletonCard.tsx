// src/components/SkeletonCard.tsx
import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 animate-pulse">
      <div className="p-6">
        <div className="bg-gray-300 dark:bg-gray-700 h-6 mb-4 rounded w-3/4"></div>
        <div className="bg-gray-300 dark:bg-gray-700 h-4 mb-4 rounded w-5/6"></div>
        <div className="bg-gray-300 dark:bg-gray-700 h-4 mb-4 rounded w-1/2"></div>
        <div className="bg-gray-300 dark:bg-gray-700 h-4 mb-4 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
