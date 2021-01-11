import Launch from "../../components/Launch"
import {useQuery} from "@apollo/client"
import {GET_ALL_LAUNCHES} from "../../grapql/queries/index"


const Dasboard = () => {
  const {loading, error, data} = useQuery(GET_ALL_LAUNCHES)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function transformDate(dateString){
      const getDate = /^(\d{4}[-]\d{2}[-]\d{2})/.exec(dateString)
      const splitDate = getDate[0].split("-")
      return  [splitDate[1], splitDate[2], splitDate[0]].join("/")
  }

  if(loading)return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  return <>
    <h1>Last Launches</h1>
    {data.launchesPast.map(launch => (
        <Launch 
          launch={launch} 
          key={launch.id} 
          truncate={truncate} 
          transformDate={transformDate}
        />
    ))}
  </>;
}

export default Dasboard;
