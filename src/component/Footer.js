import React from "react";
import face from "../images/footer/f.png"
import ins from "../images/footer/instagram.png"
import linkIn from "../images/footer/linked_in.png"
import twitter from "../images/footer/twitter.png"

function Footer() {
    return (
        <div className="Footer">
            <div className="footer">
                <div className="row">
                    <div className="col-lg-5 footer-name">
                        <h3 className="footer-item">Pathway.</h3>
                        <p className="footer-item__list">Need to help for your dream trip? trust us. With Walter, travel becomes a lot easier with us.</p>
                        <div className="footer-icon">
                            <img src={twitter} />
                            <img src={face} />
                            <img src={linkIn} />
                            <img src={ins} />
                        </div>
                    </div>
                    <div className="col-lg-2 footer-menu">
                        <h5 className="footer-item">Company</h5>
                        <hr></hr>
                        <p className="footer-item__list">About Us</p>
                        <p className="footer-item__list">Features</p>
                        <p className="footer-item__list">Our Pricing</p>
                        <p className="footer-item__list">Latest News</p>
                    </div>
                    <div className="col-lg-2 footer-menu">
                        <h5 className="footer-item">Support</h5>
                        <hr></hr>
                        <p className="footer-item__list">FAQ’s</p>
                        <p className="footer-item__list">Terms & Conditions</p>
                        <p className="footer-item__list">Privacy Policy</p>
                        <p className="footer-item__list">Contact Us</p>
                    </div>
                    <div className="col-lg-3 footer-menu">
                        <h5 className="footer-item">Address</h5>
                        <hr></hr>
                        <p className="footer-item__list">Location: 27 Division St, New York, NY 10002, USA</p>
                        <p className="footer-item__list">Email: email@gmail.com</p>
                        <p className="footer-item__list">Phone: + 000 1234 567 890</p>
                    </div>
                </div>
                <div className="footer-end">
                    <hr className="footer-line"></hr>
                    <p className="author">Copyright ©2022 webdesign.gdn All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer