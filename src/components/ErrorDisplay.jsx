import React from 'react';

const ErrorDisplay = ({ msg }) => {
  const err = msg ? msg : 'Oops something went wrong! Path not found: 404!';
  return (
    <section>
      <h3>{err}</h3>
    </section>
  );
};

export default ErrorDisplay;
