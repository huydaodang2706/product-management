/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import DashboardItem from './DashboardItem'

export const Dashboard = () => {
    const [items, setItems] = useState([
        {
            type: 'product',
            icon: 'fa-shopping-bag dashboard-icon',
            name: 'Sản phẩm',
            quantity: '10'
        },
        {
            type: 'comment',
            icon: 'fa-clipboard-list dashboard-icon',
            name: 'Loại sản phẩm',
            quantity: "1"
        },
        {
            type: 'user',
            icon: 'fa-user-chart dashboard-icon',
            name: 'Người dùng',
            quantity: '10'
        },
        {
            type: 'advertisement',
            icon: 'fa-ad dashboard-icon',
            name: 'Quảng cáo',
            quantity: '100k'
        },
    ])
    return (
        <div className="col-md-10 px-0 content-box">
            <div className="col-md-10 px-0 content-box">
                <nav aria-label="breadcrumb" className="">
                    <div className="container-fluid breadcrumb-box">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a>
                                    <i className="fal fa-home-alt home-icon"></i>
                                </a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </div>
                </nav>
                
                <div className="container-fluid">
                    <div className="row">
                        <h1 className="page-title">Dashboard</h1>
                    </div>
                    <div className="row dashboard">
                        {
                            items.map((item, index) => {
                                return <DashboardItem 
                                    key={index}
                                    item={item}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
