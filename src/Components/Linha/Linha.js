import { useState } from "react"
import styles from "./Linha.module.css"

const Linha = (props) => {
    const [word] = useState(props.word)
    const [letras,setLetras]=useState("");

    const handleChange=(a, index)=>{
        let m=word;
        m[index].letra=a;
        setLetras(a+index);
        props.set(word)
    }
        
    //console.log(word)
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
    

}
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