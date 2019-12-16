import ADD_TASK from '../actions/tasks';

const initialState = {
    tasks: [
        {name: 'Devin'},
        {name: 'Dan'},
        {name: 'Dominic'},
        {name: 'Jackson'},
        {name: 'James'},
        {name: 'Joel'},
        {name: 'John'},
        {name: 'Jillian'},
        {name: 'Jimmy'},
        {name: 'Julie'}
    ]
};

const tasks = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            const newTask = { name: action.newTask };
            let stateCopy = { ...state };
            stateCopy.tasks = [ ...state.tasks ];
            stateCopy.tasks.unshift(newTask);
            return stateCopy;
        }
        default:
            return state;
    }
};

export default tasks;