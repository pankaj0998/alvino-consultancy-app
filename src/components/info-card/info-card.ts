import { InfoCardTypeProps, SocialMedia } from "./InforCard.types";
import founder from '/images/founder.avif'

export const infoCard: InfoCardTypeProps = {
    name: "Ankur Shah",
    position: "Founder",
    image: founder,
    socialMedia: [
        {
            type: SocialMedia.GMAIL,
            url: ""
        },
        {
            type: SocialMedia.LINKEDIN,
            url: ""
        }
    ]
}