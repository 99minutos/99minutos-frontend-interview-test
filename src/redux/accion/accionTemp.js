import { TEMP_INFO} from '../types'
export function temporalInfo(data) {
    return {
        type: TEMP_INFO,
        payload: data
    }
}

