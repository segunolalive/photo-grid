import React from 'react';

const Delete = ({ deleteFunction, id }) => (
  <button
    style={{ background: 'transparent', color: 'hotPink', border: 'none' }}
    onClick={event => deleteFunction(event, id)}
  >
    Delete
  </button>
);
export default Delete;
