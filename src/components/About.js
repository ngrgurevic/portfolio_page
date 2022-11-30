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
                        <h3 className="text-center text-uppercase text-primary-head">Info</h3> 
                        <br/>
                        <h5>Name: <p> Nikola Grgurević</p></h5>
                        <br/>
                        <h5> DoB: <p>19.06.1992</p></h5><br/>
                        <h5> Education: <p>Bachelor of Science in IT</p></h5><br/>
                        <h5>Hobbies:</h5>
                        <h6> 
                        <ul className="list-inline text-center">
                            <li>Swimming</li>
                            <li>Cycling</li>
                            <li>Comics</li>
                        </ul>
                        </h6>
                        
                    </div>
                    <div className="col-lg-4 ml-auto text-primary-head">
                        <h3 className="text-center text-uppercase text-primary-head">Skills</h3>
                        <br/>
                        <div className="container ">
                        <ul className="col list-inline text-center font-size-big ">
                            <h6>React</h6>
                            <h6>JavaScript</h6>
                            <h6>Kotlin</h6>
                            <h6>Swift</h6>
                            <h6>Java</h6>
                            <h6>SQL</h6>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 mr-auto text-primary-head">
                    <ProgressBar/>
                    </div>
                </div>
                <div className="text-center mt-4 ">
                    <div className='btn btn-xl btn-primary text-primary-head btn-outline-light'>
                        <Download />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About