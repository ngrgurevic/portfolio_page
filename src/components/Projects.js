import React, { Profiler } from "react";
import '../scss/styles.scss';
import '../scss/freelancer.scss';
import cabin from '../images/portfolio/cabin.png';
import cake from '../images/portfolio/cake.png';
import circus from '../images/portfolio/circus.png';
import game from '../images/portfolio/game.png';
import safe from '../images/portfolio/safe.png';
import submarine from '../images/portfolio/submarine.png';
import Profile from '../images/Profile.gif'

function Project() {
    return (<section className="portfolio" id="portfolio">
        <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">
                Projects
            </h2>
            <hr className="star-dark mb-5" />
            <div className="row">
                    
                <div className="col-md-6 col-lg-4 text-center">
                    <div className='color'>
                    <h3>Pokedex</h3>
                    <p>Language: Swift App</p>
                    </div>
                    <a
                        className="portfolio-item d-block mx-auto"
                        href="https://github.com/ngrgurevic/Pokedex-nxg7120/archive/refs/heads/main.zip"
                    >
                        
                        <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                <i className="fa fa-search-plus fa-3x" />
                            </div>
                        </div>
                        <img className="img-fluid" src={cabin} alt="" width='250px' height='200' />
                    </a>
                </div>
                <div className="col-md-6 col-lg-4 text-center">
                    <h3>Pokedex</h3>
                    <p>Language: Kotlin App</p>
                    <a
                        className="portfolio-item d-block mx-auto"
                        href="https://github.com/ngrgurevic/Pokedex-nxg7120/archive/refs/heads/main.zip"
                    >
                        <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                <i className="fa fa-search-plus fa-3x" />
                            </div>
                        </div>
                        <img className="img-fluid" src={cabin} alt="" width='250px' height='200'/>
                    </a>
                </div>
                <div className="col-md-6 col-lg-4 text-color-primary">
                    <h3>Portfolio Page</h3>
                    <p>Language: JS React HTML&CSS</p>
                    <a
                        className="portfolio-item d-block mx-auto"
                        href="https://github.com/ngrgurevic/portfolio_page/archive/refs/heads/master.zip"
                    >
                        <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                <i className="fa fa-search-plus fa-3x" />
                            </div>
                        </div>
                        <img className="img-fluid" src={Profile} alt="circus" width='300px' height='200' />
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
    </section>);
}

export default Project