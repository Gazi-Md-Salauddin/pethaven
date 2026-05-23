import React from 'react'
import PetCard from '@/components/PetCard'
import SearchPets from "@/components/SearchPets";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const getPets = async (search = "") => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/pet?search=${search || ""}`,{
      
    headers: {
      authorization: `Bearer ${token}`
    }
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