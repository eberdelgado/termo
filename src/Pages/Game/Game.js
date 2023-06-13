import PageBody from '../../Components/PageBody'
import Tabuleiro from '../../Components/Tabuleiro'
import Home from '../../Components/Home'
import {useStageContext} from "../../Hooks/useStageContext"


const Game = () => {
    const {stage} = useStageContext();
    return (
        <PageBody>
            {stage==="game" &&
                <Tabuleiro/>
            }
            {stage === "home" && 
                <Home/>
            }          
        </PageBody>
    )
}

export default Game