"use client";

import React from "react";
import { ImageCarousel } from "../home/Carousel";
import opening1Photo from "@/assets/venues-images/opening1.png";
import opening2Photo from "@/assets/venues-images/opening2.png";
import opening3Photo from "@/assets/venues-images/opening3.png";
import opening4Photo from "@/assets/venues-images/opening4.png";
import closing1Photo from "@/assets/venues-images/closing1.png";
import closing2Photo from "@/assets/venues-images/closing2.png";
import closing3Photo from "@/assets/venues-images/closing3.png";
import closing4Photo from "@/assets/venues-images/closing4.png";
import social1Photo from "@/assets/venues-images/social1.png";
import social2Photo from "@/assets/venues-images/social2.png";
import social3Photo from "@/assets/venues-images/social3.png";
import social4Photo from "@/assets/venues-images/social4.png";
import Image, { StaticImageData } from "next/image";

interface PhotosType {
    title: string;
    location: string;
    photos: StaticImageData[];
}

const photosDoc: PhotosType[] = [
    {
        title: "Opening & Cultural Fair",
        location: "Museum Bank Mandiri",
        photos: [opening1Photo, opening2Photo, opening3Photo, opening4Photo],
    },
    {
        title: "Conference & Closing",
        location: "Tavia Heritage Hotel",
        photos: [closing1Photo, closing2Photo, closing3Photo, closing4Photo],
    },
    {
        title: "Social Night",
        location: "Amigos Tavia",
        photos: [social1Photo, social2Photo, social3Photo, social4Photo],
    },
];

function VenuesGallerySection() {
    return (
        <section className="w-full flex flex-col items-start justify-start px-6 md:px-20 pt-16 md:pt-20 gap-18 max-md:gap-15 md:scale-93">
            {photosDoc.map((doc, docIndex) => (
                <div key={docIndex} className="w-full flex flex-col gap-6">
                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8 px-2 md:px-8">
                        <h2 className="font-bodoni font-bold text-4xl md:text-7xl text-biru-3">
                            {doc.title}
                        </h2>
                        <p className="font-montserrat italic text-sm md:text-xl text-biru-3">
                            {doc.location}
                        </p>
                    </div>

                    <div className="w-full md:hidden">
                        <ImageCarousel
                            images={doc.photos.map((image) => ({
                                src: image.src,
                                alt: "venues",
                            }))}
                        />
                    </div>

                    <div className="relative w-full mx-auto rounded-lg hidden md:grid md:grid-cols-4 gap-2">
                        {doc.photos.map((image, index) => (
                            <div key={index} className="outline-none px-2">
                                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                                    <Image
                                        src={image.src}
                                        alt="venues"
                                        width={332}
                                        height={443}
                                        className="object-cover w-full h-full"
                                        priority
                                        unoptimized
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default VenuesGallerySection;