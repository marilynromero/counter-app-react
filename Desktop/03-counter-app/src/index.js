import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

import './index.css';

// const saludo = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp value= {0} />, divRoot);