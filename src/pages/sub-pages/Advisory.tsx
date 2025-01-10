import DropDownMenu from "../../components/drop-down/DropDown"
import { DropDown } from "../../components/navbar/navbar-menu";
import { advisory } from "../../components/sub-banner/sub-service-list";
import { advisoryService } from "../../components/sub-services/sub-service"

const AdvisoryPage = () => {
    const elements = [
        { content: "Home", link: "/" },
        { content: "Services", link: "/services" },
        { content: DropDown.AS, link: "/services/advisory-services" }
    ];
    return (<DropDownMenu cards={advisoryService} elements={elements} separator="/" subBanner={advisory} />)
}

export default AdvisoryPage