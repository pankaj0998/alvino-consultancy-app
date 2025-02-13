export type CardData = {
    subtitle: string;
    subDescription: any;
}

export type CardProps = {
    image: string;
    title: string;
    description?: any;
    cardData?: CardData[];
    isButtonRequired?: boolean,
    toggler?: () => void;

}

export type SubServiceProps = {
    image: string;
    title: string;
    description?: any;
    cardData?: CardData[];
}

export type CardGridProps = {
    cards: SubServiceProps[];
}