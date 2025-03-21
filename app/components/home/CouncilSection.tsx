import { councils } from "@/data/council";
import React from "react";
import CouncilCard from "./CouncilCard";

function CouncilSection() {
  return (
    <section className="w-full bg-gradient-to-b bg-red-dark flex flex-col items-center justify-start py-12 px-10">
      <h2 className="font-plus-jakarta font-extrabold text-3xl md:text-5xl text-white drop-shadow-2xl text-center">
        Councils
      </h2>
      <div className="container py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          {councils.map((council, index) => (
            <CouncilCard key={index} {...council} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CouncilSection;
