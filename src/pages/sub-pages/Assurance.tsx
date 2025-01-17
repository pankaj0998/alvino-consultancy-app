import DropDownMenu from "../../components/drop-down/DropDown"
import { DropDown } from "../../components/navbar/navbar-menu";
import { assurance } from "../../components/sub-banner/sub-service-list";
import { assuranceService } from "../../components/sub-services/sub-service"
import { urls } from "../../links/url";

const AssurancePage = () => {
    const elements = [
        { content: "Home", link: urls.home },
        { content: "Services", link: urls.services },
        { content: DropDown.ARS, link: urls.assuranceService }
    ];
    return (<DropDownMenu cards={assuranceService} elements={elements} separator="/" subBanner={assurance} />)
}

export default AssurancePage