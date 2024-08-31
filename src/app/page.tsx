import Image from "next/image";
import Hero from "./components/home/Hero";
import Sale from "./components/home/Sale";
import NewProducts from "./components/home/NewProducts";
import BestSeller from "./components/home/BestSeller";
import Special from "./components/home/Special";
import Brands from "./components/home/Brands";
import Journal from "./components/home/Journal";
import BestProducts from "./components/home/BestProducts";
import Search from "./components/Search";
export default function Home() {
  return (
    <>
      <main className="main">
        <Search />
        <Hero />
        <Sale />
        <NewProducts />
        <BestProducts />
        <BestSeller />
        <Special />
        <Brands/>
        <Journal/>
      </main>
    </>
  );
}
