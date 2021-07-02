import React, { useState, useEffect } from 'react';
import Card from './cards';

const Panel = (props) => {
    return ( 
        <div className="Panel">
            <div>
                <h1>Last Launches</h1>
            </div>
            <div className="CardContainer">
            {
                !!props.data?
                props.data.map( (item, i) => {
                    
                    return(
                        <Card key = {i} 
                            data = {item}
                            name={item.mission_name}
                            description = {item.launch_site.site_name_long}
                            date={item.launch_date_local}
                            change = {props.change}
                        />
                    )
                }) : <></>
            }        
            </div>
        </div>
    );
}
 
export default Panel;