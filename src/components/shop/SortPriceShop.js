import React, {useState} from 'react'

export default function SortPriceShop(props) {
    const [value, setValue] = useState(0)
    let {data}= props
    let dataTemp 
    const handleSort = (e)=>{
        setValue(parseInt(e.target.value))
    }
    if(value ===0){
        dataTemp = [...data]
        
    }
        
    if(value === 1){
        dataTemp = [...data]
        dataTemp = dataTemp.sort((a,b)=>{
            console.log(a)
            return a.newPrice - b.newPrice
        })
    }
    if(value === 2){
        dataTemp = [...data]
        dataTemp = dataTemp.sort((a,b)=>{
            return b.newPrice - a.newPrice
        })   
    } 
    console.log(dataTemp)
    return (
        <div className="shop__content-sort--select">
            <select name="sortValue"
                    onChange={handleSort} >
                <option id="shop__content-sort--select-option" value={0}>Default sorting</option>
                <option value={1}>Price: low to high</option>
                <option value={2}>Price: high to low</option>
            </select>
        </div>
    )
}
