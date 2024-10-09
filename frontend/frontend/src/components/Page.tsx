import { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import SkeletonCard from "./SkeletonCard";
import './Page.css';
import { gsap } from "gsap";

interface DataItem {
  title: string;
  description: string;
  pageCount: number;
  buyLink: string;
}

export default function Page() {
  const [data, setData] = useState<DataItem[]>([]);
  const [filter, setFilter] = useState(200);
  const [loading, setLoading] = useState<boolean>(false); // Loading state to track fetching status

  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animating the page to come from the bottom like being pulled up
    tl.fromTo(pageRef.current, 
      { y: window.innerHeight, opacity: 0 }, // Start off-screen (below)
      { y: 0, opacity: 1, duration: 2, ease: "bounce.Out" } // Animate it upwards with bounce effect
    );
  }, []);
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
    <div ref={pageRef} className="page-background min-h-screen p-4">
      <Navbar sendDataToParent={handleDataFromGrandChild} />
      <Searchbar sendDataToParent={handleDataFromChild} setLoading={handleLoadingState} />
      {/* Center the cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-screen-xl w-full">
          {loading ? (
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
    </div>
  );
  
}
