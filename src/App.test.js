import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import {shallow} from 'enzyme'
// import { configure } from 'enzyme';

it("renders without crashing", ()=> {
    const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})