import { InformationScreenTypeProps } from "./InformationScreen.types";
import aboutUsImage from '/images/about-us.png'
import { FaArrowRight } from "react-icons/fa";

export const aboutUsInfo: InformationScreenTypeProps = {
    image: aboutUsImage,
    content: {
        title: "Background",
        heading: "Who We Are",
        paragraph: `At <span class="text-blue-custom">Alvino Consultancy</span>, we combine deep technical knowledge with practical solutions to provide end-to-end consulting services. We support a diverse range of clients, helping them optimize operations, navigate complex tax laws, and achieve sustainable growth. Our strong network of affiliates allows us to provide seamless global solutions to clients operating locally and/or globally. Our offerings span across:`,
        list: ["Tax and Regulatory Compliance", "Advisory", "Transaction Structuring", "Assurance", "Strategic Consulting"]
    },
    listIcon: FaArrowRight
}