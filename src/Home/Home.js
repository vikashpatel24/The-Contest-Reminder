import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from '../components/Navbar/Navbar';
import ContestAll from '../components/ContestAll';
import Codechef from '../components/Codechef';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contest from '../components/Contest';

function Home() {
  return (

    <div>
      <div className='middle'>
        <div className='section-one'>
            
            <span className='spandsa'><div className='cent'>DSA</div><Link  className='cont-one' to="/dsa">Continue</Link></span>
        </div>
        <div className='section-two'>
          
          <span className='spanpod'><div className='cent'>Problem of The Day</div><a className="cont-two" target="_blank" href='https://practice.geeksforgeeks.org/problem-of-the-day'>Continue</a></span>
        </div>
      </div>
      <div className='allc'>
        <div className='all-contest'>
          All Contests
          <Link className='ac' to="/contest" >Continue</Link>
        </div>
      </div>
      <div className='foot'>
      
          <div className='one codechef'>
            CodeForces <span ><Link className='visit' to="/codeforces" >Go</Link></span>
          </div>
          <div className='one'>
            CodeChef <span ><Link className='visit' to="/codechef" >Go</Link></span>
          </div>
          <div className='one'>
            LeetCode <span ><Link className='visit' to="/leetcode" >Go</Link></span>
          </div>
          <div className='one'>
            Google <span> <Link className='visit' to="/google" >Go</Link></span>
          </div>
          <div className='one'>
            AtCoder <span > <Link className='visit' to="/atcoder">Go</Link></span>
          </div>
          <div className='one'>
            HackerRank <span> <Link className='visit' to="/hackerrank" >Go</Link></span>
          </div>
          <div className='one'>
            HackerEarth <span c> <Link className='visit' to="/hackerearth" >Go</Link></span>
          </div>
          <div className='one'>
            TopCoder <span > <Link className='visit' to="/topcoder" >Go</Link></span>
          </div>
      </div>
      
    </div>
  );
}

export default Home;