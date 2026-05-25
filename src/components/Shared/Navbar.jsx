"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import UserDropdown from "./UserDropdown";
import { authClient } from "@/lib/auth-client";
import { Bars } from "@gravity-ui/icons";
import { Dropdown } from "@heroui/react";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData?.data?.user;

    return (
        <nav className="flex justify-between bg-white p-5 shadow-sm dark:bg-slate-950">
            <Dropdown>
                <Button
                    isIconOnly
                    aria-label="Menu"
                    variant="warning"
                    className="md:hidden"
                >
                    <Bars className="outline-none" />
                </Button>
                <Dropdown.Popover className="min-w-[220px]">
                    <Dropdown.Menu
                        disabledKeys={["delete-file"]}
                        onAction={key => console.log(`Selected: ${key}`)}
                    >
                        <Dropdown.Section>
                            <Dropdown.Item id="new-file" textValue="New file">
                                <div className="flex h-8 items-start justify-center pt-px"></div>
                                <div className="flex flex-col">
                                    <ul className="flex flex-col md:hidden gap-3">
                                        <li>
                                            <Link href={"/"}>Home</Link>
                                        </li>
                                        <li>
                                            <Link href={"/all-pets"}>
                                                All Pets
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Section>

                        <Dropdown.Section></Dropdown.Section>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>
            <div>
                <h1 className="text-2xl font-bold text-[#F59E0B] md:flex md:justify-start">
                    PetHaven
                </h1>
            </div>

            <ul className="hidden md:flex gap-3">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/all-pets"}>All Pets</Link>
                </li>
            </ul>
            
            <ThemeToggle/>
            
            {user ? (
                <ul className="flex gap-2">
                    <li>
                        <UserDropdown />
                    </li>
                </ul>
            ) : (
                <ul className="flex gap-3">
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
