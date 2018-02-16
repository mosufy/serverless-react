import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './../components/App';

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    metadata: state.metadata
  }
};

const mapDispatchToProps = dispatch => {
  return {
    //
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
