import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.button`
    height: 40px;
    width: 100px;
    border: none;
    background-color: #c3cfd9;
    color: #293845;
    font-size: 1em;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor:pointer;

    &:hover {
        background-color:#293845;
        color: #c3cfd9
    }
    
    &:focus{
        outline:0;
    }
`

export default function Button ({children, ...rest}){
    return(
        <Container {...rest}>
            {children}
        </Container>
    )
}

Button.propTypes = {
    children: PropTypes.string
}