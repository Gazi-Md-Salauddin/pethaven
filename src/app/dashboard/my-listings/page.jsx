import React from 'react'
import ListingCard from '@/components/ListingCard'

const MyListingPage = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet`)
  const pets = await res.json()
  return (
    <div>
      <h2 className="text-2xl font-bold">My Listings</h2>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        {pets.map((pet) => <ListingCard key={pet._id} pet={pet}/>)}
      </div>
    </div>
  )
}

export default MyListingPage