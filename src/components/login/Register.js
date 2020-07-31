import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Axios from 'axios';
import {notify} from 'react-notify-toast';
export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [registered, setRegistered] = useState(false)
    function handleFirstName(e){
        setFirstName(e.target.value)
    }
    function handleLastName(e){
        setLastName(e.target.value)
    }
    function handlePhone(e){
        setPhone(e.target.value)
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function handlePassword2(e){
        setPassword2(e.target.value)
    }

    function handleFormSubmit(e){ 
        e.preventDefault();
        
        if(firstName && lastName && phone && email && password && password2){
            Axios.post("https://api-the-frog.herokuapp.com/user/register",{firstName, lastName, phone, email, password, password2})
                .then(res => {
                    if(res.data.errors === false){
                        console.log(res.data) 
                        notify.show('Đăng ký tài khoản thành công !','success',1500);
                        setRegistered(true)
                       
                    }
                    else{
                        if(res.data.errors) {
                            notify.show(`${res.data.message}`,'error',1500);
                        }
                        notify.show('Đăng ký tài khoản không thành công !','success',1500);
                        return <Redirect to="/account/register"/>
                    }  
                })
                .catch (err => console.log(err) )
        }
        else{
            if(!firstName || !lastName || !phone){
                notify.show("Vui lòng nhập đủ thông tin cần thiết !", "error", 1500);
            }
            else if(!email){
                notify.show("Vui lòng nhập email !", "error", 1500);
            }
            else if(!password || !password2){
                notify.show("Bạn chưa nhập password !", "error", 1500);
            }
        }
        
    }
    if(registered){
        return <Redirect to="/account"/>
    }
    return (
        <div className="grid">
            <div className="login-wrapper">
                <div className="grid wide">
                    <div className="login">
                        <div className="login__left">
                            <div className="login__left-img">
                                <img src="https://res.cloudinary.com/the-frog/image/upload/v1595827062/the-frog-main/8_4x_baz1xd.png" alt="imgg"></img>
                                {/* <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302108/the-frog-main/logo_border_jhvojf.png" alt="imgg"></img> */}
                            </div>
                            <div className="login__left-content">
                                <h1>WELCOME TO THE FROG</h1>
                                <span>To access your account you need to login first</span>
                                
                                {/* <div className="login__left-content--create">
                                    <span>Do not have an account?</span>
                                    <Link to="/register">Create a new account</Link>
                                </div> */}
                            </div>
                        </div>
                        <div className="login__right">
                            <h1>REGISTER</h1>
                            <form onSubmit={handleFormSubmit}>
                                <input type="text" name="firstName" placeholder="First name" value={firstName} onChange={handleFirstName}></input>
                                <input type="text" name="lastName" placeholder="Last name" value={lastName} onChange={handleLastName}></input>
                                <input type="number" name="phone" placeholder="Phone" value={phone} onChange={handlePhone}></input>
                                <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmail}></input>
                                <input type="password" name="password" placeholder="Password" value={password} onChange={handlePassword}></input>
                                <input type="password" name="password2" placeholder="Password again" value={password2} onChange={handlePassword2}></input>
                  
                                <button type="submit"  >REGISTER</button>
                                
                                
                                {/* <div className="login-more">
                                   
                                    <span className="login-more__title">Login using</span>
                                    <div className="login-more__icon">
                                        <span className="face"><i class="fab fa-facebook-f"></i></span>
                                        <span className="gg"><i class="fab fa-google-plus-g"></i></span>
                                        <span className="tw"><i class="fab fa-twitter"></i></span>
                                    </div>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
