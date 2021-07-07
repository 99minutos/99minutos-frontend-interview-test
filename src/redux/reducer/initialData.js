import { INITIAL_INFO } from '../types'
const initialData = {
    data: []
}

export default function addInfo(state = initialData, action) {
    switch (action.type) {
        case INITIAL_INFO:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
