import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ComingSoon from "./pages/ComingSoon";
import DropDownMenu from "./pages/sub-pages/DropDown";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
        {/* <Route path="" element={<DropDownMenu />} /> */}
      </Routes>
    </BrowserRouter >
  );
}
