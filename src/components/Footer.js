import React from "react";
import '../scss/styles.scss';
import '../scss/freelancer.scss';
import { FaGithub,FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Timer from '../components/Timer';
import Maps from '../components/Maps'

function Footer() {
    return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5 mb-lg-0">
            <h2 className="text-uppercase mb-2 text-secondary-head">Contact</h2>
            <h6 className="text-uppercase mb-2">Living in</h6>
            <p className="lead mb-5">
              Croatia, Zagreb 10000
            </p>
            <h6 className="text-uppercase mb-2">Phone & Email</h6>
            <p>+385977645232</p>
            <a>nikolagrgurevic@gmail.com</a>
            {/* <Maps/> */}
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h2 className="text-uppercase mb-4 text-primary-head">Links</h2>
            <ul className="list-inline mb-0">
              <li className="list-inline-item ">
              <IconContext.Provider value={{
              style: {
                fontSize: "50px",
                color: '#790e8b' ,
                margin: "30px",
              },
            }}>
                <a href="https://www.github.com/ngrgurevic">
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/nikola-grgurevic-0782511b2">
                <FaLinkedinIn/>
                </a>
                </IconContext.Provider> 
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2 className="text-uppercase text-secondary-head mb-4">Timezone</h2>
            <p className="lead mb-0">
              <Timer/>
              +1 CET
            </p>
          </div>
        </div>
      </div>
    </footer>
    );
  }

  export default Footer