import * as CommentActions from "./comment.actions";

export let CommentFeatureKey = "CommentFeatureKey";

let initialState = {
    loading: false,
    comments: [],
    error: ''
}

export let commentReducer = (state = initialState, action) => {

    let { type, payload } = action;
    
    switch (type) {

        case CommentActions.FETCH_COMMENT_REQUEST:
            return {
                ...state,
                loading:true
            }

        case CommentActions.FETCH_COMMENT_RESPONSE:
            return {
                ...state,
                loading:false,
                comments: payload.data  // Accessing the `data` property to get the array
            }

        case CommentActions.FETCH_COMMENT_ERROR:
            return {
                ...state,
                loading:false,
                comments: payload
            }

        default: return state;
    }
};