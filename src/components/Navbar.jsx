import React from "react";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Left - Logo */}
                <div className="logo">UFC RIZZ PHARMA</div>

                {/* Center - Navigation Links */}
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">Top Products</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>

                {/* Right - Buttons and Cart */}
                <div className="nav-buttons">
                    <button className="signup-btn">Sign Up</button>
                    <button className="login-btn">Log In</button>
                    <span className="cart-icon">🛒</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
