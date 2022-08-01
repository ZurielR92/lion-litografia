export interface ProductInterface {
    _id?: string;
    code: string;
    name: string;
    shortDescription: string;
    description?: string;
    price: number;
    specs: ProductSpecsInterface[];
    displayImages: {
        primary: ProductGalleryInterface;
        secondary: ProductGalleryInterface;
    }
    gallery: ProductGalleryInterface[];
}

export interface ProductGalleryInterface {
    titleImage: string;
    altImage: string;
    descriptionIage?: string;
    urlImage: string;
}

export interface ProductSpecsInterface {
    title: string;
    value: string;
}
