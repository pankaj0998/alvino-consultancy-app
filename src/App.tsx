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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={urls.home} element={<HomePage />} />
        <Route path={urls.aboutus} element={<AboutUs />} />
        <Route path={urls.services} element={<Services />} />
        <Route path={urls.contactUs} element={<ContactUs />} />
        <Route path={urls.taxRegulatoryService} element={<TaxRegulatoryPage />} />
        <Route path={urls.advisoryService} element={<AdvisoryPage />} />
        <Route path={urls.transactionDealService} element={<TransactionDeals />} />
        <Route path={urls.assuranceService} element={<AssurancePage />} />
      </Routes>
    </BrowserRouter >
  );
}
