// src/types.ts
export interface DataItem {
  title: string;
  description: string;
  pageCount: number;
  buyLink: string;
}

interface CardsProps {
  item: DataItem;
}

export default function Cards({ item }: CardsProps) {
  const { title, description, pageCount, buyLink } = item;

  // Function to truncate description to 20 characters
  const getDescription = (desc: string) => {
    if (!desc) return 'Description : Not Found';
    return desc.length > 50 ? `${desc.slice(0, 50)}...` : desc;
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title || 'Not Found'}</h3>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">{getDescription(description)}</p>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Page Count: {pageCount || 'Not Found'}</p>
        {buyLink ? (
          <a 
            href={buyLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            Buy Link
          </a>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-500">Buy Link Not Found</p>
        )}
      </div>
    </div>
  );
}
