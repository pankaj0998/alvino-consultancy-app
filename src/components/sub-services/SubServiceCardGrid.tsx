import { subService } from "./sub-service";
import SubServiceCard from "./SubServiceCard";

const SubServiceCardGrid = () => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10 m-10 max-[600px]:p-0`}>
            {subService.map((card, index) => (
                <SubServiceCard key={index} {...card} />
            ))}
        </div>
    );
};

export default SubServiceCardGrid;