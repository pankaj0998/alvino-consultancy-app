import React from "react";
import Breadcrumb from "../bread-crumb/BreadCrumb";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { callbackform } from "../request-banner/request-banner";
import RequestBanner from "../request-banner/RequestBanner";
import { subService } from "../sub-services/sub-service";
import SubServiceCardGrid from "../sub-services/SubServiceCardGrid";
import { DropDownProps } from "./DropDownProps";
import SubBanner from "../sub-banner/SubBanner";

const DropDownMenu: React.FC<DropDownProps> = ({ cards, elements, separator, subBanner }) => {
    return (
        <>
            <Navbar />
            <SubBanner {...subBanner} />
            <Breadcrumb elements={elements} separator={separator} />
            <SubServiceCardGrid cards={cards} />
            <RequestBanner {...callbackform} />
            <Footer />
        </>
    )
}

export default DropDownMenu;