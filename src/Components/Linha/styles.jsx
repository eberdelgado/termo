import styled from "styled-components";

export const Field = styled.div`
    width: 40px;
    font-size: 30px;
    height: 40px;
    margin-left: 7px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.568);
    background-color: ${(props)=> props.disable ? " rgba(255, 255, 255, 0.500)":"rgba(255, 255, 255, 1)"};
    border: ${(props)=>props.border ?"solid 2px": "none" };
    border-radius: 3px; 
    cursor: ${(props)=> props.disable ?"not-allowed": "pointer"}; 
   
`