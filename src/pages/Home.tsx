import Footer from "../components/footer/Footer"
import HeroSection from "../components/hero/Hero"
import { heroSection } from "../components/hero/hero-section"
import Navbar from "../components/navbar/Navbar"
import { callbackform } from "../components/request-banner/request-banner"
import RequestBanner from "../components/request-banner/RequestBanner"

const HomePage = () => {
    return (
        <div className="lg:relative">
            {/* Navbar */}
            <div className="lg:absolute lg:top-0 left-0 w-full z-50">
                <Navbar />
            </div>
            <HeroSection {...heroSection} />
            <RequestBanner {...callbackform} />
            <Footer />
        </div>
    )
}

export default HomePage;