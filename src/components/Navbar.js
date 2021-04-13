import React from 'react';

const Nav = (props) => {
    return (
        <ul className="nav flex-column col-md-2 sidebar px-0" id="navbarNavDarkDropdown">
            <li className="nav-item">
                <button 
                    className="btn btn-primary btn-lg mt-1"
                    onClick={() => props.onHandleSetRoute(0)}
                >
                    <i className="fal fa-tachometer-alt-average"></i> &nbsp;
                    Dashboard
                </button>
            </li>
            <li className="nav-item" >
                <button 
                    className="btn btn-primary btn-lg mt-2"
                    onClick={() => props.onHandleSetRoute(1)}
                >
                    <i className="fal fa-shopping-bag"></i>
                    Quản lý sản phẩm
                </button>
            </li>
        </ul>


    )
}

export default Nav;
