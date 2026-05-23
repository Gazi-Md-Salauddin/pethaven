"use client";
import React, {useState} from "react";
import { Button } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";
import RequestModal from '@/components/RequestModal'
import EditModal from '@/components/EditModal'
import DeleteAlert from '@/components/DeleteAlert'

const ListingCard = ({pet}) => {
  const { _id, imageUrl, fee, breed, age, gender, petName, species, location } =
        pet;
        const [departureDate, setDepartureDate] = useState(" ");
  return (
    <div className="border">
                <Image
                    alt={petName}
                    src={imageUrl}
                    height={400}
                    width={400}
                />

                <div className="p-2">
                    
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <h2 className="text-xl font-bold">
                                    {petName}
                                </h2>
                            </div>
                            <div className="flex gap-4 justify-center items-center bg-amber-200 rounded-full text-orange-400">
                                {species}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">$ {fee}</h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                      
                    <Link href={`/all-pets/${_id}`}>
                        <Button
                            variant="ghost"
                            className={"mt-1 text-[#F59E0B]"}
                        >
                            {" "}
                            View
                        </Button>
                    </Link>
                    <EditModal
                            variant="ghost"
                            className={"mt-1 text-[#F59E0B]"}
                        pet={pet}
                            
                        />
                    <RequestModal
                            variant="ghost"
                            className={"mt-1 text-[#F59E0B]"}
                            pet={pet}
                            pickupDate={pet?.departureDate || pet?.request?.departureDate} 
                            
                        />
                        <DeleteAlert
                            variant="ghost"
                            className={"mt-1 text-[#F59E0B]"}
                            
                            pet={pet}
                        />
                    </div>
                </div>
            </div>
  )
}

export default ListingCard