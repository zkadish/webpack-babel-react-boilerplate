import React from 'react';
import { hot } from 'react-hot-loader';
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

const appConnect = connect(
  null,
  dispatch => ({
    increment: () => dispatch(action.increment()),
    decrement: () => dispatch(action.decrement()),
  }),
)(App);

export default hot(module)(appConnect);
