import React from 'react'
import ListingCard from '@/components/ListingCard'
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyListingPage = async() => {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  
  const user = session?.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const pets = await res.json()
  
  
  return (
    <div>
      <h2 className="text-2xl font-bold my-6">My Listings</h2>
      <div>
        <div className="bg-gray-100 rounded-xl flex flex-col justify-center text-center">
          <h2 className="text-xl font-bold">{pets.length}</h2>
          <p className="text-xl font-bold">Total</p>
        </div>
        <div>
          <p className="text-xl font-bold">Available</p>
        </div>
        <div></div>
      </div>
      <div className="mx-3 grid grid-cols-1 md:grid-cols-3 gap-2">
        {pets.map((pet) =>
         
        <ListingCard key={pet._id} pet={pet}/>)}
      
      </div>
    </div>
   
  )
}

export default MyListingPage