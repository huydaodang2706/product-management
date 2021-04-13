import { useState, useEffect } from 'react';
import axios from 'axios';

import {URL} from '../constants';

// const STORAGE_KEY = 'itss-todo';

function useStorage() {
    const [items, setItems] = useState([]);
    　
    　/* 副作用を使う */
    useEffect(() => {
        const fetch =  async () => {
        await axios({
                method: 'GET',
                url: `${URL}/products`,
                data: null
            }).then(res => {
                console.log(res.data);
                setItems(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
        fetch();
        
    }, []);

    const addItem = item => {
        axios({
            method: 'POST',
            url:  `${URL}/products`,
            data: item
        }).then(res => {
            items.push(item);
            setItems([...items]);
        }).catch(err => {
            console.log(err);
        })
    }

    const putItem = async item => {
        console.log(item);
        await axios({
            method: 'PUT',
            url: `${URL}/products/${item.id}`,
            data: item
        }).then(res => {
            let product = items;
            const index = product.findIndex((ite)=>ite.id === item.id);
            product[index] = {...item};

            setItems([...product]);
        }).catch(err => console.error(err));
    };

    const deleteItem = id => {
        let product = items;
        const index = product.findIndex((item)=>item.id === id);
        product.splice(index, 1);
        
        setItems([...product]);
        axios({
            method: 'DELETE',
            url: `${URL}/products/${id}`,
            data: null
        }).then(res => {
            console.log(res.status);
        }).catch(err => {
            console.log(err);
        })
    };

return [items, addItem, putItem, deleteItem];
}

export default useStorage;