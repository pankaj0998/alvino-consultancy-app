import {
    Advisory,
    Assurance,
    TaxAndRegulatory,
    TransactionDeals,
} from "../navbar/navbar-menu";
import { CardProps } from "./SubServiceCard.types";
import businessTaxImage from "/images/business-tax.png";
import inboundImage from "/images/inbound.png";
import indirectImage from "/images/indirect.png";
import lititgationImage from "/images/litigation.png";
import taxManagedImage from "/images/tax-managed.png";
import transferImage from "/images/transfer.png";
import businessConsultingImage from "/images/BusinessConsu.png";
import strategicConsultingImage from "/images/StrategyConsu.png";
import equityImage from "/images/Equity SME.png";
import ipoImage from "/images/IPO and QIP.png";
import workforceImage from "/images/Workforce.png";
import investmentImage from "/images/Investment.png";
import debtRestImage from "/images/Debt Rest.png";
import dueDiligenceImage from "/images/Due Diligence.png";
import valuationImage from "/images/Valuation Services.png";
import financialImage from "/images/Financial.png";
import forensicImage from "/images/Forensic.png";
import accountingImage from "/images/Accounting Advi.png";

export const subService: CardProps[] = [
    {
        image: businessTaxImage,
        title: TaxAndRegulatory.BTRC,
        description:
            "At Alvino Consultancy, we provide end-to-end tax and regulatory services, ensuring businesses remain compliant with India’s evolving legal framework while optimizing operational efficiency. From business registrations (GST, MSME, FSSAI, PAN, etc.) to ongoing tax filings and certifications, we guide clients through the entire compliance lifecycle. Our team ensures seamless regulatory adherence, reducing operational risks and safeguarding businesses against penalties. Whether it's securing necessary certifications—such as FSSAI for food-related businesses or MSME registration for small enterprises—we establish a strong foundation for sustainable growth in India.",
        isButtonRequired: false,
    },
    {
        image: inboundImage,
        title: TaxAndRegulatory.IO,
        cardData: [
            {
                subtitle: "Inbound Entry – Establishing a Presence in India",
                subDescription: `<p>For foreign businesses seeking to enter the Indian market, we provide expert guidance on structuring operations tax-efficiently. Our services include:</p><br>

<ul>
  <li>Advising on the optimal legal structure (wholly owned subsidiaries, joint ventures, branch offices).</li>
  <li>Managing registration requirements and ensuring corporate law compliance (Income Tax Act, GST, and state-specific taxes).</li>
  <li>Helping businesses leverage tax incentives—including deductions under the Income Tax Act, GST exemptions, and sector-specific benefits (e.g., manufacturing, technology, renewable energy).</li>
  <li>Structuring profit repatriation strategies while leveraging Double Taxation Avoidance Agreements (DTAA) and foreign tax credits to minimize tax burdens.</li>
  <li>Managing tax obligations across multiple jurisdictions in compliance with OECD/Indian transfer pricing guidelines, tax treaties, and local regulations.</li>
</ul>
<br>
<p>With seamless regulatory navigation and a strategic market entry plan, we ensure businesses establish a strong and compliant presence in India, paving the way for long-term success.</p>`,
            },
            {
                subtitle: "Outbound Entry – Global Expansion for Indian Businesses",
                subDescription: `For Indian businesses expanding beyond domestic borders, we offer strategic solutions to structure cross-border investments efficiently.<br><br>

                Our services include:
                <ul>
<li>Advising on foreign subsidiary, branch, or joint venture setup.</li>
<li>Managing tax obligations across multiple jurisdictions in compliance with OECD/ Indian transfer pricing guidelines, tax treaties, and local regulations.</li>
<li>Structuring profit repatriation strategies while leveraging Double Taxation Avoidance Agreements (DTAA) and foreign tax credits to minimize tax burdens.</li>
 </ul>
With our expertise, Indian businesses can seamlessly scale internationally, ensuring compliance while optimizing tax exposure.`

            },
        ],
        isButtonRequired: false,
    },
    {
        image: transferImage,
        title: TaxAndRegulatory.TPCBA,
        description: `
        <p>Transfer pricing regulations are among the most complex aspects of international taxation, particularly for MNCs with global operations. At Alvino Consultancy, we offer a comprehensive suite of transfer pricing services, ensuring businesses remain compliant with India’s transfer pricing laws and international best practices.<br><br></p>
      
        <p>Our services include:</p>
        <ul>
          <li>Transfer pricing documentation & benchmarking studies.</li>
          <li>Representation before tax authorities & dispute resolution.</li>
          <li>Development of intercompany pricing policies aligned with the arm’s length principle.</li>
          <li>Strategic advisory on intercompany transactions to optimize tax positions and mitigate risks.</li>
        </ul>
        <br>
        <p>Our expert team ensures transfer pricing policies are aligned with global strategies while complying with local tax authorities, helping businesses reduce exposure to audits and penalties.</p>
      `,
        isButtonRequired: false,
    },
    {
        image: indirectImage,
        title: TaxAndRegulatory.ITS,
        description: `<p>The GST regime has transformed India’s indirect tax landscape, requiring businesses to navigate a dynamic regulatory environment. Alvino Consultancy offers end-to-end GST compliance solutions, ensuring seamless tax management across sales, imports, exports, and inter-state transactions.</p>
<br>
<p>Our services include:</p>
<ul>
  <li>GST registration & return filings.</li>
  <li>Audit representation & dispute resolution.</li>
  <li>Tax classification of goods & services for accurate rate application.</li>
  <li>Advisory on state-specific GST regulations & input tax credit optimization.</li>
</ul>
<br>
<p>With our expert guidance, businesses can ensure GST compliance, minimize exposure to penalties, and maximize tax efficiency.</p>
`,
        isButtonRequired: false,
    },
    {
        image: lititgationImage,
        title: TaxAndRegulatory.LSTD,
        description: `<p>Navigating tax disputes and litigation can be complex and resource-intensive. At Alvino Consultancy, we provide expert representation to businesses involved in disputes with Indian tax authorities, offering support at every stage of litigation (including High Court & Supreme Court matters via our affiliated law chambers and senior counsels).</p>
<br>
<p>Our services include:</p>
<ul>
  <li>Representation during audits, assessments, and appellate tribunal/ High Court/ Supreme Court proceedings.</li>
  <li>Settlement negotiations & application for tax amnesty schemes.</li>
  <li>Recovery of pending tax refunds and dispute resolution for GST, transfer pricing, and other indirect taxes.</li>
</ul>
<br>
<p>With our strategic approach and deep legal expertise, we help businesses mitigate risks, minimize liabilities, and secure favourable resolutions.</p>
`,
        isButtonRequired: false,
    },

    {
        image: taxManagedImage,
        title: TaxAndRegulatory.TMS,
        description: `<p>Our Tax Managed Services offer businesses an efficient way to outsource their tax functions, ensuring full compliance while reducing the burden of in-house tax management.</p>
<br>
<p>Our end-to-end solutions include:</p>
<ul>
  <li>Preparation & filing of tax returns.</li>
  <li>Audit management & risk mitigation.</li>
  <li>Compliance with local & international tax laws.</li>
</ul>
<br>
<p>By leveraging our expertise and technology-driven approach, businesses can reduce compliance costs, minimize errors, and focus on core growth strategies.</p>
`,
        isButtonRequired: false,
    },
];

