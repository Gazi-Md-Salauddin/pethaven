import Link from 'next/link'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 px-[5%] py-20 text-white">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-[#F59E0B] mb-4">PetHaven</h2>

          <p className="text-muted leading-7">
            Connecting loving families with animals who need them most.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>

          <div className="flex flex-col gap-3 text-muted">
            <Link href="/">Home</Link>
            <Link href="/all-pets">All Pets</Link>
            
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Social Links</h4>

          <div className="flex gap-3">
            <a href="#"><FaSquareFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>

          <div className="flex flex-col gap-3 text-muted">
            <p>📍 New York</p>
            <p>📞 +1 234 567</p>
            <p>✉ pethaven132@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-6 text-center text-muted text-sm">
        © 2026 PetHaven. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer