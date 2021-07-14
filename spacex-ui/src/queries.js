const queries = {
    launches: `
        {
            launchesPast(limit: 10) {
                mission_name
                launch_date_local
                id
                launch_site {
                    site_name_long
                }
            }
        }
    `,

    launch: (id) => (`
        {
            launch(id: ${id}){
                id
                details
                mission_name
                ships {
                    image
                }
                links {
                    article_link
                    video_link
                }
            }  
        }
    `)
}

export { queries };