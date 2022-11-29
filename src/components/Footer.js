import React from "react";
import '../scss/styles.scss';
import '../scss/freelancer.scss';
import { FaGithub,FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Timer from '../components/Timer'

function Footer() {
    return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Address</h4>
            <p className="lead mb-0">
              Bernarda Vukasa 13
              <br />
              Croatia, Zagreb 10000
            </p>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Links</h4>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
              <IconContext.Provider value={{
              style: {
                fontSize: "40px",
                color: '#0B2F08' ,
                margin: "20px",
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
            <h4 className="text-uppercase mb-4">Timezone</h4>
            <p className="lead mb-0">
              <Timer/>
              CET+1
            </p>
          </div>
        </div>
      </div>
    </footer>
    );
  }

  export default Footer