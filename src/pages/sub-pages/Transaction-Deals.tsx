import DropDownMenu from "../../components/drop-down/DropDown"
import { DropDown } from "../../components/navbar/navbar-menu";
import { transactionAndDeals } from "../../components/sub-banner/sub-service-list";
import { transactionDealsService } from "../../components/sub-services/sub-service"
import { urls } from "../../links/url";

const TransactionDeals = () => {
    const elements = [
        { content: "Home", link: urls.home },
        { content: "Services", link: urls.services },
        { content: DropDown.TD, link: urls.transactionDealService }
    ];
    return (<DropDownMenu cards={transactionDealsService} elements={elements} separator="/" subBanner={transactionAndDeals} />)
}

export default TransactionDeals