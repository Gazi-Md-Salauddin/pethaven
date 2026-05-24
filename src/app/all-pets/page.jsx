import React from "react";
import PetCard from "@/components/PetCard";
import SearchPets from "@/components/SearchPets";
import FilterPets from "@/components/FilterPets";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const getPets = async (search = "", species = "") => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/pet?search=${search || ""}&species=${species || ""}`
    );

    return await res.json();
};

const AllPetsPage = async ({ searchParams }) => {
    const sp = await searchParams;

    const search = sp?.search || "";
    const species = sp?.species || "";

    const pets = await getPets(search, species);

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-6">All Pets</h2>
            <div className="md:flex md:justify-between px-4 py-4">
                <SearchPets />
                <FilterPets />
            </div>
            <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
                {pets.map(pet => (
                    <PetCard key={pet._id} pet={pet} />
                ))}
            </div>
        </div>
    );
};

export default AllPetsPage;
