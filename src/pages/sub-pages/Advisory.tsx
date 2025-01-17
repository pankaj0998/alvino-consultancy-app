import DropDownMenu from "../../components/drop-down/DropDown"
import { DropDown } from "../../components/navbar/navbar-menu";
import { advisory } from "../../components/sub-banner/sub-service-list";
import { advisoryService } from "../../components/sub-services/sub-service"
import { urls } from "../../links/url";

const AdvisoryPage = () => {
    const elements = [
        { content: "Home", link: urls.home },
        { content: "Services", link: urls.services },
        { content: DropDown.AS, link: urls.advisoryService }
    ];
    return (<DropDownMenu cards={advisoryService} elements={elements} separator="/" subBanner={advisory} />)
}

export default AdvisoryPage