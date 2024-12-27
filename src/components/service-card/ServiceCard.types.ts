export type ServiceCardProps = {
    title: string
    description: string
    buttonText: string
    imageUrl: string
    className: string
    route: string
    style: object
}

export interface ServiceCardGridProps {
    cards: ServiceCardProps[]; // Expect an array of ServiceCardProps
}