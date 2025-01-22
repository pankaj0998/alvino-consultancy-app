import { IconType } from "react-icons";

export type LinkProps = {
    list: string;
    route: string
}
export type ContentType = {
    title: string;
    heading: string;
    paragraph: any;
    list: Array<LinkProps>
}

export type InformationScreenTypeProps = {
    image: string;
    alignImageRight?: boolean;
    content: ContentType;
    listIcon?: IconType;
}