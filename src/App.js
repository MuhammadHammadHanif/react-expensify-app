import React, { Component } from 'react';
import './App.css';
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    const store = configureStore();
    store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
    store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}));
    store.dispatch(addExpense({description: 'Rent', amount: 109500}));
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
    return (
        <Provider store={store}>
          <AppRouter />
        </Provider>
    )
  }
}

export default App;
