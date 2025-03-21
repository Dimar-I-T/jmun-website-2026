import { Council, CouncilLevel } from "@/types";
import { capitalizeFirstLetter } from "@/utils";
import React from "react";

type CouncilCardProps = Omit<Council, "description">;

function CouncilLevelBadge({ level }: { level: CouncilLevel }) {
  if (level === "beginner") {
    return (
      <span className="bg-green-800 rounded-lg px-1.5 py-0.5">
        {capitalizeFirstLetter(level)}
      </span>
    );
  }

  if (level === "intermediate") {
    return (
      <span className="bg-yellow-200 rounded-lg px-1.5 py-0.5">
        {capitalizeFirstLetter(level)}
      </span>
    );
  }

  return (
    <span className="bg-red-800 rounded-lg px-1.5 py-0.5">
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
    <div className="rounded-xl overflow-hidden w-full md:max-w-md cursor-pointer transition-transform duration-300 hover:scale-105">
      {/* Gradient background */}
      <div className="bg-gradient-to-r from-pink-light to-soft-beige p-8 flex flex-col items-center text-white h-full w-full">
        {/* Organization/Logo section */}
        <div className="mb-6 text-center">
          <h3 className="text-3xl font-extrabold font-plus-jakarta bg-gradient-to-r from-red-dark to-pink-light bg-clip-text text-transparent mb-4">
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
        <h3 className="text-xl font-semibold text-center mb-6 text-pink-dark">
          {topic}
        </h3>

        {/* Status line */}
        <div className="flex items-center justify-center gap-2 mb-4 font-bold text-red-dark">
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
        <div className="grow"></div>

        {/* View More button */}
        <button className="font-medium text-lg hover:underline">
          View More
        </button>
      </div>
    </div>
  );
};

export default CouncilCard;
