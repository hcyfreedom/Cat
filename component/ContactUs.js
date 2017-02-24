/**
 * Created by Acer on 2017/2/24.
 */
import React from 'react';
export default class ContactUs extends React.Component {
    render(){
        return(
            <div className="mainImg" style={{height:'1500px'}}>
                <div className="topicAR" style={{
                    background: 'url("../imgs/ContactBg.png") no-repeat center'}}></div>
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
                </div>
                <div className="submitBtn"></div>
                <div className="auHeadImg" style={{
                    background: 'url("../imgs/ct_cat.png") no-repeat center'}}>

                </div>
                <div className="auBottom">
                </div>
            </div>
        )
    }
}