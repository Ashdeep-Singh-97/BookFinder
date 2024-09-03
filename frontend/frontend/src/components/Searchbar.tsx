import { useState, useCallback } from "react";
import Bar from "./Bar";

interface SearchBarProps {
    sendDataToParent: (data: any) => void;
    setLoading: (isLoading: boolean) => void; // New prop for setting loading state
}

export default function Searchbar({ sendDataToParent, setLoading }: SearchBarProps) {
    const [query, setQuery] = useState<string>('');

    const fetchData = useCallback(async () => {
        if (query.trim() === '') return; // Do not fetch if query is empty
        setLoading(true); // Set loading to true when starting to fetch data
        try {
            const response = await fetch('http://localhost:5000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "keyword": query }), // Send keyword in the request body
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            sendDataToParent(data);
        } catch (error) {
            console.error('Error posting data:', error);
            sendDataToParent([]);
        } finally {
            setLoading(false); // Set loading to false once data fetching is complete
        }
    }, [query, sendDataToParent, setLoading]);

    return (
        <div className="grid grid-cols-8 gap-4 mt-32 mb-16 pb-16">
            <div className="col-span-3 col-start-3">
                <Bar sendDataToParent={(data: string) => setQuery(data)} />
            </div>
            <div className="content-center">
                <button
                    className="text-white hover:bg-gradient-to-l hover:cursor-pointer font-medium text-sm px-5 py-2.5 text-center rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-4"
                    onClick={fetchData}
                >
                    Search
                </button>
            </div>
        </div>
    );
}
