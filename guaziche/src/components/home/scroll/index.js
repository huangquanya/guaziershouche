import BScroll from 'better-scroll'
import styled from 'styled-components'
import React,{useEffect} from 'react'
import style from '../../../style/GlobalStyle'
import { Link } from 'react-router-dom'




const Top = styled.div`
    height: .267rem /* 10/37.5 */;
    line-height: .267rem /* 10/37.5 */;
    display:flex;
    align-items:space-between;
    >div:first-of-type{
        height:100%;
        font:${style[".373rem /* 14/37.5 *//1.5 PingFangSC-Regular,helvetica neue,tahoma,arial,hiragino sans gb,microsoft yahei,sans-serif"]};
        font-size:${style["font-size-ss"]};
        color:${style["font-color-black"]};
    }
    >div:last-of-type{
        height:100%;
        font:${style[".373rem /* 14/37.5 *//1.5 PingFangSC-Regular,helvetica neue,tahoma,arial,hiragino sans gb,microsoft yahei,sans-serif"]};
        font-size:${style["font-size-ss"]};
        color:${style["font-color-grey"]};
    }
`

const Scroll = styled.div`
    width:100%;
    height: .6rem;
    position: relative;
    background-color: ${style["background-color"]};
    display:flex;

`
const ScrollItem = styled.div`
    height:100%;
    width:3rem;
    display: inline-block;
    flex: 0 0 auto;
    padding: 2px 2px;
    >img{
        display: inline-block;
        height:100%;
        width:50%;
    }
    >div>span{
        font-size:10px;
        line-height:10px;
        border-right:1px solid ${style["font-color-black"]}
    }
`

function ScrollBar(props) {
    useEffect(()=>{
        new BScroll('.scroll-wrapper',{
            scrollX:true,
            click:true
        })
    },[])
    
    return (
        <div>
            <Top>
                <div>您感兴趣的车有优惠了</div>
                <div>10分钟前更新</div>
            </Top>
            <Scroll className="scroll-wrapper">
                <ScrollItem>
                    <Link>
                        <img src="" alt=""/>
                        <div className="title"></div>
                        <div>
                            <span className="price">3.3万</span>
                            <p>首付9.9万开好车</p>
                        </div>
                    </Link>
                </ScrollItem>
                <ScrollItem>
                    <Link>
                        <img src="" alt=""/>
                        <div className="title"></div>
                        <div>
                            <span className="price">3.3万</span>
                            <p>首付9.9万开好车</p>
                        </div>
                    </Link>
                </ScrollItem>
                <ScrollItem>
                    <Link>
                        <img src="" alt=""/>
                        <div className="title"></div>
                        <div>
                            <span className="price">3.3万</span>
                            <p>首付9.9万开好车</p>
                        </div>
                    </Link>
                </ScrollItem>
                <ScrollItem>
                    <Link>
                        <img src="" alt=""/>
                        <div className="title"></div>
                        <div>
                            <span className="price">3.3万</span>
                            <p>首付9.9万开好车</p>
                        </div>
                    </Link>
                </ScrollItem>
            </Scroll>
        </div>
        
    )
}

export default ScrollBar