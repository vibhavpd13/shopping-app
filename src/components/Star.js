import React from "react";
const Star = () =>{
    return (
       <div className="star-rating">
      {/* {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })} */}
    </div>
    )
}
export default Star