const URL = "https://api.spacex.land/graphql/"

export const api_getLastLaunches = () => {
    return fetch(URL, {
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
                  flickr_images
                }
                details
              }
            }                             
            `
        }),
    })
        .then((res) => res.json()).catch(e => console.log("ocurrio un error", e))

}

