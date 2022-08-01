import { productInterface } from './productsInterface';
import { FAQs } from '../components/FAQs/FAQs';
import { questionInterface } from './accordionPropsInterface';

export interface categoryInterface {
    code: string,
    type: string,
    name: string,
    shortDescription: string,
    description: string,
    basicPrice: number,
    minQuantity: number,
    url: string,
    displayImage: string,
    altDisplay: string,
    gallery: string[],
    products?: productInterface[]
    FAQs?: questionInterface[]
}