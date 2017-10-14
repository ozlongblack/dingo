import coffee from '../images/coffee.png';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Payments from './Payments';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavItem>
            <a
              href="/auth/google"
              className="btn btn-outline-success btn-sm my-2 my-sm-0"
            >
              SIGNIN with Google
            </a>
          </NavItem>
        );
      default:
        return [
          <NavItem key="1">
            <a className="btn btn-sm mr-2">
              Credits{' '}
              <span className="badge badge-secondary">
                {this.props.auth.credits}
              </span>
            </a>
          </NavItem>,
          <NavItem key="2">
            <Payments />
          </NavItem>,
          <NavItem key="3">
            <a
              href="/api/logout"
              className="btn btn-outline-success btn-sm my-2 my-sm-0"
            >
              SIGNOUT
            </a>
          </NavItem>
        ];
    }
  };

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="navbar-brand"
          >
            <img src={coffee} style={{ width: '48px' }} alt="logo" />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="" navbar>
              <NavItem>
                <Link to={'/'} className="btn btn-sm mr-2">
                  About
                </Link>
              </NavItem>
              {this.props.auth ? (
                <NavItem>
                  <Link to={'/surveys'} className="btn btn-sm mr-2">
                    Survey
                  </Link>
                </NavItem>
              ) : null}
            </Nav>
            <Nav className="ml-auto" navbar>
              {this.renderContent()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
