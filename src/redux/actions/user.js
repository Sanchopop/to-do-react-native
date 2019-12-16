export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const LOG_OUT = 'LOG_OUT';

const mockApiData = {
    users: [
        {
            id: 1,
            name: 'Enter',
            fullName: 'Enter Sandman',
            login:'qwerty',
            password: 'qwerty'
        },
        {
            id: 2,
            name: 'Val',
            fullName: 'Pod Val',
            login:'qwerty34',
            password: 'qwerty34'
        },
        {
            id: 3,
            name: 'Val',
            fullName: 'Pod Val',
            login:'q',
            password: 'q'
        },
        {
            id: 4,
            name: 'Val',
            fullName: 'Pod Val',
            login:'t',
            password: 't'
        },
    ]
};

export const getUser = (loginData) => dispatch => {
    setTimeout(() => {
        let toDispatch = {type: FETCH_USER_ERROR};
        mockApiData.users.forEach(user => {
            if (user.login === loginData.login && user.password === loginData.password) {
                toDispatch = {type: FETCH_USER_SUCCESS, user: user};
            }
        });
        dispatch(toDispatch);
    }, 2000);
};

export const getOutUser = () => dispatch => {
    dispatch({type: LOG_OUT})
};

export default {FETCH_USER_SUCCESS, FETCH_USER_ERROR, LOG_OUT};
