/**
 * Created by Acer on 2017/2/25.
 */
import React from 'react';

export default class Topic extends React.Component{
    render(){
        return(
            <div className="topicBG">
                <div  className="topicImg">
                    <img src={this.props.src} />
                </div>
            </div>
        )
    }
}