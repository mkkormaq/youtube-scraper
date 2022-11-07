import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Magic from './Magic';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <div id="mySidepanel" className="sidepanel">
        <a href="#" className="closebtn" onClick={()=>closeNav()}>&times;</a>
        <a href="https://sethmerck.netlify.app/">Seth Merck Porfolio</a>
        <a href="https://mkkormaq.netlify.app/">Josh McCormack Portfolio</a>
      </div>
      <div className='hamburger'>
        <a id="menu" href='#' className='openbtn' onClick={()=>openNav()}>&#9776;</a>
      </div>
      <div className='header-logo'>
        <img src="logo192.png" alt="react logo" />
        <h2><a href="#banner">ScrapeTube</a></h2>
        <img src="logo_py.png" alt="react logo" />
      </div>
      <div className='authors'>
        <span>CODERS:</span>
        <ul>
          <li><a href='https://github.com/Merckus'>merckus</a></li>
          <li><a href='https://github.com/mkkormaq'>mkkormaq</a></li>
        </ul>
      </div>
    </header>
    <main>
      <div id='banner'>
        <h1>Numot <br />the Nummy</h1>
      </div>
      <Magic />
    </main>
    <footer>
      <span>Banner image by <a href='https://www.deviantart.com/xenphire'>Xenphire</a></span>
      <span>All original artworks are copyright of Wizards of the Coast</span>
      <span>Site designed by <a href='https://mkkormaq.netlify.app/'>Josh McCormack</a></span>
    </footer>
  </React.StrictMode>
);

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
