import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../component/Header'
import ExpenseDashboardPage from '../component/ExpenseDashboardPage'
import AddExpensePage from '../component/AddExpensePage'
import EditExpensePage from '../component/EditExpensePage'
import HelpPage from '../component/HelpPage'
import NotFoundPage from '../component/NotFoundPage'

const AppRouter = () => {
    return (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage}  />
            <Route path="/edit/:id" component={EditExpensePage}  />
            <Route path="/help" component={HelpPage}  />
            <Route component={NotFoundPage}  />
        </Switch>
        </div>
    </BrowserRouter>
    )}

export default AppRouter;
