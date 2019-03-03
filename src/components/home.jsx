import React from 'react';
import self from '../assets/self.jpg';

function Home(props){
  return (
    <React.Fragment>
      <style jsx>{`
        #mainPagePhoto {
          height: 100%;
          display: inline-block;
          float:left;
        }
        #mainPage {
          width: 60%;
          height: 30em;
          border: 2px solid;
          margin: auto;
          margin-top: 20px;
          text-align: center;
        }

        #info {
          margin-top: 15%;
        }
      `}</style>
      <div id="mainPage">
        <img src={self} id="mainPagePhoto"/>
        <div id="info">
          <p>Miranda Thalia Keith</p>
          {props.summary.split('\n').map((segment, key) =>
            <p key={key}>{segment}</p>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;