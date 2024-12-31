import { IconType } from "react-icons";

export type ContentType = {
    title: string;
    heading: string;
    paragraph: any;
    list: Array<string>
}

export type InformationScreenTypeProps = {
    image: string;
    alignImageRight?: boolean;
    content: ContentType;
    listIcon?: IconType;
}