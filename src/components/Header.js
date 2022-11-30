import React from "react";
import '../scss/styles.scss';
import '../scss/freelancer.scss';
import profile from '../images/Profile.gif';
import { motion } from 'framer-motion';

function Header() {

    const [rotate, setRotate] = React.useState(false);

    return (<header className="masthead bg-primary text-white text-center">

        <div className="container">
            <motion.div initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1.1 }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10
                }}
            >
                <img
                    className="img-fluid mb-5 d-circle mx-auto border-radius-master"
                    src={profile}
                    alt=""
                />
            </motion.div>
            <h1 className="text-uppercase mb-0">Welcome to my Portfolio</h1>
            <hr className="star-light" />
            <h2 className="font-weight-light mb-0">
                I'm Web and Mobile Developer
            </h2>
        </div>
    </header>);
}

export default Header;