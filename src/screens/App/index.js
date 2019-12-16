import React from 'react';
import ToDoListContainer from "../../containers/ToDoList/index";
import LoginContainer from "../../containers/Login/index";

const App = props => {
    const {loginStatus} = props;
    return (
        <>{loginStatus ? <ToDoListContainer /> : <LoginContainer />}</>
    );
};

export default App;
