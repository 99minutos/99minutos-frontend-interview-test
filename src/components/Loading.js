import styled from "styled-components"

const Container = styled.div`
    background-color: black;
    color: white;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items: center;
`

export default function Loading(){
    return(
        <Container>
            <h1>🚀 Loading . . .</h1>
        </Container>
    )
}