import { useEffect, useRef, useState } from "react";

interface BarProps {
    sendDataToParent: (data: string) => void; // Ensure it sends string data
}

export default function Bar({ sendDataToParent }: BarProps) {
    const [query, setQuery] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const updateQuery = () => {
        const inputText = inputRef.current?.value ?? '';
        setQuery(inputText);
        sendDataToParent(inputText);
    }

    useEffect(() => {
        // Optional: Console log for debugging
        // console.log(`Query updated: ${query}`);
    }, [query]);

    return (
        <input
            ref={inputRef}
            onChange={updateQuery}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
        />
    );
}
