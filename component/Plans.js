/**
 * Created by Acer on 2017/2/24.
 */
import React from 'react';
import PlansItem from './PlansItem';
import Topic from './Topic';
import Nav from './Nav';  //导入App组件所在的模块文件
import Top from './Top';
export default class Plans extends React.Component{
    constructor(){
        super();
        let plansItems = [
            {
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag dollbababbababbaba'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag dollbbababbsss'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag dossyuerweoyd7ll'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag doll'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag doll'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag doll'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag doll'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag doll'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag doll'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag doll'
            },{
                src:'../imgs/kings_cat1.png',
                name:'Edmund',
                text:'so cute a rag doll'
            }
        ]
        this.state= {
            plans:plansItems
        }

    }
    render(){
        const plansAllItems = this.state.plans.map((element,index)=>{
            return <PlansItem key={index} src={element}/>
        });
        return(

            <div>
                <Top/>
                <Nav/>
                <Topic src="../imgs/PlansBg.png"/>
                <div className="plansImg">
                    <div className="king">
                        {plansAllItems}
                    </div>
                </div>
                {/*<div className="clear"></div>*/}
                <div className="auBottom"></div>

            </div>

        )
    }
}