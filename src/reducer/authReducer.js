import {
    SIGNIN, SIGNUP
} from '../action/types';
const initialState = {
    users: [],
    authenticatedUser: null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                users: state.users.concat({
                    key: Math.random(),
                    value: action.payload
                })
            };
        case SIGNIN:
            return {
                ...state,
                authenticatedUser: action.payload
            };

        default:
            return state;
    }
}
export default authReducer;