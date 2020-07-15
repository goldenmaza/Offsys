import React, { Component } from 'react';

class Select extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { label, selectMap, handleChange } = this.props;
        let options = [];

        for (const [key, value] of Object.entries(selectMap)) {
            options.push(
                <option key={key} value={key}>{value}</option>
            );
        };

        return (
            <>
                <label htmlFor='sel'>{label}</label>
                <select id="sel" onChange={handleChange} >
                    <option key="-1" defaultValue="selected">Choose an option...</option>
                    { options }
                </select>
            </>
        );
    }
}

export default Select;
