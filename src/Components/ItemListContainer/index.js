import React, { useEffect, useState } from 'react'
import "./styles.css";
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/fakeApi'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)

    const {categoryId} = useParams();

        useEffect(()=>{
            getData(categoryId)
            .then((res) => {
                setProductList(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            }); 
        }, [categoryId]);

    return(
        <>
        <div>
        <h1>{greeting}</h1>
            {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
        </div>
        </>
    );
};

export default ItemListContainer;