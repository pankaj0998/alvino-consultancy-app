import { ServiceCardGridProps } from './ServiceCard.types';
import tax from '/images/tax.png'
import transaction from '/images/transaction.png'
import advisor from '/images/advisor.png'
import assurance from '/images/assurance.png'
import { urls } from '../../links/url';

export const cardData: ServiceCardGridProps = {
    cards: [
        {
            title: "Tax And Regulatory Services",
            description: "Our tax and regulatory services are designed to ensure businesses comply with local and international tax laws while minimizing tax liabilities.",
            buttonText: "VIEW ALL",
            imageUrl: tax,
            className: "service-card",
            route: urls.taxRegulatoryService,
            style: {},
        },
        {
            title: "Advisory Services",
            description: "Our advisory services are designed to help businesses streamline their operations, enhance overall performance, and achieve their strategic goals.",
            buttonText: "VIEW ALL",
            imageUrl: transaction,
            className: "service-card",
            route: urls.advisoryService,
            style: {},
        },
        {
            title: "Transactions & Deals",
            description: "We provide support to businesses involved in mergers and acquisitions (M&A), investments, and complex cross-border transactions.",
            buttonText: "VIEW ALL",
            imageUrl: advisor,
            className: "service-card",
            route: urls.transactionDealService,
            style: {},
        },
        {
            title: "Assurance Services",
            description: "Our assurance services help businesses enhance transparency, meet regulatory requirements, and build stakeholder confidence.",
            buttonText: "VIEW ALL",
            imageUrl: assurance,
            className: "service-card",
            route: urls.assuranceService,
            style: {},
        }
    ]
}