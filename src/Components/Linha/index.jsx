import { useEffect, useState } from "react"
import {Container, Field} from "./styles"

const Linha = (props) => {
    const [word,setWord] = useState([...props.word])
    const [letra,setLetra]=useState("");
    const [target,setTarget] =useState(0);

    useEffect(()=>{      
        props.set(word)
        if(!props.disable){
            document.addEventListener('keydown',handleKeyDown)
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
          };
    },[props.disable])

    useEffect(()=>{
        if(/^[a-z]$/.test(letra)){
            const w=[...word]
            w[target].letra=letra;
            setWord(w)
            props.set(w)
            setTarget(target<4 ? target+1: 0)
            setLetra("")
        }else if(letra==="tab" || letra ==="enter"){
            setTarget(target<4 ? target+1: 0)
            setLetra("")
        }
    },[letra])
  

    const handleKeyDown=(event)=>{ 
        setLetra(event.key.toLocaleLowerCase());      
    }
   
    const handleClick=(index)=>{
        setTarget(index)
    }
    //console.log(word.map(w=> console.log(w.status)))
    return(

        <Container>
            {word.map((w,index,)=>
            <Field
                disable={props.disable}
                key={index} 
                color={w.status}
                border={index===target && !props.disable}
                onClick={()=>handleClick(index)}
                >{w.letra}</Field>
            )} 
         </Container>

    )
        
    //console.log(word)
    
}


/*


if(props.disable){
        return(
            <div className={styles.linha}>
                    {word.map((w,index,)=><input key={index} value={w.letra} onChange={(e)=>handleChange(e.target.value, index)} type="text" className={styles.campo} maxLength="1" required/>
                    )} 
            </div>
        )
    }else{
        return(
            <div className={styles.linha}>
                {word.map((w,index)=> 
                    <input 
                        key={index} 
                        type="text" 
                        className={w.status===0 ? styles.campo:
                                    w.status===1 ? styles.correct:
                                    w.status===2 ? styles.have: styles.wrong 
                                    } 
                        maxLength="1" 
                        disabled
                    />)}
            </div>
        )
    }
*/
 /*<div className={styles.linha}>
        <input 
            type="text" 
            className={styles.campo} 
            maxLength="1"
            disabled={props.disable ? "disable": ""}
        />
        <input type="text" className={styles.campo} maxLength="1"/>
        <input type="text" className={styles.campo} maxLength="1"/>
        <input type="text" className={styles.campo} maxLength="1"/>
        <input type="text" className={styles.campo} maxLength="1"/>
    </div>
    */
export default Linha