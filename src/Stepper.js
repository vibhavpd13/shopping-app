import React from "react";
import { ORDER_STAGE } from "./App";
const Stepper = (props) =>{
    return(
    <div className="stepper-wrapper d-flex flex-row flex-sm-column align-items-center justify-content-center">
         <div className="rounded p-2" style={{backgroundColor:props.currentStage === ORDER_STAGE.PRODUCT  ? "black" : "white", color:props.currentStage === ORDER_STAGE.PRODUCT  ? "white" : "black"}}>Product</div>
        <div className="rounded p-2" style={{backgroundColor:props.currentStage === ORDER_STAGE.REVIEW  ? "black" : "white", color:props.currentStage === ORDER_STAGE.REVIEW  ? "white" : "black"}}>Review</div>
        <div className="rounded p-2" style={{backgroundColor:props.currentStage === ORDER_STAGE.PAYMENT ? "black" : "white", color:props.currentStage === ORDER_STAGE.PAYMENT ? "white" : "black"}}>Payment</div>
        <div className="rounded p-2" style={{backgroundColor:props.currentStage === ORDER_STAGE.SUMMARY  ? "black" : "white",color:props.currentStage === ORDER_STAGE.SUMMARY  ? "white" : "black"}}>Summary</div>
    </div>
    )
}
export default Stepper