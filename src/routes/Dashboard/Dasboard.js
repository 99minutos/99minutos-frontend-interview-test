import Launch from "../../components/Launch"
import {useQuery} from "@apollo/client"
import {GET_ALL_LAUNCHES} from "../../grapql/queries/index"


const Dasboard = () => {
  const {loading, error, data} = useQuery(GET_ALL_LAUNCHES)

  if(loading)return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  return <>
    {data.launchesPast.map(launch => (
        <Launch launch={launch} key={launch.id}/>
    ))}
  </>;
}

export default Dasboard;
