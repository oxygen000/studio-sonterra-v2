import { Hero } from "@/components/Hero";
import { ProductsPage } from "./Products/page";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductGrid />
      <ProductsPage />
    </main>
  );
}
