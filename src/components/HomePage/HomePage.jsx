import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/getAllProductSlice.js";

function HomePage() {
    const { loading, products, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]); // Add dispatch to dependency array

    // Debugging: Log when state changes
    useEffect(() => {
        console.log("Products updated:", products);
    }, [products]);

    if (loading) return <div>Loading products...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>HomePage</h1>

        </div>
    );
}

export default HomePage;