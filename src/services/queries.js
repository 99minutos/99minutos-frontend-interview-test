

const query = `{
        launchesPast(limit: 10) {
            id
            mission_name
            launch_date_local
            details
            launch_site {
                site_name_long
            }
            links {
                article_link
                video_link
                flickr_images
            }
        }
        }

`

export default query

