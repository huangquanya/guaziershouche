import React from 'react';
import './sellingCars.css'

const list = [{ carband: '大众' }, { carband: '大众' }, { carband: '大众' }, { carband: '大众' }, { carband: '大众' }, { carband: '大众' }, { carband: '大众' }, { carband: '大众' }, { carband: '大众' }, { carband: '更多' }]

const SellingCars = () => {
    return (
        <div className="sell-page">
            <div className="sell-head">
                <h1>我要卖车</h1>
                <span className="sell-head-icon">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAABGdBTUEAALGPC/xhBQAAAURQTFRFYGdwYGdxYGhxY3FxYGdwYWZ0YGdxX2ZwYGhxYWlxYGZxX2ZwYGdxZmZzX2VwYGdwYGdyX2dxYmd0YWdxYmdyYGdxdHR0X2dwYGdxYGdwYGZwYGdxYWdwX2ZxYGdyX2hwX2ZwgICAYGdxqqqqZmZ3YWdzY2dzYGZyYGdwgICAYGhyYGp1YmhxYGlxZGl0YWhxX2ZwX2dxX2dxYGpzYGZxX2dwY2tzY2pxYGdxX2dwY2h0YGdwX2ZyYGdyX2lzYGdxYGZwX2ZxYGZxX2dyX2ZwYGZxYGZwX2dxa2t5X2ZxYmZzX2ZwX2dxX2dwX2dxX2ZwYICAYGdxYWZwYGdyX2ZxYGdwZmZ3X2ZwYGZwX2dxYGZxX2ZxX2dxYWdyYmdxZGx0X2dxYGdyYGZwZGp2gICAX2ZxYGdx////X2dxYWdzAAAAX2ZwjHEPoAAAAGt0Uk5Tn+dYErg3muGFP6D71RTP2HdjOYEvvQvTx/jql1TbzHZrAmoDDyo+VY0GgDBWPS5s/MyrNfehHySwwSxtm6Qzsu/ZxYvcp+iZE7k8ts7s9tYIimSUvqge/q/74PSeVzQhZnL6KQTm/QGzWQD6iHXZAAABZUlEQVQ4y9XVVX/CMBAAcObu7u7uPjYcNobbKFClY/n+77uyLiQlKTyye8vdv/2l1/Tq+G46HK1GOwqCy5PPe1yO9oAtDXWWEY5ycJtL75PIEnfHbCp+VMttXrckub2+6mJulUF1wSjJ/qJurot+2cg8bdTRBSOfLZGbK2WNnKBb6D4kc5K1P1IO0jGaXpzCEy/W9/IQOpIJkXRvBq5eZ/X9AQqvUYKOQcLJfkdvUDoh6DtC+TSblqCFgzU6DlcmeK++G4p9mE7AapJHu6DYiynsZ4R/onoQCmIaRmiYT+FBwpgaxyiZGh2qZ9FKrH8AyiQ1wvdslTcRs2SlKKLScm0W8Sg6oOkW4tMCTXdsaIWmlf9NPxtRDdPHRjSFaeDvtkWaHpnpl3TtK9jcPdM0bWnFegYSlwDnz6+bmYS6qqo2Q1OJi2JcaWa+KtX5Iys29OrrN5aZJ4eit+S0zExNt/5vwyZ+AE6Owbon130rAAAAAElFTkSuQmCC" alt="" />
                </span>
            </div>
            <div className="sell-main">
                <div className="sell-banner">

                </div>
                <div className="sell-content">
                    <div className="sell-car-box">
                        <img src="https://image.guazistatic.com/files/brand/1207.png" className="sell-box_brand-img" alt="" />
                        <div className="cell-box_title">
                            看看您的爱车值多少钱
                            </div>
                        <div className="active-show">
                            <div className="sell-box_value sell-box_header">
                                请选择品牌车系
                                </div>
                            <div className="sell-box_brand">
                                {
                                    list.map(i => {
                                        return (
                                            <div className="sell-box_brand-item">
                                                <img src="https://image.guazistatic.com/files/brand/1207.png" alt="" />
                                                <p>{i.carband}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="sell-box_other">
                            <div className="sell-box_otherwrap">
                                <div className="sell-box_lable">
                                    品牌车系
                                    </div>
                                <div className="sell-box_value">
                                    {`大众 捷达`}
                                </div>
                            </div>
                        </div>
                        <div className="sell-box_other">
                            <div className="sell-box_data">
                                <div className="sell-box_lable">
                                    上牌时间
                                        </div>
                                <div className="sell-box_value">
                                    请选择上牌时间
                                    </div>
                            </div>
                            <div className="sell-box_mile">
                                <div className="sell-box_lable">
                                    行驶里程
                                    </div>
                                <div className="sell-box_value">
                                    请选择行驶里程
                                    </div>
                            </div>
                        </div>
                        <div className="sell-box_btns">
                            <div className="sell-box_direct">
                                先估个价
                            </div>
                            <div className="sell-box_evaluate">
                                高价卖车
                            </div>
                        </div>
                    </div>
                    <div className="sell-car-qotation">
                        <h2 className="sell-qotation_title">
                            瓜子报价优势
                        </h2>
                        <div className="sell-market">
                            <div className="sell-market_item sell-market_item-flag">
                                <img className="sell-market_logo" src="https://image.guazistatic.com/gz01200102/11/51/16122dba1466c1a8e459bfc2bfdb2002.png" alt="" />
                                <span className="sell-market_lable">南昌</span>
                            </div>
                            <div className="sell-market_item">
                                <div className="sell-market_data">
                                    1982
                                    <span className="sell-market_unit">辆</span>
                                </div>
                                <span className="sell-market_lable">
                                    当前在售
                                </span>
                            </div>
                            <div className="sell-market_item">
                                <div className="sell-market_data">
                                    1341
                                    <span className="sell-market_unit">辆</span>
                                </div>
                                <span className="sell-market_lable">
                                    近半年售出
                                </span>
                            </div>
                        </div>
                        <div className="sell-trade">
                            <div className="sell-trade_item">
                                <div className="sell-trade_head">
                                    <span className="sell-trade_buyer">罗先生</span>
                                    <span className="sell-trade_city">南昌</span>
                                    <span className="sell-trade_time">刚刚签约</span>
                                </div>
                                <div className="sell-trade_main">
                                    <img src="https://image1.guazistatic.com/qn200607130523c7f531f6452dd50161193571364d62d8.jpg?imageView2/2/w/480/h/320" alt="" />
                                    <div className="sell-trade_content">
                                        <div className="sell-trade_title">
                                            {`大众 捷达 2019款 梦想版 
                                    1.5L 自动时尚型`}
                                        </div>
                                        <div className="trade_price">
                                            <div className="sell-trade_price-guazi">
                                                <h2>瓜子价</h2>
                                                <p>6.5万</p>
                                            </div>
                                            <div className="sell-trade_price-vs">
                                                <img src="https://sta.guazistatic.com/c2c-prerender/img/f846e66.png" alt="" />
                                            </div>
                                            <div className="sell-trade_price-shichang">
                                                <h2>市场价</h2>
                                                <p>5.5万</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sell-trade_item">
                                <div className="sell-trade_head">
                                    <span className="sell-trade_buyer">罗先生</span>
                                    <span className="sell-trade_city">南昌</span>
                                    <span className="sell-trade_time">刚刚签约</span>
                                </div>
                                <div className="sell-trade_main">
                                    <img src="https://image1.guazistatic.com/qn200607130523c7f531f6452dd50161193571364d62d8.jpg?imageView2/2/w/480/h/320" alt="" />
                                    <div className="sell-trade_content">
                                        <div className="sell-trade_title">
                                            {`大众 捷达 2019款 梦想版 
                                    1.5L 自动时尚型`}
                                        </div>
                                        <div className="trade_price">
                                            <div className="sell-trade_price-guazi">
                                                <h2>瓜子价</h2>
                                                <p>6.5万</p>
                                            </div>
                                            <div className="sell-trade_price-vs">
                                                <img src="https://sta.guazistatic.com/c2c-prerender/img/f846e66.png" alt="" />
                                            </div>
                                            <div className="sell-trade_price-shichang">
                                                <h2>市场价</h2>
                                                <p>5.5万</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="sell-car-guide">
                        卖车流程与指南
                        </div>
                    <div className="sell-car-advantage">
                        瓜子卖车优势
                        </div>
                </div>
            </div>
        </div>
    );
}

export default SellingCars;