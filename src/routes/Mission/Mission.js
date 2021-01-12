import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_ONE_LAUNCH} from "../../grapql/queries/index"
import Details from "../../components/Details"
import Loading from "../../components/Loading";
import ErrorPage from "../../components/ErrorPage"

function Mission() {
  let { missionId } = useParams();
  const {loading, error, data} = useQuery(GET_ONE_LAUNCH,{
    variables: {id: missionId}
  })
  if(loading)return <Loading/>
  if(error) return <ErrorPage error={error}/>
  return <Details 
    launch={data.launch}
    />;
}

export default Mission
