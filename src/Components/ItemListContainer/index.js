import React, { useEffect, useState } from 'react'
import "./styles.css";
import ItemCount from "../ItemCount/itemCount";
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/fakeApi'

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)

    //tratar la promesa con then catch finally
        useEffect(()=>{
        getData
        .then((result)=> setProductList(result))
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false) )
        },[])

    const onAdd = (quantity) =>{
        console.log(`¡Compraste ${quantity} unidades!`);
    }

    return(
        <>
        <div className="landing">
            <span>{greeting}</span>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
        <div>
        <h1>{greeting}</h1>
        {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
        
      </div>
        </>
    );
};

export default ItemListContainer;