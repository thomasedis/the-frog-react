import React from 'react'

export default function Pagination({handlePre, handleNext}) {
    const handlePree = ()=>{
        handlePre()
    }
    const handleNextt = ()=>{
        handleNext()
    }
    return (
        <div className="shop__content-pagination">
            <div className="shop__content-pagination--wrap">
                <ul>
                <li onClick={handlePree}><span><i className="fa fa-chevron-left" aria-hidden="true" /></span></li>
                <li className="shop__content-pagination--active"><a href="/s">1</a></li>
                <li><a href="/s">2</a></li>
                <li><a href="/s">3</a></li>
                <li onClick={handleNextt}><span><i className="fa fa-chevron-right" aria-hidden="true" /></span></li>
                </ul>
            </div>
        </div>
        
    )
}
