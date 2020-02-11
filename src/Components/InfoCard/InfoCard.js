import React from 'react';
import './InfoCard.css';
import Swipeable from "react-swipy";
import Results from "../Results/Results";
import Data from '../../DataDriver.json';
import ExtraInfo from '../ExtraInfo/ExtraInfo';
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Drawer from 'react-drag-drawer';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            meta: {}, 
            cards: [], 
            direction: '', 
            showLearnMore: false, 
            canSkip: 0, 
            progressState: 0, 
            numAnswered: 0,
            numTopics: 0 
        };
    }

    componentWillMount() {
        //console.log(this.props.issue);
        let issues = [];
        let topics = Object.keys(Data.issues)
        for (let topic = 0; topic < topics.length; topic++){
            for (let i = 0; i < Object.keys(Data.issues[topics[topic]]).length; i++){
                issues.push([ topics[topic], Object.keys(Data.issues[topics[topic]])[i]] );
            }
        }
        issues.sort(() => Math.random() - 0.5);
        //console.log(issues);

        this.setState({
            numTopics: issues.length,
            meta: Data,
            cards: issues, //Object.keys(Data.issues[this.props.issue]),
            canSkip: Math.ceil(0.1 * issues.length)
        })
    }

    remove = () => {
        let currentIssue = this.state.cards[0]; //[ category, issue ]
        let stance = 0;
        (this.state.direction === "left") ? stance = 0 : stance = 1;
        let newMeta = Object.assign({}, this.state.meta);
        //console.log(newMeta);
        //console.log(currentIssue);
        newMeta.issues[currentIssue[0]][currentIssue[1]]['stance'] = stance;  

        this.setState({
            meta: newMeta,
            cards: this.state.cards.slice(1, this.state.cards.length),
            direction: '',
            showLearnMore: false
        },this.updateProgress);
    }

    skip = () => {
        this.setState({
            cards: this.state.cards.slice(1, this.state.cards.length),
            direction: '',
            showLearnMore: false,
            canSkip: this.state.canSkip - 1
        },this.updateProgress);
    }

    handleShowMore = () => {
        this.setState({
            showLearnMore: !this.state.showLearnMore
        });
    }

    updateProgress = () => {
        let baseNum = this.state.numTopics
        let increase = ((this.state.numAnswered + 1) / baseNum ) * 100
        console.log(increase);
        this.setState({progressState: increase, numAnswered: this.state.numAnswered + 1})
    }

    

    setDirection = direction => this.setState({direction})

    render (){

        return (
            <div className="info-card-container">
                <ProgressBar now={ this.state.progressState } variant={'info'} className="bg-white" style={{height: '3px'}}/>

                {this.state.cards.length > 0 ? (
                    <div>
                    <Swipeable
                        buttons={({left, right}) => (
                        <div className="action-button-container">
                            <div className="row">
                                <div className="col p-0">
                                    <button className="btn btn-danger btn-lg my-3 rounded-pill mr-4 float-right" onClick={left}>CON</button>
                                </div>
                                <div className="col-2 p-0">
                                <Button className="my-3 rounded-pill" size={ 'lg' } onClick={ this.skip } variant={ this.state.canSkip ? 'warning' : 'secondary' } disabled={ this.state.canSkip ? false : true }>
                                    <img className="img-fluid mx-auto my-auto" style={{width: '30px', height: 'auto'}} alt="Skip" src="https://img.icons8.com/ios-glyphs/100/000000/end.png" />
                                </Button>
                                </div>
                                <div className="col p-0">
                                    <button className="btn btn-success btn-lg my-3 rounded-pill ml-4 float-left" onClick={right}>PRO</button>
                                </div>
                            </div>
                        </div>
                        )}
                        onAfterSwipe={
                            this.remove
                        }
                        onSwipe={this.setDirection}
                    >
                            <div className={"info-card " + this.state.direction} > 
                                <div><span className="badge badge-success float-left">{ this.state.meta.issueName[this.state.cards[0][0]] }</span></div>
                                <br/>
                                <h1 className="info-title">{this.state.meta.issues[this.state.cards[0][0]][this.state.cards[0][1]]['title']}</h1>
                                <p className="info-description text-light">{this.state.meta.issues[this.state.cards[0][0]][this.state.cards[0][1]]['description']}</p>
                                <button className="btn btn-info btn-sm rounded-pill text-bold my-3 info-button" onClick={ this.handleShowMore }>Learn More</button>
                            </div>
                    </Swipeable>

                    <Drawer
                        open={this.state.showLearnMore}
                        onRequestClose={this.handleShowMore}
                        modalElementClass={"learn-more-modal"}
                        >
                        <ExtraInfo close={ this.handleShowMore } moreInfo={this.state.meta.issues[this.state.cards[0][0]][this.state.cards[0][1]]['more-info']} />
                    </Drawer>
                    </div>
                ) : (
                    <Results resultsData={ this.state.meta } issue={this.props.issue}/>
                
            )}
            
            </div>
        );
    }
}

export default InfoCard;