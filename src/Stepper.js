import React from "react";
import { ORDER_STAGE } from "./App";
const Stepper = (props) =>{
    return(
    <div className="stepper-wrapper d-flex flex-row flex-sm-column align-items-center justify-content-center">
        <div className="position-relative">
            <div className={`rounded p-1 default-stepper ${props.currentStage === ORDER_STAGE.PRODUCT ? "active-stepper" : ""}`} >Product</div>
            {props.currentStage === ORDER_STAGE.PRODUCT ? <div className="arrow-step"></div> : ""}
        </div>
        <div className="position-relative">
            <div className={`rounded p-1 default-stepper ${props.currentStage === ORDER_STAGE.REVIEW ? 'active-stepper' : ''}`} >Review</div>
            {props.currentStage === ORDER_STAGE.REVIEW ? <div className="arrow-step"></div> : ""}
        </div>
        <div className="position-relative">
            <div className={`rounded p-1 default-stepper ${props.currentStage === ORDER_STAGE.PAYMENT ? "active-stepper" : ""}`} >Payment</div>
            {props.currentStage === ORDER_STAGE.PAYMENT ? <div className="arrow-step"></div> : ""}
        </div>
        <div className="position-relative">
            <div className={`rounded p-1 default-stepper ${props.currentStage === ORDER_STAGE.SUMMARY ? "active-stepper" : ""}`} >Summary</div>
        </div>
    </div>
    )
}
export default Stepper