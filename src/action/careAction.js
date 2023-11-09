import {
    CARETOSHARE
} from './types';
export const share = user => {
    return {
        type: CARETOSHARE,
        payload: user
    }
}
