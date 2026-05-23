import React from "react";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { LuMapPin } from "react-icons/lu";
import RequestCard from "@/components/RequestCard";

const PetDetailsPage = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
      headers: await headers()
    })
    console.log(token)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const pet = await res.json();

    const {
        imageUrl,
        fee,
        petName,
        age,
        gender,
        species,
        breed,
        healthStatus,
        vaccinationStatus,
        location,
        description
    } = pet;

    return (
        <div className="flex justify-between mx-6">
            <div className="mt-5 mb-3">
                <Image
                    className="w-full h-100"
                    alt={petName}
                    src={imageUrl}
                    height={500}
                    width={500}
                />

                <div className="p-2">
                    <div className="flex items-center gap-1">
                        <LuMapPin /> <span>{location}</span>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <h2 className="text-xl font-bold">{petName}</h2>
                            </div>
                            <div className="flex gap-1 items-center">
                                Species: {species}
                            </div>
                            <div className="flex gap-1 items-center">
                                Breed: {breed}
                            </div>
                            <div className="flex gap-1 items-center">
                                Age: {age}
                            </div>
                            <div className="flex gap-1 items-center">
                                Gender: {gender}
                            </div>
                            <div className="flex gap-1 items-center">
                                Health Status: {healthStatus}
                            </div>
                            <div className="flex gap-1 items-center">
                                Vaccination Status: {vaccinationStatus}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">$ {fee}</h3>
                        </div>
                    </div>

                    <h1 className="mt-10 text-2xl font-bold">Overview</h1>

                    <p>{description}</p>
                </div>
            </div>
            <div>
                <RequestCard pet={pet} />
            </div>
        </div>
    );
};

export default PetDetailsPage;
