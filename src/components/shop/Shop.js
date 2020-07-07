import React, {useEffect} from 'react'
import ShopTop from './ShopTop'
import ShopContainer from './ShopContainer'
import productApi from '../../api/productsApi'
export default function Shop() {
    useEffect(() => {
       const fetchProductList = async () =>{
           try {
            const params = {
                _page: 1,
                _limit: 10,
      
              };
              const response = await productApi.getAll();
              console.log(response);
              
           } catch (error) {
               console.log('Failed to fetch products api: ', error)
           }
       }
       fetchProductList()
    }, [])
    return (
        <div className="grid">
            <ShopTop/>
            <ShopContainer/>
        </div>

    )
}
