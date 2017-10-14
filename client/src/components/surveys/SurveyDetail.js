import './SurveyDetail.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import Spinner from 'react-spinkit';
import SurveySummary from './SurveySummary';

class SurveyDetail extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchSurvey(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearSurvey();
  }

  onBack = () => {
    this.props.history.goBack();
  };

  renderRecipients = recipients => {
    return recipients.map(recepient => (
      <li
        key={recepient.email}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <small>{recepient.email}</small>
        {recepient.responded ? (
          <span className="badge badge-success badge-pill">Responded</span>
        ) : (
          <span className="badge badge-danger badge-pill">Not Responded</span>
        )}
      </li>
    ));
  };

  renderCard = () => {
    if (!this.props.survey.activeSurvey) {
      return (
        <div className="col survey-loading">
          <div className="p-3">
            <Spinner name="pacman" color="#6772e5" />
          </div>
          <div>Loading</div>
        </div>
      );
    }

    const {
      title,
      subject,
      body,
      dateSent,
      lastResponded,
      recipients
    } = this.props.survey.activeSurvey;

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <h6 className="card-text">{subject}</h6>
          <p className="card-text text-muted">{body}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <small className="text-muted">
              Sent on {new Date(dateSent).toLocaleDateString()}
            </small>
          </li>
          <li className="list-group-item">
            <small className="text-muted">
              Last Responded on {new Date(lastResponded).toLocaleDateString()}
            </small>
          </li>
          <li className="list-group-item">
            {SurveySummary(this.props.survey.activeSurvey)}
          </li>
          {this.renderRecipients(recipients)}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div id="survey-detail">
        <div className="title">Details</div>
        <div className="wrap container-fluid p-3">
          <ul className="nav justify-content-start">
            <li className="nav-item">
              <button className="btn btn-primary btn-sm" onClick={this.onBack}>
                Back
              </button>
            </li>
          </ul>
          <div className="row pt-3">
            <div className="col">{this.renderCard()}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ survey }) {
  return { survey };
}

export default connect(mapStateToProps, actions)(SurveyDetail);
