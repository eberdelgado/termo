import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    text-align: center;
    align-items: center;
    transform: translate(-50%, -20%);
    border-radius: 6px;
    padding: 15px 15px 30px 15px;
    background-color: #0f3347;
    box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.568);
    color: #2bc8c8;
    width: fit-content;

`
export const Button = styled.button`
    background-color: #2bc8c8;
    border-radius:  5px;
    height:5vh;
    border:solid 1px #2bc8c8ae;
    box-shadow:#2bc8c8;
    cursor:pointer;
    :active {
        opacity: 0.8;
    }
    
`
/*{
    position: absolute;
    top: 20%;
    left: 50%;
    text-align: center;
    align-items: center;
    transform: translate(-50%, -20%);
    border-radius: 6px;
    padding: 15px 15px 30px 15px;
    background-color: #0f3347;
    box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.568);
    color: #2bc8c8;
    width: fit-content;
}

.campo{
    width: 40px;
    font-size: 30px;
    height: 40px;
    margin-left: 7px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.568);
    border: none;
    border-radius: 3px;
}

.campo:disabled{   
    background-color: #0f3347;
}

.linha{
    display: flex;
    width: fit-content;
    height: fit-content;
    margin-bottom: 3%;
}*/