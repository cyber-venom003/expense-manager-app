import React from 'react';
import {connect} from 'react-redux';
import {textFilterAction , sortByDate , sortByAmount , setStartDate , setEndDate} from '../actions/filterActions';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseFilterInput extends React.Component {
    state = {
        calenderFocused: null
    };
    onDatesChange = ({startDate , endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}))
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text" className="text-input" placeholder="Search Expenses" defaultValue={this.props.filters.text} onChange = {
                            (e) => {
                                this.props.dispatch(textFilterAction(e.target.value));
                                console.log(e.target.value);
                            }
                        }/>
                    </div>
                    <div className="input-group__item">
                        <select className="select" defaultValue = {this.props.filters.sortBy} onChange = {
                            (e) => {
                                if(e.target.value === 'date'){
                                    this.props.dispatch(sortByDate());
                                } else if (e.target.value === 'amount'){
                                    this.props.dispatch(sortByAmount());
                                }
                            }
                        }>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                        startDate={this.props.filters.startDate}
                        startDateId="your_unique_start_date_id"
                        endDate={this.props.filters.endDate} 
                        endDateId="your_unique_end_date_id" 
                        onDatesChange={this.onDatesChange} 
                        focusedInput={this.state.calenderFocused} 
                        onFocusChange={this.onFocusChange} 
                        isOutsideRange = {() => false}
                        showClearDates = {true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseFilterInput);