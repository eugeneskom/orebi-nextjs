// "use client";
import getBase64 from "@/libs/getBase64";
import { Product } from "@/types/products";
import { ArrowsRightLeftIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface ProductCardProps {
  product: Product;
}

const ProductCard = async ({ product }: ProductCardProps) => {
  // const [isHovered, setIsHovered] = useState(false);
  // const blurDataURL = await getBase64({ url: product.thumbnail });
  return (
    <Link href={`/product/${product.id}-${product.title.toLowerCase().replace(/ /g, "-")}`} className="group flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl" 
    // onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex-grow">
        <div className="aspect-w-1 aspect-h-1 w-full">
          <Image
            src={product.thumbnail} 
            alt={product.title} 
            width={370} 
            height={370} 
            style={{ maxWidth: "100%", height: "auto" }} 
            className="w-full h-full object-center object-cover"
            // placeholder="blur"
            // blurDataURL={blurDataURL as string}
          />
        </div>
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 ease-in-out 
           md:opacity-0 md:group-hover:opacity-100 sm:opacity-100 sm:bg-opacity-0 sm:pointer-events-none md:pointer-events-auto`}>
          <div className="flex space-x-4">
            <button 
                    type="button"

            className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors">
              <HeartIcon className="h-6 w-6" />
              <span className="sr-only">Add to wishlist</span>
            </button>
            <button 
                    type="button"

            className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors">
              <ArrowsRightLeftIcon className="h-6 w-6" />
              <span className="sr-only">Compare</span>
            </button>
            <button 
                    type="button"

            className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="sr-only">Buy</span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <p className="mt-2 text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
