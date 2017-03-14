/**
 * Created by Acer on 2017/3/10.
 */
import React from 'react';
import {Link} from 'react-router-dom';
export default class Enter extends React.Component {
    render(){
        return(
            <div>
                <div className="centerBg"></div>
                <Link to="/about"><div className="enterBar"></div></Link>
                <div className="centerBottom"></div>
            </div>

        )
    }
}