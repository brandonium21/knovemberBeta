import React from 'react';
import './Results.css';
import Chart from 'react-apexcharts'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Candidate from "../Candidate/Candidate";
import * as Nano  from 'nano'
import Data from '../../DataDriver.json';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = { graphOptions: {}, series: [], topThreeCandidates: [] };
    }

    componentWillMount(){
        //console.log(this.props);
        let metaData = this.props.resultsData;
        //console.log(metaData);
        let issues = []
        let topics = Object.keys(metaData.issues);

        for (let topic = 0; topic < topics.length; topic++){
            for (let i = 0; i < Object.keys(metaData.issues[topics[topic]]).length; i++){
                let curr_issue = Object.keys(metaData.issues[topics[topic]])[i]
                issues.push({ 
                    [ curr_issue ]: metaData.issues[topics[topic]][ curr_issue ]
                } );
            }
        }

        let favorableCandidates = [];
        let mostFavorableCandidates = [];
        //console.log(issues);

        for (let issue = 0; issue < issues.length; issue++){
            // (cater)
            //let candidates = Object.keys(metaData.issues[ Object.keys(issues[issue])[0] ]  [issues[issue] ].candidate);
            let candidates = metaData.candidates;
            console.log(candidates)
            for (let candidate = 0; candidate < candidates.length; candidate++){
                if (metaData.issues[ this.props.issue ][issues[issue]]['candidate'][candidates[candidate]] === parseInt(metaData.issues[ this.props.issue ][issues[issue]]['stance'])){
                    favorableCandidates.push(candidates[candidate])
                }
            }
        }
        //console.log(favorableCandidates);

        favorableCandidates.sort();
        let current = null;
        let cnt = 0;
        for (let i = 0; i < favorableCandidates.length; i++) {
            if (favorableCandidates[i] !== current) {
                if (cnt > 0) {
                    mostFavorableCandidates.push({ "candidate": current, "score": cnt });
                }
                current = favorableCandidates[i];
                cnt = 1;
            } else {
                cnt++;
            }
        }
        if (cnt > 0) {
            mostFavorableCandidates.push({ "candidate": current, "score": cnt });
        }
        mostFavorableCandidates.sort((a, b) => (a.score < b.score) ? 1 : -1);
        let topThreeCandidates = mostFavorableCandidates.slice(0, 3);
        //console.log(topThreeCandidates);
        
        let graphData = [];
        let graphCaptions = [];
        let topThreeMeta = []
        for (let topCandidate = 0; topCandidate < topThreeCandidates.length; topCandidate++) {
            graphData.push(topThreeCandidates[topCandidate]['score']);
            graphCaptions.push(metaData['candidates'][topThreeCandidates[topCandidate]['candidate']]['name']);
            topThreeMeta.push(topThreeCandidates[topCandidate]['candidate']);
        }
        //console.log(graphCaptions)
        /*
        let n = Nano('http://localhost:5984')
        const db = n.db.use('knovember-dev');
        db.insert(metaData.issues).then((body) => {
            console.log(body);
        });
        */
        this.setState({
            topThreeCandidates: topThreeMeta,
            graphOptions: {
                labels: graphCaptions,
                chart: {
                    foreColor: '#000000',
                    toolbar: {
                      show: false
                      
                    }
                  }
              },
            series: [{
                name: '',
                data: graphData,
              }]
            
        });

    }
    
    render (){
        return (
            <div className="results-card">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h1 className="title">Results</h1>
                            <p className="result-description">Based on your Answers your views are more in line with</p>
                            {this.state.topThreeCandidates.map((candidate, i) => <Candidate key={i} candidate={candidate} ></Candidate>)}
                        </Col>
                        <Col xs={12} md={6}>
                            <Chart options={this.state.graphOptions} series={this.state.series} type="radar" height="350" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Results;