import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Magic from './Magic';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <div className='header-logo'>
        <img src="logo192.png" alt="react logo" />
      </div>
      <h2><a href="#banner">ScrapeTube</a></h2>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
