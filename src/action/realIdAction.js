import {
    REALID
} from './types';
export const realId = user => {
    return {
        type: REALID,
        payload: user
    }
}
