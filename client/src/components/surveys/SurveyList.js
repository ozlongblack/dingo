import './SurveyList.css';
import chat from '../../images/chat.png';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';

import Spinner from 'react-spinkit';
import SurveySummary from './SurveySummary';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderList = () => {
    if (!this.props.survey.surveyList) {
      return (
        <div className="col survey-loading">
          <div className="p-3">
            <Spinner name="pacman" color="#6772e5" />
          </div>
          <div>Loading</div>
        </div>
      );
    }

    if (this.props.survey.surveyList.length === 0) {
      return (
        <div className="col survey-no-available">
          <div className="p-3">
            <img src={chat} alt="No Available Survey" />
          </div>
          <div>No Available Survey</div>
        </div>
      );
    }

    return this.props.survey.surveyList.reverse().map(survey => {
      return (
        <div
          key={survey._id}
          className="col-sm-6 mb-3"
          onClick={() => this.onDetail(survey)}
        >
          <div className="survey-card">
            <div className="card-body">
              <h4 className="survey-card-title">{survey.title}</h4>
              <p className="survey-card-text">{survey.subject}</p>
              <div>{SurveySummary(survey)}</div>
              <div className="survey-card-footer">
                <small className="text-muted">
                  Sent on {new Date(survey.dateSent).toLocaleDateString()}
                </small>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  onDetail = survey => {
    this.props.history.push({
      pathname: `/surveys/${survey._id}`
    });
  };

  render() {
    return <div className="row pt-3">{this.renderList()}</div>;
  }
}

function mapStateToProps({ survey }) {
  return { survey };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyList));
