import { ankurShahInfo, bhaveshMehtaInfo } from "../info-card/info-card";
import { TeamInfoGridProps, TeamInfoProps } from "./TeamInfo.types";

export const teamInformation: TeamInfoProps[] = [
    {
        info: ankurShahInfo,
        isAlignRight: false,
        description: `Ankur Shah is a seasoned consulting professional with over 14 years of work experience in areas primarily pertaining to international tax, transfer pricing, indirect tax (GST), business valuations and labour laws. He holds an Associate Chartered Accountant (ACA) qualification and a Bachelor of Commerce degree.<br><br>

Ankur’s professional career includes significant stint at EY for 9 years, where he advised multinational corporations (MNCs) on tax-efficient structuring, cross-border investment planning, and managing complex regulatory issues across multiple jurisdictions, as well as representing clients for litigation matters before authorities till Appellate Tribunal level. He is adept at navigating India’s evolving tax landscape, helping companies streamline their operations, manage regulatory changes, and reduce their tax exposure. Ankur's expertise in cross-border tax planning also extends to providing guidance on Double Taxation Avoidance Agreements (DTAA), Multilateral Instruments (MLI), and transfer pricing documentation to ensure tax optimisation along with compliance with Indian tax laws and international tax treaties.<br><br>

Over the years, Ankur has developed and achieved comprehensive experience in following areas of consulting:
`,
        listItems: [`Transfer pricing related matters, ensuring compliance with local and international laws to minimize tax liabilities while maximizing global operational efficiencies
Inbound/ outbound taxation, focusing on optimizing tax strategies for foreign businesses entering India and Indian businesses expanding globally`, "GST related matters (including litigation) and advisory services", "Business valuation services", "Labour law compliances and advisory", "Litigation services", "Equity & Debt financing"]
    },
    {
        info: bhaveshMehtaInfo,
        isAlignRight: true,
        description: `Bhavesh Mehta is an highly experienced professional with over 14 years of expertise in corporate tax advisory, mergers & acquisitions (M&A), international tax, cross-border investments, business valuations and assurance advisory. Bhavesh is an Associate Chartered Accountant (ACA) and a Bachelor of Commerce graduate, with a proven track record of advising leading multinational corporations on complex tax and regulatory matters. Bhavesh has a deep understanding of India’s complex web of tax laws (including industry specific areas) and has worked extensively with multiple corporate clients to streamline their tax functions and ensure business tax optimisation.<br><br>
Before Alvino Consultancy, Bhavesh has successfully worked with renowned firms like ELP (law firm) and BDO (consultancy firm), where he gained significant experience advising on M&A transactions, tax disputes, and regulatory compliances for a diverse portfolio of clients, as well as representing various clients before revenue authorities up to Appellate Tribunal level.<br><br>
Over the years, Bhavesh has developed and achieved comprehensive experience in following areas of consulting:
`,
        listItems: ["Corporate taxation services", "Inbound/ outbound structuring, focusing on optimizing tax strategies for foreign businesses entering India and Indian businesses expanding globally", "Handling international tax related matters, ensuring compliance with local and international laws to minimize tax liabilities while maximizing global operational efficiencies", "Assurance related advisory services", "Business valuation services", "Litigation services", "Equity & Debt financing", "Wealth management services"]
    },
]

export const teamContent: TeamInfoGridProps = {
    tagline: "Expert Team",
    heading: "Core Team",
    teamInfo: teamInformation
}