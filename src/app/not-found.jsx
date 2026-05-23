import React from 'react'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-[#F59E0B] text-3xl font-bold">404</h1>
      <h2 className="text-3xl font-bold">Page Not Found</h2>
      
      <Link href="/" className="btn bg-[#F59E0B] text-white p-2 rounded-xl">Go Back Home</Link>
    </div>
  )
}

export default NotFoundPage