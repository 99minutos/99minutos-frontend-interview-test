import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css'
import Particles from "react-particles-js";
import '../Styles/dashboard.css'
import '../Styles/Mission.css'
import cohete1 from "../Images/cohete1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Mission extends React.Component{
    constructor() {
        super();
        this.state={
            data:[],
            links:[],
            images:[],
            urlBlog:"",
            urlVideo:""
        }
    }
    componentDidMount() {
       try {
           this.setState({
               data:this.props.location.state.data,
               links:this.props.location.state.data.links,
               images:this.props.location.state.data.links.flickr_images,
           })
       } catch (e){
           console.log(e)
               window.location.href="/"
       }
    }


    render(){
        console.log("estoy en mision")
        console.log(this.state.data)



        return(
            <div className={"bodyHome"} >
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
                    <div className={"col-md-12"} style={{alignSelf:"center"}}>
                        <div className={"row rowSecundarioM"}>
                            <div className={"col-md-12 titleNoticeM"}>
                                <p>{this.state.data.mission_name}</p>
                            </div>
                            <div className={"col-md-4 bodyNoticeM"}>
                                <p>{this.state.data.details}</p>
                            </div>
                            <div className={"col-md-8 divCarrucel"}>
                                <Carousel className={"carrucelImg"}>
                                    {
                                        this.state.images.map(item=>(
                                            <div className={"divImgCarrucel"}>
                                                <img src={item} />
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                            <div className={"col-md-12 botonesLink buttonBlogM titleNoticeM"}>
                                <button onClick={()=>window.open(this.state.links.article_link)}>Ver articulo</button>
                                <button onClick={()=>window.open(this.state.links.video_link)}>Ver video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}