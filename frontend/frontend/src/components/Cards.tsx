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

  // Function to truncate description to 50 characters
  const getDescription = (desc: string) => {
    if (!desc) return 'Description: Not Found';
    return desc.length > 50 ? `${desc.slice(0, 50)}...` : desc;
  };

  return (
    <div className="bg-white border border-brown-300 dark:border-brown-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:shadow-xl hover:scale-105">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 hover:text-brown-600 dark:hover:text-brown-400 transition duration-200">
          {title || 'Not Found'}
        </h3>
        <p className="text-xl mb-4 text-gray-800 ">
          {getDescription(description)}
        </p>
        <p className="text-xl mb-4 text-gray-800 ">
          Page Count: {pageCount || 'Not Found'}
        </p>
        {buyLink ? (
          <a 
            href={buyLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-brown-600 dark:text-brown-400 hover:underline text-xl font-extrabold transition duration-200"
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
