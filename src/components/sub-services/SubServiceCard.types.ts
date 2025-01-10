type CardData = {
    subtitle: string;
    subDescription: string;
}

export type CardProps = {
    image: string;
    title: string;
    description?: string;
    cardData?: CardData[];
    isButtonRequired: boolean,
    toggler?: () => void;

}

export type CardGridProps = {
    cards: CardProps[];
}