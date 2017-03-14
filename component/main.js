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
import Queens from './Queens';
import Plans from './Plans';
import Kittens from './Kittens'
import Enter from './Enter';
// import createHashHistory from 'history/lib/createHashHistory';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
// const history = createHashHistory();
ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={Enter}/>
            <Route path="/about" component={AboutUs}/>
            <Route path="/ragdoll" component={AboutRagboll}/>
            <Route path="/contact" component={ContactUs}/>
            <Route path="/kings" component={Kings}/>
            <Route path="/queens" component={Queens}/>
            <Route path="/plans" component={Plans}/>
            <Route path="/kittens" component={Kittens}/>
        </div>
    </Router>
), document.getElementById('app')); //使用组件并渲染到界面

