import React, { useEffect } from 'react';
import Bottom from '../bottom/Bottom'
import './home.css'
// import Swiper styles
import 'swiper/swiper-bundle.css';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';







const Home = () => {
    useEffect(() => {

        new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: "bullets",
                clickable: true,
            },
        });
        new Swiper('.swiper-nav-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            // If we need pagination
            pagination: {
                el: '.nav-swiper-pagination',
                type: "bullets",
                clickable: true,
            },
        })
    }, [])
    return (
        <div>
            <header>
                <div className="header-position">南昌</div>
                <div className="header-input">搜索您要的车</div>
                <span className="header-help"></span>
            </header>
            {/* <!-- Slider main container --> */}
            <div className="swiper-container">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                    {/* <!-- Slides --> */}
                    <div className="swiper-slide">
                        <img src="https://image1.guazistatic.com/qn20071319330865f58a65c600c155d13d3dc2f8bd1a49.jpg?imageView2/2" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://image1.guazistatic.com/qn200615154818965d70a730ce1eb5972379d06e053cf6.jpg?imageView2/2" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://image1.guazistatic.com/qn200709150514ccad22dca2a153d39ee8ba782ebc02c8.jpg?imageView2/2" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://image1.guazistatic.com/qn2006281727166dd1335e50686488e3cdc8ed520d1339.jpeg?imageView2/2" alt="" />
                    </div>

                </div>
                {/* <!-- If we need pagination --> */}
                <div className="swiper-pagination"></div>
            </div>
            <div className="nav-page">
                
                <div className="swiper-nav-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <ul class="nav-con">
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image.guazistatic.com/gz01180305/12/20/96b37dbb3b487c72f79aafaed490a97a.png@base@tag=imgScale')" }}>二手车</a></li>
                                <li><a href="/nc/buy/r18/" style={{ 'background-image': "url('https://image.guazistatic.com/gz01180305/12/21/12fb30f1f90191d85b8b363b77fb2f88.png@base@tag=imgScale')" }} >严选车</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn19043010522775b65e5487c657695d90d46d3c7f5758.png?imageView2/2')" }}>全国购</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image.guazistatic.com/gz01180305/12/23/1b7bce567e7c115d1293743a7cb70e6d.png@base@tag=imgScale')" }}>新车</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn18112619164920a0eed1acce0c37ac891794bd545749.png?imageView2/2')" }}>限时秒抢</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image.guazistatic.com/gz01180305/12/22/b666429cc4ff1bce39b0def2ae765840.png@base@tag=imgScale')" }}>免费卖车</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image.guazistatic.com/gz01180305/12/24/a28caebe878c98a38209d392465550bb.png@base@tag=imgScale')" }}>快速卖车</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image.guazistatic.com/gz01180305/12/26/2973354ac9733fecb20ecb7c8cd23e86.png@base@tag=imgScale')" }}>估价</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn191220195224ebca878cc5265f75a92342f217ef86d0.png?imageView2/2')" }}>服务保障</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn181126180859537ea4799f54201331674eba5cb8ef1c.png?imageView2/2')" }}>严选店</a></li>
                            </ul>
                        </div>
                        <div className="swiper-slide">
                            <ul class="nav-con">
                                <li><a href="/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn1910221630042fa217e753b00d2e03c8a7b3b49d3d6a.png?imageView2/2')" }}>养车</a></li>
                                <li><a href="/nc/buy/r18/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn181126181048b6ac120b3db3c5f1b4450a2ba7c139b0.png?imageView2/2')" }} >查成交</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn1811261811252aa3504b910d552427e7d3a8d4ae8df5.png?imageView2/2')" }}>申请分期</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn18101815452846c77b3896c38126f8f9a16bc4c61202.png?imageView2/2')" }}>百科</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn1811261823183fe91ea525c6667ae9e0c69886a389aa.png?imageView2/2')" }}>热销排行</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn18101815352230ebbcae09007293d82e89739382e1ce.png?imageView2/2')" }}>准新车</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn18101814505887ea245e7227ba74150c331f3809a4ee.png?imageView2/2')" }}>热销</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn190517142033a0aae27b77167ad21369cf17ca67b896.jpg?imageView2/2')" }}>快速找车</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn181018153817d588fecd356871102a4bede5f0517565.png?imageView2/2')" }}>降价急售</a></li>
                                <li><a href="/nc/buy/" style={{ 'background-image': "url('https://image1.guazistatic.com/qn1810181539182a7c66ff9eef67e42ae5c40335bf44db.png?imageView2/2')" }}>今日超值</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-swiper-pagination"></div>
                </div>
            </div>
            <div className="recommend-cars-box">
                <div className="recommend-cars">
                    <div>
                        <img src="https://image.guazistatic.com/files/tag_img/22530.jpg" alt="" className="rcb-car-img" />
                    </div>
                    <div className="rcb-car-info">
                        <div>
                            根据您<span>点击</span>的车辆为您精心挑选
                        </div>
                        <div>
                            <div className="rcb-lable">
                                    2万以上
                            </div>
                            <div className="rcb-lable">
                                    吉普自由光
                            </div>
                        </div>
                    </div>
                    <div className="rcb-right-tip"></div>
                </div>
            </div>
            <Bottom />
        </div>
    )

}



export default Home