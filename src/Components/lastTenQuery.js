import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Card from "./Card";
import {Link} from "react-router-dom"

let previousResponse = null 

const Launches = props => ( 
    <Query
    query={gql`
    query GetLaunches {
      launchesPast(limit: 10) {
        id
        details
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        links {
          article_link
          video_link
          mission_patch
        }
        rocket {
          rocket_name
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
                {data.launchesPast.length ? (
                  <div>
                    {
                      <p className="results">
                        {data.launchesPast.length} Results Found
                      </p>
                    }
                    {data.launchesPast.map((launch, index) => (
                      <Link 
                       to={"/moredetails?q="+launch.id}
                       key={index} 
                      >
                       <Card
                         key={index}
                         name={launch.mission_name } 
                         detail={launch.details? 
                                 launch.details:
                                 'No details to show'}
                         date={ new Date(launch.launch_date_local).toLocaleDateString("en-US") }
                       />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p>Sorry! No found results for your search. Please try again...</p>
                )}
              </div>
        );
    }}
    </Query>
);

export default Launches