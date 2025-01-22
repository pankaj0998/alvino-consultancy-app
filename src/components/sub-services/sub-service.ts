import { Advisory, Assurance, TaxAndRegulatory, TransactionDeals } from "../navbar/navbar-menu";
import { CardProps } from "./SubServiceCard.types";
import businessTaxImage from '/images/tax-regulatory/business-tax.png';
import inboundImage from '/images/tax-regulatory/inbound.png';
import indirectImage from '../../../public/images/tax-regulatory/indirect.png';
import lititgationImage from './../../public/images/tax-regulatory/litigation.png';
import taxManagedImage from './../../public/images/tax-regulatory/tax-managed.png';
import transferImage from './../../public/images/tax-regulatory/transfer.png';
import businessConsultingImage from './../../public/images/advisory-service/BusinessConsu.png';
import strategicConsultingImage from './../../public/images/advisory-service/StrategyConsu.png';
import equityImage from './../../public/images/advisory-service/Equity SME.png';
import ipoImage from './../../public/images/advisory-service/IPO and QIP.png';
import workforceImage from './../../public/images/advisory-service/Workforce.png';
import investmentImage from './../../public/images/transaction-deals/Investment.png';
import debtRestImage from './../../public/images/transaction-deals/Debt Rest.png';
import dueDiligenceImage from './../../public/images/transaction-deals/Due Diligence.png';
import valuationImage from './../../public/images/transaction-deals/Valuation Services.png';
import financialImage from './../../public/images/assurance/Financial.png';
import forensicImage from './../../public/images/assurance/Forensic.png';
import accountingImage from './../../public/images/assurance/Accounting Advi.png';

export const subService: CardProps[] = [
    {
        image: businessTaxImage,
        title: TaxAndRegulatory.BTRC,
        description: "From business registrations (GST, MSME, FSSAI, PAN, etc.) to handling ongoing tax filings and certifications, we ensure that businesses comply with India’s comprehensive tax laws. Our team guides clients through the entire compliance process, from registering with relevant authorities to preparing and submitting tax returns on time. We also assist in maintaining necessary certifications required to operate in India, such as FSSAI for food-related businesses, MSME registration for small enterprises, and others. Our expertise helps businesses reduce operational risks, avoid penalties, and ensure long-term compliance, setting a strong foundation for growth in India.",
        isButtonRequired: false
    },
    {
        image: inboundImage,
        title: TaxAndRegulatory.IO,
        cardData: [{
            subtitle: "Inbound Entry",
            subDescription: "For foreign businesses looking to enter India, we provide expert guidance on structuring operations in a tax-efficient way. Our services include advising on the best legal structure (e.g., wholly owned subsidiaries, joint ventures, or branch offices), managing registration requirements, and ensuring compliance with Indian corporate laws, including the Income Tax Act, GST, and other state-level taxes. We also assist businesses in leveraging available tax incentives, such as deductions under the Income Tax Act, exemptions under the GST law, and specific incentives provided for foreign investors in sectors like manufacturing, technology, and renewable energy. Our goal is to ensure your market entry is smooth and optimized for long-term success."
        }, {
            subtitle: "Outbound Entry",
            subDescription: "For Indian businesses looking to expand internationally, we help structure cross-border investments and operations in a tax-efficient manner. This includes guiding businesses on the tax implications of setting up foreign subsidiaries, branches, or joint ventures, and advising on how to manage taxes across multiple jurisdictions. Our team ensures compliance with global tax laws and regulatory frameworks, such as the OECD guidelines on transfer pricing, tax treaties, and local tax requirements. We also help companies manage the repatriation of profits, avoiding double taxation through the use of Double Taxation Avoidance Agreements (DTAA) and tax credits in host countries, thus minimizing tax burdens while ensuring full compliance."
        }],
        isButtonRequired: false
    },
    {
        image: transferImage,
        title: TaxAndRegulatory.TPCBA,
        description: "Transfer pricing is one of the most complex areas of international tax, especially for MNCs operating in multiple jurisdictions. Alvino Consultancy offers a comprehensive suite of transfer pricing services to help businesses comply with India’s transfer pricing regulations and international standards. Our services include the preparation of transfer pricing documentation, conducting benchmarking studies, representing client matters before transfer pricing authorities, and helping businesses develop robust transfer pricing policies that reflect market conditions and ensure compliance with the arm’s length principle. We also advise businesses on structuring intercompany transactions to mitigate risks and optimize tax positions. Our team ensures that transfer pricing policies are aligned with the requirements of local tax authorities while considering the global business strategy.",
        isButtonRequired: false
    },
    {
        image: lititgationImage,
        title: TaxAndRegulatory.LSTD,
        description: "Handling tax disputes can be a complex and time-consuming process for businesses. At Alvino Consultancy, we provide expert litigation support to businesses involved in disputes with Indian tax authorities. We represent clients at various stages of litigation, from audits and assessments to appellate proceedings and court hearings. Our team works closely with clients to develop effective strategies for resolving disputes, which may include settlement negotiations, applying for tax amnesty schemes, and recovering pending tax refunds. We also offer support in handling disputes related to transfer pricing, GST, and other indirect taxes. Our goal is to ensure that businesses navigate the legal landscape effectively, minimizing risks and securing favourable outcomes.",
        isButtonRequired: false
    },
    {
        image: indirectImage,
        title: TaxAndRegulatory.ITS,
        description: "GST regime in India has redefined the indirect tax landscape, requiring businesses to stay compliant with constantly evolving regulations. We provide end-to-end services for GST compliance, including registration, return filings, managing audits, and advisory on tax exemptions and trade incentives. Our team helps businesses understand and implement GST on various transactions, such as sales, imports, and exports, ensuring that the correct tax rate is applied and that the company claims all eligible input tax credits. We also assist in classification of goods and services to ensure correct treatment under GST, minimizing exposure to penalties and disputes. Additionally, we advise clients on navigating the intricacies of state-specific GST regulations, providing them with the tools necessary for seamless operations across India.",
        isButtonRequired: false
    },
    {
        image: taxManagedImage,
        title: TaxAndRegulatory.TMS,
        description: "Our tax-managed services enable businesses to efficiently outsource their tax functions, thereby improving compliance and reducing the overall cost of tax reporting. We provide end-to-end solutions that streamline tax-related activities, including the preparation and filing of returns, managing audits, and ensuring adherence to local and international tax laws. Our team handles the complexities of tax compliance, allowing businesses to focus on core operations while ensuring that tax obligations are met in a timely and cost-effective manner. This reduces the risk of errors, penalties, and compliance issues.",
        isButtonRequired: false
    }
]

export const advisoryService: CardProps[] = [
    {
        image: businessConsultingImage,
        title: Advisory.BC,
        description: "At Alvino Consultancy LLP, we assist businesses with a wide range of consulting services, including market entry strategies, business formation, restructuring, mergers & acquisitions (M&A), and succession planning. We help companies assess the market landscape, identify growth opportunities, and develop tailored strategies that enable them to enter new markets successfully. Our services also include advising on business structure optimization, navigating legal and regulatory challenges, and ensuring that companies are equipped to scale in competitive environments.",
        isButtonRequired: false
    },
    {
        image: workforceImage,
        title: Advisory.WRC,
        description: "Our workforce consulting services focus on helping businesses manage their most important asset – human capital. We assist with secondment arrangements, labor law compliance, employee compensation structuring, and the implementation of best practices to ensure that your workforce is engaged, motivated, and productive. We also provide advisory on national labor reforms, which help businesses understand and implement the latest labor regulations, minimizing the risk of non-compliance. Our goal is to ensure that businesses adapt efficiently to regulatory changes while fostering a positive organizational culture.",
        isButtonRequired: false
    },
    {
        image: strategicConsultingImage,
        title: Advisory.SC,
        description: "We provide expert strategy consulting services aimed at helping start-ups or newly ventured businesses develop and execute growth strategies that align with their long-term goals. This includes advising on various business parameters like digital automation initiatives, competitive positioning, and researching on market dynamics. Our team works closely with leadership to craft strategies that are forward-thinking and resilient to market disruptions, ensuring that companies stay ahead of the competition. Whether it’s expanding into new markets, launching new products, or improving operational efficiencies, our team provides actionable insights that drive business success.",
        isButtonRequired: false
    },
    {
        image: ipoImage,
        title: Advisory.IQAS,
        description: "Our IPO (Initial Public Offering) and QIP (Qualified Institutional Placement) advisory services team (backed and supported by our business partners), assist businesses in navigating the complex process of raising capital through the public markets. We provide end-to-end support, including preparing companies for listing, ensuring regulatory compliance with SEBI (Securities and Exchange Board of India), and helping structure offerings that maximize value. Our team advises on financial reporting, corporate governance, and risk management to ensure a smooth transition from private to public status. Whether it’s preparing the necessary documentation, structuring the deal, or assisting with investor communication, we help companies position themselves effectively in the capital markets.",
        isButtonRequired: false
    },
    {
        image: equityImage,
        title: Advisory.ED,
        description: "Alvino Consultancy LLP provides specialized advisory services to support SMEs and startups in raising capital through equity or debt financing. Our team assists with structuring financing options, identifying suitable investors or lenders, and preparing the necessary documentation for funding applications. We help clients navigate the complexities of venture capital, private equity, angel investment, and debt financing, ensuring that the funding process aligns with business goals and optimizes capital structure. Our services also include financial modelling, valuation, and investor relations management to facilitate successful fundraising.",
        isButtonRequired: false
    }
]

