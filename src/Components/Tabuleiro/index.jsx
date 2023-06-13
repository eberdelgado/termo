import React, {useEffect, useState} from 'react'
import Linha from '../Linha'
import tent from "../utils"
import {Container,  Button} from "./styles"
import { useStageContext } from '../../Hooks/useStageContext'
import ModalWin from './ModalWin'

const Tabuleiro = () => {
    const [rodadas, setRodadas]=useState([...tent]);
    const [tentativa, setTentativa]=useState(0);
    const [word,setWord]=useState([]);
    const {setStage}=useStageContext();
    const [modalWin,setModalWin] = useState(false);
    const [roudWin, setRoundWin]= useState(0);

    useEffect(()=>{
        setRodadas([...tent]);
        setTentativa(0);
    },[])
    const wordSelect = "poeta";
    console.log(tent)
    const handleClick=(e)=>{
        e.preventDefault();
        let r=[...rodadas];
        let correct=0;      
        try{    
            const a=word.filter((w)=> !w.letra).length
            if(a===0){
                word.map((w,index)=> {
                    if(wordSelect.includes(w.letra.toLowerCase())){
                        if(wordSelect.split("")[index]===w.letra.toLowerCase()){
                            correct=correct+1;
                            word[index].status=1
                        }else{
                            word[index].status=2
                    }}else{
                            word[index].status=3
                        }
                        return true;
                    })
               
               
                if(tentativa<5)
                    setTentativa(tentativa+1); 
                    r[tentativa]=word;
                    setRodadas(r);
                }
                if(correct===5){
                    setRoundWin(tentativa);
                    setModalWin(true);
                    setTentativa(6)
                    //setStage("win")
                    return 0;
                }
        }catch{
            console.error("Error");
        }       
    }
    const handleChange=(w)=>{
        setWord([...w]);
    }
  return (
    <Container>
    <h1>TERMO</h1>
    {rodadas.map((t, index)=>
        <Linha 
            set={(w)=>handleChange(w)} 
            disable={index === tentativa? false : true} 
            key={index} 
            word={t}/>)} 
        <Button onClick={(e)=>handleClick(e)}>Verificar</Button>

    {modalWin && <ModalWin word={wordSelect} round={roudWin} closeModal={()=>setModalWin(false)}/>} 
    </Container>
  )
}

export default Tabuleiro;



/*
  <form onSubmit={handleSubmit}>
            {rodadas.map((t, index)=><Linha set={(w)=>handleChange(w)} disable={index == tentativa? true : false} key={index} word={t}></Linha>)}
            <button>Enviar</button>
        </form> 

*/