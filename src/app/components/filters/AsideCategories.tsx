"use client"
import { Category } from '@/types/products'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react'

function AsideCategories({categories}: {categories: Category[]}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function onCategoryClick(term: string) {
    const params = new URLSearchParams(searchParams as URLSearchParams);
    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }
    // console.log("onCategoryClick", term, params.toString());
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form className="accordion filters-category__form" action="#">
      {categories.slice(0,7).map((category) => (
        <label className="filters__label d-flex jc-sb" key={category.slug} 
          onClick={() => onCategoryClick(category.name)}
        >
          <input className="filters__input filters-category__input" type="checkbox" />
          <span className="filters__text">{category.name}</span>
        </label>
      ))}
    </form>
  )
}

export default AsideCategories