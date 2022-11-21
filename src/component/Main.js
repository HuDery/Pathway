import React from "react";
import img1 from "../images/main/image1.png";
import img2 from "../images/main/image2.png";
import img3 from "../images/main/image3.png";
import img4 from "../images/main/image4.png";
import location_1 from "../images/main/location-1.png";
import location_2 from "../images/main/location-2.png";
import location_3 from "../images/main/location-3.png";
import star from "../images/main/star-6.png";
import rectangle_1 from "../images/main/Rectangle-1.png";
import rectangle_2 from "../images/main/Rectangle-2.png";
import rectangle_3 from "../images/main/Rectangle-3.png";
import {
    Button, Card, Container, Row, Col
} from 'react-bootstrap';
function Main() {
    return (
        <div>
            <div className="main">
                <div className="row">
                    <div className="col-lg-5">
                        <h1>Explore top destinations</h1>
                        <p className="main-desc">Explore your suitable and dream places around the world. Here you can find your right destination.</p>
                    </div>
                    <div className="col-lg-6"></div>
                    <div className="col-lg-1 icon">
                        {/* <button>L</button>
                    <button>R</button> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <img src={img1} />
                    </div>
                    <div className="col-lg-3">
                        <img src={img2} />
                    </div>
                    <div className="col-lg-3">
                        <img src={img3} />
                    </div>
                    <div className="col-lg-3">
                        <img src={img4} />
                    </div>
                </div>
            </div>
            {/* Start Booking */}
            <div className="Booking">
                <div className="location-booking">
                    <div className="location-booking__title">
                        <h1>
                            Best trip package
                        </h1>
                        <p>
                            Explore your suitable and dream places around the world. Here <br /> you can find your right destination.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="location-booking__product">
                                <img className="location-booking__product__img" src={location_1} />
                                <div className="location-booking__product__stats">
                                    <p className="location-booking__product__name">Wasserwerk Freiberg, Germany</p>
                                    <div className="location-booking__product__cmt">
                                        <img src={star} />
                                        <p> 4.3</p>
                                    </div>
                                    <div className="location-booking__product__price">
                                        <h7>From <p>$400</p></h7>
                                        <Button> Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="location-booking__product">
                                <img className="location-booking__product__img" src={location_2} />
                                <div className="location-booking__product__stats">
                                    <p className="location-booking__product__name">Wasserwerk Freiberg, Germany</p>
                                    <div className="location-booking__product__cmt">
                                        <img src={star} />
                                        <p> 4.3</p>
                                    </div>
                                    <div className="location-booking__product__price">
                                        <h7>From <p>$400</p></h7>
                                        <Button variant="outline-primary"> Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="location-booking__product">
                                <img className="location-booking__product__img" src={location_3} />
                                <div className="location-booking__product__stats">
                                    <p className="location-booking__product__name">Wasserwerk Freiberg, Germany</p>
                                    <div className="location-booking__product__cmt">
                                        <img src={star} />
                                        <p> 4.3</p>
                                    </div>
                                    <div className="location-booking__product__price">
                                        <h7>From <p>$400</p></h7>
                                        <Button variant="outline-primary"> Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="location-booking__product__viewAll">
                        <Button> View All</Button>
                    </div>
                </div>
            </div>
            {/* End Booking */}
            {/* Start Stories */}
            <div className="Stories">
                <div className="stories">
                    <div className="row">
                        <div className="col-lg-7 stories-img">
                            <div className="stories-img__1">
                                <img src={rectangle_1} />
                            </div>
                            <div className="stories-img__2__3">
                                <img className="stories-img__2" src={rectangle_2} />
                                <img className="stories-img__3" src={rectangle_3} />
                            </div>
                        </div>
                        <div className="col-lg-5 stories-title">
                            <div className="">
                                <h1>
                                    Our trip gallery that will inspire you
                                </h1>
                                <p>
                                    See amazing moment of our trip. Here you can find some beautiful picture of travel that will inspire you a lot to travel with us around the globe.
                                </p>
                                <Button>View All</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End stories */}
            {/* Start Subscribe */}
            <div className="Subscribe">
                <div className="subscribe">
                    <div className="row">
                        <div className="col-lg-7 subscribe-desc">
                            <h1>Subscribe to get special prize</h1>
                            <p>Don’t wanna miss something? Subscribe right now and get <br/> specail promotion and monthly newsletter.</p>
                        </div>
                        <div className="col-lg-5 subscribe-submit">
                            <input type="text" placeholder="Enter Your E-mail" />
                            <Button>Get started</Button>                           
                        </div>
                    </div>
                </div>
            </div>
            {/* End Subscribe */}
        </div>
    )
}

export default Main