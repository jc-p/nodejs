
// const hello = require('./hello');
// document.querySelector('#root').appendChild(hello());

import React from 'react';
import {render} from 'react-dom';
import Hello from './hello';

import './style.css';

render(<Hello />, document.getElementById('root'));


