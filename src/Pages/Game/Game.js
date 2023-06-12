import React, {useEffect, useState} from 'react'
import Linha from '../../Components/Linha/Linha'
import { PageBody } from '../../Components/PageBody/PageBody'
import styles from "./Game.module.css"
import tent from "./utils"

const Game = () => {
    const [rodadas, setRodadas]=useState(tent);
    const [tentativa, setTentativa]=useState(0);
    const [word,setWord]=useState([]);
    //console.log(tentativas.map((t)=>console.log(t)))
    
    useEffect(()=>{
        setRodadas(tent)
        setTentativa(0)
    },[])
    const wordSelect = "poeta";

    const handleSubmit=(e)=>{
        e.preventDefault();
        let r=rodadas;      
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

        })
        console.log(tent)
        //word.map((w)=> console.log(w.letra))
        r[tentativa]=word;
        //console.log(r);
        setRodadas(r)
        if(tentativa<5)
            setTentativa(tentativa+1)
    }
    
    const handleChange=(w)=>{
        setWord(w)
    }
  return (
    <PageBody>
        <div className={styles.game}>
            <h1>TERMO</h1>
            <form onSubmit={handleSubmit}>
                {rodadas.map((t, index)=><Linha set={(w)=>handleChange(w)} disable={index == tentativa? true : false} key={index} word={t}></Linha>)}
                <button>Enviar</button>
            </form>
            
            
        </div>
    </PageBody>
  )
}


const tent2= [[{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
}],
[{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
}],
[{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
}],
[{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
}],
[{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
}],
[{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
},{ 
    letra:"",
    status:0,
}]
]


export default Game