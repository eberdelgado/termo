import styled from "styled-components";

export const Field = styled.div`
    width: 40px;
    font-size: 30px;
    height: 40px;
    margin-left: 7px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.568);
    background-color: ${ props=>{
        if(!props.disable){
            return "rgba(255, 255, 255, 1)";
        }
        switch(props.color){
            case 0: 
                return " rgba(255, 255, 255, 0.500)";
                
            case 1:
                return " rgb(15, 99, 26)";
            case 2:
                return "rgb(213, 226, 30)";
            case 3:
                return "rgb(226, 26, 26)";
            default: 
                return "rgba(255, 255, 255, 1)";

    }}};
    border: ${(props)=>props.border ?"solid 2px": "none" };
    border-radius: 3px; 
    cursor: ${(props)=> props.disable ?"not-allowed": "pointer"}; 
   
`

export const Container= styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    margin-bottom: 3%;
`


/* ${(props)=> switch(props){
        
}
props.color===0 ? " rgba(255, 255, 255, 0.500)":"rgba(255, 255, 255, 1)"};*/