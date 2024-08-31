"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function ShowPerPage({ limit }: { limit: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [localLimit, setLocalLimit] = useState(limit);

  useEffect(() => {
    setLocalLimit(limit);
  }, [limit]);

  function onChange(number: string) {
    const newLimit = parseInt(number, 10);
    setLocalLimit(newLimit);

    const params = new URLSearchParams(searchParams as URLSearchParams);
    if (number) {
      params.set("limit", number);
    } else {
      params.delete("limit");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <label>
      <span className="sr-only">Show products per page</span>
      <span>Show:</span>
      <select 
        onChange={(e) => onChange(e.target.value)} 
        className="shop-content__select-show select-style text-black p-4" 
        value={localLimit}
      >
        <option value={20}>20</option>
        <option value={36}>36</option>
        <option value={48}>48</option>
        <option value={60}>60</option>
      </select>
    </label>
  );
}

export default ShowPerPage;