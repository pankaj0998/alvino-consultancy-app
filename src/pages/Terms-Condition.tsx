import { termAndConditions } from "../components/content/content";
import ContentGrid from "../components/content/ContentGrid";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const TermsConditions = () => {
    return (
        <>
            <Navbar />
            <ContentGrid contents={termAndConditions} />
            <Footer />
        </>
    )
}

export default TermsConditions;