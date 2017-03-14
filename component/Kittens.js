/**
 * Created by Acer on 2017/3/10.
 */
import React from 'react';
import Topic from './Topic';
import Header from './Header';
import Nav from './Nav';  //导入App组件所在的模块文件
import Top from './Top';
import KittensItem from './KittensItem'
export default class Kittens extends React.Component {
    constructor(){
        super();
        let kittensItems = [
            {child:'../imgs/kings_cat1.png',
                childName:"hcy12124555555",
                father:"../imgs/kings_cat1.png",
                faName:"hxz",
                mother:"../imgs/kings_cat1.png",
                moName:"wwq",
                detail:"hhhhhhhhhhhhh"
            },{child:'../imgs/kings_cat1.png',
                childName:"hcy",
                father:"../imgs/kings_cat1.png",
                faName:"hxz",
                mother:"../imgs/kings_cat1.png",
                moName:"wwq",
                detail:"hhhwiweiwui8ewudeiw"
            },{child:'../imgs/kings_cat1.png',
                childName:"hcy",
                father:"../imgs/kings_cat1.png",
                faName:"hxz",
                mother:"../imgs/kings_cat1.png",
                moName:"wwq",
                detail:"hwewydewudeuduehwzydsb"
            },,{child:'../imgs/kings_cat1.png',
                childName:"hcy",
                father:"../imgs/kings_cat1.png",
                faName:"hxz",
                mother:"../imgs/kings_cat1.png",
                moName:"wwq",
                detail:"hwewydewudeuduehwzydsb whswudhueiduiediueueideuideiudeuideui"
            }
        ]
        this.state={
            kittens:kittensItems
        }
    }
    render(){
        const kittensItems = this.state.kittens.map((element,index) =>{
            return <KittensItem key={index} src={element}/>
        })
        return(
            <div>
                <Top/>
                <Nav/>
                <Topic src="../imgs/Kittens.png"/>
                <div className="KittensImg">
                    <div>
                        {kittensItems}
                    </div>
                </div>
                {/*<div className="clear"></div>*/}
                <div className="auBottom"></div>

            </div>

        )
    }
}