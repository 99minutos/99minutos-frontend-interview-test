import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Header.css'
import 'react-bootstrap'


export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className={"header"}>
                <div className="row navbar">
                    <div className="container-fluid">
                        <div className={"col-md-12"}>
                            <ul className={"ulMenu"}>
                                <Link to={"/"} className={"navv item-nav"}>Home</Link>
                                <Link to={"/dashboard"} className={"navv item-nav"}>Dashboard</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
