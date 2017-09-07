import React from 'react';
import { connect } from 'react-redux';
import Button from 'src/components/Button';
import * as action from 'src/redux/actions/actions';

function App({number, increment, decrement}) {
  return (
    <div className="app-container">
      <h2>++ -- App!</h2>
      <Button
        name="increment"
        action={increment}
      />
      <Button
        name="decrement"
        action={decrement}
      />
      <div className="number">{number}</div>
    </div>
  );
}

export default connect(
  state => ({
    number: state.reducers,
  }),
  dispatch => ({
    increment: () => dispatch(action.increment()),
    decrement: () => dispatch(action.decrement()),
  }),
)(App);
