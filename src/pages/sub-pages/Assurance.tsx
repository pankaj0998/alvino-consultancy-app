import DropDownMenu from "../../components/drop-down/DropDown"
import { DropDown } from "../../components/navbar/navbar-menu";
import { assurance } from "../../components/sub-banner/sub-service-list";
import { assuranceService } from "../../components/sub-services/sub-service"

const AssurancePage = () => {
    const elements = [
        { content: "Home", link: "/" },
        { content: "Services", link: "/services" },
        { content: DropDown.ARS, link: "/services/assurance-services" }
    ];
    return (<DropDownMenu cards={assuranceService} elements={elements} separator="/" subBanner={assurance} />)
}

export default AssurancePage