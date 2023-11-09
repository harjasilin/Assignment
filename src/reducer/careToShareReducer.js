import {
    CARETOSHARE
} from '../action/types';
const initialState = {
    users: [],
};
const share = (state = initialState, action) => {
    switch (action.type) {

        case CARETOSHARE:
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
export default share;