import React from 'react';
import connect from "react-redux/lib/connect/connect";
import TasksList from "../../screens/TasksList/index";


const TasksListContainer = (props) => {
    const {tasks} = props;
    return <TasksList tasks={tasks}/>
};

const mapStateToProps = ({tasks}) => {
    return {
        tasks
    }
};

const mapDispatchToProps = () => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer);