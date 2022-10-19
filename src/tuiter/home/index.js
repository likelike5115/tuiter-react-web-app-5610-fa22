import React from "react";
import PostSummaryList from "../post-summary-list";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import "./index.css";
const HomeComponent = () => {
    return(
        <>
            <FontAwesomeIcon icon="square" color="green" />
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row position-relative">
                        <i className="fa-solid fa-repeat ms-3 text-secondary col-1 pos-relative"></i> <p className="col-5 ps-0 my-0 text-secondary wd-font-size-13">Elon Musk Retweeted</p>
                    </div>

                    <div>

                        <img src="../../images/elon_icon.jpg" align="top"
                             className="wd-avatar wd-margin-top wd-margin-left float-start wd-image"/>
                        <div className="wd-margin-left-12 wd-margin-top wd-image">

                            <div>
                                <b className="wd-font-size-15 text-black wd-image">SpaceX
                                    <span className="fa-stack wd-tick-icon">
                                        <i className="fa-solid fa-certificate fa-stack-2x wd-text-blue"></i>
                                        <i className="fa-solid fa-check fa-stack-1x text-white"></i></span></b>
                                <p  className="text-secondary wd-font-size-15 wd-image">@SpaceX . 23h</p>

                            </div>

                            <div>
                                <p className="wd-content-width wd-margin-bottom-12 wd-margin-right-16 text-black">Dennis and Akiko are the first two crewmembers on Starship's second commercial spaceflight around the Moon →</p>
                                <a href={"space.com/updates"}>space.com/updates</a>
                            </div>
                            <img className="wd-content-img" src="../../images/astronaut.jpeg"/>
                            <div className="wd-font-size-13 wd-icon-list ">
                                <a href="#" className="wd-color-lightgray text-secondary wd-font-size-15 wd-remove-dec"><i
                                    className="fa-regular fa-comment table-danger"></i> 595</a>
                                <a href="#" className="wd-color-lightgray text-secondary wd-font-size-15 wd-remove-dec"><i
                                    className="fa-solid fa-repeat"></i> 1，168</a>
                                <a href="#" className="wd-color-lightgray text-secondary wd-font-size-15 wd-remove-dec"><i
                                    className="fa-regular fa-heart"></i> 11.1k</a>
                                <a href="#" className="wd-color-lightgray text-secondary wd-font-size-15 wd-remove-dec"><i
                                    className="fa-solid fa-arrow-up-from-bracket"></i></a>
                            </div>

                            <br/>
                            <p className="wd-text-blue">Show more content</p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className=" wd-border-bottom">

                        <img src="../../images/nypost_icon.png" align="top"
                             className="wd-avatar wd-margin-top wd-margin-left float-start wd-image"/>
                        <div className="wd-margin-left-12 wd-margin-top wd-image">

                            <div>
                                <b className="wd-font-size-15 text-black wd-image">New York Post
                                    <span className="fa-stack wd-tick-icon">
                                        <i className="fa-solid fa-certificate fa-stack-2x wd-text-blue"></i>
                                        <i className="fa-solid fa-check fa-stack-1x text-white"></i></span></b>
                                <p  className="text-secondary wd-font-size-15 wd-image">@nypost</p>

                            </div>

                            <div>
                                <p className="wd-content-width wd-margin-bottom-12 wd-margin-right-16 text-black">Grimes seen reading Kari Marx following split with world's richest man Elon Musk</p>

                            </div>
                            <img className="wd-content-img" src="../../images/grimes.jpg"/>
                            <div className="wd-font-size-13 wd-icon-list ">
                                <a href="#" className="wd-color-lightgray text-secondary wd-font-size-15 wd-remove-dec"><i
                                    className="fa-regular fa-comment table-danger"></i> 5,346</a>
                                <a href="#" className="wd-color-lightgray text-secondary wd-font-size-15 wd-remove-dec"><i
                                    className="fa-solid fa-repeat"></i> 1，601</a>
                                <a href="#" className="wd-color-lightgray text-secondary wd-font-size-15 wd-remove-dec"><i
                                    className="fa-regular fa-heart"></i> 19.2k</a>
                                <a href="#" className="wd-color-lightgray text-secondary wd-font-size-15 wd-remove-dec"><i
                                    className="fa-solid fa-arrow-up-from-bracket"></i></a>
                            </div>

                            <br/>

                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};
export default HomeComponent;