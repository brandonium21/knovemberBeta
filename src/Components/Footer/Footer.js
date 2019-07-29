import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons' 
import './Footer.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends React.Component{
    render(){
        return(
            <footer class="footer">
                <div class="container text-center">
                    <Row>
                        <Col className="fb-bg">
                            <a href="#"><FontAwesomeIcon icon={ faFacebookF } /></a>
                        </Col>
                        <Col className="pin-bg">
                            <a href="#"><FontAwesomeIcon icon={ faPinterestP } /></a>
                        </Col>
                        <Col className="tw-bg">
                            <a href="#"><FontAwesomeIcon icon={ faTwitter } /></a>
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
}

export default Footer;