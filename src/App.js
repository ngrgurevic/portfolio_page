import React from 'react';
import './scss/styles.scss';
import './scss/freelancer.scss';
import profile from './images/profile.png';
import cabin from './images/portfolio/cabin.png';
import cake from './images/portfolio/cake.png';
import circus from './images/portfolio/circus.png';
import game from './images/portfolio/game.png';
import safe from './images/portfolio/safe.png';
import submarine from './images/portfolio/submarine.png';

function App() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="index.html">
              <svg id="logo-37" width="50" height="48" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z" class="ccustom" fill="#7D84B2"></path>
              <path d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z" class="ccustom" fill="#EFF8E2"></path>
              <path d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z" class="ccustom" fill="#7D84B2"></path>
              <path d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z" class="ccustom" fill="#7D84B2"></path>
              <path d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z" class="ccustom" fill="#7D84B2"></path>
              <path d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z" class="ccustom" fill="#7D84B2"></path>
              <path d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z" class="ccustom" fill="#7D84B2"></path>
              <path d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z" class="ccustom" fill="#7D84B2"></path>
              <path d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z" class="ccustom" fill="#7D84B2"></path>
            </svg>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="#portfolio"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead bg-primary text-white text-center">
        <div className="container">
          <img
            className="img-fluid mb-5 d-block mx-auto"
            src={profile}
            alt=""
          />
          <h1 className="text-uppercase mb-0">Start Bootstrap</h1>
          <hr className="star-light" />
          <h2 className="font-weight-light mb-0">
            Web Developer - Graphic Artist - User Experience Designer
          </h2>
        </div>
      </header>

      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-1"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={cabin} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-2"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={cake} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-3"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={circus} alt="circus" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-4"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={game} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-5"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={safe} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a
                className="portfolio-item d-block mx-auto"
                href="#portfolio-modal-6"
              >
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={submarine} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="text-center text-uppercase text-white">About</h2>
          <hr className="star-light mb-5" />
          <div className="row">
            <div className="col-lg-4 ml-auto">
              <p className="lead">
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
                starting point!
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="#">
              <i className="fa fa-download mr-2" />
              Download Now!
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Name</label>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Name"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Email Address</label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <br />
                <div id="success" />
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-xl"
                    id="sendMessageButton"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

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

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2018</small>
        </div>
      </div>

      <div className="scroll-to-top d-lg-none position-fixed ">
        <a
          className="js-scroll-trigger d-block text-center text-white rounded"
          href="#page-top"
        >
          <i className="fa fa-chevron-up" />
        </a>
      </div>
    </div>
  );
}

export default App;
