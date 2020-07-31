import React, { Component } from 'react';
import './message.css';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <header className="message-header">
                    <span className="message-text">消息中心</span>
                    <span className="message-setting">设置</span>
                </header>
                <div className="message-content">
                    <div className="message-item">
                        <div className="message-item-avatar"><img width="100%" height="100%" src={require("../../assets/img/car1.jpg")} alt="" /></div>
                        <div className="message-item-info">
                            <span className="message-item-info__name message-block">客服通知</span>
                            <span className="message-item-info__content message-block">请问有什么可以帮您？</span>
                        </div>
                        <span className="message-item-time">13:38</span>
                    </div>
                </div>
                <div className="message-recommend">
                    <h3>热门推荐</h3>
                    <div className="message-recommend-banner">
                        <img width="100%" height="100%" src="" alt="" />
                    </div>
                </div>
            </>
        );
    }
}

export default Message;