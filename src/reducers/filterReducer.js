import moment from 'moment';

export default (state = {text: '' , sortBy: 'Date' , startDate: moment().startOf('month') , endDate: moment().endOf('month')} , action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.textVal
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'Date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'Amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};