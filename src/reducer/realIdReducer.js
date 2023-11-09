import {
    REALID
} from '../action/types';
const initialState = {
    users: [],
};
const realIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case REALID:
            return {
                ...state,
                users: state.users.concat({
                    key: Math.random(),
                    value: action.payload
                })
            };


        default:
            return state;
    }
}
export default realIdReducer;