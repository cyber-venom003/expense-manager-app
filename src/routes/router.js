import React from 'react';
import {Router , Route , Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/loginBtn';
import Dashboard from '../components/dashboard';
import AddExpenses from '../components/addExpenses';
import editExpense from '../components/editExpense';
import NotFoundPage from '../components/notFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
        <Switch>
            <PublicRoute path = "/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/addExpenses" component={AddExpenses}/>
            <PrivateRoute path="/editExpense/:id" component={editExpense}/>
            <PublicRoute component={NotFoundPage}/>
        </Switch>
        </div>
    </Router>
);

export default AppRouter;