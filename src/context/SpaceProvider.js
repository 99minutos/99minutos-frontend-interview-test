import { createContext, useEffect, useState } from "react";
import _ from 'lodash';

const initialValue = {
    data:[],
    selected:{},
} 

export const SpaceContext = createContext();

const SpaceProvider = ({ data, children }) => {

    const [spaceData, setSpaceData] = useState(initialValue);
    
    const setData = (data) => {
        setSpaceData(prev => ({...prev, data}));
    }

    const setSelected = (id) =>{
        let selected = _.find(spaceData.data, {id});
        setSpaceData(prev => ({...prev, selected}));
    };

    useEffect(()=>{
        setSpaceData({...initialValue, data: [...data]});
    },[data])

    
    const value = { spaceData, setData, setSelected};
    
    return (
        <SpaceContext.Provider value={value}>
            {children}
        </SpaceContext.Provider>
    );
}

export default SpaceProvider;