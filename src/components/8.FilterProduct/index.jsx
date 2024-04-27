import { useEffect, useState } from "react";
import RenderRandom from "./text";


function FilterProduct(){
    const [products,setProducts]=useState();
    const [loading,isLoading]=useState(false);
    const [category,setCategory]=useState(new Set());

    async function getAllProducts(){
        const response=await fetch('https://dummyjson.com/products/',{
            method:"GET"
        });
        const result=await response.json();
        setProducts(result.products);
        console.log(result.products)
        console.log(result.products[1].category);
    }

    const uniqueCategories=products && products.length >0 ?
    [...new Set(products.map(productItem=> productItem.category))]
     :[];

    useEffect(()=>{
        getAllProducts();
    },[])


    return(
        <div className="main-container">
            <h1>filter product component</h1>

            <RenderRandom category={category}/>

            <div className="product-info">
            {
            products && (products.length>0) && (products.map(
                (product)=>(
                    <div key={product.id} className="product">
                        <p className="product-title">{product.title}</p>
                        <button className="product-category">{product.category}</button>
                    </div>
                )
            ))
           }
            </div>
   
        </div>
    )
}

export default FilterProduct;


//1:45