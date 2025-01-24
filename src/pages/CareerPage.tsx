import CareerForm from "../components/career-form/Career Form";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { career } from "../components/sub-banner/career";
import SubBanner from "../components/sub-banner/SubBanner";

const CareerPage = () => {
    return (
        <>
            <Navbar />
            <div className="relative ">
                <SubBanner {...career} />
            </div>
            <CareerForm />
            <Footer />
        </>
    )
}

export default CareerPage;