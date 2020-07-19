import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h2 className="box-layout__title">Expense Tracker</h2>
            <p>Manage your expenses right from your desk.</p>
            <button onClick={startLogin} className="button">Login using Google!</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined , mapDispatchToProps)(LoginPage);