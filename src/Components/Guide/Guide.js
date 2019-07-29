import React from 'react';
import Background from '../Background/Background';
import InfoCard from '../InfoCard/InfoCard';
import Data from '../../DataDriver.json';


class Guide extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
              <InfoCard issue={this.props.match.params.guide} ></InfoCard>
            </div>
        );
    }
}

export default Guide;