import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter , {history} from './routes/router';
import configureStore from './store/expensify_store';
import {startSetExpenses} from './actions/expensesActions';
import {login , logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from'./firebase/firebase';
import LoadingPage from './components/loadingPage';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses , state.filters)
    console.log(visibleExpenses);
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx , document.getElementById("Paragraph"));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage /> , document.getElementById("Paragraph"));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
        console.log('Login SuccessFul');
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
        console.log('LogOut Successful');
    }
});