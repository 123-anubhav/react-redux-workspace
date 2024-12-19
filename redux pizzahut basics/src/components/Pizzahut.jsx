import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyPizza } from "./redux/pizzahut.action";

let Pizzahut = () => {

    let pizzaInfo = useSelector((state) => {
        return state['pizzaA']
    });

    const dispatch = useDispatch(); // Dispatch actions

    let handleBuyPizza = () => {
        //dispatch({ type: BUY_PIZZA })/*  it working */
          dispatch(buyPizza());  // for this error comes so solution npm install redux-thunk

    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                Redux Basics Pizzahut
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img height="280px" width="400px"
                                            className="img-fluid"
                                            src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=1024x1024&w=is&k=20&c=faq73viCFGvfpKxcBuHcOI8kyT99B-p-jScipke-VuQ="
                                            alt="loading img" />
                                    </div>
                                    <div className="col-md-7">
                                        <p className="lead ">
                                            Pizza, the ultimate comfort food, is a celebration of flavors and textures. With a crispy crust, rich tomato sauce, and gooey melted cheese, every bite is a burst of happiness. From classic Margherita to bold Pepperoni and creative veggie-loaded delights, pizza brings people together like no other. It's not just a dish; it's an emotion, shared and loved across the world!
                                        </p>
                                        <p className="h5">
                                            Available: <span className="h4 text-danger">{pizzaInfo.count}</span>
                                        </p>


                                        <button className="bg-danger h6 text-white" onClick={handleBuyPizza}>buy pizza</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Pizzahut;