import styled from 'styled-components'

export const StyledLi = styled.li`
    background-color: ${(props) => (props.variant % 2 ? '#e2e2e2' : '#000')}; //using props to decide the color
    border: 1px solid black;
    border-radius: 5px;
    margin: 1%;
    padding: 2%;
    width: 80%;
    text-align: center;
    color: ${(props) => (props.variant % 2 ? '#000' : '#fff')};
    transition: 0.3s;
    &:hover{
        opacity:0.5
    }
`;

export const FancyLi = styled(StyledLi)` //extending StyledLi component with additional styles
    background-color: #d3d3d3;
    color: red;
`