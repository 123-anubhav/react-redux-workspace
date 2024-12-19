import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as EventActions from "../component/event.action";
import * as ComponentReducer from "./eventReducer";
import "./EventBinding.css"; // Import the CSS file for animations

let EventBinding = () => {
    let eventData = useSelector((state) => {
        return state[ComponentReducer.eventFeatureKey];
    });

    let { info } = eventData;

    let dispatch = useDispatch();

    let handleEating = () => {
        dispatch(EventActions.eating());
    };

    let handleCoding = () => {
        dispatch(EventActions.coding());
    };

    let handleSleeping = () => {
        dispatch(EventActions.sleeping());
    };

    return (
        <Fragment>
            <div className="container mt-4">
                <h3 className="text-center text-primary">Event Binding with Redux</h3>
                <div className="row justify-content-center mt-4">
                    {/* Left Column: Checkboxes */}
                    <div className="col-md-4">
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="eatingCheck"
                                onChange={handleEating}
                                checked={info.eating}
                            />
                            <label className="form-check-label" htmlFor="eatingCheck">
                                Eating
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="codingCheck"
                                onChange={handleCoding}
                                checked={info.coding}
                            />
                            <label className="form-check-label" htmlFor="codingCheck">
                                Coding
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="sleepingCheck"
                                onChange={handleSleeping}
                                checked={info.sleeping}
                            />
                            <label className="form-check-label" htmlFor="sleepingCheck">
                                Sleeping
                            </label>
                        </div>
                    </div>

                    {/* Right Column: Animated Messages */}
                    <div className="col-md-8">
                        {info.eating && (
                            <div className="animated-message fade-in">
                                You are now Eating 🍴
                            </div>
                        )}
                        {info.coding && (
                            <div className="animated-message fade-in">
                                You are now Coding 💻
                            </div>
                        )}
                        {info.sleeping && (
                            <div className="animated-message fade-in">
                                You are now Sleeping 😴
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EventBinding;
