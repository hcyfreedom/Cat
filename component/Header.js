/**
 * Created by Acer on 2017/2/25.
 */
import React from 'react';
export default class Hearder extends  React.Component{
    render(){
        return(
            <div className="auHeadImg">
               <img src={this.props.src}/>
            </div>
        )
    }
}