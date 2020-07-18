import React from 'react';
import Bottom from '../bottom/Bottom'
import './home.css'

function Home() {
    return(
        <div>
            <header>
                <div className="header-position">南昌</div>
                <div className="header-input">搜索您要的车</div>
                <span className="header-help"></span>
            </header>
            <Bottom/>
        </div>
    )
}

export default Home