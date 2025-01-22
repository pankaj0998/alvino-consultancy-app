import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { cardData } from "../components/service-card/service-card";
import ServiceCardGrid from "../components/service-card/ServiceCardGrid";
import { services } from "../components/sub-banner/our-service";
import SubBanner from "../components/sub-banner/SubBanner";

const Services = () => {
    return (
        <>
            <Navbar />
            <div className="relative">
                <SubBanner {...services} />
            </div>
            <div className="my-20 px-10">
                <ServiceCardGrid {...cardData} />
            </div>
            <Footer />
        </>
    )
}

export default Services;