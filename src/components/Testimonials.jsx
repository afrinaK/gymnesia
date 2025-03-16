import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    text: "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.",
    name: "John Williams",
    role: "Lead Designer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4,
  },
  {
    text: "This product changed my life! I've never felt more confident.",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    text: "I was skeptical at first, but the results speak for themselves.",
    name: "David Brown",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 3,
  },
];

const Testimonials = () => {
  const renderStars = (rating) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += i < rating ? "★" : "☆";
    }
    return stars;
  };

  return (
    <div className="testimonials-section">
      <h2>
        Hear What <span className="highlight">Rizz</span> Patients Have To Say
      </h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">“{testimonial.text}”</p>
            <div className="testimonial-footer">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
            <div className="stars">{renderStars(testimonial.rating)}</div>
          </div>
        ))}
      </div>
      <div className="slider-nav">
        {testimonials.map((_, index) => (
          <span key={index} className={`slider-dot ${index === 0 ? "active" : ""}`}></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;