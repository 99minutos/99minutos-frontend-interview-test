import { INITIAL_INFO } from '../types'
export function initialData(data) {
    return {
        type: INITIAL_INFO,
        payload: data
    }
}

