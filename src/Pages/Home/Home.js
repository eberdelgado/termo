import styles from "./Home.module.css"
import { PageBody } from "../../Components/PageBody/PageBody"
import {Link} from "react-router-dom"

const Home = () => {
  const  handleClick = ()=>{
 
  }
  return (
    <PageBody>
        <div className={styles.home}>
            <h1>Bem vindo ao termo SLL</h1>
            <Link to="/game" className={styles.btnStart}>Iniciar um novo jogo</Link>
        </div>
    </PageBody>
  )
}

export default Home