import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

const addExpenseAction = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        const {description = 'Miscellaneous' , note = '' , amount = 0 , createdAt = 0} = expenseData;
        const expense = {description , note , amount , createdAt};
        database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpenseAction({
                id: ref.key,
                ...expense
            }));
        });
    };
};

const editExpenseAction = (id , updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

export const startEditExpense = (id , updates) => {
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpenseAction(id , updates));
        });
    }
}

const removeExpense = ({id = null} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id = null} = {}) => {
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}));
        });
    }
}

const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
              expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
              });
            });
            dispatch(setExpenses(expenses));
          });
    }
};
