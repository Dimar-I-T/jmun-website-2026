"use client";

import React from "react";
import { ImageCarousel } from "./Carousel";
import { carouselPhotos } from "@/carouselPhotos";

function GallerySection() {
  return (
    <section className="w-full bg-gradient-to-b from-red-dark to-red-bright flex flex-col items-center justify-start px-8 lg:px-0 py-10 gap-8">
      <h2 className="font-plus-jakarta font-extrabold text-3xl md:text-5xl text-white drop-shadow-2xl text-center">
        Past JMUNs
      </h2>
      <ImageCarousel
        images={carouselPhotos.map(({ src }) => {
          return { src, alt: "" };
        })}
      />
    </section>
  );
}

export default GallerySection;
