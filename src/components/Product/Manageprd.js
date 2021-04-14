/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {useState} from 'react';

import ProductList from './ProductList';
import {Addproduct} from './Addproduct';
import {Editproduct} from './Editproduct';

import useStorage from '../../hooks/useStograte';

export const Manageprd = (props) => {

    const [filter, setFilter] = useState('');
    const [modal, setModal] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [id, setId] = useState(0);
    const [item, setItem] = useState({});
    const [items, addItem, putItem, deleteItem] = useStorage([]);
    
    let products = items;
    
    const handleDelete = (id) => {
        deleteItem(id);
    }
    
    const handleEdit = (item) => {
        putItem(item);
        setModalEdit(false);
    }
    
    if (filter) {
        products = items.filter(item => {
            return item.name_prd.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        });
    }
    
    const onHandleAdd = (item) => {
        addItem(item);
        setModal(false);
    }
    
    const handleGetItem = (id) => {
        setId(id);
        let ite = items.find(item => item.id === id);
        setItem(ite);
        setModalEdit(true);
    }

    return (
        <div className="col-md-10 px-0 content-box">
            <nav aria-label="breadcrumb" className="">
                    <div className="container-fluid breadcrumb-box">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="#">
                                    <i className="fal fa-home-alt home-icon"></i>
                                </a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">製品管理</li>
                        </ol>
                    </div>
            </nav>
            
            <div className="container-fluid">
                <div className="row">
                    <h1 className="page-title">製品管理</h1>
                </div>
                <br></br>
                <div className="row product-manage container">
                    <div className="px-0 mb-3 f-lex">
                        <button type="button" className="btn btn-success" onClick={()=>{setModal(true)}}>
                            <i className="fas fa-plus"></i> 新しく追加
                        </button>
                        <input 
                            className="input-filter" 
                            type="text" 
                            placeholder="探索..." 
                            onChange={(e) => {setFilter(e.target.value)}}
                        />
                    </div>             
                </div>
                <br></br>
                <ProductList 
                    items={products}
                    handleDelete={handleDelete}
                    handleGetItem={handleGetItem}
                />
            </div>
            {
                modal && <Addproduct 
                    onHandleSetModal={setModal} 
                    onHandleAdd={onHandleAdd}
                />
            }
            {
                modalEdit && <Editproduct 
                    id={id} 
                    item={item}
                    onHandleSetModal={setModalEdit}
                    handleEdit={handleEdit}
                />
            }
        </div>
    )
}
