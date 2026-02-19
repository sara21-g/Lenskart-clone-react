import React from 'react';

function SuccessMessage({ message }) {
  return (
    <div className="success-message show">
      <i className="fas fa-check-circle"></i>
      <span>{message}</span>
    </div>
  );
}

export default SuccessMessage;
