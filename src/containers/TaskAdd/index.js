import React from 'react';
import connect from "react-redux/lib/connect/connect";
import TaskAdd from "../../screens/TaskAdd/index";
import {addTaskActionCreator} from "../../redux/actions/tasks";

const TaskAddContainer = (props) => {
    const {addTask} = props;
    return <TaskAdd addTask={addTask}/>
};

const mapStateToProps = ({addTask}) => {
    return {
        addTask
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: newTask => dispatch(addTaskActionCreator(newTask))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskAddContainer);
