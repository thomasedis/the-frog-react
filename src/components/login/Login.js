import React from 'react'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <div className="grid">
            <div className="login-wrapper">
                <div className="grid wide">
                    <div className="login">
                        <div className="login__left">
                            <div className="login__left-img">
                                <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302107/the-frog-main/frog-with-hat_xhj4er.png" alt="imgg"></img>
                                {/* <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302108/the-frog-main/logo_border_jhvojf.png" alt="imgg"></img> */}
                            </div>
                            <div className="login__left-content">
                                <h1>WELCOME THE FROG</h1>
                                <span>To access your account you need to login first</span>
                                
                                <div className="login__left-content--create">
                                    <span>Do not have an account?</span>
                                    <Link to="/register">Create a new account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="login__right">
                            <h1>LOGIN</h1>
                            <form>
                                <input type="text" placeholder="User name"></input>
                                <input type="password" placeholder="Password"></input>
                                
                                <div className="remeber">
                                    <input className="checkBox" type="checkbox"></input>
                                    <span>Remember me</span>
                                </div>
                                
                                <button>LOGIN</button>
                                <a href="/s">Forgot password</a>
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
