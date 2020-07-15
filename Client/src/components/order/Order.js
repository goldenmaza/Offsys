import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';
import Select from '../common/Select';

import {
    getCities,
    getCityDetails,
    processOrder
} from '../../redux/actions/order';

class Order extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.processOrder = this.processOrder.bind(this);
        this.submitButton = this.submitButton.bind(this);
    }

    componentWillMount() {
        this.props.actions.getCities();
    }

    handleChange(event) {
        event.preventDefault();

        if (event.target.id === 'sel') {
            this.props.actions.getCityDetails(event.target.value);
        } else {
            //TODO: handle checkbox activities...
        }
    }

    submitButton() {
        //TODO: handle submit button...
    }

    processOrder(event) {
        event.preventDefault();

        this.props.actions.processOrder();
    }

    render() {
        const { level, label, cities, details } = this.props;
        let services = [];

        if (details !== null) {
            details.services.map(s => {
                services.push(
                    <div key={s.id}>
                        <input id={s.id} type='checkbox' onChange={this.handleChange} />
                        <label htmlFor={s.id}>{s.name}</label>
                    </div>
                );
            });
        }

        if (cities != null) {
            console.log(this.props.cities);
            return (
                <section>
                    <Heading hidden={true} level={level} label={label} />
                    <Select label={process.env.REACT_APP_DOC_SELECT_LABEL} handleChange={this.handleChange} selectMap={cities} />
                    {details !== null &&
                        <>
                            <div>
                                <strong>{process.env.REACT_APP_DOC_DETAILS_LABEL + ': ' + details.name}</strong>
                            </div>
                            <div>
                                <strong>{process.env.REACT_APP_DOC_SQUAREFEET_LABEL}</strong>
                                <input id='squareFeet' type='text' />
                            </div>
                            <div>
                                <strong>{process.env.REACT_APP_DOC_AVAILABLE_LABEL}</strong>
                                {services}
                            </div>
                            <div>
                                <strong>{process.env.REACT_APP_DOC_SUBMIT_LABEL}</strong>
                                <input id='submit' type='button' onClick={this.submitButton} value='Send' />
                            </div>
                        </>
                    }
                </section>
            );
        } else {
            return (
                <></>
            );
        }
    }
}

const mapStateToProps = state => ({
    level: state.orderComponent.level,
    label: state.orderComponent.label,
    cities: state.orderComponent.cities,
    details: state.orderComponent.details
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getCities,
        getCityDetails,
        processOrder
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Order));
