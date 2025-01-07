import Footer from "../components/footer/Footer";
import { aboutUsInfo } from "../components/information-screen/about-info";
import InformationScreen from "../components/information-screen/InformationScreen";
import { missionCard } from "../components/mission-card/mission-card";
import MissionCard from "../components/mission-card/MissionCard";
import Navbar from "../components/navbar/Navbar";
import { aboutUs } from "../components/sub-banner/about-us";
import SubBanner from "../components/sub-banner/SubBanner";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="relative ">
                <SubBanner {...aboutUs} />
            </div>
            <div className="my-14">
                <InformationScreen {...aboutUsInfo} />
            </div>
            <MissionCard {...missionCard} />
            <Footer />
        </>
    )
}

export default AboutUs;