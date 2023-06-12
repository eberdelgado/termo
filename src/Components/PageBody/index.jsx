import React from "react"
import { Container } from "./styles"

const PageBody = (props)=>{    
        return(
            <Container>
                {props.children}
            </Container>
        )
}

export default PageBody;
