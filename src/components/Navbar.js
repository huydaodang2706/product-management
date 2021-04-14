import React from 'react';

const Nav = (props) => {
    return (
        <ul className="nav flex-column col-md-2 sidebar px-0" id="navbarNavDarkDropdown">
            <li className="nav-item">
                <button 
                    className="btn btn-primary btn-lg mt-1"
                    onClick={() => props.onHandleSetRoute(0)}
                >
                    <i className="fal fa-tachometer"></i> &nbsp;
                    ダッシュボード
                </button>
            </li>
            <li className="nav-item" >
                <button 
                    className="btn btn-primary btn-lg mt-2"
                    onClick={() => props.onHandleSetRoute(1)}
                >
                    <i className="fal fa-shopping-bag"></i>
                    製品管理　　　　　
                </button>
            </li>
        </ul>


    )
}

export default Nav;
