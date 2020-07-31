import React from 'react';
import { Link } from 'react-router-dom'
import './bottom.css'

function Bottom() {
    return (
        <footer>
            <div className="foot-wrapper">
                <Link to='/' className="lnk">
                    <span className="iconfont icon-fangzi"></span>
                    <div>首页</div>
                </Link>
                <Link to='/buy/' className="lnk">
                    <span className="iconfont icon-qiche"></span>
                    <div>买车</div>
                </Link>
                <Link to='/sell/' className="lnk">
                    <span className="iconfont icon-qiandai"></span>
                    <div>卖车</div>
                </Link>
                <Link to='/message/' className="lnk">
                    <span className="iconfont icon-xiaoxi"></span>
                    <div>消息</div>
                </Link>
                <Link to='/mine/' className="lnk">
                    <span className="iconfont icon-geren"></span>
                    <div>我的</div>
                </Link>
            </div>
        </footer>

    )
}

export default Bottom