import React from 'react';
import { socialImgs } from '../constants/index.js';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a key={img.url} href={img.url} className="icon" target="_blank">
              <img src={img.imgPath} alt=""/>
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} TO | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
