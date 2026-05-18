"use client"
import React from 'react'
import { Button } from '@heroui/react';
import Image from 'next/image'
import BannerImg from '@/assets/kitty.jpeg'

const Banner = () => {
  return (
    <div>
      <div className="flex justify-between px-4">
        <div>
          <h1 className="text-3xl font-bold">Find Your Perfect Furry Friend Today</h1>
          <p>Every pet deserves a loving home. Discover thousands of adorable animals waiting to become your lifelong companion. Your perfect match is just one click away.</p>
          <div className="flex gap-3 my-4">
            <Button className="bg-[#F59E0B] text-white">Adopt Now</Button>
            <Button className="outline bg-transparent border border-orange-500 text-orange-500">Browse Pets</Button>
          </div>
        </div>
        <div>
          <Image src={BannerImg} width={100} height={100} alt="Banner Image"/>
        </div>
      </div>
    </div>
  )
}

export default Banner