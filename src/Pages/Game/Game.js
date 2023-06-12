import PageBody from '../../Components/PageBody'
import Tabuleiro from '../../Components/Tabuleiro'
import Home from '../../Components/Home'
import {useStageContext} from "../../Hooks/useStageContext"


const Game = () => {
    const {stage} = useStageContext();
    console.log(stage)
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