import DropDownMenu from "../../components/drop-down/DropDown"
import { DropDown } from "../../components/navbar/navbar-menu";
import { transactionAndDeals } from "../../components/sub-banner/sub-service-list";
import { transactionDealsService } from "../../components/sub-services/sub-service"

const TransactionDeals = () => {
    const elements = [
        { content: "Home", link: "/" },
        { content: "Services", link: "/services" },
        { content: DropDown.TD, link: "/services/transaction-deals" }
    ];
    return (<DropDownMenu cards={transactionDealsService} elements={elements} separator="/" subBanner={transactionAndDeals} />)
}

export default TransactionDeals