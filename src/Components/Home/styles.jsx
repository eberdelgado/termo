import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    text-align: center;
    align-items: center;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    padding: 15px 15px 30px 15px;
    background-color: #0f3347;
    box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.568);
    color: #2bc8c8;
`

export const Start = styled.button`
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

export const Title = styled.h1`
`
/*
.home{
    position: absolute;
    top: 20%;
    left: 50%;
    text-align: center;
    align-items: center;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    padding: 15px 15px 30px 15px;
    background-color: #0f3347;
    box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.568);
    color: #2bc8c8;
}

.btnStart{
    cursor: pointer;
    text-decoration: none; 
    background-color: #2bc8c8;
    color: #0f3347;
    box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.568);
    border-radius: 6px;
    font-size: 100%;
    padding: 2%;
    margin-bottom: 1px;
}*/