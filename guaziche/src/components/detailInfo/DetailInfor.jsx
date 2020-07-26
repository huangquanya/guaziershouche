import React from 'react';
import './DetailInfo.css';
import { Link } from 'react-router-dom';
// import Header from ''

function CarsInfomation() {

    return (
        <section className="detail-page">
            <div className="detail-header-wrapper">
                {/*
        <Header /> */}
            </div>
            <div className="main-layout">
                <div className="img-show">
                    <div className="pic-count">
                        <div className="pic-num">1/35</div>
                    </div>
                </div>
                <div className="car-info--box1">
                    <div className="pirce">
                        <div className="pirce-text">
                            <span className="pirce-num">7.60</span>
                            <span className="pirce-text--after"> 性价比分析</span>
                        </div>
                        <span className="yuanjia">原价7.76万|新车含税价11.81万</span>
                        <Link to="" className="feiyong-box">
                            <div className="feiyong">
                                <span className="fenqi">
                                    分期再减4100元
                    </span>
                                <span className="butie">
                                    补贴5000元
                    </span>
                            </div>
                            <div className="chakan">
                                <span className="chakan-text">查看</span>
                            </div>
                        </Link>
                    </div>
                    <div className="kuanshi">
                        <span className="car-name">纳智捷 优6 SUV 2018款 1.8T 经典天窗版</span>
                        <div className="car-type-box">
                            <span className="car-type">准新车</span>
                        </div>
                    </div>
                    <Link to="" className="gouchefangshi">
                        <div> <span className="fenqi-span">分期</span>
                            <span className="shoufu-span">首付一成 0.70 万开回家</span>
                        </div>
                        <span className="right-icon"></span>
                    </Link>
                    <Link to="" className="fuwu">
                        <div>
                            <span className="fuwu-text">服务</span>
                            <span className="fuwu-type1">30天全面保修</span>
                            <span className="fuwu-type2">1年或2万公里保障</span>
                        </div>
                        <span className="right-icon"></span>
                    </Link>
                    <Link to="" className="zaixianjiangche">
                        <div>
                            <span className="iconfont icon-zhibo"></span>
                            <span className="jiangche-text1">在线讲车</span>
                            <span className="jiangche-text2">语音咨询车况优惠</span>
                        </div>
                        <span className="jiangche-button">开启讲车</span>
                    </Link>
                </div>
                <div className="kongbaihe"></div>
                <Link to="" className="chuxiao">
                    <div>
                        <span className="iconfont icon-iconfontcuxiao"></span>
                        <span className="chuxiao-text1">月末好车惠</span>
                    </div>
                    <div>
                        <span className="chuxiao-text2">服务费最高直降4000元</span>
                        <span id="right-icon"></span>
                    </div>
                </Link>
                <div className="kongbaihe"></div>
                <div className="dangan">
                    <div className="dangan-header--wrapper">
                        <span className="dangan-title">车辆档案</span>
                        <Link to="" className="carInfo-link">咨询车辆详细信息</Link>
                    </div>
                    <div className="carInfo-content">
                        <Link to="" className="carInfo-item--title">
                            <span className="carInfo-item--text">空间大</span>
                            <span className="carInfo-item--text">油耗少</span>
                            <span className="carInfo-item--text">动力足</span>
                        </Link>
                        <div className="carInfo-detail--row">
                            <div className="carInfo-detail--item">
                                <span className="car-detail--item">表显示里程</span>
                                <span className="detail-num">0.9万公里</span>
                            </div>                     
                        <div className="carInfo-detail--item">
                            <span className="car-detail--item">上牌时间</span>
                            <span className="detail-num">2019-07</span>
                        </div>
                        <div className="carInfo-detail--item">
                            <span className="car-detail--item">变速箱</span>
                            <span className="detail-num">自动</span>
                        </div>
                    </div>
                    <div className="carInfo-detail--row">
                        <div className="carInfo-detail--item">
                            <span className="car-detail--item">排放量</span>
                            <span className="detail-num">1.8T</span>
                        </div>
                        <div className="carInfo-detail--item">
                            <span className="car-detail--item">登记证为准</span>
                            <span className="detail-num">1次过户</span>
                        </div>
                        <div className="carInfo-detail--item">
                            <span className="car-detail--item">车源编号</span>
                            <span className="detail-num">95327723</span>
                        </div>
                    </div>
                    <div className="carInfo-detail--row">
                        <div className="carInfo-detail--item">
                            <span className="car-detail--item">准入情况</span>
                            <Link to="" className="detail-num--link">查迁入标准</Link>
                        </div>
                        <div className="carInfo-detail--item">
                            <span className="car-detail--item">购车方式</span>
                            <Link to="" className="detail-num--link">查购车步骤</Link>
                        </div>
                        <div className="carInfo-detail--item">
                            <span className="car-detail--item">车源</span>
                            <Link to="" className="detail-num--link">查车源地</Link>
                        </div>
                    </div>
                    <div >
                        <Link to="" className="dangan-canshu--wrapper">
                            <span className="dangan-canshu--text">查看全部参数配置</span>
                        </Link>
                    </div >
                </div>
            </div>
                <div class="kongbaihe"></div>
                <div class="shouhou">
                    <div class="shouhou-header">
                        <Link to="" class="shouhou-header">
                        <span class="shouhou-header--text1"></span>
                        <span class="shouhou-header--text2"></span>
                        <span class="shouhou-header--text3"></span>
                        </Link>
                    </div>
                    <div class="shouhou-content">
                        <div class="shouhou-content--box">
                            <ul class="shouhou-content--item">
                                <li>
                                    <Link to="" class="shouhou-item--box">
                                        <img class="shouhou-content--img" src="../../assets/fontImg/baoxiu.png"/>
                                        <p class="shouhou-content--text">30天全面保修</p>
                                    </Link> 
                                </li>
                                <li>
                                    <Link to="" class="shouhou-item--box">
                                        <img class="shouhou-content--img" src="../../assets/fontImg/baozhang.png"/>
                                        <p class="shouhou-content--text">1年或2万公里保障</p>
                                    </Link>    
                                </li>
                                <li>
                                    <Link to="" class="shouhou-item--box">
                                        <img class="shouhou-content--img" src="../../assets/fontImg/zhengbei.png"/>
                                        <p class="shouhou-content--text">专业整备</p>
                                    </Link>                
                                </li>
                                <li>
                                    <Link to="" class="shouhou-item--box">
                                        <img class="shouhou-content--img" src="../../assets/fontImg/guohu.png" />
                                        <p class="shouhou-content--text">过户服务</p>
                                    </Link>                          
                                </li>
                                <li>
                                    <Link to="" class="shouhou-item--box">
                                        <img class="shouhou-content--img" src="../../assets/fontImg/jiance.png"/>
                                        <p class="shouhou-content--text">259项检测</p>
                                    </Link>                    
                                </li>
                                <li>
                                    <Link to="" class="shouhou-item--box">
                                        <img class="shouhou-content--img" src="../../assets/fontImg/peifu.png"/>
                                        <p class="shouhou-content--text">调表车赔付</p>
                                    </Link>                  
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="kongbaihe"></div>
                <div class="gouchefuwu"></div>
                <div class="kongbaihe"></div>
                <div class="xuangouzhinan"></div>
                <div class="kongbaihe"></div>
         </div>
        </section >
    )
}

export default CarsInfomation;