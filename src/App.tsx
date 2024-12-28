import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ServiceCardGrid from "./components/service-card/ServiceCardGrid";
import RequestBanner from './components/request-banner/RequestBanner';
import { callbackform } from './components/request-banner/request-banner';
import SubBanner from './components/sub-banner/SubBanner';
import { aboutUs } from './components/sub-banner/about-us';
import SubServiceCard from './components/sub-services/SubServiceCard';
import { subService } from './components/sub-services/sub-service';
import SubServiceCardGrid from './components/sub-services/SubServiceCardGrid';

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-0">
        <SubBanner {...aboutUs} />
        {/* <ServiceCardGrid /> */}
        <RequestBanner {...callbackform} />
        {/* <SubServiceCardGrid /> */}
      </div>
    </BrowserRouter>
  );
}
