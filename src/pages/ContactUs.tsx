import ContactForm from "../components/contact-form/ContactForm";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { contactUs } from "../components/sub-banner/contact-us";
import SubBanner from "../components/sub-banner/SubBanner";

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="relative ">
                <SubBanner {...contactUs} />
            </div>
            <div className="my-10">
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;