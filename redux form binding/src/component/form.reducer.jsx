import * as FormActions from './form.action';

export const formFeatureKey = "FormReducer";

let initialState = {
    userInformation: {
        name: '',
        emailid: '',
        city: '',
        state: ''
    }
}

let formReducer = (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case FormActions.REGISTER_USER:

            alert('REGISTER_USER reducer action triggered...');

            return {
                ...state,
                userInformation: payload
            };

        default: return state;
    }
};

export { formReducer };