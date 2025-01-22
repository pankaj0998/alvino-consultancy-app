import ComingSoon from "../components/coming-soon/ComingSoon";
import ContactForm from "../components/contact-form/ContactForm";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const ComingSoonPage = () => {
    return (
        <>
            <Navbar />
            <div className="relative">
                <ComingSoon />
            </div>
            <Footer />
        </>
    )
}

export default ComingSoonPage;