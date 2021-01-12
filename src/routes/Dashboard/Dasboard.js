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
const LastLaunches = styled.div`
  h1 {
    padding-left: 7px;
    color: white;
  }
`
const Dasboard = () => {
  const {loading, error, data} = useQuery(GET_ALL_LAUNCHES)

  if(loading)return <Loading/>
  if(error) return <ErrorPage error={error}/>
  return(
    <Container>
      <LastLaunches>
        <h1>Last Launches 🚀</h1>
        {data.launchesPast.map(launch => (
            <Launch 
              launch={launch} 
              key={launch.id}
            />
        ))}
      </LastLaunches>
    </Container>
  )
}

export default Dasboard;
