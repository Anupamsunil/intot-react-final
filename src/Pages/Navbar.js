import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {

    return(
        <div>
              <div className="top">
            <div className="container-fluid nav-container  ">
                <div className="navbarc">
                    <nav className="navbar navbar-expand-lg navbar-dark  ">
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
                        <a className="navbar-brand "><span className="brand">INTOT</span></a>
                        <div className="navlogin">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item ">
                                    <Link to="/login" className="nav-link" >
                                        <img src=""alt="" />
                                        <span>Login</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/form" className="nav-link" >
                                    <img src="Components/images/signup.png" alt="" />
                                    <span>
                                    signup
                                    </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=''>
                                        <img src="Components/images/search-icon.png" alt="search-icon" />
                                        <span>search</span>
                                    </a>
                                </li>
                                <li classNameName="nav-item">
                                  <a className="nav-link" href=''></a>
                                  <img src="Components/images/menu.png" alt="" />
                                </li>
                            </ul>
                          </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Navbar;