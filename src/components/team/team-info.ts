import { ankurShahInfo, bhaveshMehtaInfo, vinayBindalInfo } from "../info-card/info-card";
import { TeamInfoGridProps, TeamInfoProps } from "./TeamInfo.types";

export const teamInformation: TeamInfoProps[] = [
    {
        info: vinayBindalInfo,
        isAlignRight: false,
        description: `Vinay Bindal is a Commerce graduate from the University of Delhi and an alumnus of the Institute of Management Technology (IMT), where he completed his PGDFM. With over 18  years of diversified experience across various industries, Mr. Bindal is an astute leader with exceptional entrepreneurial skills. As a Partner of Alvino Consultancy, he oversees Business Development & Strategic Planning of the Group.<br><br>
Specializing in strategic liaison with government agencies, regulatory authorities, and public sector organizations, Mr. Bindal ensures compliance with applicable laws and regulations. He is highly experienced in business development, identifying growth opportunities, and fostering relationships that align with ethical and transparent engagement with government entities. Mr. Bindal has a proven track record in managing government relations, advocating for clients within legal frameworks, and providing strategic advice on policy-related matters. He is adept at cultivating strong relationships with key business partners and senior authorities at various levels.
Mr. Bindal is also an active contributor to the industry, serving as a member of several industry associations and institutions. He continues to be actively involved in various Councils and Committees, working towards the development and betterment of the industry while maintaining the highest standards of integrity in all professional interactions.
`,
        listItems: []
    },
    {
        info: ankurShahInfo,
        isAlignRight: true,
        description: `Ankur Shah is a seasoned consulting professional with over 14 years of  work experience spanning across various areas like international tax, transfer pricing, indirect tax (GST), business valuations, and labour law. He is a Chartered Accountant (CA) and holds a Bachelor of Commerce degree.<br><br>
        Ankur’s career includes a 9-year tenure at Ernst & Young (EY), advising multinational corporations (MNCs) on tax-efficient structuring, cross-border investment planning, and regulatory compliance. He is adept at navigating India’s evolving tax landscape, helping companies structure and/ or streamline their operations, manage regulatory changes, and reduce their tax exposure. He has successfully handled Advance Pricing Agreement  filings, providing long-term tax certainty, and supported various mult-national clients in complex litigation matters up to the Appellate Tribunal. Ankur’s extensive experience in tax planning and regulatory compliance makes him a trusted advisor to both global and Indian businesses.<br><br> His work experience includes:
`,
        listItems: [`Transfer Pricing: Compliance, strategic optimization, litigation support and managing APA cases.`, "Cross-Border Taxation: Structuring for India inbound and/ or outbound market entry, providing end-to-end support.", "Indirect Tax (GST): Compliance, advisory and litigation support.", "Business Valuation: Valuations for M&A and strategic decisions.", "Labour Law: Compliance and advisory services.", "Incentives Advisory: Assisting clients in obtaining government incentives and tax benefits.", "Equity & Debt Financing: Advising and supporting start-ups / businesses seeking finance"]
    },
    {
        info: bhaveshMehtaInfo,
        isAlignRight: false,
        description: `Bhavesh Mehta is a highly experienced consulting professional with over 14 years of expertise in corporate tax advisory, mergers & acquisitions (M&A), international tax, cross-border investments, business valuations, and assurance advisory.
A Chartered Accountant (CA) and Bachelor of Commerce graduate, Bhavesh has a proven track record of advising leading multinational corporations on complex tax and regulatory matters, with a keen focus on optimizing business tax structures.
With a deep understanding of India’s intricate tax landscape, including industry-specific regulations, Bhavesh has successfully helped corporate clients streamline their tax functions, enhance operational efficiency, and ensure long-term tax optimization. Having worked with leading firms such as ELP (Economic Laws Practice) and BDO for over 9 years, Bhavesh has advised on M&A transactions, tax disputes, and regulatory compliance. He has also represented clients before tax authorities up to the Appellate Tribunal.<br><br>Bhavesh’s expertise in navigating complex tax and regulatory environments makes him a trusted advisor to businesses seeking sustainable growth and tax efficiency.<br><br>Bhavesh’s key service areas include:
`,
        listItems: ["Corporate Tax Advisory: Structuring efficient tax solutions for businesses.", "Cross-Border Taxation: Optimizing tax strategies for global operations.", "M&A & Business Valuation: Advising on tax aspects of mergers, acquisitions, and valuations.", "Assurance & Compliance: Providing strategic advisory for transparency and compliance.", "Wealth Management: Tailored solutions for personal wealth and family estates.", "Equity & Debt Financing: Structuring capital solutions for growth."]
    },
]

export const teamContent: TeamInfoGridProps = {
    tagline: "Expert Team",
    heading: "Core Team",
    teamInfo: teamInformation
}