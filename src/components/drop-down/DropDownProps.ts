import { BreadCrumbProps } from "../bread-crumb/BreadCrumbProps";
import { SubBannerTypeProps } from "../sub-banner/SubBanner.types";
import { CardGridProps } from "../sub-services/SubServiceCard.types";

export interface DropDownProps extends CardGridProps, BreadCrumbProps {
    subBanner: SubBannerTypeProps,
}