import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Axios from 'axios';
import {notify} from 'react-notify-toast';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState('')
    function handleChangeEmail(e){
        setEmail(e.target.value)
    }
    function handleChangePassword(e){
        setPassword(e.target.value);
    }
    function handleChangeInput(e){
        console.log(e)
    }
    function handleFormSubmit(e){
        e.preventDefault();
       
        if(email && password){
        Axios.post("https://api-the-frog.herokuapp.com/user/login", { email, password})
            .then(res => {
                if(res.data.errors){
                    setEmail('');
                    setPassword('');
                    if(res.data.message){
                        notify.show(`${res.data.message}`,'error',1500);
                    }
                    else
                        notify.show('Đăng nhập không thành công !','error',1500);
                    return <Redirect to="/account" />
                }
                    
                else{
                    setUser(res.data)
                    notify.show('Đăng nhập thành công !','success',1500);
                    localStorage.setItem("TOKEN", JSON.stringify(res.data))
                    setLoggedIn(true)
                }
                
            })
            .catch(errors =>{
                console.log(errors);
                return <Redirect to="/account"/>
            })
        }
        else{
            if(!email && !password){
                notify.show('Vui lòng nhập email và password !','error',1500);
            }
            else if(!email){
                notify.show('Vui lòng nhập email !','error',1500);
            }
            else if(!password){
                notify.show('Vui lòng nhập password !','error',1500);
            }
            
        }
    }
    if(loggedIn){
        return <Redirect to="/"/>
    }
    
    if(user)
        console.log(user)
    return (
        
        <div className="grid">
            <div className="login-wrapper">
                <div className="grid wide">
                    <div className="login">
                        <div className="login__left">
                            <div className="login__left-img">
                                <img src="./image/4x.png" alt="imgg"></img>
                                {/* <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302108/the-frog-main/logo_border_jhvojf.png" alt="imgg"></img> */}
                            </div>
                            <div className="login__left-content">
                                <h1>WELCOME TO THE FROG</h1>
                                <span>To access your account you need to login first</span>
                                
                                <div className="login__left-content--create">
                                    <span>Do not have an account?</span>
                                    <Link to="/account/register">Create a new account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="login__right">
                            <h1>LOGIN</h1>
                            <form onSubmit={handleFormSubmit}>
                                <input name="email" type="text" placeholder="Email" value={email} onChange={handleChangeEmail}></input>
                                <input name="password" type="password" placeholder="Password" value={password} onChange={handleChangePassword}></input>
                                
                                <div className="remeber">
                                    <input className="checkBox" type="checkbox" onChange={handleChangeInput}></input>
                                    <span>Remember me</span>
                                </div>
                                
                                <button type="submit">LOGIN</button>
                                <a href="/s">Forgot password</a>
                                <div className="login__left-content--create-mobie">
                                    <span>Do not have an account?</span>
                                    <Link to="/account/register">Create a new account</Link>
                                </div>
                                <div className="login-more">
                                   
                                    <span className="login-more__title">Login using</span>
                                    <div className="login-more__icon">
                                        <span className="face"><i class="fab fa-facebook-f"></i></span>
                                        <span className="gg"><i class="fab fa-google-plus-g"></i></span>
                                        <span className="tw"><i class="fab fa-twitter"></i></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
