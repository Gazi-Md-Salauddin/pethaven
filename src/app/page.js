import Image from "next/image";
import Banner from "@/components/Shared/Banner";
import FeaturedPets from "@/components/Shared/FeaturedPets";
import WhyAdopt from "@/components/Shared/WhyAdopt";

export default async function Home() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet`);
    const pets = await res.json();
    const toppets = pets.slice(0, 3);
    return (
        <div>
            <Banner />
            <div className="text-center mb-16">
                <p className="uppercase tracking-[0.2em] text-amber-400 text-sm mb-3">
                    Our Furry Friends
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                    Meet Pets Ready for Adoption
                </h2>

                <p className="text-muted max-w-2xl mx-auto">
                    Each one is waiting for a loving home.
                </p>
            </div>

            <h2 className="text-2xl font-bold mx-6">Featured pets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {toppets.map(pet => (
                    <FeaturedPets key={pet._id} pet={pet} />
                ))}
            </div>
            <WhyAdopt />
        </div>
    );
}
