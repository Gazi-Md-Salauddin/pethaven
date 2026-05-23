import React from 'react'
import PetCard from '@/components/PetCard'
import SearchPets from "@/components/SearchPets";

const getPets = async (search = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/pet?search=${search || ""}`,
    {
      cache: "no-store",
    }
  );

  return await res.json();
};

const AllPetsPage = async ({ searchParams }) => {
  const sp = await searchParams;

  
  const pets = await getPets(sp?.search || "");

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-6">
        All Pets
      </h2>

      <SearchPets />

      <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default AllPetsPage;