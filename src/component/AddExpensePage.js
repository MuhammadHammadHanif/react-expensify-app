import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import {addExpense} from '../actions/expenses'
const AddExpensePage = (props) => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm onSubmit={({description, note, amount, createdAt}) => {
             props.dispatch(addExpense({description, note, amount, createdAt}))
             props.history.push('/')
            } 
            }
            />
        </div>
        
    );
}
export default connect()(AddExpensePage);