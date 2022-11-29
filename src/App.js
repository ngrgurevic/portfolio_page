import React from 'react';
import './scss/styles.scss';
import './scss/freelancer.scss';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Project from './components/Projects';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; NG 2022</small>
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




