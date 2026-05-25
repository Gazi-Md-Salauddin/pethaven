"use client";
import React from "react";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";

const FeaturedPets = ({ pet }) => {
    return (
        <section className="mx-4 md:my-2 border rounded-xl shadow-sm">
            <div>
                <Image
                    alt={pet.petName}
                    src={pet.imageUrl}
                    height={500}
                    width={500}
                    className="w-full rounded-t-xl"
                />

                <div className="p-2">
                    <div className="flex items-center gap-1">
                        <LuMapPin /> <span>{pet.location}</span>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <h2 className="text-xl font-bold">
                                    {pet.petName}
                                </h2>
                            </div>
                            <div className="flex gap-1 items-center">
                                species: {pet.species}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">$ {pet.fee}</h3>
                        </div>
                    </div>
                    <Link href={`/all-pets/${pet._id}`}>
                        <Button
                            variant="ghost"
                            className={"mt-1 text-[#F59E0B]"}
                        >
                            {" "}
                            <FiExternalLink /> View Details
                        </Button>
                    </Link>
                    <Link href={`/all-pets/${pet._id}`}>
                        <Button
                            variant="ghost"
                            className={"mt-1 text-[#F59E0B]"}
                        >
                            {" "}
                            <FiExternalLink />
                            Adopt Now
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPets;
