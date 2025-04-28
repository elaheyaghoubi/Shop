import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/getAllProductSlice.js";
import { ClipLoader } from "react-spinners";
import ProductCard from "./ProductCard.jsx";
import Loading from "../shared/Loading.jsx";
import CartPage from "../CartPage/CartPage.jsx";

function HomePage() {
    const { loading, products, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className={"p-[1em]"}>
            <div className={""}>
                <h3 className={"font-bold text-blue-900 text-center"}>Products</h3>
                <div className={"bg-sky-600 w-[100%] h-[3px] rounded-2xl"}></div>
            </div>
            <div>
                <Loading loading={loading}/>
                {error ? (<div>Error: {error}</div>) : null}
                <div className={"grid grid-cols-4 gap-4 m-[1em]"}>
                    {products.length ? products.map((product) => (
                        <div className={"flex justify-between"} key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    )) : null}
                </div>
            </div>
        </div>
    );
}

export default HomePage;