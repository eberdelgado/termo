import React from "react"
import styles from "./PageBody.module.css"

export class PageBody extends React.Component{
    render(){
        return(
            <div className={styles.pageBody}>
                {this.props.children}
            </div>
        )

    }


}
