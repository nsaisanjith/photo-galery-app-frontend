import React from "react"
import classes from "../css/loginpage.module.css"
class Login extends React.Component{
    state={
        username:"",
        password:""
    }
    handleOnSubmit=async(event)=>{
        event.preventDefault()
        console.log(event.target.elements)
        await this.setState({
                username:event.target.elements.username.value,
                password:event.target.elements.password.value
        })
        console.log(this.state.password)
    }

    render(){

        return(
            <div className={classes.loginform}> 
             
                <form onSubmit={this.handleOnSubmit} >
                    <label>UserName</label>
                    <input type="string" name="username"/>
                    <br/>
                    <label>Password</label>
                    <input type="string" name="password"/>
                    <br/>
                    <button>submit</button>                    
                </form>
               
            </div>
        );
    }
}
export default Login