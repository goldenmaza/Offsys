import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';
import Select from '../common/Select';

import {
    getCities,
    getCityDetails,
    processOrder,
    changeCityDetails
} from '../../redux/actions/order';

class Order extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.submitButton = this.submitButton.bind(this);
    }

    componentWillMount() {
        this.props.actions.getCities();
    }

    handleChange(event) {
        let { details } = this.props;

        if (details !== null) {
            if (event.target.id === 'squareFeet') {
                details.squares = parseInt(event.target.value);
                this.props.actions.changeCityDetails(details);
            } else if (event.target.name === 'service') {
                let service = details.services[event.target.id];
                service.selected = !service.selected;
                details.services[event.target.id] = service;
                this.props.actions.changeCityDetails(details);
            }
        } else {
            if (event.target.id === 'sel') {
                this.props.actions.getCityDetails(event.target.value);
            }
        }
    }

    submitButton() {
        const { details } = this.props;

        if (details !== null) {
            this.props.actions.processOrder(details);
        }
    }

    render() {
        const { level, label, cities, details, status } = this.props;
        let services = [];

        if (details !== null) {
            details.services.map(s => {
                services.push(
                    <div key={s.id}>
                        <input id={s.id} type='checkbox' onChange={this.handleChange} name='service' value={s.name} />
                        <label htmlFor={s.id}>{s.name}</label>
                    </div>
                );
            });
        }

        if (cities != null) {
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
                                <input id='squareFeet' type='text' onChange={this.handleChange} />
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
    details: state.orderComponent.details,
    status: state.orderComponent.status
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getCities,
        getCityDetails,
        processOrder,
        changeCityDetails
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Order));
