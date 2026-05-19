import React from 'react'
import PetCard from '@/components/PetCard'

const AllPetsPage = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet`)
  const pets = await res.json()
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-6">All Pets</h2>
      <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        {pets.map((pet) => <PetCard key={pet._id} pet={pet}/>)}
      </div>
    </div>
  )
}

export default AllPetsPage