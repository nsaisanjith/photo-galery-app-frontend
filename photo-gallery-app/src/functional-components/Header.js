import React from "react"
import classes from "../css/title.module.css"
const Header=(props)=>{
    return(
        <div className={classes.headerClass}>
            <h1 id={classes.header}>{props.head}</h1>
        </div>
    );

}
export default Header