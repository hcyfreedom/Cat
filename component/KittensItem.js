/**
 * Created by Acer on 2017/3/10.
 */
import React from 'react';
export default class KittensItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            child:this.props.src.child,
            childName:this.props.src.childName,
            father:this.props.src.father,
            faName:this.props.src.faName,
            mother:this.props.src.mother,
            moName:this.props.src.moName,
            detail:this.props.src.detail
        }
    }
    render(){
        return(
            <div>
                <div className="childBorder">
                    <div className="childImg">
                        <img src={this.state.child}/>
                    </div>
                    <p>{this.state.childName}</p>
                </div>
                <div className="moImg">
                    <img src={this.state.mother}/>
                    <p>{this.state.moName}</p>
                </div>
                <div className="faImg">
                    <img src={this.state.father}/>
                    <p>{this.state.faName}</p>
                </div>
                <div className="detailChild">
                   <p> {this.state.detail}</p>
                </div>
            </div>
        )
    }
}