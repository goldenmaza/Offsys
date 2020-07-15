import axios from 'axios';

import {
    REQ_ORDER_CITIES,
    RCV_ORDER_CITIES,
    ERR_ORDER_CITIES,
    REQ_CITY_DETAILS,
    RCV_CITY_DETAILS,
    ERR_CITY_DETAILS
} from '../constants/order';

export const getCities = () => async (dispatch) => {
    dispatch({ type: REQ_ORDER_CITIES });

    let response = await fetch(process.env.REACT_APP_SERVER_API_ORDER_CONTROLLER + `/cities`);
    let json = await response.json();
    if (json != null) {
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
    if (json != null) {
        dispatch({
            json, type: RCV_CITY_DETAILS
        })
    } else {
        dispatch({
            type: ERR_CITY_DETAILS
        });
    }
};
