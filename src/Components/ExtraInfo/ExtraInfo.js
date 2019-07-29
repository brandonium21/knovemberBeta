import React from 'react';
import './ExtraInfo.css';

class ExtraInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render (){

        return (
            <div className="container-fluid pt-4 bg-transparent extra-info-card">
                <div className="card border-0 extra-info-card extra-info-holder">
                    <div className="card-body">
                        <h5 className="card-title">The More You Know</h5>
                        <hr />
                        <div>
                            {   this.props.moreInfo ?
                                this.props.moreInfo.map((info) => 
                                    <section className="extra-info-item p-2">
                                        <p className="card-text">{ info.text }</p>
                                    </section>
                                ):(
                                    <div className="text-center">
                                        <h2 className="mt-5">{ "¯\\_(ツ)_/¯" }</h2>
                                        <p className="card-text">Not much else to say.</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExtraInfo;