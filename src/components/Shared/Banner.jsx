"use client"
import React from 'react'
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link'
import BannerImg from '@/assets/kitty.jpeg'

const Banner = () => {
  return (
    <div>
      <div className="flex-col md:flex flex-row justify-between md:px-8 my-6">
        {/*Text*/}
        <div className="p-4">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-4 py-2 rounded-full text-[#F59E0B] text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
          2k+ Pets Found Homes This Year
        </div>
          <h1 className="text-3xl font-bold">Find Your Perfect <span className="text-[#F59E0B]">Furry Friend</span> Today</h1>
          <p className="my-4">Every pet deserves a loving home. Discover thousands of adorable animals waiting to become your lifelong companion. Your perfect match is just one click away.</p>
          <div className="flex gap-3 my-4">
            <Button className="bg-[#F59E0B] text-white">Adopt Now</Button>
            <Button className="outline bg-transparent border border-[#F59E0B] text-[#F59E0B]"><Link href={"/all-pets"}>Browse Pets</Link></Button>
          </div>
        </div>
        {/*Banner Image*/}
        <div className="border border-[#F59E0B] shadow-sm rounded-xl mx-4">
          <Image src={BannerImg} width={400} height={200} alt="Banner Image" className="w-100 h-80 rounded-xl"/>
        </div>
      </div>
    </div>
  )
}

export default Banner