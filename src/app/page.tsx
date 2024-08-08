import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sale from "./components/Sale";
import NewProducts from "./components/NewProducts";
import BestSeller from "./components/BestSeller";
import Special from "./components/Special";
import Brands from "./components/Brands";
import Journal from "./components/Journal";
import BestProducts from "./components/BestProducts";
export default function Home() {
  return (
    <>
      <main className="main">
        <Hero />
        <Sale/>
        <NewProducts/>
        <BestProducts/>
        <BestSeller/>
        <Special/>
        {/* <Brands/> */}
        {/* <Journal/> */}
      </main>
    </>
  );
}
