import "./App.css";
import React, { useState } from "react"
import { Link } from "react-router-dom"
import KettleImage from "./kettle.png"
import HairDryerImage from "./HairDryer.png"

const cardStyle = {
    color: "white",
    textDecoration: "underline",
    cursor: "default",
}

const imgStyle = {
    height: "225px",
    width: "100%",
    display: "block",
}

function Select() {
    return (
        <html>
            <body>
                <main role="main">
                    <section className="jumbotron text-center">
                        <div className="container">
                            <br />
                            <br />
                            <p className="lead text-muted">We have used React to make the app and have implemented
                            both OneM2M and ThingSpeak so as to showcase our readings for the SMART SWITCH SUPPLY.</p>
                            <br />
                        </div>
                        <div>
                            <br />
                            <p className="lead text-muted">
                                As an initial step, we have made the use of a kettle and a hair dryer to establish that our work up until now is functional for devices that use comparitively less power.
                            </p>
                        </div>
                    </section>
                    <div className="album py-5 bg-light">
                        <div className="container">
                        <div className="row pop ctr">
                            <div className="col-md-3">
                                <div className="card mb-4 box-shadow">
                                    <img
                                        className="card-img-top"
                                        alt="Image of a Kettle"
                                        style={imgStyle}
                                        src={KettleImage}
                                    />
                                    <div className="card-body">
                                    <p className="card-text">These are the readings recorded for power used by a kettle.</p>
                                        <div>
                                            <Link to="kettle"> 
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card mb-4 box-shadow">
                                    <img
                                        className="card-img-top"
                                        alt="Image of a Hair Dryer [100%x225]"
                                        style={imgStyle}
                                        src={HairDryerImage}
                                    />
                                    <div className="card-body">
                                    <p className="card-text">These are the readings recorded for power used by a hair dryer.</p>
                                        <div>
                                            <Link to="hairdryer"> 
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <br />
                        <p className="lead text-muted">
                            We then move onto a large singular device, with our entire apparatus caged inside an enclosure.
                        </p>
                    </div>
                    <div className="album py-5 bg-light">
                    </div>
                    </main>
            </body>
        </html>
    );
}

export default Select;