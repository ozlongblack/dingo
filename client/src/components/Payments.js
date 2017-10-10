import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Sample"
        description="5 credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-success btn-sm my-2 my-sm-0 mr-2">
          ADD CREDITS
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
