import React from "react";
import { ORDER_STAGE } from "../App";
const Pagination = (props) =>{
    const{onPrevious,onNext,orderData}=props;
    return(
        <div className="d-flex align-items-center justify-content-between mt-2 pt-2">
            <button type="button" className={`btn btn-small rounded ${orderData.currentOrderStage===ORDER_STAGE.PRODUCT ? "disabled btn-secondary":"btn-primary"}`} onClick={onPrevious} disabled={orderData.currentOrderStage===ORDER_STAGE.PRODUCT}>Prev</button>
            <button type="button" className={`btn btn-small rounded btn-primary ${orderData.currentOrderStage===ORDER_STAGE.SUMMARY || orderData.product.list.length===0 ? "disabled btn-secondary" : "btn-primary"}`} onClick={onNext} disabled={orderData.currentOrderStage===ORDER_STAGE.SUMMARY || orderData.product.list.length===0}>Next</button>
        </div>
    )
}
export default Pagination;