/**
 * Created by Acer on 2017/3/10.
 */
import React from 'react';
export default class PlansItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            src:this.props.src.src,
            name:this.props.src.name,
            text:this.props.src.text
        }
    }
    render(){
        return(
            <div className="plansBorder">
                <div className="kingImg">
                    <img src={this.state.src}/>
                </div>
                <div className="kingText">
                    {this.state.name}
                </div>
                <div className="plansText">
                    {this.state.text}
                </div>
            </div>
        )
    }
}