import { SubDropDown } from "../navbar/navbar-menu";
import { CardProps } from "./SubServiceCard.types";
import businessTax from '/images/business-tax.png';
import inBound from '/images/inbound.png'
export const subService: CardProps[] = [
    {
        image: businessTax,
        title: SubDropDown.BTRC,
        description: "From business registrations (GST, MSME, FSSAI, PAN, etc.) to handling ongoing tax filings and certifications, we ensure that businesses comply with India’s comprehensive tax laws. Our team guides clients through the entire compliance process, from registering with relevant authorities to preparing and submitting tax returns on time. We also assist in maintaining necessary certifications required to operate in India, such as FSSAI for food-related businesses, MSME registration for small enterprises, and others. Our expertise helps businesses reduce operational risks, avoid penalties, and ensure long-term compliance, setting a strong foundation for growth in India.",
    },
    {
        image: inBound,
        title: SubDropDown.IO,
        cardData: [{
            subtitle: "Inbound Entry",
            subDescription: "For foreign businesses looking to enter India, we provide expert guidance on structuring operations in a tax-efficient way. Our services include advising on the best legal structure (e.g., wholly owned subsidiaries, joint ventures, or branch offices), managing registration requirements, and ensuring compliance with Indian corporate laws, including the Income Tax Act, GST, and other state-level taxes. We also assist businesses in leveraging available "
        }, {
            subtitle: "Outbound Entry",
            subDescription: "For foreign businesses looking to enter India, we provide expert guidance on structuring operations in a tax-efficient way. Our services include advising on the best legal structure (e.g., wholly owned subsidiaries, joint ventures, or branch offices), managing registration requirements, and ensuring compliance with Indian corporate laws, including the Income Tax Act, GST, and other state-level taxes. We also assist businesses in leveraging available "
        }]
    },
    {
        image: businessTax,
        title: SubDropDown.ITS,
        description: "From business registrations (GST, MSME, FSSAI, PAN, etc.) to handling ongoing tax filings and certifications, we ensure that businesses comply with India’s comprehensive tax laws. Our team guides clients through the entire compliance process, from registering with relevant authorities to preparing and submitting tax returns on time. We also assist in maintaining necessary certifications required to operate in India, such as FSSAI for food-related businesses, MSME registration for small enterprises, and others. Our expertise helps businesses reduce operational risks, avoid penalties, and ensure long-term compliance, setting a strong foundation for growth in India.",
    },
    {
        image: businessTax,
        title: SubDropDown.LSTD,
        description: "From business registrations (GST, MSME, FSSAI, PAN, etc.) to handling ongoing tax filings and certifications, we ensure that businesses comply with India’s comprehensive tax laws. Our team guides clients through the entire compliance process, from registering with relevant authorities to preparing and submitting tax returns on time. We also assist in maintaining necessary certifications required to operate in India, such as FSSAI for food-related businesses, MSME registration for small enterprises, and others. Our expertise helps businesses reduce operational risks, avoid penalties, and ensure long-term compliance, setting a strong foundation for growth in India.",
    },
    {
        image: businessTax,
        title: SubDropDown.TMS,
        description: "From business registrations (GST, MSME, FSSAI, PAN, etc.) to handling ongoing tax filings and certifications, we ensure that businesses comply with India’s comprehensive tax laws. Our team guides clients through the entire compliance process, from registering with relevant authorities to preparing and submitting tax returns on time. We also assist in maintaining necessary certifications required to operate in India, such as FSSAI for food-related businesses, MSME registration for small enterprises, and others. Our expertise helps businesses reduce operational risks, avoid penalties, and ensure long-term compliance, setting a strong foundation for growth in India.",
    }
]