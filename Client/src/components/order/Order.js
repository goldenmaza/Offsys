import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';

import {
    getCities
} from '../../redux/actions/order';

class Order extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { level, label } = this.props;
        return (
            <>
                <Heading hidden={false} level={level} label={label} />
            </>
        );
    }
}

const mapStateToProps = state => ({
    level: state.orderComponent.level,
    label: state.orderComponent.label
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getCities
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Order));
