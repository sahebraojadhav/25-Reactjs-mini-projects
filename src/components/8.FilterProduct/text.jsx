import { useEffect, useState } from "react";

function RenderRandom({category}) {

    console.log("category",category);

  return (
    <div className="product-subcategory">
      <p>we are here</p>
      {category &&
        category.length > 0 &&
        category.map((cat, index) => <button>{cat} "heyy"</button>)}
    </div>
  );
}

export default RenderRandom;
