"use client";
import React from "react";
import { Button } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";

const PetCard = ({pet}) => {
  const { _id, imageUrl, fee, breed, age, gender, petName, species, location } =
        pet;
  return (
    <div className="border">
                <Image
                    alt={petName}
                    src={imageUrl}
                    height={400}
                    width={400}
                />

                <div className="p-2">
                    <div className="flex items-center gap-1">
                        <LuMapPin /> <span>{location}</span>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <h2 className="text-xl font-bold">
                                    {petName}
                                </h2>
                            </div>
                            <div className="flex gap-1 items-center">
                                species: {species}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">$ {fee}</h3>
                        </div>
                    </div>
                    <Link href={`/all-pets/${_id}`}>
                        <Button
                            variant="ghost"
                            className={"mt-1 text-[#F59E0B]"}
                        >
                            {" "}
                            <FiExternalLink /> View Details
                        </Button>
                    </Link>
                    <Link href={`/all-pets/${_id}`}>
                        <Button
                            variant="ghost"
                            className={"mt-1 text-[#F59E0B]"}
                        >
                            {" "}
                            <FiExternalLink />Adopt Now
                        </Button>
                    </Link>
                </div>
            </div>
  )
}

export default PetCard