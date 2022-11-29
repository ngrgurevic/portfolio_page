import React from "react";
import '../scss/styles.scss';
import '../scss/freelancer.scss';

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
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  href="#"
                >
                  <i className="fa fa-fw fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  href="#"
                >
                  <i className="fa fa-fw fa-google-plus" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  href="#"
                >
                  <i className="fa fa-fw fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  href="#"
                >
                  <i className="fa fa-fw fa-linkedin" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  href="#"
                >
                  <i className="fa fa-fw fa-dribbble" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="text-uppercase mb-4">Links</h4>
            <p className="lead mb-0">
              Feel free to contact  me
              <a href="http://startbootstrap.com">Start Bootstrap</a>
            </p>
            <a href="http://startbootstrap.com">Start Bootstrap</a>
          </div>
        </div>
      </div>
    </footer>
    );
  }

  export default Footer