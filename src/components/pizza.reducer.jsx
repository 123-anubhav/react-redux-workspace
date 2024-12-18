import { BUY_PIZZA } from "./redux/pizzahut.actionType";

let initialState = {
    count: 20
};

let pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PIZZA:
            alert("inside pizza reducer");
            return {
                count: (state.count > 0) ? state.count - 1 : 0
            };
        default: return state;
    }
}
export { pizzaReducer };