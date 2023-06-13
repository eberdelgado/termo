import {Container, H2, H3,ContainerButton} from "./styles"
import { Button } from "../styles";
import { useStageContext } from "../../../Hooks/useStageContext";

const ModalWin = (props) => {
    const {setStage}= useStageContext();
    return (
        <Container>
            <H2>PARABÉNS!!!!!</H2>
            <H3>Você Acertou a palavra: {props.word.toUpperCase()}!</H3>
            <H3>Tentativas: {props.round} !</H3>
            <ContainerButton>
                <Button onClick={()=>setStage("home")}>MENU</Button>
                <Button>Novo Jogo</Button>
                <Button onClick={()=>props.closeModal()}>Voltar ao jogo</Button>
            </ContainerButton>
        </Container>
    )
}

export default ModalWin;