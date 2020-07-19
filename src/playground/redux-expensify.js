

expensify_store.subscribe(() => {
    const state = expensify_store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses , state.filters)
    console.log(visibleExpenses);
});

const item = expensify_store.dispatch(addExpenseAction({description: 'Hostel Rent' , note: 'House and Hostel Rent' , amount: 12000 , createdAt: 1000}));
const item2 = expensify_store.dispatch(addExpenseAction({description: 'Ice Cream' , note: 'Price of Cornetto' , amount: 60 , createdAt: -2000}));
expensify_store.dispatch(addExpenseAction({description: 'Birthday Party' , note: 'Barbeque Nation with 12 people' , amount: 6000 , createdAt: -1000}));
expensify_store.dispatch(addExpenseAction({description: 'Placement Party' , note: 'Radisson Hotel with 50 people' , amount: 10000 , createdAt: 3000}));
expensify_store.dispatch(sortByAmount());
