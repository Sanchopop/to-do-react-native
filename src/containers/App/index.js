import React from 'react';
import AppScreen from '../../screens/App/index';
import {connect} from 'react-redux';

const AppContainer = (props) => {
  const {loginStatus} = props;
  return <AppScreen loginStatus={loginStatus}/>;
};

const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus
});


const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppContainer);
