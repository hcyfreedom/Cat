/**
 * Created by Acer on 2017/2/22.
 */
import React from 'react';  //引入react组件
class Top extends React.Component {
    render(){
        return(
            <div  style={topStyle}>

            </div>
        )
    }
}
var topStyle = {
    width:'100%',
    height:140,
    position:'fixed',
    zIndex:'2',
    background:'url(../imgs/top.png) no-repeat center center #e1d7d5'
}
export default Top;