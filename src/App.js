import "./App.css";
import Card from "./Card";
import Stepper from "./Stepper";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Pagination from "./components/Pagination";
import Star from "./components/Star";

export const ORDER_STAGE = {
  PRODUCT: "PRODUCT",
  REVIEW: "REVIEW",
  PAYMENT: "PAYMENT",
  SUMMARY: "SUMMARY",
};

function App() {
  const initialOrderData = {
    currentOrderStage: ORDER_STAGE.PRODUCT,
    product: {
      list: [
        {
          id: 1,
          name: "Test",
          inStock: true,
          returnWindowDate: "23-04-2023",
          giftOptionAvailable: true,
          price: 200,
          quantity: 3,
          img: "/book-seller.jpg",
        },
        {
          id: 2,
          name: "Test2",
          inStock: false,
          returnWindowDate: "01-11-2023",
          giftOptionAvailable: true,
          price: 800,
          quantity: 1,
          img: "/headphone.jpg",
        },
      ],
    },
    review: {
      stars: 0,
      description: "",
      name: "",
      city: "",
      email: "",
    },
    payment: {
      name: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    },
  };
  const [orderData, setOrderData] = useState({ ...initialOrderData });
  const handleProductQuantityChange = (e, productId) => {
    setOrderData((prev) => {
      console.log("prev:", prev);
      debugger;
      let updatedOrder = { ...prev };
      const index = updatedOrder.product.list.findIndex(
        (product) => product.id === productId
      ); //get the product index
      updatedOrder.product.list[index].quantity = e.target.value;
      console.log("updated order ", updatedOrder);
      return updatedOrder;
    });
  };
  const onPreviousStage = () => {
    const currentStage = orderData.currentOrderStage;
    let newStage;
    if (currentStage === ORDER_STAGE.PRODUCT) {
      return;
    }
    if (currentStage === ORDER_STAGE.REVIEW) {
      newStage = ORDER_STAGE.PRODUCT;
    }
    if (currentStage === ORDER_STAGE.PAYMENT) {
      newStage = ORDER_STAGE.REVIEW;
    }
    if (currentStage === ORDER_STAGE.SUMMARY) {
      newStage = ORDER_STAGE.PAYMENT;
    }
    setOrderData((prev) => ({
      ...prev,
      currentOrderStage: newStage,
    }));
  };
  const onNextStage = () => {
    const currentStage = orderData.currentOrderStage;
    let newStage;
    if (currentStage === ORDER_STAGE.PRODUCT) {
      if (orderData.product.list.length === 0) {
        return;
      } else {
        newStage = ORDER_STAGE.REVIEW;
      }
    }
    if (currentStage === ORDER_STAGE.REVIEW) {
      newStage = ORDER_STAGE.PAYMENT;
    }
    if (currentStage === ORDER_STAGE.PAYMENT) {
      newStage = ORDER_STAGE.SUMMARY;
    }
    if (currentStage === ORDER_STAGE.SUMMARY) {
      return;
    }
    setOrderData((prev) => ({
      ...prev,
      currentOrderStage: newStage,
    }));
  };
  const changeReviewHandle = (e) => {
    setOrderData((prev) => ({
      ...prev,
      review: {
        ...prev.review,
        [e.target.name]: e.target.value,
      },
    }));
  };
  const onDeleteProduct = (productId) => {
    setOrderData((prev) => {
      let updatedOrder = { ...prev };
      updatedOrder.product.list = updatedOrder.product.list.filter(
        (product) => product.id !== productId
      ); //get the product index
      return updatedOrder;
    });
  };
  const getTotalPrice = () =>{
    let totalPrice = 0;
    orderData.product.list.forEach((product)=>{
      totalPrice+=product.price
      
    })
    return totalPrice;
  };

  const onReviewStar=(stars)=>{
    setOrderData((prev) => ({
      ...prev,
      review: {
        ...prev.review,
        stars: stars,
      },
    })); 
  }
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-sm-3 mt-3">
            <Stepper currentStage={orderData.currentOrderStage}/>
          </div>
          <div className="col-sm-9 mt-3">
            <div className="shadow-sm border p-3 mb-5 bg-white rounded">
            {orderData.currentOrderStage == ORDER_STAGE.PRODUCT ? (
              <>
                {orderData.product.list.map((listItem) => {
                  return (
                    <Card
                      data={listItem}
                      onDelete={() => onDeleteProduct(listItem.id)}
                      handleQuantityChange={(e) =>
                        handleProductQuantityChange(e, listItem.id)
                      }
                    />
                  );
                })}
              </>
            ) : orderData.currentOrderStage == ORDER_STAGE.REVIEW ? (
              <div className="review">
                <h4>Review:</h4>
                <p>Review the selected products and modify</p>
                <div className="form-group stars">
                  {[...Array(5)].map((item,index)=>(
                      <span className={`fa fa-star ${orderData.review.stars >=index ? "checked":""}`} onClick={()=>onReviewStar(index)}></span>
                  ))}
                </div>
                {/* <Star orderData={orderData}/> */}
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" onChange={changeReviewHandle} placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" className="form-control" name="city" onChange={changeReviewHandle} placeholder="Enter City"/>
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="text" className="form-control" name="email" onChange={changeReviewHandle} placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" name="description"  onChange={changeReviewHandle} rows="3"></textarea>
                </div>
                <button className="btn btn-small btn-primary rounded" type="button">Submit</button>
              </div>

            ) : orderData.currentOrderStage == ORDER_STAGE.PAYMENT ? (
                <div className="payment">
                  {/* <h4 className="mb-3">Payment Form:</h4> */}
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="p-3  border rounded">
                        <h6 className="mb-3">Payment Form1:</h6>
                        <div className="form-group">
                        <label>Full Name(on the card)</label>
                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text"><i className="fa fa-user"></i></div>
                            </div>
                            <input type="text" className="form-control"/>
                          </div>
                        </div>
                        <div className="form-group">
                        <label>Card Number</label>
                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text"><i className="fa fa-credit-card"></i></div>
                            </div>
                            <input type="text" className="form-control"/>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-8">
                            <label>Expiration</label>
                            <input type="text" className="form-control" placeholder="MM"/>
                          </div>
                          <div className="form-group col-md-4">
                            <label>CVV</label>
                            <input type="text" className="form-control"/>
                          </div>
                          <div className="form-group col-md-12">
                            <input type="text" className="form-control"  placeholder="YY"/>
                          </div>
                        </div>
                        <button className="btn btn-small btn-primary rounded">Submit</button>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="p-3  border rounded">
                        <h6 className="mb-3">Payment Form2:</h6>
                        <ul className="nav nav-pills nav-fill bg-light mb-3">
                          <li className="nav-item">
                            <span className="nav-link active pointer px-2 py-1">Credit Card</span>
                          </li>
                          <li className="nav-item">
                            <span className="nav-link pointer px-2 py-1">PayPal</span>
                          </li>
                          <li className="nav-item">
                            <span className="nav-link pointer px-2 py-1">Bank Transfer</span>
                          </li>
                        </ul>
                        <div className="form-group">
                      <label>Full Name(on the card)</label>
                        <div className="input-group mb-2">
                          <input type="text" className="form-control"/>
                        </div>
                        </div>
                        <div className="form-group">
                      <label>Card Number</label>
                        <div className="input-group mb-2">
                          <input type="text" className="form-control"/>
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fa fa-cc-visa"></i></div>
                          </div>
                        </div>
                        </div>
                        <div className="form-row">
                        <div className="form-group col-sm-8">
                        <label>Card Number</label>
                          <div className="input-group mb-2">
                            <input type="text" className="form-control" placeholder="MM"/>
                            <input type="text" className="form-control" placeholder="YY"/>
                          </div>
                        </div>
                        <div className="form-group col-sm-4">
                          <label>CVV</label>
                          <input type="text" className="form-control"/>
                        </div>
                        </div>
                   
                        <button className="btn btn-small btn-primary rounded">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
            ) : orderData.currentOrderStage == ORDER_STAGE.SUMMARY ? (
              <div className="summary">
                <h4>Review:</h4>
                <div className="row">
                  <div className="col-sm-5">
                    <p>Dramendra Rathor<br/>
                      Plot no. F-14 ground floor<br/>
                      shatabdi enclave, sector 49 <br/>
                      Noida, UTTAR PRADESH 201301
                    </p>
                  </div>
                  <div className="col-sm-7">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Order Summary</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Item Subtotal</th>
                        <td>Rs 253.00</td>
                      </tr>
                      <tr>
                        <th scope="row">Shipping</th>
                        <td>Rs. 77.00</td>
                      </tr>
                      <tr>
                        <th scope="row">Total</th>
                        <td>{`Rs. ${getTotalPrice()}`}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="font-weight-bold">Grand Total</th>
                        <td className="font-weight-bold">{`Rs. ${getTotalPrice() + 253 + 77}`}</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </div>
                {orderData.product.list.map((listItem) => {
                  return (
                    <Card
                      data={listItem}
                      onDelete={() => onDeleteProduct(listItem.id)}
                      handleQuantityChange={(e) =>
                        handleProductQuantityChange(e, listItem.id)
                      }
                    />
                  );
                })}
              </div>
            ) : null}

            <Pagination
                orderData={orderData}
                onPrevious={onPreviousStage}
                onNext={onNextStage}
              />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
