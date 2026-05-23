"use client"
import React from 'react'
import {Spinner} from "@heroui/react";

const loadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-orange-200 rounded-full"></div>

        {/* Animated Ring */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-orange-500 border-r-orange-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>

        {/* Paw Icon */}
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          🐾
        </div>
      </div>
    </div>
  )
}

export default loadingPage