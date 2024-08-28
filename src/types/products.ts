export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Array<{
    id: number;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    keywords: string[];
    description: string;
  };
  images: string[];
  thumbnail: string;
}


export interface Category {
  slug: string;
  name: string;
  url: string;
}