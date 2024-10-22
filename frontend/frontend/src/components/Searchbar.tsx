import { useState, useCallback } from "react";
import Bar from "./Bar";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

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
            const response = await fetch('https://book-finder-hlam.vercel.app/', {
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

    useGSAP(() => {
        gsap.to('.title', { opacity: 1, y: -10, delay: 1 });
    }, []);

    return (
        <div style={{ opacity: 0 }} className="title grid grid-cols-8 gap-4 mt-32 mb-16 pb-16">
            <div className="col-span-3 col-start-3">
                <Bar sendDataToParent={(data: string) => setQuery(data)} />
            </div>
            <div className="content-center">
                <button
                    className="text-white font-medium text-xl px-5 py-2.5 text-center rounded-lg bg-gradient-to-r from-brown-500 via-brown-400 to-brown-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-brown-300 dark:focus:ring-brown-800 mt-4 transition"
                    onClick={fetchData}
                >
                    Search
                </button>
            </div>
        </div>
    );
}
