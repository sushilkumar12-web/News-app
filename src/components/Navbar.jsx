import React, { Component } from "react";
import{Link} from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> <div className="container-fluid">
            <Link className="navbar-brand " to="/">
              News app
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"

              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/home" style={{padding:'20px'}}>
                    Home
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link " to="/General"  style={{padding:'20px'}}>
                    General
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link " to="/Science" style={{padding:'20px'}}>
                    Science
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link " to="/sports" style={{padding:'20px'}}>
                    sports
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link " to="/Technology" style={{padding:'20px'}}>
                    Technology
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link " to="/politics" style={{padding:'20px'}}>
                    politics
                  </Link>
                </li>

                <li className="nav-item"><Link className="nav-link " to="/Health" style={{padding:'20px'}}>
                    Health
                  </Link>
                </li>
               
                  </ul>
                
               
            
             
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
