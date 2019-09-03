import React from 'react';
import Background from '../Background/Background';
import InfoCard from '../InfoCard/InfoCard';
import Data from '../../DataDriver.json';


class Guide extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*{div: [
        {#!each props.location.weights: [
            {p: [
                "#! each.weight",
                ": ",
                "#! props.location.weights['"
            ]}
        ]}
    ]}*/

    render() {
        return (
            <div>
                {/*
                    Object.keys(this.props.location.weights).map(
                        // (weight) => <p>{weight + ": " + this.props.location.weights[weight]}</p>
                        (weight) => <p>{`${weight}: ${this.props.location.weights[weight]}`}</p>
                    )
                    */}
                <InfoCard weights={this.props.location.weights} ></InfoCard>
            </div>
        );
    }
}

export default Guide;