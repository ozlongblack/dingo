import './Dashboard.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <div className="title">Dashboard</div>
        <div className="wrap container-fluid p-3">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <Link to="/surveys/new" class="btn btn-primary btn-sm">
                New
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
