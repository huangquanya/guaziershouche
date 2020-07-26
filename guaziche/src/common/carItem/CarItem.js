import React, { Component } from 'react';
import './CarItem.css';

class CarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { carImgUrl, carName, carDesc, carPrice } = this.props.item;
        return (
            <div className="car-item" >
                <div className="car-item__img">
                    <img width="100%" height="100%" src={carImgUrl} alt="" />
                </div>
                <div className="car-item__info">
                    <span className="car-item__name">{carName}</span>
                    <span className="car-item__desc">{carDesc.carYear}年 / {carDesc.carDistance}万公里</span>
                    <span className="car-item__price">{carPrice}万</span>
                </div>
            </div>
        );
    }
}

export default CarItem;