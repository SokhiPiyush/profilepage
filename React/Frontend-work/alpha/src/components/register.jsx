import "../css/login.css";
import logo from './WIP_expand.gif';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




function Register(){

    const upperImageUrl=logo;
    return(
        <div>
            {/* sliderhere */}
            <div class="wrapper" >
            <div class="upperImage" style={{backgroundImage:`url(${upperImageUrl})`}}></div>
            <div class= "login-form">
            <form class="form-1">
                <label for="username" >asdasdasds</label><br/>
                <input type="text" name="username" placeholder="Enter your username" class="login-input1 , inputfields" ></input>
                <br/><br/>
                <label for="username" >sdasdasdasddD</label><br/>
                <input type="password" name="password" placeholder="Enter your password" class="login-input2 , inputfields"></input>
                <br/>
                <button type="submit" class="but-1"> <Link to="/">go to login</Link></button>




            </form>

            </div>
            </div>
        </div>
    )
}

// export default Register;