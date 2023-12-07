import React from "react";
import SliderBanner from "./SliderBanner";
const Banner = () =>{
    return(
    <div className="banner-wrapper position-relative">
        {/* <img src="bg-img.jpg" className="img-fluid"/> */}
        <div className="centered-text container-sm px-3"><p className="fs-15 py-1 border border-primary px-2">Order Summary: Order #1 Billed Amount # 2500</p></div>
        <SliderBanner/>
    </div>
    )
}
export default Banner