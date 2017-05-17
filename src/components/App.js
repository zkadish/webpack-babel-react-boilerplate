import React from 'react';
import { connect } from 'react-redux';

import * as action from 'redux/actions/actions';

function App({children, number, increment, decrement}) {
  return(
    <div>
      {children}
      <br />
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <div>{number}</div>
    </div>
  )
}



export default connect(
  (state) => ({
    number: state.reducers,
  }),
  (dispatch) => ({
    increment: () => dispatch(action.increment()),
    decrement: () => dispatch(action.decrement()),
  })
)(App);