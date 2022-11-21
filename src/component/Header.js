import React from "react";
import {
    Button, Card, Container, Row, Col
} from 'react-bootstrap';
import imgLg from "../images/header/adventure-lg.png"
import imgMd from "../images/header/adventure-md.png"
import imgVector from "../images/header/vector.png"
import smile from "../images/header/smile.png"
import ellipse1 from "../images/header/ellipse.png"
import ellipse2 from "../images/header/ellipse2.png"
import polygon from "../images/header/polygon.png"


function Header() {
    return (
        <div className="header">
            <div className="grid">
                <div className="header-nav">
                    <div className="header-title">
                        <h3 className="header-title__nav">Pathway.</h3>
                        <input className="header-title__nav" value="" />
                    </div>
                    <div className="header-item">
                        <p className="header-item__nav">Home</p>
                        <p className="header-item__nav">Destinations</p>
                        <p className="header-item__nav">Pricing</p>
                        <p className="header-item__nav">Review</p>
                        <Button className="header-item__nav">Contact us</Button>
                    </div>
                </div>
            </div>
            <div className="header-stats">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-lg-0 order-md-1">
                        <div className="header-img">
                            <img className="header-img__lg" src={imgLg} />
                            <img className="header-img__md" src={imgMd} />
                            <img className="header-img__vector" src={imgVector} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 order-md-0">
                        <div className="header-desc">
                            <p className="bold">Book Now</p>
                            <h1>The smiling <img src={smile} /> <br /> agent for travel</h1>
                            <p>Make your travel more enjoyable with us. We are the best travel agency and we are providing the best travel services for our clients.</p>
                            <div className="row">
                                <div className="col-lg-4">
                                    <Button className="header-icon">Plan a trip</Button>
                                </div>

                                <div className="header-icon col-lg-4">
                                    <div className="sm-image">
                                        <img className="sm-image__lg" src={ellipse1} />
                                        <img className="sm-image__md" src={ellipse2} />
                                        <img className="sm-image__polygon" src={polygon} />
                                    </div>
                                </div>
                                <p className="header-icon col-lg-4 bold-title">Watch our Story</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header