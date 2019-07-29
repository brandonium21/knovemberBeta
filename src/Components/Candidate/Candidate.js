import React from 'react';
import './Candidate.css';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Data from '../../DataDriver.json';


class Candidate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { meta: {}};
    }

    componentWillMount(){
        this.setState({
            meta: Data
        })
    }


    render (){
        return (
            <a rel="noopener noreferrer" target="_blank" href={this.state.meta.candidates[this.props.candidate]['url']} className="text-decoration-none text-dark">
                <Card className="mb-2" style={{ maxHeight: '50px', overflow: "hidden"}}>
                    <Container fluid className="p-0">
                        <Row>
                            <Col xs={3} md={3} className="p-0">
                                <Image src={ this.state.meta.candidates[this.props.candidate]['avatar']} style={{ height: '50px', width:"auto"}} rounded />
                            </Col>
                            <Col>
                                <h4 className="mt-2">{ this.state.meta.candidates[this.props.candidate]['name']}</h4>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </a>
        );
    }
}

export default Candidate;