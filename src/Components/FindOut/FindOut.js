import React from 'react';
import Container from 'react-bootstrap/Container';
import Data from '../../DataDriver.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Rating from "react-rating";
import './FindOut.css';
import ProgressBar from "react-bootstrap/ProgressBar";


class FindOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = { meta: Data, formattedIssues: [], weight: {}, progress: 0 };
    }

    async componentWillMount() {
        let formattedIssues = [];
        let Issuekeys = Object.keys(Data.issues);
        let weights = {};
        for (let i = 0; i < Object.keys(Data.issues).length; i ++){
            weights[Object.keys(Data.issues)[i]] = 0;
        }
        while(Issuekeys.length) formattedIssues.push(Issuekeys.splice(0,3));
        await this.setState({
            formattedIssues: formattedIssues,
            weight: weights
        });
        console.log(this.state.weight);
    }

    handleRating = (rating, issue) => {
        let count = 0;
        if (this.state.weight[issue] === 0){
            count = 1;
        }
        let issuekeys = Object.keys(this.state.weight);
        for (let j = 0; j < issuekeys.length; j ++){
            if (this.state.weight[issuekeys[j]] > 0){
                count ++;
            }
        }
        
        this.setState(prevState => ({
            weight: {
                ...prevState.weight,
                [issue]: rating
            },
            progress: (count / issuekeys.length ) * 100
        }), ()=> console.log(this.state.progress))
    }

    render () {
        return (
            <div>
            <Container style={{ marginBottom: "60px" }}>
                <h3 className="mt-5">FindOut</h3>
                <p className="text-secondary">We've created politcal issue guides to ease the process of finding your Ideal candidate.</p>

                {this.state.formattedIssues.map((IssueGroup, j) => (
                    <Row className="mt-5" key={j}>
                        
                        { IssueGroup.map((issue, i )=> (
                            <Col md={4} sm={12} key={i} className="mb-3">
                                <Link 
                                    to={ "/guide/" + issue }
                                    className="text-decoration-none text-dark"
                                >
                                    <Card className="shadow border-rounded border-white">
                                        <Card.Body>
                                            <Card.Title>{ this.state.meta.issueName[issue]}</Card.Title>
                                            <Card.Text>
                                            Which candidates closely share my views on { this.state.meta.issueName[issue]}
                                            </Card.Text>
                                            <div className="rating-holder">
                                                <Rating onClick={(rating) =>  this.handleRating(rating,issue)} initialRating={this.state.weight[issue]} fractions={2} />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))
                        }
                        
                    </Row>
                ))}
            </Container>
            

            <div className="footer shadow-lg">
            <ProgressBar now={ this.state.progress } variant={'info'} className="bg-white" style={{height: '3px'}}/>
                    <Button className="mt-2" disabled={ this.state.progress === 100 ? false : true }>Continue</Button>
            </div> 
            
            </div>
        );
    }
}

export default FindOut;