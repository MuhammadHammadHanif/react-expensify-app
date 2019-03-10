import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses'
import {Link} from 'react-router-dom'

const EditExpensePage = (props) => {
    return (
        <div>
        <ExpenseForm
         expense={props.expense}
         onSubmit={(expense) => {
            props.dispatch(editExpense(props.match.params.id,expense))
            props.history.push('/')
         }}
         />
         <Link to="/">
         <button onClick={() => 

            {
                props.dispatch(removeExpense({id:props.match.params.id}))
                props.history.push('/')
            }

            }>Delete</button>
         </Link>
        
         </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);