import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from './common/Heading';
import Selector from './common/Selector';
import Prevention from './common/Prevention';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { level, label } = this.props;
        return (
            <>
                <Heading hidden={false} level={level} label={label} />
                <Switch>
                    <Route exact path='/' render={() => <Selector component={'home'} />} />
                    <Route exact path='/order/' render={() => <Selector component={'order'} />} />
                    <Route component={Prevention} />
                </Switch>
            </>
        );
    }
}

const mapStateToProps = state => ({
    level: state.appComponent.level,
    label: state.appComponent.label
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(App));
