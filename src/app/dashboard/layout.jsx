"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const links = [
        {
            name: "Add Pets",
            href: "/dashboard/add-pets"
        },
        {
            name: "My Listing",
            href: "/dashboard/my-listings"
        },
        {
            name: "My Requests",
            href: "/dashboard/my-requests"
        }
    ];

    return (
        <div className="flex min-h-screen">
            {/* Mobile Drawer Button */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden fixed top-22 left-4 z-10 p-2 bg-[#F59E0B] text-white rounded-lg"
            >
                <Menu size={22} />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center p-5 border-b">
                    <h2 className="font-bold text-lg">Dashboard</h2>

                    <button onClick={() => setOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className="p-5 space-y-3">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`block px-4 py-3 rounded-xl transition ${
                                pathname === link.href
                                    ? "bg-[#F59E0B] text-white font-bold"
                                    : "hover:bg-gray-200"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block w-64 border-r border-gray-200 p-5">
                <div className="space-y-3">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block px-4 py-3 rounded-xl transition ${
                                pathname === link.href
                                    ? "bg-[#F59E0B] text-white font-bold"
                                    : "hover:bg-gray-200"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 md:p-8">
                {children}
            </div>
        </div>
    );
}