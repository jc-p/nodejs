
// var config = require('./config.json');
//
// module.exports = function () {
//     var hello= document.createElement('div');
//     hello.textContent =config.helloText;
//     return hello;
// };
import React, {Component} from 'react'
import config from './config.json';
class Hello extends Component{
    render() {
        return (
            <div>
            <h1>{config.helloText}</h1>
    </div>
    );
    }
}
export default Hello

