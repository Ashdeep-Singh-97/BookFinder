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
            className="block w-full p-4 text-xl text-gray-900 border border-brown-600 rounded-lg bg-gradient-to-r from-brown-200 to-brown-100 placeholder:text-gray-700 focus:ring-4 focus:outline-none focus:ring-brown-300 transition duration-300 "
            placeholder="Search Your books...."
            required
        />
    );
}
