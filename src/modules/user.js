import { createAction, handleActions } from 'redux-actions'

const SET_PREVIOUS_URL = "user/SET_PREVIOUS_URL"
const SET_USER = "user/SET_USER"
const SET_USER_STATUS = "user/SET_USER_STATUS"

export const setPreviousUrl = createAction(SET_PREVIOUS_URL, (previousUrl) => previousUrl)
export const setUser = createAction(SET_USER, (currentUser) => currentUser)
export const setUserStatus = createAction(SET_USER_STATUS, (isLogin) => isLogin)

const UserInitialValue = {
    previousUrl : "",
    currentUser : {},
    isLogin : false,
}

const user = handleActions({
    
    [SET_PREVIOUS_URL] : (state = UserInitialValue, action) => ({ ...state, previousUrl : action.payload }),
    [SET_USER] : (state = UserInitialValue, action) => ({...state, currentUser : action.payload}),
    [SET_USER_STATUS] : (state = UserInitialValue, action) => ({...state, isLogin : action.payload})
    
}, UserInitialValue)

export default user;