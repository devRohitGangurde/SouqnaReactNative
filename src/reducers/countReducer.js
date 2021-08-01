import { COUNTER_CHANGE } from '../constants/index';

const initialState = {
    count: 0
};

const countReducer = (state = initialState, action) => {
    // console.log('reducer ======state=====> ', state, action);
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                count: action.payload.count
            };

        default:
            return state;
    }
}

export default countReducer;