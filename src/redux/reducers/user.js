import { FETCH_USER_SUCCESS, FETCH_USER_ERROR, LOG_OUT }from '../actions/user'

const initialState = {
    userInfo: {},
    loginStatus: false,
    errorMessage: ''
};

const user = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_SUCCESS: {
            return {
                ...state,
                userInfo: action.user,
                loginStatus: true,
                errorMessage: ''
            }
        }
        case FETCH_USER_ERROR: {
            return {
                ...state,
                loginStatus: false,
                errorMessage: 'No User'
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                loginStatus: false,
                errorMessage: ''
            }
        }
        default:
            return state;
    }
};

export default user
