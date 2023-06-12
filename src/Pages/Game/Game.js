import React, {useEffect, useState} from 'react'
import Linha from '../../Components/Linha'
import { PageBody } from '../../Components/PageBody/PageBody'
import styles from "./Game.module.css"
import tent from "./utils"
import Tabuleiro from '../../Components/Tabuleiro'

const Game = () => {

  return (
    <PageBody>
        <Tabuleiro/>      
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