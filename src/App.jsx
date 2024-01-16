import { useState } from "react";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./components/Navigation/Nav";
import Card from "./components/Card";
import products from "./db/data";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) => {
          return (
            category === selected ||
            color === selected ||
            newPrice === selected ||
            company === selected ||
            title === selected
          );
        }
      );
    }

    return filteredProducts.map(
      ({
        img,
        category,
        color,
        company,
        newPrice,
        title,
        star,
        reviews,
        prevPrice,
      }) => (
        <Card
          key={Math.random()}
          img={img}
          category={category}
          color={color}
          company={company}
          newPrice={newPrice}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navbar handleInputChange={handleInputChange} query={query} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
