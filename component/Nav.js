/**
 * Created by Acer on 2017/2/21.
 */
import React from 'react';  //引入react组件
import NavItem from './NavItem';
import {Link} from 'react-router-dom';
class Nav extends React.Component {  //定义组件，也可以用React.createClass方法创建组件
    constructor(){
        super();
  let items = [
        {
            src:'../imgs/Aboutus.png',
            hoverSrc:'../imgs/AboutusM.png',
            clickSrc:'../imgs/AboutusP.png',
            href: '/about',
        },
        {
            src:'../imgs/Aboutragdoll.png',
            hoverSrc:'../imgs/AboutragdollM.png',
            clickSrc:'../imgs/AboutragdollP.png',
            href: '/ragdoll',
        },{
            src:'../imgs/Kings.png',
            hoverSrc:'../imgs/KingsM.png',
            clickSrc:'../imgs/KingsP.png',
            href: '/kings',
        },{
            src:'../imgs/navmid.png',
            hoverSrc:'../imgs/navmid.png',
            clickSrc:'../imgs/navmid.png',
            href: '/',
        },{
            src:'../imgs/Queens.png',
            hoverSrc:'../imgs/QueensM.png',
            clickSrc:'../imgs/QueensP.png',
            href: '/queens',
        },{
            src:'../imgs/Plans.png',
            hoverSrc:'../imgs/PlansM.png',
            clickSrc:'../imgs/PlansP.png',
            href: '/plans',
        },{
            src:'../imgs/Kittens.png',
            hoverSrc:'../imgs/KittensM.png',
            clickSrc:'../imgs/KittensP.png',
            href: '/kittens',
        },{
            src:'../imgs/Contact.png',
            hoverSrc:'../imgs/ContactM.png',
            clickSrc:'../imgs/ContactP.png',
            href: '/contact',
        },
]
        this.state = {
            items:items
        }
    }
    render() {
        const navItems = this.state.items.map((ele,idx)=>{
            return <Link key={idx} to={ele.href}><NavItem  src={ele}/></Link>
        });
        return(
            <div style={navStyle}>
                <div style={navmid}>
                    {navItems}
                </div>
            </div>
        )
    }
}

var navStyle = {
    width:'100%',
    height:60,
    // background:"url(../imgs/nav.png) repeat-x ",
    background:'-webkit-linear-gradient(#b78984, #e3d5cf)',
    background:' -o-linear-gradient(#b78984, #e3d5cf)',
    background: '-moz-linear-gradient(#b78984, #e3d5cf)',/* Firefox 3.6 - 15 */
    background: 'linear-gradient(#b78984, #e3d5cf)', /* 标准的语法（必须放在最后） */
    position:'fixed',
    zIndex:'2',
    top:140
}
var navmid = {
    width:980,
    height:60,
    margin:'0 auto'
}
export default Nav;   //将App组件导出