import Footer from "../components/footer/Footer";
import { aboutUsInfo } from "../components/information-screen/about-info";
import InformationScreen from "../components/information-screen/InformationScreen";
import Navbar from "../components/navbar/Navbar";
import { callbackform } from "../components/request-banner/request-banner";
import RequestBanner from "../components/request-banner/RequestBanner";
import { cardData } from "../components/service-card/service-card";
import ServiceCardGrid from "../components/service-card/ServiceCardGrid";
import { aboutUs } from "../components/sub-banner/about-us";
import { services } from "../components/sub-banner/our-service";
import SubBanner from "../components/sub-banner/SubBanner";

const Services = () => {
    return (
        <>
            <Navbar />
            <div className="relative">
                <SubBanner {...services} />
            </div>
            <div className="mt-20 px-10">
                <ServiceCardGrid {...cardData} />
            </div>
            <RequestBanner {...callbackform} />
            <Footer />
        </>
    )
}

export default Services;