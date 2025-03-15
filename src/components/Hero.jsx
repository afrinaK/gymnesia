import React from "react";
import "../styles/Hero.css"; // Ensure this file exists

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <h1 className="hero-title">
                    Prescription Treatments For Your <br /> <span className="highlight">Health Goals</span>
                </h1>
                <button className="hero-button">Find My Treatment</button>

                {/* SEARCH BAR */}

            </div>
            <div className="search-bar">
                    <input type="text" placeholder="Search by product/treatment" />
                    <button className="search-btn">
                    <i class="fa fa-search"></i> {/* FontAwesome search icon */}
                    </button>
                </div>
        </section>
    );
};

export default Hero;
