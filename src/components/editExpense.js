import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense , startRemoveExpense} from '../actions/expensesActions';

const editExpense = (props) => {
    console.log(props.expense)
    return (
        <div>
            <div className="summary-area">
                <div className="content-container">
                    <h1 className="summary-area__font">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm expense={props.expense} onSubmit = {
                    (expense) => {
                        props.dispatch(startEditExpense(props.expense.id , expense));
                        props.history.push('/dashboard');
                    }
                }/>
                <button onClick = {
                    () => {
                        props.dispatch(startRemoveExpense({id: props.expense.id}));
                        props.history.push('/dashboard');
                    }
                } className="button--secondary">Remove Expense</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state , props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    } 
}

export default connect(mapStateToProps)(editExpense);