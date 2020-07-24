import React from 'react';
import './sellingCars.css'

const list=[{carband:'大众'},{carband:'大众'},{carband:'大众'},{carband:'大众'},{carband:'大众'},{carband:'大众'},{carband:'大众'},{carband:'大众'},{carband:'大众'},{carband:'更多'}]

const SellingCars = ()=> {
        return (
            <div className="sell-page">
                <div className="sell-head">
                    <h1>我要卖车</h1>
                    <span className="sell-head-icon">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAABGdBTUEAALGPC/xhBQAAAURQTFRFYGdwYGdxYGhxY3FxYGdwYWZ0YGdxX2ZwYGhxYWlxYGZxX2ZwYGdxZmZzX2VwYGdwYGdyX2dxYmd0YWdxYmdyYGdxdHR0X2dwYGdxYGdwYGZwYGdxYWdwX2ZxYGdyX2hwX2ZwgICAYGdxqqqqZmZ3YWdzY2dzYGZyYGdwgICAYGhyYGp1YmhxYGlxZGl0YWhxX2ZwX2dxX2dxYGpzYGZxX2dwY2tzY2pxYGdxX2dwY2h0YGdwX2ZyYGdyX2lzYGdxYGZwX2ZxYGZxX2dyX2ZwYGZxYGZwX2dxa2t5X2ZxYmZzX2ZwX2dxX2dwX2dxX2ZwYICAYGdxYWZwYGdyX2ZxYGdwZmZ3X2ZwYGZwX2dxYGZxX2ZxX2dxYWdyYmdxZGx0X2dxYGdyYGZwZGp2gICAX2ZxYGdx////X2dxYWdzAAAAX2ZwjHEPoAAAAGt0Uk5Tn+dYErg3muGFP6D71RTP2HdjOYEvvQvTx/jql1TbzHZrAmoDDyo+VY0GgDBWPS5s/MyrNfehHySwwSxtm6Qzsu/ZxYvcp+iZE7k8ts7s9tYIimSUvqge/q/74PSeVzQhZnL6KQTm/QGzWQD6iHXZAAABZUlEQVQ4y9XVVX/CMBAAcObu7u7uPjYcNobbKFClY/n+77uyLiQlKTyye8vdv/2l1/Tq+G46HK1GOwqCy5PPe1yO9oAtDXWWEY5ycJtL75PIEnfHbCp+VMttXrckub2+6mJulUF1wSjJ/qJurot+2cg8bdTRBSOfLZGbK2WNnKBb6D4kc5K1P1IO0jGaXpzCEy/W9/IQOpIJkXRvBq5eZ/X9AQqvUYKOQcLJfkdvUDoh6DtC+TSblqCFgzU6DlcmeK++G4p9mE7AapJHu6DYiynsZ4R/onoQCmIaRmiYT+FBwpgaxyiZGh2qZ9FKrH8AyiQ1wvdslTcRs2SlKKLScm0W8Sg6oOkW4tMCTXdsaIWmlf9NPxtRDdPHRjSFaeDvtkWaHpnpl3TtK9jcPdM0bWnFegYSlwDnz6+bmYS6qqo2Q1OJi2JcaWa+KtX5Iys29OrrN5aZJ4eit+S0zExNt/5vwyZ+AE6Owbon130rAAAAAElFTkSuQmCC" alt=""/>
                    </span>
                </div>
                <div className="sell-main">
                    <div className="sell-banner">
                        
                    </div>
                    <div className="sell-content">
                        <div className="sell-car-box">
                            <img src="https://image.guazistatic.com/files/brand/1207.png" className="sell-box_brand-img" alt=""/>
                            <div className="cell-box_title">
                                看看您的爱车值多少钱
                            </div>
                            <div className="active-show">
                                <div className="sell-box_value sell-box_header">
                                    请选择品牌车系
                                </div>
                                <div className="sell-box_brand">
                                    {
                                       list.map(i=>{
                                           return(
                                            <div className="sell-box_brand-item">
                                            <img src="https://image.guazistatic.com/files/brand/1207.png" alt=""/>
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
                            瓜子报价优势
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