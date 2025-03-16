// import React, { useEffect, useState } from "react";
// import "../styles/ShopByCategory.css"; // Import the CSS file

// const ShopByCategory = () => {
//   const [images, setImages] = useState([]);
//   const API_KEY = "kM6pDZDK5HALO3aDZHHrbTZ5Je3rF8Z2P59sKwKMULF4BSMBDoWtFciJ"; // Replace with your API key
//   const query = "gym equipment"; // Change query if needed

//   useEffect(() => {
//     fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=6`, {
//       headers: { Authorization: API_KEY },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setImages(data.photos);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="container text-center my-5">
//       <h2 className="text-white">
//         Shop By <span className="text-warning">Category</span>
//       </h2>
//       {/* Centering the cards */}
//       <div className="row justify-content-center mt-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="col-md-4 col-sm-6 d-flex justify-content-center mb-4"
//           >
//             <div className="category-card shadow">
//               <img
//                 src={image.src.medium}
//                 alt="Gym Equipment"
//                 className="card-img"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopByCategory;

import React, { useEffect, useState } from "react";
import "../styles/ShopByCategory.css"; // Import the CSS file

const ShopByCategory = () => {
  const [images, setImages] = useState([]);
  const API_KEY = "kM6pDZDK5HALO3aDZHHrbTZ5Je3rF8Z2P59sKwKMULF4BSMBDoWtFciJ"; // Replace with your API key
  const query = "gym equipment"; // Change query if needed

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=6`, {
      headers: { Authorization: API_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data.photos);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container text-center my-5">
      <h2 className="text-white">
        Shop By <span className="text-warning">Category</span>
      </h2>
      {/* Centering the cards */}
      <div className="row justify-content-center mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="col-md-4 col-sm-6 d-flex justify-content-center mb-4"
          >
            <div className="category-card shadow">
              <img
                src={image.src.medium}
                alt="Gym Equipment"
                className="card-img"
              />
              <div className="card-text">
                <h5 className="mt-3">Category Title</h5>
                <p>Description or additional text here</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
