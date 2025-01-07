import { InfoCardTypeProps } from "../info-card/InforCard.types"

export type TeamInfoProps = {
    info: InfoCardTypeProps,
    description: string;
}

export type TeamInfoGridProps = {
    tagline: string;
    heading: string;
    teamInfo: TeamInfoProps[]
}