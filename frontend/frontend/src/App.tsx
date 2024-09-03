import { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import SkeletonCard from "./components/SkeletonCard";

interface DataItem {
  title: string;
  description: string;
  pageCount: number;
  buyLink: string;
}

export default function App() {
  const [data, setData] = useState<DataItem[]>([]);
  const [filter, setFilter] = useState(200);
  const [loading, setLoading] = useState<boolean>(false); // Loading state to track fetching status

  function handleDataFromChild(data: DataItem[]) {
    setData(data);
  }

  function handleDataFromGrandChild(data: number) {
    setFilter(data);
  }

  function handleLoadingState(isLoading: boolean) {
    setLoading(isLoading);
  }

  const filteredData = data.filter(item => item.pageCount <= filter);

  return (
    <div className="bg-red-200 dark:bg-gray-500 min-h-screen p-4">
      <Navbar sendDataToParent={handleDataFromGrandChild} />
      <Searchbar sendDataToParent={handleDataFromChild} setLoading={handleLoadingState} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          // Display skeleton cards while loading and not during initial page load
          Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          filteredData.map((item, index) => (
            <Cards key={index} item={item} />
          ))
        )}
      </div>
    </div>
  );
}
