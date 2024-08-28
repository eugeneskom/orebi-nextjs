import { Product } from "@/types/products";
import axios from "axios";

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

export async function getProducts({ query = null, page = 1, limit = 10, category, minPrice, maxPrice }: GetProductsProps): Promise<ProductsResponse> {
  let url = "https://dummyjson.com/products";

  // If category is provided
  if (category) {
    url += `/category/${encodeURIComponent(category)}`;

    // If there's also a search query when category is provided
    if (query) {
      // We'll need to fetch all products in the category first
      const allCategoryProducts = await fetchAllCategoryProducts(category);

      // Then filter these products based on the search query
      const filteredProducts = filterProductsByQuery(allCategoryProducts, query);

      // Apply pagination to the filtered results
      const paginatedProducts = applyPagination(filteredProducts, page, limit);

      return {
        products: paginatedProducts,
        total: filteredProducts.length,
        skip: (page - 1) * limit,
        limit: limit,
      };
    }
  } else if (query) {
    // If there's only a search query without category, use the search endpoint
    url += `/search?q=${encodeURIComponent(query)}`;
  }

  // Add pagination parameters
  const skip = (page - 1) * limit;
  url += `${url.includes("?") ? "&" : "?"}limit=${limit}&skip=${skip}`;

  // Add price filters if provided
  if (minPrice !== undefined) {
    url += `&minPrice=${minPrice}`;
  }
  if (maxPrice !== undefined) {
    url += `&maxPrice=${maxPrice}`;
  }

  const res = await fetch(url);
  console.log("getProducts", url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return {
    products: data.products,
    total: data.total,
    skip: data.skip,
    limit: data.limit,
  };
}

// Helper function to fetch all products in a category
async function fetchAllCategoryProducts(category: string): Promise<Product[]> {
  let allProducts: Product[] = [];
  let total = 0;
  let limit = 100; // Fetch maximum allowed per request
  let skip = 0;

  do {
    const url = `https://dummyjson.com/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch category products");
    }
    const data = await res.json();
    allProducts = allProducts.concat(data.products);
    total = data.total;
    skip += limit;
  } while (allProducts.length < total);

  return allProducts;
}

// Helper function to filter products by query
function filterProductsByQuery(products: Product[], query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter((product) => product.title.toLowerCase().includes(lowercaseQuery) || product.description.toLowerCase().includes(lowercaseQuery));
}

// Helper function to apply pagination
function applyPagination(products: Product[], page: number, limit: number): Product[] {
  const start = (page - 1) * limit;
  const end = start + limit;
  return products.slice(start, end);
}

export async function getAllCategories() {
  try {
    const res = await axios.get("https://dummyjson.com/products/categories");
    // console.log('getAllCategories: ', res.data)
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
