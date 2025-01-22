export enum SocialMedia {
    FACEBOOK,
    INSTAGRAM,
    LINKEDIN,
    GMAIL
}

export type SocialMediaLink = {
    type: SocialMedia,
    url: string;
}

export type InfoCardTypeProps = {
    name: string;
    position?: string;
    image?: string
    socialMedia: SocialMediaLink[];
}