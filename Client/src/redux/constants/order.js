export const orderState = {
    level: process.env.REACT_APP_DOC_ORDER_LEVEL,
    label: process.env.REACT_APP_DOC_ORDER_LABEL,
    cities: null,
    details: null,
    status: null
};

export const REQ_ORDER_CITIES = 'REQ_ORDER_CITIES';
export const RCV_ORDER_CITIES = 'RCV_ORDER_CITIES';
export const ERR_ORDER_CITIES = 'ERR_ORDER_CITIES';
export const REQ_CITY_DETAILS = 'REQ_CITY_DETAILS';
export const RCV_CITY_DETAILS = 'RCV_CITY_DETAILS';
export const ERR_CITY_DETAILS = 'ERR_CITY_DETAILS';
export const REQ_PROCESS_ORDER = 'REQ_PROCESS_ORDER';
export const RCV_PROCESS_ORDER = 'RCV_PROCESS_ORDER';
export const ERR_PROCESS_ORDER = 'ERR_PROCESS_ORDER';
