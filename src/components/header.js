import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';

const Header = ({startLogOut}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to="/dashboard" className="header__title" exact={true}><h1>Expensify</h1></Link>
                <button onClick = {startLogOut} className="button--link">Log Out</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined , mapDispatchToProps)(Header);