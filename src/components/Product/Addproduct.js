/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';



export const Addproduct = (props) => {

    const [form, setForm] = useState({
        id: null,
        name_prd: '',
        price: 0,
        cate_id: 1,
        image: '',
        is_sale: false,
        is_hot: false,
        desc: '',
    })

    const handleAdd = (e) => {
        e.preventDefault();
        if (form.id) {
            props.handleEdit(form);
        } else {
            props.onHandleAdd(form);
        }
    }
    
    const onHandleReset = () => {
        setForm({
            name_prd: '',
            price: 0,
            cate_id: 1,
            image: '',
            is_sale: false,
            is_hot: false,
            desc: '',
        })
    }
    
    const onHandleClose = () => {
        onHandleReset();
        props.onHandleSetModal(false)
    }
    

    return (
        <div className="modal fade show" tabIndex="-1" style={{display: 'block'}} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">製品追加</h5>
                <button 
                    type="button" 
                    className="btn-close" 
                    aria-label="Close"
                    onClick={()=>{onHandleClose()}}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAdd}>
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="form-group">
                                <label>	製品名</label>
                                <input onChange={(e) => setForm({ ...form, name_prd: e.target.value })}
                                    name="name"
                                    className="form-control"
                                    placeholder=""
                                    value={form.name_prd}
                                />
                            </div>
                            <div className="form-group">
                                <label>イメージ</label>
                                <input required name='image' id="product-image-input" type="file" 
                                    onChange={(e)=>{
                                        setForm({...form, image: e.target.files[0].name.split('.', 1)});
                                    }}
                                />&nbsp;
                                {form.image && <div className="image-box">
                                    <img 
                                        id="product-image" 
                                        src={form.image? require(`./Image/${form.image}.jpg`).default:''} 
                                        className="w-75" 
                                        width={80} height={100}
                                    />
                                </div>}
                            </div>
                            <div className="form-group mt-2">
                                <label>価格</label>
                                <input onChange={(e) => setForm({ ...form, price: e.target.value })}
                                    name="price"
                                    type="number"
                                    className="form-control"
                                    value={form['price']}
                                />
                            </div>
                            <div className="form-group mt-2">
                                <label>状態</label>
                                <div className="checkbox">
                                    <label>
                                        セール
                                    </label> &nbsp;
                                    <input 
                                        name="is_sale" type="checkbox" 
                                        onChange={(e) => e.target.checked ? setForm({...form, is_sale: true}) : setForm({...form, is_sale: false})} 
                                        value = {form['is_sale']}
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label>ホット製品</label>
                                <div className="checkbox">
                                    <label>
                                        ホット
                                    </label>&nbsp;
                                    <input 
                                        name="is_top" type="checkbox" 
                                        onChange = {(e) => e.target.checked ? setForm({...form, is_hot: true}) : setForm({...form, is_hot: false})}
                                        value = {form['is_hot']}
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label>記述</label>
                                <textarea 
                                    name="discription" 
                                    className="form-control desc" rows="3" col="10"
                                    onChange = { (e) => setForm({...form, desc:e.target.value})}
                                    value = {form['desc']}   
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 mt-4 text-right">
                            <button name="sbm" type="submit" className="btn btn-success" onClick={handleAdd}>Save</button>{'  '}
                            <button type="reset" className="btn btn-warning" onClick={onHandleReset}>Reset</button>
                        </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}