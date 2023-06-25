import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "./ProductCard";
const Product = () => {
    const [product, setProduct] = useState([])
    const getProduct = async () =>{
        let res = await axios(`https://restcountries.com/v3.1/all`)
        let {data} = await res
        await setProduct(data)
    }
    console.log(product)

    return (
        <div className="container py-20  ">
            <div className="flex flex-wrap gap-7">
                {product.map(el => <ProductCard product={el} />)}
            </div>
        </div>
    );
};

export default Product;