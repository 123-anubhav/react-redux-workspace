import { combineReducers } from "redux";
import * as ComponentReducer from "../form.reducer";

let rootReducer = combineReducers({
    [ComponentReducer.formFeatureKey]: ComponentReducer.formReducer
}
);
export { rootReducer };