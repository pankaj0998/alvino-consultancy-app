import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import TaxRegulatoryPage from "./pages/sub-pages/Tax-Regulatory";
import AdvisoryPage from "./pages/sub-pages/Advisory";
import TransactionDeals from "./pages/sub-pages/Transaction-Deals";
import AssurancePage from "./pages/sub-pages/Assurance";
import { urls } from "./links/url";
import ContactUs from "./pages/ContactUs";
import ComingSoonPage from "./pages/ComingSoonPage";
import CareerPage from "./pages/CareerPage";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Disclaimer from "./pages/Disclaimer";
import TermsConditions from "./pages/Terms-Condition";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={urls.home} element={<HomePage />} />
        <Route path={urls.aboutus} element={<AboutUs />} />
        <Route path={urls.services} element={<Services />} />
        <Route path={urls.contactUs} element={<ContactUs />} />
        <Route path={urls.taxRegulatoryService} element={<TaxRegulatoryPage />} />
        <Route path={urls.advisoryService} element={<AdvisoryPage />} />
        <Route path={urls.transactionDealService} element={<TransactionDeals />} />
        <Route path={urls.assuranceService} element={<AssurancePage />} />
        <Route path={urls.comingSoon} element={<ComingSoonPage />} />
        <Route path={urls.career} element={<CareerPage />} />
        <Route path={urls.disclaimer} element={<Disclaimer />} />
        <Route path={urls.termsAndCond} element={<TermsConditions />} />
        <Route path={urls.privacyPolicy} element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter >
  );
}
