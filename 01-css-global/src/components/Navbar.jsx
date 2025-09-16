import { useEffect, useState } from "react";

export default function Navbar({ cartCount }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark", newMode);
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Phone Store</div>

      {/* Ações: toggle de tema + carrinho */}
      <div className="nav-actions">
        <button
          aria-label="Alternar tema claro/escuro"
          onClick={toggleTheme}
          className="theme-toggle"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div className="cart" aria-label={`Carrinho com ${cartCount} itens`}>
          🛒
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}
