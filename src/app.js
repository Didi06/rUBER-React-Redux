import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index';


// COMPONENTS
import Container from './components/container'

//CSS
// import './styles/styles.css'

ReactDOM.render(
<Provider store={store}>
<Container />
</Provider>, document.getElementById('app'))
