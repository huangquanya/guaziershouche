import React from 'react'
import { renderRoutes } from 'react-router-config'
// import { Bottom,Tab,TabItem } from './HomeLayout.style'
import Bottom from '../components/bottom/Bottom'

const Layout = ({route}) => 
<>
{renderRoutes(route.routes)}
<Bottom/>
</>

export default Layout;