"use client"
import React from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

function SearchForm() {
  const searchParams = useSearchParams() as URLSearchParams;
  const pathname = usePathname();
  const router = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    // console.log("handleSearch", term, params.toString());
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form className="d-flex  items-center">
      <label className="search__label">
        <span className="sr-only">Search input field</span>
        <input className="h-[50px] p-2 text-black w-[100%] max-w-[500px] border-none outline-transparent " type="search" placeholder="Search Products" 
        onChange={(e) => handleSearch(e.target.value)} 
        defaultValue={searchParams.get("query")?.toString()} />
      </label>
      <button className="d-flex items-center justify-center p-[10px] bg-white h-[50px] w-[50px]" type="submit">
        <svg className="search__icon">
          <use xlinkHref="sprite.svg#search" />
        </svg>

        <span className="sr-only">Search button</span>
      </button>
    </form>
  );
}

export default SearchForm;
