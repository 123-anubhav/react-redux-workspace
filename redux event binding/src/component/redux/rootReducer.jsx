import { combineReducers } from "redux";
import * as ComponentReducer from "../eventReducer";

let rootReducer = combineReducers({
    [ComponentReducer.eventFeatureKey]: ComponentReducer.eventReducer
}
);
export { rootReducer };