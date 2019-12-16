import React from 'react';
import connect from "react-redux/lib/connect/connect";
import {getUser} from "../../redux/actions/user";
import Login from "../../screens/Login/index";

const LoginContainer = (props) => {
    const {login, errorMessage} = props;
    return <Login login={login} errorMessage={errorMessage}/>
};

const mapStateToProps = state => {
    return {
        errorMessage: state.user.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: loginData => dispatch(getUser(loginData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
