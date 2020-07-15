import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from './Heading';
import Order from '../order/Order';

class Selector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { component, level, label } = this.props;
        const select = component.trim();
        return (
            <>
                <main className={select}>
                    <Heading hidden={true} level={level} label={label} />
                    {select === 'order' &&
                        <Order />
                    }
                </main>
            </>
        );
    }
}

const mapStateToProps = state => ({
    level: state.selectorComponent.level,
    label: state.selectorComponent.label
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Selector));
