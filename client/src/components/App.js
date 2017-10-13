import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as actions from '../actions';

import { ToastContainer, toast } from 'react-toastify';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import SurveyDetail from './surveys/SurveyDetail';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.error.length && this.props.error !== nextProps.error) {
      toast(nextProps.error[0]);
      this.props.clearError();
    }
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <ToastContainer
          toastClassName="toast-message"
          position="top-center"
          type="default"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
        <BrowserRouter>
          <div>
            <Header />
            <div>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route exact path="/surveys/new" component={SurveyNew} />
                <Route path="/surveys/:id" component={SurveyDetail} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function matStateToProps({ error }) {
  return { error };
}

export default connect(matStateToProps, actions)(App);
