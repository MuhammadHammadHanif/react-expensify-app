import React, { Component } from 'react';
import './App.css';
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    const store = configureStore();
    return (
        <Provider store={store}>
          <AppRouter />
        </Provider>
    )
  }
}

export default App;
