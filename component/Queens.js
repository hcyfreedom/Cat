/**
 * Created by Acer on 2017/2/25.
 */
/**
 * Created by Acer on 2017/2/24.
 */
import React from 'react';
import KingsItem from './KingsItem';
import Topic from './Topic';
import Nav from './Nav';  //导入App组件所在的模块文件
import Top from './Top';
export default class Kings extends React.Component{
    constructor(){
        super();
        let kingsItems = [
            {
                src:'../imgs/Queens_cat1.png',
                name:'Venetica'
            },{
                src:'../imgs/Queens_cat1.png',
                name:'Venetica'
            },{
                src:'../imgs/Queens_cat1.png',
                name:'Venetica'
            },{
                src:'../imgs/Queens_cat1.png',
                name:'Venetica'
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
                <Topic src="../imgs/QueensBg.png"/>
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