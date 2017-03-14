/**
 * Created by Acer on 2017/2/24.
 */
import React from 'react';
import Topic from './Topic';
import Header from './Header';
import Nav from './Nav';  //导入App组件所在的模块文件
import Top from './Top';
export default class AboutRagboll extends React.Component {
    render(){
        return(
        <div>
            <Top/>
            <Nav/>
            <Topic src="../imgs/AboutRagdollBg.png"/>
            <div className="mainImg">
                <div className="auContent">
                    <p>
                        Proud breeders of Ragdolls since 1998, we strive to produce not only beautiful, but extremely healthy and well socialized Ragdoll kittens. Darlin'lil'Dolls is registered with both CFA and TICA. We offer beautiful Ragdolls with a variety of colors and patterns. We strive to produce Ragdolls with the deepest blue eyes, bunny soft coats and most loving dispositions. All kittens are screened and tested negative for HCM, are health guaranteed, vaccinated and registered with CFA and TICA. When it comes to raising our kittens we make no compromises. We feed only premium, grain-free diets and use litters that are free of chemicals. All of our kittens are raised in our home and treated as cherished members of our families until they are ready to find their forever homes. We strongly believe that this method of raising our kittens is reflected in their temperament. Our kittens are well socialized with our entire family including dogs and children.
                    </p>
                </div>
                <Header src="../imgs/ar_cat.png"/>
            </div>
            {/*<div className="clear"></div>*/}
            <div className="auBottom"></div>

        </div>

        )
    }
}