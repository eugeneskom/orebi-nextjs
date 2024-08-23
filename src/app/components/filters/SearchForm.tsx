"use client"
import React from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

function SearchForm() {
  const searchParams = useSearchParams() as URLSearchParams;
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    console.log("handleSearch", term, params.toString());
    // replace(`${pathname}?${params.toString()}`);
    const usl = `${pathname}?${params.toString()}`;
    // console.log(usl);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form className="search @@small-form @@big-form @@error d-flex  ai-c">
      <label className="search__label">
        <span className="sr-only">Search input field</span>
        <input className="search__input @@small-input @@big-input" type="search" placeholder="Search Products" 
        onChange={(e) => handleSearch(e.target.value)} 
        defaultValue={searchParams.get("query")?.toString()} />
      </label>
      <button className="search__btn" type="submit">
        <svg className="search__icon">
          <use xlinkHref="sprite.svg#search" />
        </svg>

        <span className="sr-only">Search button</span>
      </button>
    </form>
  );
}

export default SearchForm;
