import React from 'react';
import connect from "react-redux/lib/connect/connect";
import ToDoList from "../../screens/ToDoList/index";

const ToDoListContainer = () => {
    return <ToDoList />;
};

const mapStateToProps = () => {
    return {

    }
};

const mapDispatchToProps = () => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);