import { ContentGridProps } from "./Content.type";
import ContentComponent from "./ContentComponent";


const ContentGrid: React.FC<ContentGridProps> = ({ contents }) => {
    return (
        <div className="flex w-full flex-col p-10 my-10 space-y-4">
            {contents.map((item, index) => (
                <ContentComponent key={index} {...item} />
            ))}
        </div>
    );
};
export default ContentGrid;