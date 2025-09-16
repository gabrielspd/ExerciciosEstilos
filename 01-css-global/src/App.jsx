import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Skeleton from "./components/Skeleton";
import phone1 from "./assets/phone1.jpeg";
import phone2 from "./assets/phone2.jpeg";

// Dados iniciais dos produtos
const productsData = [
  { id: 1, title: "Phone 1", price: 999.9, rating: 4, tag: "novo", image: phone1 },
  { id: 2, title: "Phone 2", price: 1499.9, rating: 5, tag: "promo", image: phone2 },
  { id: 3, title: "Phone 3", price: 1899.9, rating: 5, tag: "promo", image: phone1 },
  { id: 4, title: "Phone 4", price: 1199.9, rating: 5, tag: "promo", image: phone2 },
  { id: 5, title: "Phone 5", price: 1099.9, rating: 5, tag: "promo", image: phone1 },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Simula carregamento
    const timer = setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main>
        <div className="grid">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
        </div>
      </main>
    </>
  );
}
