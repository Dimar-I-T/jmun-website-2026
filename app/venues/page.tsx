import Image from "next/image";
import ContactUs from "../components/about/ContactUs"; // Adjust path to whichever ContactUs you decided to use
import HomeBackground from "@/assets/HomeBackground.png"; 
import VenuesGallerySection from "../components/venues/VenuesGallerySection";
import Sponsors from "../components/home/Sponsors";

export default function FAQPage() {
  return (
    <main className="relative flex flex-col justify-between w-full min-h-screen overflow-x-hidden">
      {/* Fixed background — locked to viewport, content scrolls over it */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <Image
          src={HomeBackground}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f7f98]/45" />
      </div>

      {/* Top Left Flower Background */}
      <div className="absolute opacity-50 left-[-13vw] top-[-13vw] -z-10 pointer-events-none">
        <Image
          src="/bunga-kiri-atas.png"
          alt="flower decoration"
          width={1783}
          height={2072}
          className="w-[68.292vw] aspect-[1783/2072]"
          priority
          unoptimized
        />
      </div>

      <VenuesGallerySection/>

      <div className="w-full relative z-10 mt-auto">
        <div className="border-b-2 border-white"></div>
        <Sponsors />
        <ContactUs />
      </div>
    </main>
  );
}