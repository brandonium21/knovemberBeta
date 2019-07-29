import React from 'react';
import './Background.css';

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    //url("https://i.imgur.com/rFZnQ2M.png?1");
    

    render (){
        return (
            <div className="progress-holder">
                <div className="wave progress-bar" style={ { "width": this.props.progressUpdate + 'vw'} }>
                </div>
            </div>
        );
    }
}

export default Background;