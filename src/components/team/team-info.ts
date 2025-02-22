import { ankurShahInfo, bhaveshMehtaInfo, vinayBindalInfo } from "../info-card/info-card";
import { TeamInfoGridProps, TeamInfoProps } from "./TeamInfo.types";

export const teamInformation: TeamInfoProps[] = [
    {
        info: ankurShahInfo,
        isAlignRight: false,
        description: `Ankur Shah is a seasoned consulting professional with over 14 years of experience across international taxation, transfer pricing, indirect taxation (GST), business valuations, and labour law compliance. A Chartered Accountant (CA) with a Bachelor’s degree in Commerce, he brings a wealth of expertise in guiding businesses through the complexities of India’s regulatory and tax landscape.<br><br>
 
His career includes a distinguished nine-year tenure at Ernst & Young (EY), where he advised multinational corporations (MNCs) on tax-efficient structuring, cross-border investment planning, and regulatory compliance. Ankur has been instrumental in helping businesses navigate evolving tax regulations, optimize operations, and mitigate tax exposure. His expertise extends to handling Advance Pricing Agreements (APAs) for long-term tax certainty and supporting clients in high-stakes litigation before the Appellate Tribunal.<br><br>With a forward-thinking perspective, Ankur is committed to delivering value-driven solutions that empower businesses to thrive in a dynamic regulatory environment.<br><br>
 
Ankur is a trusted advisor to both global enterprises and Indian businesses, being recognized for his strategic insights and practical solutions. His core areas of expertise include:<br>
`,
        listItems: [`Transfer Pricing: Compliance, strategic optimization, litigation support and managing APA cases.`, "Cross-Border Taxation: Structuring for India inbound and/ or outbound market entry, providing end-to-end support.", "Indirect Tax (GST): Compliance, advisory and litigation support.", "Business Valuation: Valuations for M&A and strategic decisions.", "Labour Law: Compliance and advisory services.", "Incentives Advisory: Assisting clients in obtaining government incentives and tax benefits.", "Equity & Debt Financing: Advising and supporting start-ups / businesses seeking finance"]
    },
    {
        info: bhaveshMehtaInfo,
        isAlignRight: true,
        description: `Bhavesh Mehta is a distinguished consulting professional with over 14 years of expertise in corporate tax advisory, mergers & acquisitions (M&A), international taxation, cross-border investments, business valuations, and assurance advisory. A Chartered Accountant (CA) and a Bachelor of Commerce graduate, Bhavesh has a proven track record of advising leading multinational corporations on complex tax and regulatory matters, with a sharp focus on optimizing business tax structures and ensuring long-term tax efficiency.
<br><br>With a deep understanding of India’s intricate tax and regulatory landscape, Bhavesh has successfully helped corporate clients streamline tax functions, enhance operational efficiency, and navigate industry-specific compliance requirements. His career includes over nine years with esteemed firms such as Economic Laws Practice (ELP) and BDO India, where he advised on high-profile M&A transactions, tax disputes, and regulatory compliance. Bhavesh has also represented clients before tax authorities up to the Appellate Tribunal, reinforcing his reputation as a trusted advocate in complex tax matters.
<br><br>With a meticulous approach, Bhavesh is committed to delivering value-driven solutions that empower businesses to navigate complexities, optimize tax positions, and drive sustainable success.
<br><br>Recognized for his strategic insights, technical analysis and pragmatic solutions, Bhavesh serves as a trusted advisor to businesses seeking sustainable growth and tax optimization. His core areas of expertise include:
`,
        listItems: ["Corporate Tax Advisory: Structuring efficient tax solutions for businesses.", "Cross-Border Taxation: Optimizing tax strategies for global operations.", "M&A & Business Valuation: Advising on tax aspects of mergers, acquisitions, and valuations.", "Assurance & Compliance: Providing strategic advisory for transparency and compliance.", "Wealth Management: Tailored solutions for personal wealth and family estates.", "Equity & Debt Financing: Structuring capital solutions for growth."]
    },
    {
        info: vinayBindalInfo,
        isAlignRight: false,
        description: `Vinay Bindal is a seasoned business leader with over 18 years of diversified experience across multiple industries. A Commerce graduate from the University of Delhi and an alumnus of the Institute of Management Technology (IMT) with a PGDFM, he brings a wealth of expertise in business development, strategic planning, and government liaison.
 
<br><br>Mr. Bindal spearheads the firm's business development & strategic planning, ensuring sustainable growth and long-term success. With a deep understanding of government regulations, public sector policies, and corporate governance, he plays a pivotal role in fostering ethical and transparent engagement with regulatory bodies and key industry stakeholders. Mr. Bindal specializes in strategic liaison with government agencies, regulatory authorities, and public sector organizations, ensuring businesses remain compliant with evolving legal frameworks. His strong advocacy skills and policy expertise enable him to represent clients effectively within regulatory landscapes while identifying growth opportunities and forging influential partnerships.
 
<br><br>Beyond his corporate role, Mr. Bindal is an active contributor to the industry, serving as a member of several industry associations and institutions. He continues to be deeply involved in various councils / committees, working towards industry development and regulatory advancements, while upholding the highest standards of integrity and professional excellence.
`,
        listItems: []
    },
]

export const teamContent: TeamInfoGridProps = {
    tagline: "Expert Team",
    heading: "Core Team",
    teamInfo: teamInformation
}