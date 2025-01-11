import TeamInfo from "./TeamInfo";
import { TeamInfoGridProps } from "./TeamInfo.types";

const TeamInfoGrid: React.FC<TeamInfoGridProps> = ({ tagline, teamInfo, heading }) => {
    return (
        <div className="flex w-full flex-col px-10">
            {/* Content Section */}
            <div className="w-full lg:p-6 mt-8">
                <div className=" flex justify-center rounded bg-blue-light w-fit">
                    <span className="text-sm font-medium  text-blue-500 py-1 px-3 rounded uppercase">{tagline}</span>
                </div>
                <h2 className="text-4xl font-semibold mt-4 text-blue-title">{heading}</h2>
            </div>
            <div className="py-10">
                {teamInfo.map((item, index) => (
                    <TeamInfo key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default TeamInfoGrid;