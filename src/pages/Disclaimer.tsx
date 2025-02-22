import { disclaimerContent } from "../components/content/content";
import ContentGrid from "../components/content/ContentGrid";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Disclaimer = () => {
    return (
        <>
            <Navbar />
            <ContentGrid contents={disclaimerContent} />
            <Footer />
        </>
    )
}

export default Disclaimer;