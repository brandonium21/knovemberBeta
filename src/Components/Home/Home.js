import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



class Home extends React.Component {
    
    render () {
        return (
            <Container>
                <h2 className="mt-5 font-weight-normal">Will You <i className="font-weight-bolder">Know</i> Before <i className="font-weight-bolder">November?</i></h2>
                <section className="mt-5">
                    <Row>
                        <Col md={6} sm={12} className="mt-5" data-aos="fade-right">
                            <Image src="https://i.imgur.com/cQPcgVW.png" fluid style={{ maxHeight: '200px'}} />
                            <h5 className="mt-5">There are a lot of candidates!</h5>
                            <p className="text-secondary">As of 2020, <i className="font-weight-bold">789</i> presidential candidates have filed to run <a rel="noopener noreferrer" target="_blank" href="https://www.fec.gov/data/candidates/?election_year=2020&office=P">Learn More</a></p>
                        </Col>
                        <Col md={6} sm={12} className="mt-5" data-aos="fade-left">
                        <Image src="https://i.imgur.com/vNAygyj.png" fluid style={{maxHeight: '200px'}} />
                            <h5 className="mt-5">Too many Distractions!</h5>
                            <p className="text-secondary">News sources, Rallies, Reddit pages, Facebook, Twitter wars, late night satire, etc.</p>
                        </Col>
                    </Row>
                </section>
                <section className="my-5" data-aos="zoom-in-down">
                    <Row>
                        <Col md={12} sm={12} className="mt-5">
                            <Image src="https://i.imgur.com/CH65zMn.png" fluid style={{ maxHeight: '300px'}} />
                            <h2 className="mt-5">How do you know who to support?</h2>
                        </Col>
                    </Row>
                </section>
                <hr className="my-5" style={{ borderWidth: "5px", width: "100px", borderColor: "#0984e3" }} />
                
                <section className="my-5" data-aos="fade-up">
                    <h3><span className="mx-auto font-weight-bold font-italic pt-2" style={{ fontSize: "2em"}}>Knovember</span> connects you to your Ideal candidate</h3>
                    <Image className="mt-5" src="https://i.imgur.com/NZe8nyf.png" fluid style={{ maxHeight: '300px'}} />
                </section>

                <nav className="navbar navbar-light bg-light">
                    <p className="my-3 mx-auto font-weight-bold">© 2019 Knovember</p>
                </nav>
                
            </Container>
        );
    }
}

export default Home;