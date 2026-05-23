"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

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
            {/* Sidebar */}
            <div className="w-34 md:w-64 border-r border-gray/10 p-5">
                <div className="space-y-3">
                    {links.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block px-2 md:px-4 py-3 rounded-xl transition ${
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
            <div className="flex-1 p-6">{children}</div>
        </div>
    );
}
