import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ServiceCardGrid from "./components/service-card/ServiceCardGrid";
import RequestBanner from './components/request-banner/RequestBanner';
import { callbackform } from './components/request-banner/request-banner';

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-6">
        <ServiceCardGrid /> {/* Pass cardData as cards prop */}
        <RequestBanner {...callbackform} />
      </div>
    </BrowserRouter>
  );
}
