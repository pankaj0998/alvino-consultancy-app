import { InfoCardTypeProps } from "../info-card/InforCard.types"

export type TeamInfoProps = {
    info: InfoCardTypeProps,
    description: string;
    isAlignRight: boolean;
    listItems: Array<string>
}

export type TeamInfoGridProps = {
    tagline: string;
    heading: string;
    teamInfo: TeamInfoProps[]
}