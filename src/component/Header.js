import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Expensify</h1>
            <p><NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink></p>
            <p><NavLink activeClassName="is-active" to="/create">Add Expense</NavLink></p>
            <p><NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink></p>
            <p><NavLink activeClassName="is-active" to="/help">Help</NavLink></p>
        </div>
    );
}

export default Header;