export const advisoryService: CardProps[] = [
    {
        image: businessConsultingImage,
        title: Advisory.BC,
        description: `<p>At Alvino Consultancy, we provide comprehensive business consulting services, guiding companies through market entry, business formation, restructuring, mergers & acquisitions (M&A), and succession planning. Our expertise helps businesses assess market landscapes, identify growth opportunities, and develop strategic roadmaps that enable them to scale efficiently.</p>
<br>
<p>Our services include:</p>
<ul>
  <li>Market Entry Strategies – Helping businesses successfully enter new markets with a well-defined approach.</li>
  <li>Business Formation & Structuring – Advising on the optimal corporate structure to enhance operational and tax efficiency.</li>
  <li>M&A & Restructuring – Assisting in mergers, acquisitions, and corporate restructuring to drive growth and maximize value.</li>
  <li>Regulatory Compliance – Navigating legal and regulatory challenges to ensure seamless business operations.</li>
</ul>
<br>
<p>With a strategic and results-driven approach, we enable businesses to optimize their structures and expand competitively.</p>
`,
        isButtonRequired: false,
    },
    {
        image: workforceImage,
        title: Advisory.WRC,
        description: `<p>At Alvino Consultancy, we recognize that human capital is a business’s most valuable asset. Our workforce consulting services are designed to help companies streamline workforce management, ensure compliance, and enhance employee engagement.</p>
<br>
<p>Our expertise covers:</p>
<ul>
  <li>Secondment Arrangements – Structuring efficient employee transfers across jurisdictions.</li>
  <li>Labour Law Compliance – Ensuring businesses adhere to national and industry-specific labour regulations.</li>
  <li>Compensation Structuring – Developing competitive and tax-efficient employee compensation plans.</li>
  <li>National Labour Reforms Advisory – Helping businesses implement the latest labour regulations while minimizing non-compliance risks.</li>
</ul>
<br>
<p>By integrating best practices and compliance frameworks, we help businesses foster a productive, engaged, and legally compliant workforce.</p>
`,
        isButtonRequired: false,
    },
    {
        image: strategicConsultingImage,
        title: Advisory.SC,
        description: `<p>Alvino Consultancy provides expert strategy consulting services tailored to start-ups, high-growth businesses, and enterprises looking to scale. Our focus is on developing data-driven strategies that enhance competitive advantage and drive long-term growth.</p>
<br>
<p>Our key offerings include:</p>
<ul>
  <li>Growth Strategy Development – Aligning business strategies with market trends and competitive dynamics.</li>
  <li>Digital Transformation & Automation – Advising on technology integration and operational efficiencies.</li>
  <li>Competitive Positioning & Market Research – Helping businesses identify opportunities and mitigate market risks.</li>
  <li>Business Model Optimization – Ensuring companies adapt to industry shifts and stay resilient to market disruptions.</li>
</ul>
<br>
<p>With actionable insights, we enable businesses to stay ahead of industry trends and achieve sustainable success.</p>
`,
        isButtonRequired: false,
    },
    {
        image: ipoImage,
        title: Advisory.IQAS,
        description: `<p>Navigating the complex process of raising capital through public markets requires strategic planning and regulatory expertise. At Alvino Consultancy, our IPO (Initial Public Offering) and QIP (Qualified Institutional Placement) advisory services support businesses in successfully transitioning to the public market.</p>
<br>
<p>Our end-to-end support includes:</p>
<ul>
  <li>IPO Preparation & Structuring – Assisting companies in financial and operational readiness for listing.</li>
  <li>SEBI Compliance & Regulatory Guidance – Ensuring adherence to listing requirements and corporate governance norms.</li>
  <li>Financial Reporting & Risk Management – Developing robust reporting mechanisms for investors and regulators.</li>
  <li>Investor Relations & Deal Structuring – Crafting strategies to optimize offering value and attract institutional investors.</li>
</ul>
<br>
<p>With our strategic insights and regulatory expertise, we help businesses seamlessly navigate public fundraising and maximize valuation potential.</p>
`,
        isButtonRequired: false,
    },
    {
        image: equityImage,
        title: Advisory.ED,
        description: `<p>Securing adequate capital is a crucial factor in a business’s growth journey. At Alvino Consultancy, we specialize in advisory services for SMEs and startups, helping them raise funds through equity or debt financing through our strong network of affiliates.</p>
<br>
<p>Our services include:</p>
<ul>
  <li>Capital Structuring & Funding Strategy – Identifying the right financing mix to align with business objectives.</li>
  <li>Investor & Lender Identification – Connecting businesses with venture capitalists, private equity firms, angel investors, and institutional lenders.</li>
  <li>Financial Modelling & Valuation – Assisting in building robust financial models and business valuations.</li>
  <li>Due Diligence & Documentation Support – Ensuring regulatory compliance and transparency throughout the fundraising process.</li>
</ul>
<br>
<p>With our expert guidance, SMEs and startups can secure the right funding at the right time, ensuring sustainable growth and financial stability.</p>
`,
        isButtonRequired: false,
    },
];

