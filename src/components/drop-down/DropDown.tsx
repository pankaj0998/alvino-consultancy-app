import React from "react";
import Breadcrumb from "../bread-crumb/BreadCrumb";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { callbackform } from "../request-banner/request-banner";
import RequestBanner from "../request-banner/RequestBanner";
import { subService } from "../sub-services/sub-service";
import SubServiceCardGrid from "../sub-services/SubServiceCardGrid";
import { DropDownProps } from "./DropDownProps";

const DropDownMenu: React.FC<DropDownProps> = ({ cards, elements, separator }) => {
    return (
        <>
            <Navbar />
            <Breadcrumb elements={elements} separator="/" />
            <SubServiceCardGrid cards={subService} />
            <RequestBanner {...callbackform} />
            <Footer />
        </>
    )
}

export default DropDownMenu;