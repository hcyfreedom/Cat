/**
 * Created by Acer on 2017/2/24.
 */
import React from 'react';
export default class KingsItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            src:this.props.src.src,
            name:this.props.src.name
        }
    }
    render(){
        return(
           <div className="kingsBorder">
               <div className="kingImg">
                   <img src={this.state.src}/>
               </div>
               <div className="kingText">
                   {this.state.name}
               </div>
           </div>
        )
    }
}