﻿import {
    orderState,
    REQ_ORDER_CITIES,
    RCV_ORDER_CITIES,
    ERR_ORDER_CITIES,
    REQ_CITY_DETAILS,
    RCV_CITY_DETAILS,
    ERR_CITY_DETAILS,
    REQ_PROCESS_ORDER,
    RCV_PROCESS_ORDER,
    ERR_PROCESS_ORDER
} from '../constants/order';

export const orderComponent = (state = orderState, action) => {
    switch (action.type) {
        case REQ_ORDER_CITIES:
            return {
                ...state,
                cities: null
            }
        case RCV_ORDER_CITIES:
            return {
                ...state,
                cities: action.json
            }
        case ERR_ORDER_CITIES:
            return {
                ...state
            }
        case REQ_CITY_DETAILS:
            return {
                ...state,
                details: null
            }
        case RCV_CITY_DETAILS:
            return {
                ...state,
                details: action.json
            }
        case ERR_CITY_DETAILS:
            return {
                ...state
            }
        case REQ_PROCESS_ORDER:
            return {
                ...state,
                status: null
            }
        case RCV_PROCESS_ORDER:
            return {
                ...state,
                status: action.json
            }
        case ERR_PROCESS_ORDER:
            return {
                ...state
            }
        default:
            return state;
    }
};
