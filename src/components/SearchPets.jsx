"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchPets = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    router.push(`/all-pets?search=${search}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center gap-2 my-4">
      <input
        type="text"
        placeholder="Search by pet name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchPets;