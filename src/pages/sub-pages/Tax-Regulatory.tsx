import DropDownMenu from "../../components/drop-down/DropDown"
import { DropDown } from "../../components/navbar/navbar-menu";
import { taxAndRegulatory } from "../../components/sub-banner/sub-service-list";
import { subService } from "../../components/sub-services/sub-service"
import { urls } from "../../links/url";

const TaxRegulatoryPage = () => {
    const elements = [
        { content: "Home", link: urls.home },
        { content: "Services", link: urls.services },
        { content: DropDown.TRS, link: urls.taxRegulatoryService }
    ];
    return (<DropDownMenu cards={subService} elements={elements} separator="/" subBanner={taxAndRegulatory} />)
}

export default TaxRegulatoryPage