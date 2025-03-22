import { Council, CouncilLevel } from "@/types";
import { capitalizeFirstLetter } from "@/utils";
import React from "react";

type CouncilCardProps = Omit<Council, "description">;

function CouncilLevelBadge({ level }: { level: CouncilLevel }) {
  if (level === "beginner") {
    return (
      <span className="rounded-lg px-1.5 py-0.5">
        {capitalizeFirstLetter(level)}
      </span>
    );
  }

  if (level === "intermediate") {
    return (
      <span className="rounded-lg px-1.5 py-0.5">
        {capitalizeFirstLetter(level)}
      </span>
    );
  }

  return (
    <span className="rounded-lg px-1.5 py-0.5">
      {capitalizeFirstLetter(level)}
    </span>
  );
}

const CouncilCard: React.FC<CouncilCardProps> = ({
  topic,
  logo,
  organization,
  participant,
  level,
  location,
}) => {
  return (
    <article className="rounded-xl overflow-hidden w-full md:max-w-md cursor-pointer transition-transform duration-300 hover:scale-105">
      {/* Gradient background */}
      <div className="bg-gradient-to-b from-soft-beige to-pink-light p-8 flex flex-col items-center text-white h-full w-full">
        {/* Organization/Logo section */}
        <div className="mb-6 text-center">
          <h3
            className="text-3xl font-extrabold font-bodoni
           bg-gradient-to-r from-red-dark to-pink-dark bg-clip-text text-transparent mb-4"
          >
            {organization}
          </h3>
          {logo ? (
            <img
              src={logo.src}
              alt={`${organization} logo`}
              className="w-auto h-16 mx-auto"
            />
          ) : (
            <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-amber-100"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          )}
        </div>

        {/* Title */}
        <h4 className="text-xl font-bold text-center mb-6 bg-clip-text font-bodoni bg-gradient-to-r from-red-dark to-pink-dark text-transparent drop-shadow-2xl">
          {topic}
        </h4>
        <div className="grow"></div>

        {/* Status line */}
        <div className="flex items-center justify-center gap-2 mb-4 font-bold text-white font-plus-jakarta text-lg">
          <span>{capitalizeFirstLetter(participant)}</span>
          <span>-</span>
          <span className="">{capitalizeFirstLetter(location)}</span>
          {!level ? null : (
            <>
              <span>-</span>
              <CouncilLevelBadge level={level} />
            </>
          )}
        </div>

        {/* View More button */}
        <button className="font-medium font-plus-jakarta text-lg hover:font-bold cursor-pointer">
          View More {">"}
        </button>
      </div>
    </article>
  );
};

export default CouncilCard;
