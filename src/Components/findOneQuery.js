import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Card from "./Card";


let previousResponse = null

const Launches = props => ( 
    <Query
    query={gql`
    query GetLaunches {
        launch(id: "${props.id}") {
          id
          mission_name
          details
          links {
            video_link
          }
          ships {
            image
          }
        }
      }      
  `}
    >
    {({ loading, error, data }) => {
        if (loading && previousResponse !== data)
              return <p>Loading....</p>
            if (error) return <p>Something went wrong...</p>
            previousResponse = data
            return (
              <div className="row">
                { data && data.launch && ( data.launch.length ) !== 0  ? (
                    
                  <div>
                    <Card
                        photo={ data.launch.ships[0] != null?
                            data.launch.ships[0].image:
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUX7zo1yYFaBeOYIcOfcgwnULvpM7YqzXxA&usqp=CAU'
                        }
                        name={data.launch.mission_name} 
                        detail={data.launch.details? 
                                data.launch.details:
                                 'No details to show'}
                        video={data.launch.links.video_link}
                        
                    />
                  </div>
                ) : (
                    <p>Loading ...</p>
                )}
              </div>
        );
    }}
    </Query>

);

export default Launches