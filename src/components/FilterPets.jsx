"use client";
import { Select, ListBox, Label } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const FilterPets = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selected, setSelected] = useState(new Set());

    const handleSpecies = keys => {
        setSelected(keys);

        const value = Array.from(keys)[0] || "";

        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set("species", value);
        } else {
            params.delete("species");
        }

        router.push(`/all-pets?${params.toString()}`);
    };

    return (
        <select
            onChange={e => {
                const value = e.target.value;

                const params = new URLSearchParams(searchParams.toString());
                params.set("species", value);

                router.push(`/all-pets?${params.toString()}`);
            }} className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 hover:shadow-md"
        >
            <option value="">All</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Bird">Bird</option>
        </select>
    );
};

export default FilterPets;
