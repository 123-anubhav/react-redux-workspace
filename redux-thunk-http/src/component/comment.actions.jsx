import Axios from "axios";

export const FETCH_COMMENT_REQUEST="FETCH_COMMENT_REQUEST";
export const FETCH_COMMENT_RESPONSE="FETCH_COMMENT_RESPONSE";
export const FETCH_COMMENT_ERROR="FETCH_COMMENT_ERROR";

let fetchCommentReq=()=>{
    return  {
        type: FETCH_COMMENT_REQUEST,
        payload: "fetching from server data"
    }
};

let fetchCommentResponse=(data)=>{
    return  {
        type: FETCH_COMMENT_RESPONSE,
        payload: data
    }
};

let fetchCommentError=(data)=>{
    return  {
        type: FETCH_COMMENT_ERROR,
        payload: data
    }
};

let baseURL=" https://jsonplaceholder.typicode.com/comments";

// REAL SERVER ACTION FROM THUNK 
export const fetchComments=()=>{
    return async (dispatch)=>{
        alert('inside thunk for dispatch actions axios')
        dispatch(fetchCommentReq());
        try{
            let response=await Axios.get(baseURL);
            dispatch(fetchCommentResponse(response));
        }catch(error){
            dispatch(fetchCommentError(error));
        }
        
    }
}