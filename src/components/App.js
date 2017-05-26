import React from 'react';
import { connect } from 'react-redux';

import * as action from 'redux/actions/actions';

function App({number, increment, decrement}) {
  return (
    <div className="app-container">
      <h2>Awesome App!</h2>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <div className="number">{number}</div>
    </div>
  );
}

export default connect(
  (state) => ({
    number: state.reducers,
  }),
  (dispatch) => ({
    increment: () => dispatch(action.increment()),
    decrement: () => dispatch(action.decrement()),
  }),
)(App);
