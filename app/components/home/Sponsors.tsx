import React from "react";
import Image from "next/image";
import mandiri from "@/assets/sponsors-2026/mandiri.png";
import circl from "@/assets/sponsors-2026/circl.png";
import yup from "@/assets/sponsors-2026/yup.png";
import bach from "@/assets/sponsors-2026/bach.png";
import sewa from "@/assets/sponsors-2026/sewa.png";
import hophop from "@/assets/sponsors-2026/hophop.png";

const sponsorsPhotos = [
    {
        src: mandiri,
        alt: 'mandiri'
    },
    {
        src: circl,
        alt: 'circl'
    },
    {
        src: yup,
        alt: 'yup'
    },
    {
        src: bach,
        alt: 'bach'
    },
    {
        src: sewa,
        alt: 'sewa'
    },
    {
        src: hophop,
        alt: 'hophop'
    },
];

function Sponsors() {
    return (
        <section className="w-full flex-col items-center justify-start pt-5 md:pt-10 px-4 md:px-10">
            <section className="w-full flex flex-col items-center justify-start pt-16 md:pt-20 px-4 md:px-10">
                <h2 className="font-bodoni font-bold text-4xl md:text-7xl text-biru-3 mb-8 md:mb-12 text-center">
                    Our Sponsors
                </h2>
                <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-15 pb-10">
                    {sponsorsPhotos.map((isi, index) => (
                        <div
                            key={index}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full drop-shadow-md"
                        >
                            <Image
                                src={isi.src}
                                alt={isi.alt}
                                width={512}
                                height={512}
                                className="object-cover w-full h-full"
                                priority
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Sponsors;
