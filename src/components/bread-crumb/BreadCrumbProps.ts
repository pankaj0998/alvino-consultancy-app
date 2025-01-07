
export type ElementProps = {
    content: string;
    link: string
}
export interface BreadCrumbProps {
    elements: ElementProps[],
    separator: string;

}