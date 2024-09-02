import { useState } from "react";
import Bar from "./Bar";

interface SearchBarProps {
    sendDataToParent: (data: any) => void;
}
export default function Searchbar({ sendDataToParent }: SearchBarProps) {
    const [query, setQuery] = useState("");

    function handleDataFromChild(data: any) {
        setQuery(data);
    }

    async function fetchData() {
        try {
            const response = await fetch('http://localhost:5000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "keyword" : query }), // Send keyword in the request body
            });

            if (!response.ok) {
                sendDataToParent([{}]);
            }

            const data = await response.json();
            console.log('Data received from server:', data);
            sendDataToParent(data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
      }
      

    return (
        <div className="grid grid-cols-8 gap-4 mt-16 mb-16 pb-16">
            <div className="col-span-3 col-start-3">
                <Bar sendDataToParent={handleDataFromChild} />
            </div>
            <div className="content-center">
                <button className="text-white hover:bg-gradient-to-l hover:cursor-pointer font-medium text-sm px-5 py-2.5 text-center rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                onClick={fetchData}
                > Search </button>
            </div>
        </div>
    )
}
