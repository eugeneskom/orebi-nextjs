import { Product } from "@/types/products";

type GetProductsProps = {
  query?: string | null;
  page?: number;
  limit?: number;
  // Add other filter properties as needed
  category?: string;
  minPrice?: number;
  maxPrice?: number;
};

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export async function getProducts({
  query = null,
  page = 1,
  limit = 10,
  category,
  minPrice,
  maxPrice
}: GetProductsProps): Promise<ProductsResponse> {
  // Start with the base URL
  let url = 'https://dummyjson.com/products';
  // If there's a search query, use the search endpoint
  if (query) {
    url += `/search?q=${encodeURIComponent(query)}`;
  }

  // Add pagination parameters
  const skip = (page - 1) * limit;
  url += `${url.includes('?') ? '&' : '?'}limit=${limit}&skip=${skip}`;

  // Add other filters if provided
  if (category) {
    url += `&category=${encodeURIComponent(category)}`;
  }
  if (minPrice !== undefined) {
    url += `&minPrice=${minPrice}`;
  }
  if (maxPrice !== undefined) {
    url += `&maxPrice=${maxPrice}`;
  }

  const res = await fetch(url);
  console.log(url)
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return {
    products: data.products,
    total: data.total,
    skip: data.skip,
    limit: data.limit
  };
}