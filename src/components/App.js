import React from 'react';
import { connect } from 'react-redux';
import Button from 'src/components/Button';
import Value from 'src/components/Value';
import * as action from 'src/redux/actions/actions';

function App({ increment, decrement }) {
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
      <Value />
    </div>
  );
}

export default connect(
  // state => ({
  //   number: state.reducers,
  // }),
  null,
  dispatch => ({
    increment: () => dispatch(action.increment()),
    decrement: () => dispatch(action.decrement()),
  }),
)(App);
