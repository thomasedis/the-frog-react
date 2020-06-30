import React from 'react'

export default function HeaderTop() {
    return (
        <div className="grid">
            <div className="headerTop-wrapper">
            <div className="grid wide headerTop ">
                <div className="row no-gutters">
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
                    <span className="icon"><i className="fa fa-user" aria-hidden="true" /></span> <span className="item">LOGIN</span> / <span className="item">REGISTER</span> 
                    </div>
                </div>
                </div>
            </div>
            </div>    
        </div>
  
    )
}
