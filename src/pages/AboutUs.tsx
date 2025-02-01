import { useEffect, useRef } from "react";
import Footer from "../components/footer/Footer";
import { aboutUsInfo } from "../components/information-screen/about-info";
import InformationScreen from "../components/information-screen/InformationScreen";
import { missionCard } from "../components/mission-card/mission-card";
import MissionCard from "../components/mission-card/MissionCard";
import Navbar from "../components/navbar/Navbar";
import { aboutUs } from "../components/sub-banner/about-us";
import SubBanner from "../components/sub-banner/SubBanner";
import { teamContent } from "../components/team/team-info";
import TeamInfoGrid from "../components/team/TeamInfoGrid";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
    const whoWeAreRef = useRef<HTMLDivElement | null>(null);
    const ourTeamRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    useEffect(() => {
        // Scroll to section when hash is present in URL
        if (location.hash === "#who-we-are" && whoWeAreRef.current) {
            whoWeAreRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (location.hash === "#our-team" && ourTeamRef.current) {
            ourTeamRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    return (
        <>
            <Navbar />
            <div className="relative ">
                <SubBanner {...aboutUs} />
            </div>
            <div className="my-14" ref={whoWeAreRef} id="who-we-are">
                <InformationScreen {...aboutUsInfo} />
            </div>
            <MissionCard {...missionCard} />
            <div ref={ourTeamRef} id="our-team">
                <TeamInfoGrid {...teamContent} />
            </div>
            <Footer />
        </>
    )
}

export default AboutUs;