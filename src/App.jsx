import React from 'react'
import Header from "./components/shared/Header.jsx";
import Footer from "./components/shared/Footer.jsx";
import {Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
