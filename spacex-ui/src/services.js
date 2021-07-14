import { queries } from "./queries";

const apiUrl = 'https://api.spacex.land/graphql/'
const method = 'POST'
const headers = {'Content-Type': 'application/json'}

const services = {
    getLaunches: () => fetch(apiUrl, {
        method,
        headers,
        body: JSON.stringify({ query: queries.launches })
    }),
    
    getLaunchById: (id) => fetch(apiUrl, {
        method,
        headers,
        body: JSON.stringify({query: queries.launch(id)})
    }),
}

export { services };