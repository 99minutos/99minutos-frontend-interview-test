import React, {useEffect, useState} from 'react'
import Search from "./searchDeteailCard"


const SeeDatail = ( {location} ) => {
    const [idLaunch, setIdLaunch] = useState('');
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get('q');
        setIdLaunch(q);
    }, []);

    return (
        <div>
         <Search 
          id = {idLaunch}
         />
        </div>
    )
}

export default SeeDatail
