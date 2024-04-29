import { useEffect, useState } from "react";
import "./filter.css";

function FilterProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });

      const result = await apiResponse.json();

      if (result && result.products && result.products.length > 0) {
        setLoading(false);
        setProducts(result.products);
        setFilteredItems(result.products);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const cpyProducts = [...products];
    setFilteredItems(
      currentSelectedCategory !== ""
        ? cpyProducts.filter(
            (productItem) =>
              productItem.category.toLowerCase() ===
              currentSelectedCategory.toLowerCase()
          )
        : cpyProducts
    );
  }, [currentSelectedCategory]);

  const uniqueCategories =
    products && products.length > 0
      ? [...new Set(products.map((productItem) => productItem.category))]
      : [];

  if (loading) {
    return <h3>Fetching the products ! Please wait</h3>;
  }

  return (
    <div className="filter-products-container">
      <h1>Filter Products By Category</h1>
      <div className="filter-categories-container">
        {uniqueCategories.map((uniqueCategoryItem) => (
          <button
            onClick={() =>
              setCurrentSelectedCategory(
                currentSelectedCategory !== "" &&
                  currentSelectedCategory === uniqueCategoryItem
                  ? ""
                  : uniqueCategoryItem
              )
            }
            className={`${currentSelectedCategory === uniqueCategoryItem ? 'active' : ''}`}
          >
            {uniqueCategoryItem}
          </button>
        ))}
      </div>
      <ul className="list-of-products">
        {filteredItems && filteredItems.length > 0
          ? filteredItems.map((productItem) => (
              <li key={productItem.id}>
                <p>{productItem.title}</p>
                <button>{productItem.category}</button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default FilterProducts;


/*

what we did here 
1.api call 
2.we stored category in normal varibles
3. we rendered categories added onchange and add changes in state varible
4.then we have used useEFfect on it once button clicked here we filter the items and add to filted items 
5.filterd items chnged then we will rneder all those items

*/