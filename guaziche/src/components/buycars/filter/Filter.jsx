import React from 'react';
import {Link} from 'react-router-dom';
import './Filter.css';

function Filter(){

    return(
        <div className="filter">
                <div className="filter-nav">
                    <Link to="" className="nav-item order">
                        <span>智能选车</span>
                    </Link>
                    <Link to="" className="nav-item brand">
                        <span>品牌</span
                    ></Link>
                    <Link to="" className="nav-item price">
                        <span>价格</span>
                    </Link>
                    <Link to="" className="nav-item option">
                        <span>筛选</span>
                    </Link>
                </div>
                <div className="filter-nav-third">
                    <Link to="" className="third-nav-item-icon yanxuan">严选好车</Link>
                    <Link to="" className="third-nav-item-icon dijia">全国低价</Link>
                    <Link to="" className="third-nav-item-icon xinche">准新车</Link>
                    <Link to="" className="third-nav-item-icon miaoqiang">限时秒抢</Link>
                </div>
        </div>
    )
}

export default Filter;
