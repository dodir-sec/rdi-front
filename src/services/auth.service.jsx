import { httpService } from './http.service'

export const authService = {
    login,
    logout,
    signup,
    getLoggedInUser
}

async function login(credentials) {
    try {
        return await httpService.post('auth/login', credentials
        )
    }
    catch (error) {
        console.log('Error in authService.login:', error)
    }
}

async function logout() {
    try {
        return await httpService.post('auth/logout')
    } catch (error) {
        console.log('Error in authService.logout:', error)
    }
}

async function signup(user) {
    try {
        return await httpService.post('auth/signup', user)
    } catch (error) {
        console.log('Error in authService.signup:', error)
    }
}

async function getLoggedInUser() {
    try {
        return await httpService.get('auth/loggedin')
    } catch (error) {
        console.log('Error in authService.getLoggedInUser:', error)
    }
}

