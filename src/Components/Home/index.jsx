import React from 'react'
import {Container, Start, Title} from "./styles"
import { useStageContext } from '../../Hooks/useStageContext'

const Home = () => {
    const {setStage} = useStageContext();
    return (
    <Container>
            <Title>Bem vindo ao termo SLL</Title>
            <Start onClick={()=>setStage("game")}>Iniciar um novo jogo</Start>
    </Container>
)
}

export default Home