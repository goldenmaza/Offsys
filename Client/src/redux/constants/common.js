export const selectorState = {
    level: process.env.REACT_APP_DOC_SELECTOR_LEVEL,
    label: process.env.REACT_APP_DOC_SELECTOR_LABEL
};

export const preventionState = {
    level: process.env.REACT_APP_DOC_E404_LEVEL,
    label: process.env.REACT_APP_DOC_E404_LABEL
};

//No state for the Heading & Select component as it get it's 'state' from the Component that created it...
