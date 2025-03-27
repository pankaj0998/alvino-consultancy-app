import { InfoCardTypeProps, SocialMedia } from "./InforCard.types";
import ankurShah from '/images/team/ankur-shah.png'
import bhaveshMehta from '/images/team/bhavesh-mehta.png'
import vinayBindal from '/images/team/vinay-bindal.png'

export const ankurShahInfo: InfoCardTypeProps = {
    name: "Ankur Shah",
    position: "",
    image: ankurShah,
    socialMedia: [
        {
            type: SocialMedia.GMAIL,
            url: "ankur.shah@alvinoconsultancy.in"
        },
        {
            type: SocialMedia.LINKEDIN,
            url: "http://www.linkedin.com/in/ankur-shah-02b584121"
        }
    ]
}

export const bhaveshMehtaInfo: InfoCardTypeProps = {
    name: "Bhavesh Mehta",
    position: "",
    image: bhaveshMehta,
    socialMedia: [
        {
            type: SocialMedia.GMAIL,
            url: "bhavesh.mehta@alvinoconsultancy.in"
        },
        {
            type: SocialMedia.LINKEDIN,
            url: ""
        }
    ]
}

export const vinayBindalInfo: InfoCardTypeProps = {
    name: "Vinay Bindal",
    position: "",
    image: vinayBindal,
    socialMedia: [
        {
            type: SocialMedia.GMAIL,
            url: "vinay.bindal@alvinoconsultancy.in"
        },
        {
            type: SocialMedia.LINKEDIN,
            url: ""
        }
    ]
}