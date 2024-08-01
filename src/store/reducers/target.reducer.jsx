const INITIAL_STATE = {
    target: null,
    targets: [],
}

export function targetReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TARGETS':
            return { ...state, targets: action.targets }
        case 'SET_TARGET':
            return { ...state, target: action.target }
        case 'ADD_TARGET':
            return { ...state, targets: [...state.targets, action.target] }
        case 'UPDATE_TARGET':
            return {
                ...state,
                targets: state.targets.map(target => target._id === action.target._id ? action.target : target)
            }
        case 'REMOVE_TARGET':
            return { ...state, targets: state.targets.filter(target => target._id !== action.id) }
        default:
            return state
    }
}