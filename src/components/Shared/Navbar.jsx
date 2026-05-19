"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import UserDropdown from "./UserDropdown";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData?.data?.user;
    
    
    return (
        <nav className="flex justify-between bg-white p-5 shadow-sm">
            <div>
                <h1 className="text-2xl font-bold text-[#F59E0B]">PetHaven</h1>
            </div>
            <ul className="hidden md:flex gap-3">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/all-pets"}>All Pets</Link>
                </li>
            </ul>

            {user ? (
                <ul className="hidden md:flex gap-3">
                    
                    <li>
                        <UserDropdown />
                    </li>
                    
                </ul>
            ) : (
                <ul className="hidden md:flex gap-3">
                    <li>
                        <Link href={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link href={"/register"}>Register</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