export const transactionDealsService: CardProps[] = [
    {
        image: investmentImage,
        title: TransactionDeals.IACBT,
        description: `<p>At Alvino Consultancy, we provide strategic investment advisory services to help businesses structure inbound and outbound investments in a tax-efficient manner. Our expertise ensures that businesses select the optimal investment structure—whether through subsidiaries, joint ventures, or direct investments—while remaining compliant with local and international regulations.</p>
<br>
<p>Our key offerings include:</p>
<ul>
  <li>Structuring Foreign Investments – Advising businesses on the most effective legal and financial frameworks for international operations.</li>
  <li>Regulatory & Compliance Support – Ensuring adherence to FEMA, RBI guidelines, international tax treaties, and corporate laws.</li>
  <li>Capital Flow Optimization – Identifying the most beneficial jurisdictions for investment to minimize tax exposure and maximize returns.</li>
  <li>Cross-Border Tax Advisory – Helping businesses navigate international tax structures and transfer pricing complexities.</li>
</ul>
<br>
<p>With deep expertise in global taxation and regulatory frameworks, we help businesses achieve seamless, compliant, and tax-efficient international expansion.</p>
`,
        isButtonRequired: false,
    },
    {
        image: dueDiligenceImage,
        title: TransactionDeals.DDTS,
        description: `<p>A successful transaction requires in-depth due diligence and strategic structuring to mitigate risks and maximize deal value. At Alvino Consultancy, we conduct comprehensive financial, tax, and operational due diligence to ensure informed decision-making before any major business transaction.</p>
<br>
<p>Our services include:</p>
<ul>
  <li>Financial due diligence – Conducting in-depth financial assessments to uncover risks and validate financial health.</li>
  <li>Tax due diligence – Reviewing tax positions, liabilities, and compliance status to prevent future disputes.</li>
  <li>Operational & legal due diligence – Evaluating business processes, contracts, and regulatory risks for transparency.</li>
  <li>Transaction structuring – Designing deal structures that align with corporate strategy while optimizing tax efficiency.</li>
</ul>
<br>
<p>Our thorough approach ensures accuracy, transparency, and regulatory compliance, protecting businesses from unforeseen risks while enhancing deal success.</p>
`,
        isButtonRequired: false,
    },
    {
        image: valuationImage,
        title: TransactionDeals.VS,
        description: `<p>Alvino Consultancy, in affiliation with its registered valuers and merchant bankers, provides expert valuation services to support businesses in mergers, acquisitions, debt restructuring, and strategic decision-making. Our valuation process is backed by robust financial assessments, incorporating market trends, industry benchmarks, and economic forecasts to deliver accurate, objective, and compliant valuations.</p>
<br>
<p>Our valuation expertise includes:</p>
<ul>
  <li>Business valuation – Assessing companies for M&A, investment decisions, and internal restructuring.</li>
  <li>Asset valuation – Evaluating tangible and intangible assets, including intellectual property and goodwill.</li>
  <li>Regulatory & compliance valuations – Ensuring adherence to SEBI, RBI, and other regulatory requirements.</li>
  <li>Fairness opinions & financial modelling – Providing independent, data-driven insights to support key business transactions.</li>
</ul>
<br>
<p>Our valuations offer clarity and confidence, ensuring that business transactions are based on fair, precise, and reliable financial data.</p>
`,
        isButtonRequired: false,
    },
    {
        image: debtRestImage,
        title: TransactionDeals.DRTS,
        description: `<p>Businesses facing financial distress require strategic debt restructuring and turnaround solutions to restore stability and unlock growth potential. Alvino Consultancy, in affiliation with its segment expert affiliates, provides tailored financial restructuring strategies that optimize capital structures, improve liquidity, and enhance long-term sustainability.</p>
<br>
<p>Our services include:</p>
<ul>
  <li>Debt restructuring & refinancing – Renegotiating terms with lenders and optimizing debt obligations.</li>
  <li>Financial turnaround planning – Implementing cost-reduction and revenue-enhancement strategies to restore profitability.</li>
  <li>Cash flow optimization – Enhancing working capital management to improve liquidity and operational efficiency.</li>
  <li>Asset restructuring & divestment advisory – Structuring asset sales and debt consolidation for financial stability.</li>
</ul>
<br>
<p>Our proactive and data-driven approach ensures that businesses regain financial health, enhance operational resilience, and achieve long-term growth.</p>
`,
        isButtonRequired: false,
    },
];

