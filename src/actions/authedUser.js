import { showLoading, hideLoading } from "react-redux-loading"
import { authenticateUser } from '../utils/api'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(id = null) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function handleAuthedUser(id) {
    return (dispatch) => {

        dispatch(showLoading())
        return authenticateUser({
            id
        })
        .then((authId) =>  dispatch(setAuthedUser(authId)
        ))
        .then(() => dispatch(hideLoading()))
    }
}
