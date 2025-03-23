import { Council, CouncilParticipant } from "@/types";
import { capitalizeFirstLetter, changeDelimiter } from "@/utils";
import Image from "next/image";

interface CouncilCardProps {
  council: Council;
  imagePosition?: "left" | "right";
  nextOrganization?: string;
}

const CouncilCard: React.FC<CouncilCardProps> = ({
  council,
  imagePosition = "right",
  nextOrganization,
}) => {
  const {
    topic,
    logo,
    organization,
    participant,
    level = "beginner",
    location,
    description,
  } = council;

  const formatParticipant = (participant: CouncilParticipant) => {
    return participant === "single" ? "Single Delegate" : "Double Delegate";
  };

  const renderContent = () => (
    <div className="flex flex-col justify-center py-6 lg:p-6 flex-1 gap-4">
      <div className="flex flex-col gap-2 lg:gap-0">
        <h2 className="text-4xl lg:text-6xl font-extrabold font-bodoni text-white">
          {organization}
        </h2>
        <p className="font-bodoni font-bold text-2xl lg:text-3xl">{topic}</p>
      </div>

      <p className="text-white font-bold text-lg font-plus-jakarta">
        {capitalizeFirstLetter(level)} - {formatParticipant(participant)} -{" "}
        {location === "offline" ? "Offline" : "Online"}
      </p>
      <div className="flex flex-col-reverse lg:flex-col">
        {!!nextOrganization && (
          <div id={changeDelimiter(nextOrganization.toLowerCase())}></div>
        )}

        <p className="text-white leading-relaxed font-plus-jakarta text-justify">
          {description}
        </p>
      </div>
    </div>
  );

  const renderImage = () => (
    <div className="w-full md:w-1/3 flex items-center justify-center p-6">
      <div className="relative w-48 h-48">
        <Image
          src={logo}
          alt={`${organization} logo`}
          layout="fill"
          objectFit="contain"
          className="max-w-full"
        />
      </div>
    </div>
  );

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div
        className={`flex flex-col ${
          imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {renderImage()}
        {renderContent()}
      </div>
    </div>
  );
};

export default CouncilCard;
