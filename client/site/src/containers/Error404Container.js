import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Error404 from '../components/Error404';

class Error404Container extends Component {
  render() {
    return <Error404 {...this.props} />;
  }
}

export default withRouter(connect(null, null)(Error404Container));
