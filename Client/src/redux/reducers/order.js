import {
    orderState,
    REQ_ORDER_CITIES,
    RCV_ORDER_CITIES,
    ERR_ORDER_CITIES
} from '../constants/order';

export const orderComponent = (state = orderState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
