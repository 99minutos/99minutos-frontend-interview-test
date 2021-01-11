import styled from "styled-components"
import {useHistory} from "react-router-dom"

const Container = styled.div`
    object-fit: contain;
    background-size: cover;
    height: 100vh;
    width: 100%;
    background-image: url("https://cdn.mos.cms.futurecdn.net/xePTkUayyCCn7QnVXUjhTg.jpg");
    display: flex;
    justify-content: center;
    align-items: center;
`
const InfoProfile = styled.div`
    background: #659dbd;
    width: 350px;
    height: 200px;
    text-align: center;
    cursor: pointer;
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 70px;

    h1 {
        color: #fbeec1;
    }

    &:hover {
        background: #fbeec1;
        h1 {
            color: #659dbd;
        }
    }

`
function Home() {
    const history = useHistory()

    function handleClick(){
        history.push("/dashboard")
    }

    return (
        <Container>
            <InfoProfile onClick={handleClick}>
                <h1>Front End Challenge</h1>
            </InfoProfile>
        </Container>
    )
}

export default Home
