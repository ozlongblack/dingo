import './Landing.css';
import rocket from '../images/rocket-launch.png';
import server from '../images/server.png';
import devices from '../images/devices.png';

import React from 'react';

const Landing = () => {
  return (
    <div>
      <section className="landing-section landing-intro">
        <div className="landing-title">SURVEY DEMO WEB APPLICATION</div>
        <div className="landing-description">
          This is a demo web application.
        </div>
        <div className="p-3">
          <a
            href="https://github.com/ozlongblack/dingo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mr-3"
          >
            VIEW REPOSITORY
          </a>
          <a
            href="https://www.linkedin.com/in/kihwan-cho-88440470/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            VIEW PROFILE
          </a>
        </div>
      </section>
      <section className="landing-section landing-features">
        <div className="row">
          <div className="col-sm-4 mb-3">
            <div className="card">
              <img
                className="card-image mb-3"
                src={rocket}
                style={{ width: 48 }}
                alt="How to Use"
              />
              <h6 className="card-title">HOW TO USE</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <small>Signin with Google Oauth 2.0</small>
                </li>
                <li className="list-group-item">
                  <small>Add credits</small>
                </li>
                <li className="list-group-item">
                  <small>Create a new survey</small>
                </li>
                <li className="list-group-item">
                  <small>Send emails to recipients</small>
                </li>
                <li className="list-group-item">
                  <small>Collect information</small>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="card">
              <img
                className="card-image mb-3"
                src={server}
                style={{ width: 48 }}
                alt="Server Modules"
              />
              <h6 className="card-title">SERVER MODULES</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <small>Node.js/Express</small>
                </li>
                <li className="list-group-item">
                  <small>Mongo DB</small>
                </li>
                <li className="list-group-item">
                  <small>Google Oauth 2.0</small>
                </li>
                <li className="list-group-item">
                  <small>Stripe API</small>
                </li>
                <li className="list-group-item">
                  <small>Sendgrid API</small>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="card">
              <img
                className="card-image mb-3"
                src={devices}
                style={{ width: 48 }}
                alt="Front-end Modules"
              />
              <h6 className="card-title">FRONT-END MODULES</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <small>React</small>
                </li>
                <li className="list-group-item">
                  <small>Redux</small>
                </li>
                <li className="list-group-item">
                  <small>React Router</small>
                </li>
                <li className="list-group-item">
                  <small>Bootstrap 4</small>
                </li>
                <li className="list-group-item">
                  <small>Chart.js 2</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-section landing-footer">
        <small>
          Copyright © 2017 ozlongblack@gmail.com. All Rights Reserved.
        </small>
      </section>
    </div>
  );
};

export default Landing;
