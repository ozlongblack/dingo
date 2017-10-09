import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a
              href="/auth/google"
              className="btn btn-outline-success my-2 my-sm-0"
            >
              Signin with Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1">Credits: {this.props.auth.credits}</li>,
          <li key="2">
            <Payments />
          </li>,
          <li key="3">
            <a
              href="/api/logout"
              className="btn btn-outline-success my-2 my-sm-0 ml-3"
            >
              Logout
            </a>
          </li>
        ];
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <Link to={this.props.auth ? '/surveys' : '/'} className="navbar-brand">
          Navbar
        </Link>
        <ul className="nav justify-content-end">{this.renderContent()}</ul>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