export const transactionDealsService: CardProps[] = [
    {
        image: investmentImage,
        title: TransactionDeals.IACBT,
        description: "We assist businesses in structuring both inbound and outbound investments in a tax-efficient manner. Our team advises on selecting the optimal investment structure—whether setting up subsidiaries, joint ventures, or direct investments—and ensures compliance with local laws and international regulations. We help businesses optimize capital flows by identifying the most beneficial jurisdictions for operations and minimizing tax exposure. Our cross-border expertise allows businesses to navigate complex international tax systems and regulatory environments, ensuring seamless global operations.",
        isButtonRequired: false
    },
    {
        image: dueDiligenceImage,
        title: TransactionDeals.DDTS,
        description: "Our due diligence services focus on providing an in-depth assessment of the financial, tax, and operational aspects of a transaction. This process ensures that all relevant risks and opportunities are identified before any major business decisions are made. We conduct comprehensive reviews of financial records, tax positions, and operational processes to ensure accuracy and transparency. Additionally, we help structure transactions in a way that minimizes tax liabilities, aligns with corporate strategy, and complies with both local and international regulations. Our approach protects clients from unforeseen risks and maximizes deal value.",
        isButtonRequired: false
    },
    {
        image: valuationImage,
        title: TransactionDeals.VS,
        description: "Alvino Consultancy offers expert valuation services for mergers, acquisitions, debt restructuring, and other major business decisions. We conduct thorough business and asset valuations based on sound financial assessments, considering market conditions, industry standards, and economic forecasts. Our valuation services help clients make well-informed strategic decisions regarding the sale, purchase, or restructuring of business assets. Whether for internal decision-making or regulatory compliance, our accurate and objective valuations ensure that business transactions are based on fair and reliable data.",
        isButtonRequired: false
    },
    {
        image: debtRestImage,
        title: TransactionDeals.DRTS,
        description: "We offer tailored debt restructuring solutions and operational turnaround strategies for businesses facing financial challenges. Our team helps companies restructure their existing debt obligations, renegotiate terms with creditors, and optimize their capital structure. We also work closely with businesses to implement operational changes that enhance profitability, reduce costs, and improve cash flow. Whether through debt refinancing, asset sales, or other restructuring measures, we assist businesses in regaining financial stability and positioning themselves for long-term success.",
        isButtonRequired: false
    },
]

export const assuranceService: CardProps[] = [
    {
        image: financialImage,
        title: Assurance.FAA,
        description: "Our assurance advisory services ensure that businesses are aware of exact requirements relating to statutory compliances (as per Companies Act 2013 / SEBI / Income Tax Act 1961) while providing valuable insights into their financial health and operational performance. We focus on advising in relation to enhancement of internal controls, identifying inefficiencies, and helping businesses comply with financial reporting requirements. Our advisory also contributes to better decision-making and enhance stakeholder trust by ensuring the accuracy and integrity of financial statements.",
        isButtonRequired: false
    },
    {
        image: forensicImage,
        title: Assurance.FAFD,
        description: "Alvino Consultancy, through its network firm and/or affiliates, provides expert forensic accounting services that help businesses detect and prevent fraud, investigate financial discrepancies, and strengthen internal controls. We assist companies in identifying fraudulent activities, implementing preventive measures, and safeguarding their assets. Our forensic accounting services ensure that businesses maintain financial integrity, identify weaknesses in their systems, and ensure the protection of their resources. We work closely with clients to develop strategies to prevent future financial misconduct and enhance organizational transparency.",
        isButtonRequired: false
    },
    {
        image: accountingImage,
        title: Assurance.AAIS,
        description: "We assist businesses in advising on adopting and/ or implementing International Financial Reporting Standards (IFRS) and Indian Accounting Standards (IND-AS) to ensure compliance with global accounting standards. Our accounting advisory services focus on optimizing financial reporting, improving transparency, and providing businesses with clear, accurate financial statements that comply with international norms. We guide companies through the complex process of transitioning to these standards, helping them avoid compliance risks and ensuring their financial reporting aligns with global best practices",
        isButtonRequired: false
    },

]