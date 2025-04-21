import Hero from "@/components/HomeComponents/Hero";
import GroceryStoreGrid from "@/components/HomeComponents/GroceryStoreGrid";
import FAQ from "@/components/HomeComponents/FAQ";

function Home() {
  return (
    <div className="grid grid-cols-1 justify-center gap-4 bg-orange-50">
      <Hero />
      <GroceryStoreGrid />
      <FAQ />
    </div>
  );
}
export default Home;
