import './SurveyList.css';
import email from './email.png';
import chat from './chat.png';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import Spinner from 'react-spinkit';

import { fetchSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurvey();
  }

  renderSummary(survey) {
    if (survey.yes === 0 && survey.no === 0) {
      return (
        <div className="survey-no-response">
          <div className="p-1">
            <img src={email} alt="No one responded." />
          </div>
          <div>No one responded</div>
        </div>
      );
    } else {
      const choiceData = {
        labels: ['YES', 'NO'],
        datasets: [
          {
            data: [survey.yes, survey.no],
            backgroundColor: ['#CDDC39', '#F44336'],
            hoverBackgroundColor: ['#C0CA33', '#E53935']
          }
        ]
      };

      const responded = survey.recipients.filter(
        recipient => recipient.responded
      ).length;

      const notResponded = survey.recipients.length - responded;

      const respondedData = {
        labels: ['RESPONDED', 'NOT RESPONDED'],
        datasets: [
          {
            data: [responded, notResponded],
            backgroundColor: ['#00BCD4', '#EEEEEE'],
            hoverBackgroundColor: ['#00ACC1', '#DDDDDD']
          }
        ]
      };

      return (
        <div className="row">
          <div className="col-6">
            <Doughnut
              data={choiceData}
              legend={{
                position: 'bottom',
                labels: {
                  boxWidth: 10,
                  fontSize: 10,
                  fontFamily: 'Proxima Nova'
                }
              }}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
          <div className="col-6">
            <Doughnut
              data={respondedData}
              legend={{
                position: 'bottom',
                labels: {
                  boxWidth: 10,
                  fontSize: 10,
                  fontFamily: 'Proxima Nova'
                }
              }}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
      );
    }
  }

  renderList() {
    if (!this.props.survey) {
      return (
        <div className="col survey-loading">
          <div className="p-3">
            <Spinner name="pacman" color="#6772e5" />
          </div>
          <div>Loading</div>
        </div>
      );
    }

    if (this.props.survey.length === 0) {
      return (
        <div className="col survey-no-available">
          <div className="p-3">
            <img src={chat} alt="No Available Survey" />
          </div>
          <div>No Available Survey</div>
        </div>
      );
    }

    return this.props.survey.reverse().map(survey => {
      return (
        <div key={survey._id} className="col-sm-6 mb-3">
          <div className="survey-card">
            <div className="card-body">
              <h4 className="survey-card-title">{survey.title}</h4>
              <p className="survey-card-text">{survey.subject}</p>
              <div>{this.renderSummary(survey)}</div>
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
  }

  render() {
    return <div className="row pt-3">{this.renderList()}</div>;
  }
}

function mapStateToProps({ survey }) {
  return { survey };
}

export default connect(mapStateToProps, { fetchSurvey })(SurveyList);
