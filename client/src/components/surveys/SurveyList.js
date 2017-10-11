import './SurveyList.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurvey();
  }

  renderList() {
    return this.props.survey.reverse().map(survey => (
      <div key={survey._id} className="col-sm-4 mb-3">
        <div className="survey-card">
          <div className="card-body">
            <h4 className="survey-card-title">{survey.title}</h4>
            <p className="survey-card-text">{survey.subject}</p>
            <div className="survey-card-footer">
              <small className="text-muted">
                Sent on {new Date(survey.dateSent).toLocaleDateString()}
              </small>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return <div className="row pt-3">{this.renderList()}</div>;
  }
}

function mapStateToProps({ survey }) {
  return { survey };
}

export default connect(mapStateToProps, { fetchSurvey })(SurveyList);
