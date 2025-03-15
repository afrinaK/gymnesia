import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import ShopByCategory from "./components/ShopByCategory";
import "./App.css";


function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ShopByCategory />
        </div>
    );
}

export default App;