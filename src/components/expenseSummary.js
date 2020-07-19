import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import expenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

numeral.locale('in');

export const ExpenseSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div className="summary-area">
            <div className="content-container">
                <h1 className="summary-area__font">Viewing <span>{props.expenseCount}</span> {expenseWord} totalling <span>{numeral(props.expenseTotal).format('$0,0.00')}</span></h1>
                <div className="summary-area__actions">
                    <Link to="/addExpenses" className="button" exact={true}>Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = expenses(state.expenses , state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);