import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import TaxRegulatoryPage from "./pages/sub-pages/Tax-Regulatory";
import AdvisoryPage from "./pages/sub-pages/Advisory";
import TransactionDeals from "./pages/sub-pages/Transaction-Deals";
import AssurancePage from "./pages/sub-pages/Assurance";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path="/services/tax-regulatory-services" element={<TaxRegulatoryPage />} />
        <Route path="/services/advisory-services" element={<AdvisoryPage />} />
        <Route path="/services/transaction-deals" element={<TransactionDeals />} />
        <Route path="/services/assurance-services" element={<AssurancePage />} />
      </Routes>
    </BrowserRouter >
  );
}
