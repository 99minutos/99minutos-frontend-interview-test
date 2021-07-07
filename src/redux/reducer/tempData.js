import {TEMP_INFO} from '../types';

const tempData={
    data:{}
}

export default function tempInfo(state = tempData, action){
    switch (action.type) {
        case TEMP_INFO:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}