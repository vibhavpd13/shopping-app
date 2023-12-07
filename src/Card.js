import React from "react";
const Card = (props) => {
    const{data,handleQuantityChange,onDelete} = props
    return (
        <div className="card-wrapper">
            <div className="border-bottom p-2 ">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <div className="card-body">
                            <img src={data?.img??""} className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title mb-1 font-weight-bold">{data.name}</h5>
                            <p className="mb-1 fs-15"><small className="text-muted">{data.inStock ? "In Stock" : "Out of Stock"}</small></p>
                            <p className="mb-1 fs-15">Gifts Option {data.giftOptionAvailable ? "Available" : "Not Available"}<a className="text-primary ml-2 fs-14" href="/more-view">More View</a></p>
                            <p className="mb-1 fs-15">The return window date is {data.returnWindowDate}</p>
                            <p className="mb-1 fs-15 font-weight-bold">Rs {data.price}</p>
                            <div className="d-flex align-items-center mt-2 fs-15 flex-wrap">
                                <select value={data.quantity} onChange={handleQuantityChange} className="select-width">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <span className="text-primary ml-3 pointer fs-14" onClick={onDelete}>Delete</span>
                                <span className="text-primary ml-3 pointer fs-14">Save to later</span>
                                <span className="text-primary ml-3 pointer fs-14">See more like this</span>
                                <span className="text-primary ml-3 pointer fs-14">Share</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card