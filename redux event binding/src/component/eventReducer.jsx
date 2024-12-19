import * as EventActions from '../component/event.action';

export const eventFeatureKey = "EventReducer";

let initialState = {
    info: {
        eating: '',
        coding: '',
        sleeping: ''
    }
}

let eventReducer = (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {
        case EventActions.EATING:
           // alert('event reducer eating action triggered...');

            return {
                ...state,
                info: {
                    ...state.info,
                    eating: !state.info.eating
                }
            };
        case EventActions.CODING:
           // alert('event reducer coding action triggered...');

            return {
                ...state,
                info: {
                    ...state.info,
                    coding : !state.info.coding
                }
            };
        case EventActions.SLEEPING:
            //alert('event reducer sleeping action triggered...');

            return {
                ...state,
                info: {
                    ...state.info,
                    sleeping: !state.info.sleeping
                }
            };
        default: return state;
    }
};

export { eventReducer };