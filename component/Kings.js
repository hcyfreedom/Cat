/**
 * Created by Acer on 2017/2/24.
 */
import React from 'react';
import KingsItem from './KingsItem';
import Nav from './Nav';  //导入App组件所在的模块文件
import Top from './Top';
import Topic from './Topic';
export default class Kings extends React.Component{
    constructor(){
        super();
        let kingsItems = [
            {
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund'
            }
        ]
        this.state= {
            kings:kingsItems
        }

    }
    render(){
        const kingsAllItems = this.state.kings.map((element,index)=>{
            return <KingsItem key={index} src={element}/>
        });
        return(

            <div>
                <Top/>
                <Nav/>
                <Topic src="../imgs/KingsBg.png"/>
                <div className="mainImg">
                    <div className="king">
                        {kingsAllItems}
                   </div>
                </div>
                {/*<div className="clear"></div>*/}
                <div className="auBottom"></div>

            </div>

        )
    }
}