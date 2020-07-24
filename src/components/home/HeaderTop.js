import React from 'react'
import {Link} from 'react-router-dom'
export default function HeaderTop() {
    return (
        <div className="grid">
            <div className="headerTop-wrapper">
                <div className="row no-gutters">
                    <div className="grid wide headerTop ">
                    <div className="l-6 m-6 c-6 headerTop__left">
                        <ul>
                        <li>
                            <span className="icon"><i className="fa fa-phone" aria-hidden="true" /></span>
                            <span className="item">CONTACT US</span> 
                        </li>
                        <li>
                            <span className="icon"><i className="fa fa-globe-americas" aria-hidden="true" /></span>
                            <span className="item">LANGUAGE</span> 
                        </li>
                        </ul>
                    </div>
                    <div className="l-6 m-6 c-6 headerTop__right">
                        <div>
                        <span className="icon"><i className="fa fa-user" aria-hidden="true" /></span> <Link to="/account" className="item">LOGIN</Link> / <Link to="/account/register" className="item">REGISTER</Link> 
                        </div>
                    </div>
                </div>
            </div>
            </div>    
        </div>
  
    )
}
