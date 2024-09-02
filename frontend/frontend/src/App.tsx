import { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

interface DataItem {
  title: string;
  description : string;
  pageCount: number;
  buyLink: string;
}

export default function App() {
  const [data, setData] = useState<DataItem[]>([]);

  function handleDataFromChild(data: DataItem[]) {
    setData(data);
  }

  return (
    <div className="bg-red-200 dark:bg-gray-500 min-h-screen p-4">
      <Navbar />
      <Searchbar sendDataToParent={handleDataFromChild} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </div>
  )
}
