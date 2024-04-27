import { useEffect, useState } from "react";

function RenderRandom({category}) {

    console.log(category);

  return (
    <div className="product-subcategory">
      {category &&
        category.length > 0 &&
        category.map((cat, index) => <button>{cat}</button>)}
    </div>
  );
}

export default RenderRandom;
