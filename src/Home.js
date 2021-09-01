import React from 'react';
import './App.css';
import Social from "./Social";

function Home() {
    return (
      <div className="Home">
          <div className="row">
          <div className="column">
          <img id="profile" src="./me.png" alt="alternatetext"/>
          </div>
            <div className="column" id="paragraph">
                <h1>Joe King</h1>
                <p >Hi! Welcome to my personal page. I love building react projects for 
                    fun and have experience doing Front End Engineering. I also have experience
                    with AWS, Python, and Php. I've also included some of projects below to checkout!
                </p>
            </div>
          </div>
          <Social/>
      </div>
    );
  }
  
  export default Home;