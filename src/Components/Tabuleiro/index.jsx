import React, {useEffect, useState} from 'react'
import Linha from '../Linha'
import tent from "../utils"
import {Container,  Button} from "./styles"

const Tabuleiro = () => {
    const [rodadas, setRodadas]=useState(tent);
    const [tentativa, setTentativa]=useState(0);
    const [word,setWord]=useState([]);
    
    useEffect(()=>{
        setRodadas(tent)
        setTentativa(0)
    },[])
    const wordSelect = "poeta";

    const handleClick=(e)=>{
        e.preventDefault();
        let r=rodadas;      
        try{    
            const a=word.filter((w)=> !w.letra).length
            if(a===0){
                word.map((w,index)=> {
                    if(wordSelect.includes(w.letra.toLowerCase())){
                        if(wordSelect.split("")[index]===w.letra.toLowerCase()){
                            //console.log(wordSelect.split("")[index])
                            word[index].status=1
                        }else{
                            word[index].status=2
                    }}else{
                            word[index].status=3
                        }
                        return true;
                    })
                
                r[tentativa]=word;
                setRodadas(r)
                if(tentativa<5)
                    setTentativa(tentativa+1)
                }

        }catch{
            console.error("Error")
        }       
    }
    const handleChange=(w)=>{
        setWord(w)
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