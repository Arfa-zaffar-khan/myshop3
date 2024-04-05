import React from "react";
import Card from "./ui/Card";

export default function CardsList({ products }) {
  console.log(products);
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {products.length > 0 &&
        products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
    </div>
  );
}
