/**
 * Created by Acer on 2017/2/21.
 */
import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';
import Nav from './Nav';  //导入App组件所在的模块文件
import Top from './Top';
import AboutUs from './AboutUs';
import AboutRagboll from './AboutRagboll';
import ContactUs from './ContactUs';
import Kings from './Kings';

class Box extends React.Component{
    render(){
        return(
            <div>
                <Top/>
                <Nav/>
                <Kings/>
            </div>
        )
    }
}

ReactDOM.render(<Box />, document.getElementById('app')); //使用组件并渲染到界面