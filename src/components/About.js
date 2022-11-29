import React from "react";
import '../scss/styles.scss';
import '../scss/freelancer.scss';
import Download from "./Download";
import ProgressBar from "./ProgressBar";


function About() {
    return (
        <section className="bg-secondary text-primary mb-6" id="about">
            <div className="container">
                <h2 className="text-center text-uppercase text-white">About me</h2>
                <hr className="star-light mb-4" />
                <div className="row">
                    <div className="col-lg-4 ml-auto text-primary-head text-center">
                        <h3 className="text-center text-uppercase text-secondary-head">Info</h3>
                        
                        <h6> Name</h6><p>Nikola Grgurević</p><br/>
                        <h6> DoB</h6><p>19.06.1992</p><br/>
                        <h6> Education</h6><p>RIT Croatia</p><br/>
                        <h6> Hobbies</h6>
                        <ul className="list-inline text-center">
                            <li>Swimming</li>
                            <li>Cycling</li>
                            <li>Comics</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 ml-auto text-primary-head">
                        <h3 className="text-center text-uppercase text-secondary-head">Skills</h3>
                        <p className="text-center lead">
                            Freelancer is a free bootstrap theme created by Start Bootstrap.
                            The download includes the complete source files including HTML,
                            CSS, and JavaScript as well as optional LESS stylesheets for
                            easy customization.
                        </p>
                    </div>
                    <div className="col-lg-4 mr-auto text-secondary-head">
                    <ProgressBar/>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <div className='btn btn-xl btn-outline-light'>
                        <Download />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About