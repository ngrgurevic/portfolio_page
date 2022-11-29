import React from "react";
import '../scss/styles.scss';
import '../scss/freelancer.scss';
import profile from '../images/Profile.gif';

function Header() {
    return (<header className="masthead bg-primary text-white text-center">
        <div className="container">
            <img
                className="img-fluid mb-5 d-block mx-auto"
                src={profile}
                alt=""
            />
            <h1 className="text-uppercase mb-0">Welcome to my Portfolio</h1>
            <hr className="star-light" />
            <h2 className="font-weight-light mb-0">
              I'm Web and Mobile Developer
            </h2>
        </div>
    </header>);
}

export default Header;