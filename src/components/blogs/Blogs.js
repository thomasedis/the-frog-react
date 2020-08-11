import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
export default function Blogs() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="grid blog-wrapper">
            <div className="grid wide">
                <div className="blog">
                    <h1>COMING SOON</h1>
                </div>
            </div>   
        </div>
    )
}
