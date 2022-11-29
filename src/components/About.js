import React from "react";
import '../scss/styles.scss';
import '../scss/freelancer.scss';
import resume from '../images/documents/Nikola_Grgurević_CV.pdf';
import Download from "./Download";



function About() {

    return (
        <section className="bg-secondary text-primary mb-0" id="about">
            <div className="container">
                <h2 className="text-center text-uppercase text-white">About me</h2>
                <hr className="star-light mb-5" />
                <div className="row">
                    <div className="col-lg-4 ml-auto">
                        <h3 className="text-center text-uppercase text-white">Info</h3>
                        <p className="text-center lead">
                            My name is Nikola Grgurević. 
                        </p>
                    </div>
                    <div className="col-lg-4 ml-auto">
                        <h3 className="text-center text-uppercase text-white">Skills</h3>
                        <p className="text-center lead">
                            Freelancer is a free bootstrap theme created by Start Bootstrap.
                            The download includes the complete source files including HTML,
                            CSS, and JavaScript as well as optional LESS stylesheets for
                            easy customization.
                        </p>
                    </div>
                    <div className="col-lg-4 mr-auto">
                        <p className="lead">
                            Whether you're a student looking to showcase your work, a
                            professional looking to attract clients, or a graphic artist
                            looking to share your projects, this template is the perfect
                            starting point!Whether you're a student looking to showcase your work, a
                            professional looking to attract clients, or a graphic artist
                            looking to share your projects, this template is the perfect
                            starting point!
                        </p>
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