/**
 * Created by Acer on 2017/2/24.
 */
import React from 'react';
import Topic from './Topic';
import Header from './Header';
import Nav from './Nav';  //导入App组件所在的模块文件
import Top from './Top';
export default class ContactUs extends React.Component {
    render(){
        return(
            <div>
                <Top/>
                <Nav/>
                <Topic src="../imgs/AboutRagdollBg.png"/>
                <div className="mainImg">
                    <div className="Content">
                        <form>
                            <ul>
                                <li><p>First Name:<input className="ContentInput" type="text"/></p></li>
                                <li><p>Sex:<input style={{width:'40px'}}  className="radio" type="radio"/>Male <input style={{width:'34px'}} className="radio" type="radio"/>Female</p></li>
                                <li><p>Color:<input className="ContentInput" type="text"/></p></li>
                                <li><p>Class:<input className="ContentInput" type="text"/></p></li>
                                <li><p>E-mail:<input className="ContentInput" type="text"/></p></li>
                                <li><p>Tel:<input className="ContentInput" type="text"/></p></li>
                                <li><p>Address:<input className="ContentInput" type="text"/></p></li>
                                <li><p>Deposit?:<input style={{width:'50px'}}  className="radio" type="radio"/>Yes <input style={{width:'68px'}} className="radio" type="radio"/>No</p></li>
                                <li className="textArea"><p>Remarks:<textarea className="remark" cols="40" rows="4"/></p></li>
                            </ul>
                        </form>

                        <div className="submitBtn"></div>
                    </div>
                    <Header src="../imgs/ar_cat.png"/>
                </div>
                <div className="auBottom"></div>

            </div>

        )
    }
}