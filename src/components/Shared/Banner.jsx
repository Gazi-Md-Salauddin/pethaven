"use client";
import React from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import BannerImg from "@/assets/kitty.jpeg";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="relative overflow-hidden px-5 pt-12 pb-16 lg:px-[5%]">
            <div className="bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.12),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.06),transparent_25%) flex-col md:flex flex-row justify-between md:px-8 my-6">
                {/*Text*/}
                <motion.div
                    className="initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.3 }} bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] p-4"
                >
                    <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-4 py-2 rounded-full text-[#F59E0B] text-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
                        2k+ Pets Found Homes This Year
                    </div>
                    <h1 className="text-3xl font-bold">
                        Find Your Perfect{" "}
                        <span className="text-[#F59E0B]">Furry Friend</span>{" "}
                        Today
                    </h1>
                    <p className="my-4">
                        Every pet deserves a loving home. Discover thousands of
                        adorable animals waiting to become your lifelong
                        companion. Your perfect match is just one click away.
                    </p>
                    <div className="flex gap-3 my-4">
                        <Button className="bg-[#F59E0B] text-white">
                            Adopt Now
                        </Button>
                        <Button className="outline bg-transparent border border-[#F59E0B] text-[#F59E0B]">
                            <Link href={"/all-pets"}>Browse Pets</Link>
                        </Button>
                    </div>
                </motion.div>
                {/*Banner Image*/}
                <div className="border border-[#F59E0B] shadow-sm rounded-xl mx-4">
                    <Image
                        src={BannerImg}
                        width={400}
                        height={200}
                        alt="Banner Image"
                        className="w-100 h-80 rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
