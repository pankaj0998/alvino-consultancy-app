import { InformationScreenTypeProps } from "./InformationScreen.types";
import aboutUsImage from '/images/about-us.png'
import { FaArrowRight } from "react-icons/fa";

export const aboutUsInfo: InformationScreenTypeProps = {
    image: aboutUsImage,
    content: {
        title: "Background",
        heading: "Who We Are",
        paragraph: `At <span class="text-blue-custom">Alvino Consultancy</span>, we blend deep technical expertise with practical, results-driven solutions to offer comprehensive end-to-end consulting services. Serving a diverse clientele, we empower businesses to streamline operations, navigate intricate regulatory frameworks, and achieve sustainable growth. With a robust network of affiliates across India as well as Europe & Asia, we deliver seamless solutions that address the unique challenges of both local and international operations. Our suite of services span across the following areas:`,
        list: ["Tax and Regulatory Compliance", "Advisory Services", "Transaction Structuring", "Assurance", "Strategic Consulting"]
    },
    listIcon: FaArrowRight
}