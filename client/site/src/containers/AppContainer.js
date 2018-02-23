import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './../components/App';

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    //
  }
};

const mapDispatchToProps = dispatch => {
  return {
    //
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
