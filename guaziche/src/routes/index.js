import React from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../components/home/Home'
import SellCars from '../components/sellingCars/SellCars'
import BuyCars from '../components/buyCars/BuyCars'
import Message from '../components/message/Message'
import Mine from '../components/mine/Mine'
import BlankLayout from '../layouts/BlankLayout'
import BtbarLayout from '../layouts/BtbarLayout'

export default [{
    component:BlankLayout,
    routes:[{
        path:'/',
        component:BtbarLayout,
        routes:[
            {
                path: '/',
                exact:true,
                render:()=><Redirect to={"/home"} />
            },
            {
                path:'/home/',
                component:Home
            },
            {
                path:'/buy/',
                component:BuyCars
            },
            {
                path:'/sell',
                component:SellCars
            },            
            {
                path:'/message/',
                component:Message
            },            
            {
                path:'/mine/',
                component:Mine
            },
        ]
    }]
}]