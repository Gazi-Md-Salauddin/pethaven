import React from 'react'
import RequestTable from '@/components/RequestTable'
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyRequestPage = async() => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const requests = await res.json()
  console.log(requests)
  return (
    <div>
      <h2 className="text-2xl font-bold">My Requests</h2>
      <div>
        <RequestTable requests={requests}/>
      </div>
    </div>
  )
}

export default MyRequestPage