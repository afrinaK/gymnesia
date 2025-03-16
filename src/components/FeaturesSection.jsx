import React from "react";
import "../styles/FeaturesSection.css"; // Import the CSS file

const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-shield-alt", // Example FontAwesome icon for Secure Payment
      title: "Secure Payment",
    },
    {
      icon: "fas fa-headset", // Example FontAwesome icon for Online Support
      title: "Online Support",
    },
    {
      icon: "fas fa-truck", // Example FontAwesome icon for Free Shipping
      title: "Free Shipping",
    },
    {
      icon: "fas fa-tag", // Example FontAwesome icon for Best Value
      title: "Best Value",
    },
  ];

  return (
    <div className="features-section">
      <div className="container-fluid">
        {" "}
        {/* Use container-fluid for full width */}
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 text-center">
              <div className="feature-item">
                <i className={feature.icon}></i>
                <h5>{feature.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
