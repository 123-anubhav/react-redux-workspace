import { combineReducers } from "redux";
import * as CommentReducer from "../commentReducer";

let rootReducer = combineReducers({
    [CommentReducer.CommentFeatureKey]: CommentReducer.commentReducer
}
);
export { rootReducer };