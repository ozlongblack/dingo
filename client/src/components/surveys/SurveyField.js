import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label className="form-control-label">{label}</label>
      <input className="form-control" {...input} />
      <div className="invalid-message">{touched && error}</div>
    </div>
  );
};
