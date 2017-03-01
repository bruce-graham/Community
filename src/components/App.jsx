import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../containers/SearchBar.jsx';
import Navbar from './Navbar.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <section id="partner">
          <div className="container">
            <div className="center wow fadeInDown">
              <h1 id="header-font">Neighborly</h1>
              <p className="lead">Find your next neighborhood</p>
            </div>
          </div>
        </section>

        <div className="container">
          {this.props.children}
        </div>

        <section id="bottom">
          <div class="container wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div class="row"></div>
          </div>
        </section>

        <footer id="footer" className="midnight-blue">
            <div className="container">
                <div className="row">
                    <div className="col 16 s12 m6">
                        <h4 class="white-text"> &copy; 2017 Neighborly. All Rights Reserved </h4>
                        <h4 class="white-text"> Check us out on GitHub </h4>
                        <a href="https://github.com/Stegothesis/Neighborly">Team Stegos</a>
                    </div>
                    <div className="col 14 offset-12 s12 m6">
                      <h4 class="white-text">Team</h4>
                      <ul>
                        <li><a class="white-text" href="https://github.com/renatavmaraj"> Renata Maraj</a></li>
                        <li><a class="white-text" href="https://github.com/michiang"> Michael Chiang</a></li>
                        <li><a class="white-text" href="https://github.com/bchasset"> Brian Hassett</a></li>
                        <li><a class="white-text" href="https://github.com/bruce-graham"> Bruce Graham</a></li>
                      </ul>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}




