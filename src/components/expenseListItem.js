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
        <Link className="list-item" to={`/editExpense/${id}`}>
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__subtitle">{moment(createdAt).format('ddd, MMM  Do  YYYY ')}</span>
            </div>
        <div>
            <p className="list-item__data"> 
                {numeral(amount).format('$0,0.00')} 
            </p>
        </div>
        </Link>
    </div>
);

export default connect()(ExpenseListItem);