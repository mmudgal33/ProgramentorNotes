import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import {increase, decrease} from './actions'

export function AppRedux() {

  const myState = useSelector((state) => state.IncDec);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h2>welcome to react redux</h2>
      <input type="text" value={myState}/><br />
      
      <button className='btn btn-danger' onClick={() =>dispatch(decrease())}>minus</button>
      <button className='btn btn-primary' onClick={() =>dispatch(increase())}>plus</button>
    </div>
  )
}










































// store + action in reducers
// reducers -> passed initial state and action to do, 
// store -> state, actions, and reducers -> app has single store
// action -> task, which is dispatched

// store -> state list, action(what to do) -> wanted change on state & how, reducer(how to do) -> does that change

// three principles of redux
// 1) global state stored as an object inside single redux store
// 2) direct update not allowed, dispatch action to update
// 3) update state using pure reducers

// npm i redux react-redux
// npm install @reduxjs/toolkit

// many reducers written in root reducer and sent to store