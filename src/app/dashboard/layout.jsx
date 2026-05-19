"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const links = [

    {
      name: "Add Pets",
      href: "/dashboard/add-pets",
    },
    {
      name: "My Requests",
      href: "/dashboard/my-requests",
    },
    {
      name: "My Listing",
      href: "/dashboard/my-listings",
    },
  ];

  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 p-5">
        <h1 className="text-2xl font-bold mb-8">
          PetHaven
        </h1>

        <div className="space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl transition ${
                pathname === link.href
                  ? "bg-orange-500 text-black"
                  : "hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}