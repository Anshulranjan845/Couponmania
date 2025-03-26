import React, { useState, useMemo } from "react";
import {storesData} from "../data/dealStore"
import StoreComp from "./StoreComp";
import { Search } from "lucide-react";

const StoreDeal = () => {
    const [filter, setFilter] = useState("All"); // State for selected filter
    const [searchTerm, setSearchTerm] = useState("");
    const categories = ["All", "E-commerce", "Electronics", "Fashion", "Sports", "Technology", "Entertainment"]; // Available categories



    const filteredStores = useMemo(() => {
        return storesData.filter(store =>
            (filter === "All" || store.category === filter) &&
            (store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             store.category.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [filter, searchTerm]);

    return (
        <div className="py-5 px-2 mt-10 font-sans text-white">
            <h1 className="text-2xl font-bold mb-5">Store List</h1>

            {/* Filter Dropdown */}
            <div className="mb-5">
                <label htmlFor="category-filter" className="mr-2">Filter by Category:</label>
                <div className="flex justify-between mt-4">
                <select
                    id="category-filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="p-2 border border-gray-700 rounded bg-black -text-white"
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <div className="relative w-1/3">
                <input
                    type="text"
                    placeholder="Search stores or categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 pr-10 border-b-2 border-rose-500 focus:outline-none w-full"
                />
                <Search className="absolute right-2 top-2 text-gray-500 w-5 h-5" />
            </div>
            </div>
            </div>

            {/* Display Stores */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {filteredStores.map((store, index) => (
                    <StoreComp key={index} store={store}/>
                ))}
            </div>
        </div>
    );
};

export default StoreDeal;