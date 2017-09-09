import React from 'react';
import { connect } from 'react-redux';


function Value({ number }) {
  return (
    <div className="value">{number}</div>
  );
}

export default connect(
  state => ({
    number: state.reducers,
  }),
)(Value);
