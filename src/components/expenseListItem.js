import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale' , 'in' , {
    delimiters: {
        thousands: ',',
        decimal: '.',
    },
    abbreviations: {
        thousand: 'k',
        lakh: 'L',
        crore: 'Cr'
    },
    ordinal : function (number) {
        return number === 1 ? 'INR' : 'INR';
    },
    currency: {
        symbol: '₹'
    }
});

numeral.locale('in');

const ExpenseListItem = ({description , id , amount , createdAt}) => (
    <div>
        <Link to={`/editExpense/${id}`}><h3>{description}</h3></Link>
        <p> 
        {numeral(amount).format('$0,0.00')} 
            - 
        {moment(createdAt).format('ddd, MMM  Do  YYYY ')} 
        </p>
    </div>
);

export default connect()(ExpenseListItem);