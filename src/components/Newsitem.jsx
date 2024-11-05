import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let{title,description,imageurl,newsurl,author,date,source} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}> 
        <span class="position-absolute top-0  trasnlate-middle badge rounded-pill bg-danger"  style={{left:'70%',zIndex:'1'}}> {source} </span>
          <img src={!imageurl?"https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg":imageurl}className="card-img-top" alt="..." />
          <div className="card-body"> 
            <h5 className="card-title">{!title?"Supercomputer Predicts The Champions League Winner For 2019-20 Season":title}</h5>
            <p className="card-danger">
            {description}
            </p>
            <p className="card-text"><small className="text-muted"> By {author} </small></p>
             <p className="card-text"><small className="text-muted"> on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} className="btn btn-dark">
              Readmore
            </a>
          </div>
        </div>
      </div>
    );
  }
}
