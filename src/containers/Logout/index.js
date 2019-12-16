import React from 'react';
import connect from "react-redux/lib/connect/connect";
import {getOutUser} from "../../redux/actions/user";
import Logout from "../../screens/Logout/index";

const LogoutContainer = (props) => {
    const {logout} = props;
    return <Logout logout={logout}/>
};

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(getOutUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);
