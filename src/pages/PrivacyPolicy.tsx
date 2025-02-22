import { privacyPolicy } from "../components/content/content";
import ContentGrid from "../components/content/ContentGrid";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <ContentGrid contents={privacyPolicy} />
            <Footer />
        </>
    )
}

export default PrivacyPolicy;