export const assuranceService: CardProps[] = [
    {
        image: financialImage,
        title: Assurance.FAA,
        description: `<p>We provide financial accounting advisory services to help businesses stay compliant with statutory requirements under the Companies Act, 2013, SEBI regulations, and the Income Tax Act, 1961. Our support goes beyond compliance—we offer strategic insights into financial health, operational efficiency, and risk management.</p>
<br>
<p>Our services include:</p>
<ul>
  <li>Statutory compliance guidance – Ensuring businesses meet all legal and regulatory reporting obligations.</li>
  <li>Internal controls & process optimization – Strengthening governance frameworks and mitigating financial risks.</li>
  <li>Financial statement review & analysis – Enhancing accuracy, integrity, and transparency in reporting.</li>
  <li>Stakeholder reporting & decision support – Providing data-driven insights for better financial decision-making.</li>
</ul>
<br>
<p>By focusing on compliance, efficiency, and strategic foresight, we help businesses build trust, strengthen financial governance, and drive sustainable growth.</p>
`,
        isButtonRequired: false,
    },
    {
        image: forensicImage,
        title: Assurance.FAFD,
        description: `<p>Fraud and financial misconduct pose significant risks to businesses. At Alvino Consultancy, we offer expert forensic accounting and fraud detection services through our network firm and affiliates to help businesses detect, investigate, and prevent financial irregularities.</p>
<br>
<p>Our forensic accounting services include:</p>
<ul>
  <li>Fraud investigation & detection – Identifying financial discrepancies and tracing fraudulent transactions.</li>
  <li>Internal control strengthening – Assessing and reinforcing systems to prevent financial misconduct.</li>
  <li>Asset misappropriation & financial irregularity reviews – Safeguarding corporate resources from potential abuse.</li>
  <li>Litigation support & expert testimony – Assisting in legal cases with evidence-based financial analysis.</li>
</ul>
<br>
<p>We work closely with clients to develop fraud prevention strategies, enhance transparency, and protect business integrity, ensuring a secure and compliant financial environment.</p>
`,
        isButtonRequired: false,
    },
    {
        image: accountingImage,
        title: Assurance.AAIS,
        description: `<p>With the increasing globalization of financial reporting, businesses must ensure compliance with International Financial Reporting Standards (IFRS) and Indian Accounting Standards (IND-AS). Alvino Consultancy, in association with its network of service expert affiliates, guides companies through seamless adoption and implementation, ensuring accuracy, compliance, and transparency in financial reporting.</p>
<br>
<p>Our services include:</p>
<ul>
  <li>IFRS & IND-AS transition advisory – Supporting businesses in navigating complex accounting standard changes.</li>
  <li>Financial reporting optimization – Ensuring clarity, accuracy, and global compliance in financial statements.</li>
  <li>Risk & compliance management – Identifying and mitigating risks associated with accounting standard transitions.</li>
  <li>Training & implementation support – Equipping finance teams with best practices and technical knowledge.</li>
</ul>
<br>
<p>Our expert-driven, structured approach ensures that businesses stay compliant, minimize risks, and enhance financial credibility in an increasingly globalized regulatory landscape.</p>
`,
        isButtonRequired: false,
    },
];
