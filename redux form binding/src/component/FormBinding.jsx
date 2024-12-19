import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as FormActions from "./form.action";
import * as ComponentReducer from "./form.reducer";
import "./FormBinding.css"; // Import the CSS file for animations

let FormBinding = () => {

    let formData = useSelector((state) => {
        return state[ComponentReducer.formFeatureKey];
    });

    let [state, setState] = useState({
        userInfo: {
            name: '',
            emailid: '',
            city: '',
            state: ''
        }
    });

    let { userInformation } = formData; // DESTRUCTURING THE DATA FROM REDUX STORE

    let dispatch = useDispatch();

    let handleRegisterUser = (event) => {
        event.preventDefault(); // Prevent default form submission
        dispatch(FormActions.register(state.userInfo)); // Dispatch registration action
    };

    let handleOnChange = (event) => {
        setState({
            ...state, // All state values should remain the same
            userInfo: {
                ...state.userInfo, // Inside userInfo, preserve all values
                [event.target.name]: event.target.value // Only update the field that changed
            }
        });
    };

    return (
        <Fragment>
            <div className="container my-5">
                <div className="row">
                    <span className="text-success">
                        <pre>Local State data is {JSON.stringify(state)}</pre>
                    </span>
                    {/* Form Column */}
                    <div className="col-md-6">
                        <form onSubmit={handleRegisterUser} className="shadow-lg p-4 rounded">
                            <h2 className="mb-4 text-center bg-light text-white">User Registration</h2>

                            <div className="form-group mb-3">
                                <label htmlFor="name">Name: </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={state.userInfo.name}
                                    onChange={handleOnChange}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="emailid">Email: </label>
                                <input
                                    type="email"
                                    id="emailid"
                                    name="emailid"
                                    className="form-control"
                                    value={state.userInfo.emailid}
                                    onChange={handleOnChange}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="city">City: </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    className="form-control"
                                    value={state.userInfo.city}
                                    onChange={handleOnChange}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="state">State: </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    className="form-control"
                                    value={state.userInfo.state}
                                    onChange={handleOnChange}
                                />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>

                    {/* Display Data Column */}
                    <div className="col-md-6">
                        <h3 className="mb-4 text-center bg-danger text-white">Submitted Data || In Redux Store</h3>
                        <div className="card shadow-sm p-4">
                            <div className="form-group mb-3">
                                <label>Name: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={userInformation.name || 'N/A'}
                                    readOnly
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>Email: </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={userInformation.emailid || 'N/A'}
                                    readOnly
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>City: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={userInformation.city || 'N/A'}
                                    readOnly
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>State: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={userInformation.state || 'N/A'}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FormBinding;
