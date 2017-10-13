import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'recipients' }
];

class SurveyForm extends Component {
  renderFields = () => {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };

  render() {
    return (
      <div id="survey-form">
        <h5>Create a new survey</h5>
        <div className="p-3">
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
            <ul className="nav justify-content-between">
              <li className="nav-item">
                <Link to="/surveys" className="btn btn-danger btn-sm">
                  Cancel
                </Link>
              </li>
              <li className="nav-item">
                <button type="submit" className="btn btn-primary btn-sm">
                  Next
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.map(FIELDS, ({ name }) => {
    if (!values[name]) {
      return (errors[name] = 'You must provide a value');
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
