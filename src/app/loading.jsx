"use client"
import React from 'react'
import {Spinner} from "@heroui/react";

const loadingPage = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
        <Spinner color="warning" />
        
      </div>
  )
}

export default loadingPage