import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css'
import Particles from "react-particles-js";

export default class Home extends React.Component{
    constructor() {
        super();
        this.state={}
    }

    typeEffect=(element, speed)=> {
        var text = element.innerHTML;
        element.innerHTML = "";
        var i = 0;
        var timer = setInterval(function() {
            if (i < text.length) {
                element.append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    render(){
        return(
            <div className={"bodyHome"} onMouseEnter={()=>{
                this.typeEffect(document.getElementById("text1"),100)
                this.typeEffect(document.getElementById("text2"),100)
            }}>
                <Particles className={"particles"}
                    params={{
                        particles: {
                            number: {
                                value: 100
                            },
                            size: {
                                value: 3
                            },
                            move:{
                                value:100
                            }
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "attract"
                                }
                            }
                        }
                    }}
                />
                <div className={"row rowPrincipal"}>
                    <div className={"col-md-12"} style={{margin:"auto"}}>
                        <div className={"mypanel"}>
                            <p id={"text1"}>My</p>
                            <p id={"text2"}>Front-End</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}