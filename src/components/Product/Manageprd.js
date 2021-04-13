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
                            <li className="breadcrumb-item active" aria-current="page">Quản lý sản phẩm</li>
                        </ol>
                    </div>
            </nav>
            
            <div className="container-fluid">
                <div className="row">
                    <h1 className="page-title">Quản lý sản phẩm</h1>
                </div>
                <br></br>
                <div className="row product-manage container">
                    <div className="px-0 mb-3 f-lex">
                        <button type="button" className="btn btn-success" onClick={()=>{setModal(true)}}>
                            <i className="fas fa-plus"></i> Thêm mới sản phẩm
                        </button>
                        <input 
                            className="input-filter" 
                            type="text" 
                            placeholder="Search.." 
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
                    onHandleSetModal={setModalEdit}
                    handleEdit={handleEdit}
                />
            }
        </div>
    )
}
