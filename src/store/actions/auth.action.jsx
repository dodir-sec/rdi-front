import { authService } from "../../services/auth.service";

export function login(credentials) {
    return async dispatch => {
        try {
            const user = await authService.login(credentials)
            dispatch({ type: 'SET_USER', user })
        } catch (error) {
            console.log('Error in login:', error)
        }
    }
}

export function logout() {
    return async dispatch => {
        try {
            await authService.logout()
            dispatch({ type: 'SET_USER', user: null })
        } catch (error) {
            console.log('Error in logout:', error)
        }
    }
}

export function signup(user) {
    return async dispatch => {
        try {
            const newUser = await authService.signup(user)
            dispatch({ type: 'SET_USER', user: newUser })
        } catch (error) {
            console.log('Error in signup:', error)
        }
    }
}

export function getLoggedInUser() {
    return async dispatch => {
        try {
            const user = await authService.getLoggedInUser()
            dispatch({ type: 'SET_USER', user })
        } catch (error) {
            console.log('Error in getLoggedInUser:', error)
        }
    }
}

