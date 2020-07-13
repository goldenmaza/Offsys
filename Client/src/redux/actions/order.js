import {
    REQ_ORDER_CITIES,
    RCV_ORDER_CITIES,
    ERR_ORDER_CITIES
} from '../constants/order';

export const getCities = () => (dispatch) => {
    dispatch({ type: REQ_ORDER_CITIES });

    const options = {
        method: 'GET'
    };

    fetch(process.env.REACT_APP_SERVER_API_ORDER_CONTROLLER + "/cities", options)
        .then(promise => {
            console.log(promise.json());
            return promise.json();
        })
        .then(result => dispatch({
            result, type: RCV_ORDER_CITIES
        }))
        .catch(() => dispatch({
            type: ERR_ORDER_CITIES
        }));
};
