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
import InformationScreen from './components/information-screen/InformationScreen';
import { aboutUsInfo } from './components/information-screen/about-info';
import MissionCard from './components/mission-card/MissionCard';
import { missionCard } from './components/mission-card/mission-card';

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-0">
        {/* <SubBanner {...aboutUs} /> */}
        {/* <ServiceCardGrid /> */}
        {/* <RequestBanner {...callbackform} /> */}
        {/* <SubServiceCardGrid /> */}
        {/* <InformationScreen {...aboutUsInfo} /> */}
        <MissionCard {...missionCard} />
      </div>
    </BrowserRouter>
  );
}
