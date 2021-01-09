import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_ONE_LAUNCH} from "../../grapql/queries/index"
import Details from "../../components/Details"

function Mission() {
  let { missionId } = useParams();
  const {loading, error, data} = useQuery(GET_ONE_LAUNCH,{
    variables: {id: missionId}
  })
  if(loading)return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  return <Details launch={data.launch}/>;
}

export default Mission
