import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>

        <Router> 
          <Navbar title="News-app" />
          <Routes>
          
            <Route exact path="/" element={<News key ="/home" pagesize={14} q="home" />} />
            <Route exact path="/general" element={<News key ="general" pagesize={14} q="general" />} />
            <Route exact path="/science" element={<News key ="science" pagesize={14} q="science" />} />
            <Route exact path="/sports" element={<News key ="sports" pagesize={14} q="sports" />} />
            <Route exact path="/technology" element={<News key ="technology" pagesize={14} q="technology" />} />
            <Route exact path="/politics" element={<News key ="politics" pagesize={14} q="politics" />} />
            <Route exact path="/health" element={<News key ="health" pagesize={14} q="health" />} />
          </Routes>
        </Router>
      </div>
    );
  }                         
}
