import { ankurShahInfo, bhaveshMehtaInfo, vinayBindalInfo } from "../info-card/info-card";
import { TeamInfoGridProps, TeamInfoProps } from "./TeamInfo.types";

export const teamInformation: TeamInfoProps[] = [
    {
        info: ankurShahInfo,
        isAlignRight: false,
        description: `Ankur Shah is a seasoned consulting professional with over 14 years of experience in international taxation, transfer pricing, indirect taxation (GST), and business valuations. A Chartered Accountant (CA) with a Bachelor’s degree in Commerce, Ankur brings invaluable expertise to businesses navigating India’s complex regulatory and tax landscape, offering strategic insights and tailored solutions.<br><br>
 
His career includes a distinguished 9-year tenure at Ernst & Young (EY), where he advised multinational corporations (MNCs) on tax-efficient structuring, cross-border investment planning, and regulatory compliance. Ankur has been instrumental in helping businesses adapt to evolving tax regulations, optimize operations, and manage tax exposure. His experience also extends to handling Advance Pricing Agreements (APAs) for long-term tax certainty and representing clients in critical litigation before the Appellate Tribunal.<br><br>
 
For Alvino Consultancy, Ankur plays a strategic advisory role, helping businesses make informed decisions around tax structuring, compliance, and operational efficiency. His approach combines in-depth knowledge with practical, value-driven solutions that enable businesses to thrive in a dynamic regulatory environment.<br><br>
Ankur’s core areas of expertise include:<br>
`,
        listItems: [
            `<strong>Transfer Pricing:</strong> Compliance, strategic optimization, litigation support, and APA management.`,
            "<strong>Indirect Tax (GST):</strong> Compliance, advisory, and litigation support.",
            "<strong>Cross-Border Taxation:</strong> Structuring for inbound and outbound market entry, offering comprehensive support.",
            "<strong>Incentives Advisory:</strong> Helping clients navigate and secure government incentives and tax benefits.",
            "<strong>Business Valuation:</strong> Conducting valuations for M&A and strategic decision-making.",
            "<strong>Equity & Debt Financing:</strong> Advising and supporting start-ups / businesses seeking finance"
        ]
    },
    {
        info: bhaveshMehtaInfo,
        isAlignRight: true,
        description: `Bhavesh Mehta is a distinguished consulting professional with over 14 years of expertise in corporate tax advisory, mergers & acquisitions (M&A), international taxation, cross-border investments, business valuations, and assurance advisory. A Chartered Accountant (CA) and a Bachelor of Commerce graduate, Bhavesh has built a reputation for advising leading multinational corporations on complex tax and regulatory matters, with a strong focus on optimizing business tax structures and ensuring long-term tax efficiency.
<br><br>With a deep understanding of India’s intricate tax and regulatory landscape, Bhavesh has consistently helped corporate clients streamline tax functions, enhance operational efficiency, and navigate industry-specific compliance requirements. His career includes over nine years with respected firms such as Economic Laws Practice (ELP) and BDO India, where he provided strategic guidance on high-profile M&A transactions, tax disputes, and regulatory compliance. Bhavesh has also represented clients before tax authorities up to the Appellate Tribunal, further cementing his reputation as a trusted advocate in complex tax matters.
<br><br>For Alvino Consultancy, Bhavesh plays a key advisory role, providing strategic counsel on a range of tax and business challenges. His approach blends in-depth technical knowledge with practical solutions that empower businesses to optimize their tax positions, navigate regulatory complexities, and achieve sustainable growth.
<br><br>Bhavesh’s core areas of expertise include:
`,
        subDescription: `<br>Through his advisory role at Alvino Consultancy, Bhavesh is recognized for delivering value-driven solutions that help businesses optimize their tax positions and navigate the complexities of a dynamic regulatory environment.`,
        listItems: [
            "<strong>Corporate Tax Advisory:</strong> Structuring efficient tax solutions for businesses.",
            "<strong>Cross-Border Taxation:</strong> Optimizing tax strategies for global operations.",
            "<strong>M&A & Business Valuation:</strong> Advising on tax aspects of mergers, acquisitions, and valuations.",
            "<strong>Assurance & Compliance:</strong> Providing strategic advisory for transparency and compliance.",
            "<strong>Wealth Management:</strong> Tailored solutions for personal wealth and family estates.",
            "<strong>Equity & Debt Financing:</strong> Structuring capital solutions for growth."
        ]
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