import React from 'react'
import Header from "./components/shared/Header.jsx";
import Footer from "./components/shared/Footer.jsx";
import {Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
import CartPage from "./components/CartPage/CartPage.jsx";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage.jsx";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:id" element={<DetailsPage />} />
                <Route path={"/cart"} element={<CartPage/>}/>
                <Route path="/favorites" element={<FavoritesPage/>}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
