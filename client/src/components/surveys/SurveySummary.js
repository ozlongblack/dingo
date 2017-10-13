import email from './email.png';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const SurveySummary = survey => {
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

    const responded = survey.recipients.filter(recipient => recipient.responded)
      .length;

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
};

export default SurveySummary;
