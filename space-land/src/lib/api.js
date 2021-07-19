const BASEURL = 'https://api.spacex.land/graphql/';

const FerchGetPost = () => {
    return fetch(BASEURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            {
                launchesPast(limit: 10) {
                    mission_name
                    launch_date_local
                    launch_site {
                    site_name_long
                    }
                    links {
                    article_link
                    video_link
                    }
                    rocket {
                    rocket_name
                    first_stage {
                        cores {
                        flight
                        core {
                            reuse_count
                            status
                        }
                        }
                    }
                    second_stage {
                        payloads {
                        payload_type
                        payload_mass_kg
                        payload_mass_lbs
                        }
                    }
                    }
                    ships {
                    name
                    home_port
                    image
                    }
                }
                }                             
            `
        }),
    })
    .then((res) => res.json()).catch(e => console.log("ocurrio un error", e))
}
export default FerchGetPost;