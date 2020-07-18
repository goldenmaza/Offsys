import axios from 'axios';

import {
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

export const getCities = () => async (dispatch) => {
    dispatch({ type: REQ_ORDER_CITIES });

    let response = await fetch(process.env.REACT_APP_SERVER_API_ORDER_CONTROLLER + `/cities`);
    let json = await response.json();
    if (json !== null) {
        dispatch({
            json, type: RCV_ORDER_CITIES
        })
    } else {
        dispatch({
            type: ERR_ORDER_CITIES
        });
    }
};

export const getCityDetails = (id) => async (dispatch) => {
    dispatch({ type: REQ_CITY_DETAILS });

    let response = await fetch(process.env.REACT_APP_SERVER_API_ORDER_CONTROLLER + `/city/${id}`);
    let json = await response.json();
    if (json !== null) {
        dispatch({
            json, type: RCV_CITY_DETAILS
        })
    } else {
        dispatch({
            type: ERR_CITY_DETAILS
        });
    }
};

export const processOrder = (order) => async (dispatch) => {
    dispatch({ type: REQ_PROCESS_ORDER });

    let response = await fetch(process.env.REACT_APP_SERVER_API_ORDER_CONTROLLER + `/process/${JSON.stringify(order)}`);
    let json = await response.json();
    if (json !== null) {
        dispatch({
            json, type: RCV_PROCESS_ORDER
        })
    } else {
        dispatch({
            type: ERR_PROCESS_ORDER
        });
    }
};

export const changeCityDetails = (json) => async (dispatch) => {
    dispatch({ type: REQ_CITY_DETAILS });

    if (json !== null) {
        dispatch({ json, type: RCV_CITY_DETAILS });
    } else {
        dispatch({ type: ERR_CITY_DETAILS });
    }
};
