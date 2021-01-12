import Launch from "../../components/Launch"
import {useQuery} from "@apollo/client"
import {GET_ALL_LAUNCHES} from "../../grapql/queries/index"
import styled from "styled-components"
import Loading from "../../components/Loading"
import ErrorPage from "../../components/ErrorPage"

const Container = styled.div`
    display: flex;
    justify-content: center;
    object-fit: contain;
    background-size: cover;
    background-image: url("https://i.pinimg.com/originals/1b/9f/b2/1b9fb29941b62bbdf0901120713e1fc2.jpg");
`

const Row = styled.div`
  h1 {
    padding-left: 7px;
    color: white;
  }
`

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

  if(loading)return <Loading/>
  if(error) return <ErrorPage error={error}/>
  return(
    <Container>
      <Row>
        <h1>Last Launches 🚀</h1>
        {data.launchesPast.map(launch => (
            <Launch 
              launch={launch} 
              key={launch.id} 
              fn={{truncate,transformDate}}
            />
        ))}
      </Row>
    </Container>
  )
}

export default Dasboard;
