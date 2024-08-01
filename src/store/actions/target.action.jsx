import { targetService } from "../../services/target.service";

export function loadTargets() {
    return async dispatch => {
        try {
            const targets = await targetService.query()
            dispatch({ type: 'SET_TARGETS', targets })
        } catch (error) {
            console.log('Error in loadTargets:', error)
        }
    }
}

export function loadTarget(id) {
    return async dispatch => {
        try {
            const target = await targetService.getById(id)
            dispatch({ type: 'SET_TARGET', target })
        } catch (error) {
            console.log('Error in loadTarget:', error)
        }
    }
}

export function addTarget(target) {
    return async dispatch => {
        try {
            const addedTarget = await targetService.add(target)
            dispatch({ type: 'ADD_TARGET', target: addedTarget })
        } catch (error) {
            console.log('Error in addTarget:', error)
        }
    }
}

export function updateTarget(target) {
    return async dispatch => {
        try {
            const updatedTarget = await targetService.update(target)
            dispatch({ type: 'UPDATE_TARGET', target: updatedTarget })
        } catch (error) {
            console.log('Error in updateTarget:', error)
        }
    }
}

export function removeTarget(id) {
    return async dispatch => {
        try {
            await targetService.remove(id)
            dispatch({ type: 'REMOVE_TARGET', id })
        } catch (error) {
            console.log('Error in removeTarget:', error)
        }
    }
}

export function scanTarget(domain) {
    return async dispatch => {
        try {
            const scanResult = await targetService.scan(domain)
            dispatch({ type: 'SCAN_TARGET', scanResult })
        } catch (error) {
            console.log('Error in scanTarget:', error)
        }
    }
}


