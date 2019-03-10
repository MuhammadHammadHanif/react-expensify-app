import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilters'

const ExpenseDashboardPage = () => {
    return (
        <div>
            <ExpenseListFilter />
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashboardPage;