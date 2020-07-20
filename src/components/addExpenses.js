import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expensesActions';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div>
            <div className="summary-area">
              <div className="content-container">
                <h1 className="summary-area__font">Add Expense</h1>
              </div>
            </div>
            <div className="content-container">
              <ExpenseForm
                onSubmit={this.onSubmit}
              />
            </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// import React from 'react';
// import ExpenseForm from './ExpenseForm';
// import {connect} from 'react-redux';
// import {startAddExpense} from '../actions/expensesActions';

// const AddExpenses = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm onSubmit = {(expense) => {
//             props.dispatch(startAddExpense(expense));
//             props.history.push('/');
//         }}/>
//     </div>
// );
// export default connect()(AddExpenses);