import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CardsList from "../components/CardsList";
import SkeletonCardsList from "../components/SkeletonCardsList";
import Error from "../components/Error";
import Pagination from "../components/Pagination";
import ProductCategory from "../components/ProductCategory";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [totalpage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  async function getCategory() {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError(true);
    }
  }

  async function getProducts() {
    setLoading(true);
    try {
      let url = `https://dummyjson.com/products/search?q=${search}&limit=${itemsPerPage}&skip=${page * itemsPerPage - itemsPerPage}`;
      if (selectedCategory) {
        url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${itemsPerPage}&skip=${page * itemsPerPage - itemsPerPage}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      setTotalPage(Math.ceil(data.total / itemsPerPage));
      setError(false);
    } catch (error) {
      setError(true);
      setErrorMsg("Error fetching products: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  function paginate(pagenumber) {
    setPage(pagenumber);
  }

  function handleSearch(srchquery) {
    setPage(1);
    setSearch(srchquery);
  }

  function handleCategoryChange(category) {
    setPage(1);
    setSelectedCategory(category);
  }

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      getProducts();
    }, 500);

    return () => clearTimeout(timeout);
  }, [page, search, selectedCategory]);

  function render() {
    if (!loading) {
      if (error) {
        return <Error errorMsg={errorMsg} />;
      }
      if (products.length > 0 && categories.length > 0) {
        return (
          <>
            <ProductCategory categories={categories} handleCategoryChange={handleCategoryChange}/>
            <CardsList products={products} />
            {totalpage > 0 && (
              <Pagination
                totalpage={totalpage}
                paginate={paginate}
                currentpage={page}
              />
            )}
          </>
        );
      } else {
        return <h1>No Products Found</h1>;
      }
    } else {
      return <SkeletonCardsList />;
    }
  }

  return (
    <>
      <Navbar handlesearch={handleSearch} />
      {render()}
    </>
  );
}
