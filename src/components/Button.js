import React from 'react';
// import { connect } from 'react-redux';

function Button({ name, action }) {
  return (
    <button onClick={action}>
      {name}
    </button>
  );
}

export default Button;
