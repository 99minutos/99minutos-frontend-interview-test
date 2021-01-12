import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
    background-color: black;
    color: white;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items: center;
`

export default function ErrorPage({error}){
    return (
        <Container>
            {error ? error : <h1>Page not Found</h1>}
        </Container>
    )
}

ErrorPage.propTypes = {
    error: PropTypes.object
}