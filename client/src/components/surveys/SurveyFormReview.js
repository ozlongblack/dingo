import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';

const SurveyForm = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div>
      <h5>Review a new survey</h5>
      <div className="p-3">
        <div className="card text-center">
          <div className="card-header">{formValues.title}</div>
          <div className="card-body">
            <h4 className="card-title">{formValues.subject}</h4>
            <p className="card-text">{formValues.body}</p>
          </div>
          <div className="card-footer text-muted">
            {formValues.recipients.split(',').map(email => (
              <span key={email} className="badge badge-pill badge-success mr-1">
                {email}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ul className="nav justify-content-between">
        <li className="nav-item">
          <button className="btn btn-danger btn-sm" onClick={onCancel}>
            Back
          </button>
        </li>
        <li className="nav-item">
          <button
            type="submit"
            className="btn btn-success btn-sm"
            onClick={() => submitSurvey(formValues, history)}
          >
            Send
          </button>
        </li>
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyForm));
