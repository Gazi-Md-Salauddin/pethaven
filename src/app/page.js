import Image from "next/image";
import Banner from '@/components/Shared/Banner';
import FeaturedPets from '@/components/Shared/FeaturedPets';
import WhyAdopt from '@/components/Shared/WhyAdopt'
import Footer from '@/components/Shared/Footer'

export default function Home() {
  return (
    <div>
      <Banner/>
      <FeaturedPets/>
      <WhyAdopt/>
      <Footer/>
    </div>
  );
}
