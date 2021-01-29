import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css'
import '../Styles/dashboard.css'
import Particles from "react-particles-js";
import cohete1 from '../Images/cohete1.jpg'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { Redirect } from "react-router-dom";


export default class Dashboard extends React.Component{
    constructor() {
        super();
        this.state={
            Misiones:[],
            DetailMision:[],
            renderDataBlog:<div className={"panelDataBlog"}>
                                <div className={"imgBlog"}/>
                                <div className={"textBlog"}/>
                                <div className={"buttonBlog"}/>
                            </div>,
            redirect: false,
        }
    }

    componentDidMount() {
        this.getApolloMision()
    }

    conectionApollo =()=>{
        return new ApolloClient({uri: 'https://api.spacex.land/graphql',cache: new InMemoryCache()});
    }

    getApolloMision=()=>{
        this.conectionApollo().query({
            query: gql`
                query GetLaunches {
                    launchesPast(limit: 10) {
                        id
                        mission_name
                        details
                        launch_date_local
                    }                  
                }`
            }).then(result => {
                console.log(result.data.launchesPast)
                this.setState({Misiones:result.data.launchesPast})
            }
        );
    }

    getApolloDetailMision=(id)=>{
        this.conectionApollo().query({
            variables:{id:id},
            query:gql
                `query Launch($id:ID!) {
                    launch(id: $id) {
                        id
                        mission_name
                        launch_date_local
                        details
                        links {
                        flickr_images
                        video_link
                        article_link
                        }
                    }
                }`
        }).then(result => {
            let img=cohete1
            if(result.data.launch.links.flickr_images.length>0){
                img = result.data.launch.links.flickr_images[0]
            }
            this.setState({
                DetailMision:result.data.launch,
                renderDataBlog:<div className={"panelDataBlog"}>
                                    <div className={" imgBlog"}>
                                        <img src={img}/>
                                    </div>
                                    <div className={"textBlog"}>
                                        <h3>{result.data.launch.mission_name}</h3>
                                        <p>{result.data.launch.details}</p>
                                    </div>
                                    <div className={"buttonBlog"}>
                                        <button onClick={() => {this.handleClick()}}>See more</button>
                                    </div>
                                </div>
            })
            }
        );
    }

    formtoFecha=(fecha)=>{
        let newfecha = fecha.split("T")[0].split("-")
        newfecha=newfecha[2]+"/"+newfecha[1]+"/"+newfecha[0]
        return newfecha
    }

    handleClick = () => {
        this.setState({redirect: true})
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={{
                        pathname: '/mission',
                        state: {data:this.state.DetailMision}
                    }}/>
        }else {
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
                            <div className={"row rowSecundario"}>
                                <div className={"col-md-4 colNotice"}>
                                    <div className={"row rowNotice"}>
                                        <div className={"col-md-12 nomPanelNotice"}>
                                            <h1>Last Launches  🚀</h1>
                                        </div>
                                        <div className={"col-md-12 panelNotice"}>
                                            {
                                                this.state.Misiones.map(
                                                    item=>(
                                                        <div className={"notices"} onClick={()=>{this.getApolloDetailMision(item.id)}}>
                                                            <h3>{item.mission_name}</h3>
                                                            <p>{item.details}</p>
                                                            <h6>{this.formtoFecha(item.launch_date_local)}</h6>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-md-8 colBlog"}>
                                    {this.state.renderDataBlog}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}