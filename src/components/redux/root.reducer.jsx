import { combineReducers } from "redux"
import { pizzaReducer } from "../pizza.reducer";

let rootReducer = combineReducers({
    pizzaA: pizzaReducer, // Assign 'pizzaA' to your pizzaReducer
});
export { rootReducer };