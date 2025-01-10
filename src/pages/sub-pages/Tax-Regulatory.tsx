import DropDownMenu from "../../components/drop-down/DropDown"
import { DropDown } from "../../components/navbar/navbar-menu";
import { taxAndRegulatory } from "../../components/sub-banner/sub-service-list";
import { subService } from "../../components/sub-services/sub-service"

const TaxRegulatoryPage = () => {
    const elements = [
        { content: "Home", link: "/" },
        { content: "Services", link: "/services" },
        { content: DropDown.TRS, link: "/services/tax-regulatory-services" }
    ];
    return (<DropDownMenu cards={subService} elements={elements} separator="/" subBanner={taxAndRegulatory} />)
}

export default TaxRegulatoryPage