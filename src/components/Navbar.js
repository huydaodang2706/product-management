import React from 'react';

const Nav = (props) => {
    return (
        <ul className="nav flex-column col-md-2 sidebar px-0" id="navbarNavDarkDropdown">
            <li className="nav-item">
                <button 
                    style={{background: '#2B60DE', width: '200px', height: '50px', color: '#FFF', margin: '5px', border:'none'}}
                    onClick={() => props.onHandleSetRoute(0)}
                >
                    <i className="fal fa-tachometer"></i>
                    ダッシュボード       
                </button>
            </li>
            <li className="nav-item" >
                <button 
                    style={{background: '#2B60DE', width: '200px', height: '50px',  color: '#FFF', margin: '5px', border: 'none'}}
                 
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
