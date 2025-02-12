import subBannerImage from '/images/sub-banner.jpg';
import linerImage from '/images/liner.png'
import { SubBannerTypeProps } from './SubBanner.types';
import { DropDown } from '../navbar/navbar-menu';

const imageList = {
    subBannerImage: subBannerImage,
    linerImage: linerImage
}
export const taxAndRegulatory: SubBannerTypeProps = {
    title: DropDown.TRS,
    description: "Our tax and regulatory services are designed to ensure businesses comply with local and international tax laws while minimizing tax liabilities. We help companies optimize operations, reduce costs, and enhance performance by leveraging available tax incentives and ensuring compliance with the latest regulations.",
    backgroundImage: imageList.subBannerImage,
    linerImageUrl: imageList.linerImage
}

export const advisory: SubBannerTypeProps = {
    title: DropDown.AS,
    description: "Our advisory services are designed to help businesses streamline their operations, enhance overall performance, and achieve their strategic goals by providing actionable insights and expert guidance.",
    backgroundImage: imageList.subBannerImage,
    linerImageUrl: imageList.linerImage
}

export const transactionAndDeals: SubBannerTypeProps = {
    title: DropDown.TD,
    description: "We provide support to businesses involved in mergers and acquisitions (M&A), investments, and complex cross-border transactions. Our team offers strategic insights and ensures compliance with both local and international regulations to optimize outcomes.",
    backgroundImage: imageList.subBannerImage,
    linerImageUrl: imageList.linerImage
}

export const assurance: SubBannerTypeProps = {
    title: DropDown.ARS,
    description: "Our assurance services help businesses enhance transparency, meet regulatory requirements, and build stakeholder confidence through accurate and timely financial reporting and auditing.",
    backgroundImage: imageList.subBannerImage,
    linerImageUrl: imageList.linerImage
}