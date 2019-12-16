const ADD_TASK = 'ADD-TASK';

export const addTaskActionCreator = (newTask) =>
    ( {type: ADD_TASK, newTask: newTask} );

export default ADD_TASK;