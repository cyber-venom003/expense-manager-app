import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            errorStatus: ''
        }
    }
    handleDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    handleAmount = (e) => {
        const rawAmount = e.target.value;
        if(!rawAmount || rawAmount.match(/^\d{1,}(\.\d{0,2})?$/)){
            const amount = Number(rawAmount);
            this.setState(() => ({amount}));
        }
    }
    handleNote = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocused : focused}))
    }
    handleSubmission = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({errorStatus: 'Please fill some description and add a amount'}));
        } else {
            this.setState(() => ({errorStatus: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: this.state.amount,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
                <form onSubmit = {this.handleSubmission} className="form">
                    {this.state.errorStatus && <p className="form__error">{this.state.errorStatus}</p>}
                    <input type="text" className="text-input" placeholder="Description" autoFocus defaultValue = {this.state.description} onChange = {this.handleDescription}></input>
                    <input type="text" className="text-input" placeholder="Amount" defaultValue = {this.state.amount} onChange = {this.handleAmount}></input>
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {() => false}
                    />
                    <textarea className="textArea" placeholder="Add a note(optional)" onChange = {this.handleNote}></textarea>
                    <div>
                        <button className="button">Save Expense</button>
                    </div>
                </form>
        )
    }
}