import React, { Component } from 'react';
import './mine.css';
import CarItem from '../../common/carItem/CarItem';


class Mine extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = {
            phone: '15179774911',
            cartNum: 12,
            compareNum: 36,
            dingyueNum: 458,
            scanNum: 789,
            couponNum: 6,
            carStr:'',
            carList: [
                {
                    carImgUrl: require('../../assets/img/car1.jpg'),
                    carName: '别克 君越 2018款 20T 豪华型',
                    carDesc: {
                        carYear: '2018',
                        carDistance: '1.6'
                    },
                    carPrice: 12.8
                },
                {
                    carImgUrl: require('../../assets/img/car1.jpg'),
                    carName: '本田 思域 2016款 220TURBOCTV豪华型',
                    carDesc: {
                        carYear: '2019',
                        carDistance: '1.75'
                    },
                    carPrice: 12.20
                },
                {
                    carImgUrl: require('../../assets/img/car1.jpg'),
                    carName: 'Smart smart fortwo 2016款 1.0L 52千瓦敞篷激情版',
                    carDesc: {
                        carYear: '2017',
                        carDistance: '2.92'
                    },
                    carPrice: 12.50
                },
                {
                    carImgUrl: require('../../assets/img/car1.jpg'),
                    carName: '马自达 阿特兹 2020款 2.5L 蓝天运动版',
                    carDesc: {
                        carYear: '2020',
                        carDistance: '0.02'
                    },
                    carPrice: 17.48
                },
                {
                    carImgUrl: require('../../assets/img/car1.jpg'),
                    carName: '大众 高尔夫 2018款 230TSI 自动豪华型',
                    carDesc: {
                        carYear: '2018',
                        carDistance: '2.03'
                    },
                    carPrice: 12.20
                }
            ]
        }
    }

   

    render() {
        let { carList } = this.state;

        return (
            <div className="mine">
                <header className="mine-header">
                    <div className="mine-header-blank"></div>
                    <svg className="mine-icon mine-setting" aria-hidden="true">
                        <use xlinkHref="#icon-shezhi"></use>
                    </svg>
                </header>
                <div className="mine-phone-button">
                    <div className="mine-phone">您好，{this.state.phone}</div>
                    <div className="mine-button">切换至车主模式</div>
                </div>
                <div className="mine-items">
                    <div className="mine-item">
                        <span className="mine-item-num">{this.state.cartNum}</span>
                        <span>购物车</span></div>
                    <div className="mine-item">
                        <span className="mine-item-num">{this.state.compareNum}</span>
                        <span>我的对比</span></div>
                    <div className="mine-item">
                        <span className="mine-item-num">{this.state.dingyueNum}</span>
                        <span>我的订阅</span></div>
                    <div className="mine-item">
                        <span className="mine-item-num">{this.state.scanNum}</span>
                        <span>浏览记录</span></div>
                </div>
                <div className="white-line"></div>
                <div className="mine-items">
                    <div className="mine-item">
                        <svg className="mine-icon" aria-hidden="true">
                            <use xlinkHref="#icon-wangyueche"></use>
                        </svg>
                        <span className="mine-text">我的约看</span>
                    </div>
                    <div className="mine-item">
                        <svg className="mine-icon" aria-hidden="true">
                            <use xlinkHref="#icon-shouyetubiao2-18"></use>
                        </svg>
                        <span className="mine-text">我买的车</span>
                    </div>
                    <div className="mine-item">
                        <svg className="mine-icon" aria-hidden="true">
                            <use xlinkHref="#icon-naoling"></use>
                        </svg>
                        <span className="mine-text">降价提醒</span>
                    </div>
                    <div className="mine-item">
                        <svg className="mine-icon" aria-hidden="true">
                            <use xlinkHref="#icon-jilu"></use>
                        </svg>
                        <span className="mine-text">砍价记录</span>
                    </div>
                </div>
                <div className="white-line"></div>
                <div className="mine-myshare">
                    <h3>我的专享</h3>
                    <div className="mine-myshare-content">
                        <div className=" mine-myshare-item">
                            <span className="origine-color coupon">{this.state.couponNum}</span>
                            <span className="mine-word">优惠券</span>
                        </div>
                        <div className="test mine-myshare-item">

                            <span className="origine-color">测一测</span>
                            <span className="mine-word">贷款额度</span>
                        </div>
                    </div>
                </div>
                <div className="mine-common">
                    <h3>常用功能</h3>
                    <div className="mine-common-items">
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-icon_A"></use>
                            </svg>
                            <span className="mine-text">我的客服</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-xunhuanliyong"></use>
                            </svg>
                            <span className="mine-text">购车流程</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-xinxi"></use>
                            </svg>
                            <span className="mine-text">意见反馈</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-yinhangka"></use>
                            </svg>
                            <span className="mine-text">我要还款</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-dianhua7"></use>
                            </svg>
                            <span className="mine-text">屏蔽打扰</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-71_wenjuan"></use>
                            </svg>
                            <span className="mine-text">问卷调查</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-shenghuoyongpin-"></use>
                            </svg>
                            <span className="mine-text">售后保障</span>
                        </div>
                        <div className="mine-common-item">

                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-drxx41"></use>
                            </svg>
                            <span className="mine-text">消息设置</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-tousugongdan"></use>
                            </svg>
                            <span className="mine-text">服务热线</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-ziyuan"></use>
                            </svg>
                            <span className="mine-text">瓜子养车</span>
                        </div>
                        <div className="mine-common-item"></div>
                        <div className="mine-common-item"></div>
                    </div>
                </div>
                <div className="white-line"></div>
                <div className="mine-recommend">
                    <h3>为你推荐</h3>
                    <div className="mine-recommend-banner">
                        <img width="100%" height="100%" src="" alt="" />
                    </div>
                    <div className="mine-recommend-items">
                        {
                            carList.map((item, index) => {
                                return (
                                    <CarItem
                                        item={item}
                                        index={index}
                                        key={index + item}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Mine