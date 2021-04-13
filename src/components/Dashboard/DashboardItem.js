import React from 'react';

const DashboardItem = (props) => {
    return (
        <div className="col-md-3">
            <div className={`dashboard-info ${props.item.type}`}>
                <div className="row h-100">
                    <div className="col-md-5 icon">
                        <i className={`fal ${props.item.icon}`}></i>
                    </div>
                    <div className="col-md-7 info">
                        <div className="quantity">{props.item.quantity}</div>
                        <div className="discription">{props.item.name}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardItem;
