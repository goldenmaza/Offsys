import {
    orderState,
    REQ_ORDER_CITIES,
    RCV_ORDER_CITIES,
    ERR_ORDER_CITIES
} from '../constants/order';

export const orderComponent = (state = orderState, action) => {
    switch (action.type) {
        case REQ_ORDER_CITIES:
            return {
                ...state,
                cities: null
            }
        case RCV_ORDER_CITIES:
            console.log(action.result);
            return {
                ...state,
                cities: action.result
            }
        case ERR_ORDER_CITIES:
            return {
                ...state
            }
        default:
            return state;
    }
};
