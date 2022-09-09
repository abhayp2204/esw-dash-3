import "./App.css";
import React, { useState } from "react"

const uListStyle = {
    listStyle: "none"
}

function About() {
    return (
        <html>
            <body>
                <main role="main">
                    <section className="jumbotron text-center">
                        <div className="container">
                        <br />
                        <br />
                        <p className="lead text-muted">Monitoring Energy Consumption of an Appliance</p>
                        <br />
                        {/* <p>
                            <a href="#" className="btn btn-primary my-2">ABC</a>
                            <a href="#" className="btn btn-secondary my-2">XYZ</a>
                        </p> */}
                        </div>
                    </section>

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row pop ctr">
                            Traditional power strips house many different devices and use only outlet, but if devices are plugged in, they will continue to use energy.<br/>
                            Smart power strips can be used to monitor power consumption and save energy, if need be.<br/>
                            Installing a smart power strip in your home is a quick way to start saving money while making your household a little more energy efficient. Take for instance your Smart TV, your laptop computer and your cable box, all these devices use energy when they are off.<br/>
                            </div>
                        </div>
                    </div>
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row pop ctr">
                                The team started off with building the circuit as the first prority.
                                The primary arduino code was then set up with all the available sensors to check the sensitivity, thresholds and the accuracy of results.
                                Having had verified our primary circuit, we moved on with data transfer between OneM2M, ThingSpeak and our custom web-app. 
                                Next we combined the data and built a website displaying the essential datas in different forms and raising alerts if any value crosses a threshold.
                            </div>
                        </div>
                    </div>
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row pop ctr">
                                <ul style={uListStyle}>
                                    <h3>Equipment used for the project</h3>
                                    <li>ESP32 - Microcontroller</li>
                                    <li>Micro USB cable</li>
                                    <li>A general-purpose PCB</li>
                                    <li>Breadboard</li>
                                    <li>Capacitor</li>
                                    <li>Resistors</li>
                                    <li>SCT013 AC Current Clamp Sensor</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    </main>
            </body>
        </html>
    );
}

export default About;