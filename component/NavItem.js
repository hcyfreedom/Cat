/**
 * Created by Acer on 2017/2/22.
 */
import React from 'react';
export default class NavItem extends React.Component {
    //在子类被实例化的时候，父类也相应的被实例化出来，所以子类必须去调用父类的构造方法，如果父类只有带参构造器，那么子类必须显式的调用父类的带参构造方法。
    constructor(props){
        super(props);
        this.state = {
            src:this.props.src.src,
        }
    }
    handleMouseOver(){
        this.setState({src:this.props.src.hoverSrc})
    }
    handleMouseLeave(){
        this.setState({src:this.props.src.src})
    }
    handleClick(){
        this.setState({src:this.props.src.hoverSrc})
    }
    render() {
        return (
            <div  className="navItems">
                <img src={this.state.src} onMouseMove={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} onClick={this.handleClick.bind(this)}/>
            </div>
        )
    }
}