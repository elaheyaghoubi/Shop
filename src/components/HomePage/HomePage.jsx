import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/getAllProductSlice.js";
import { ClipLoader } from "react-spinners";
import ProductCard from "./ProductCard.jsx";

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
                <div className={"text-center"}>
                    <ClipLoader
                        color={"#000"}
                        loading={loading}
                        cssOverride={{
                            borderWidth: "3px",
                            borderColor: "#2a0eaa #2a0eaa transparent",
                            animation: "1s linear 0s infinite normal both running react-spinners-ClipLoader-clip"
                        }}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
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