// import React from 'react';
import './Footer.css';
import { FaYoutube ,FaInstagram,FaLocationDot,FaPhone  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF,FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="ftco-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-twitter"><FaYoutube /></span></a></li>
                <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-facebook"><FaFacebookF /></span></a></li>
                <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-instagram"><FaInstagram /></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>About</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Services</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Projects</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Design</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Development</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Business Strategy</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Data Analysis</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Graphic Design</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon icon-map-marker"><FaLocationDot /></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><span className="icon icon-phone"><FaPhone /></span><span className="text">+2 392 3929 210</span></li>
                  <li><a href="info@yourdomain.com"><span className="icon icon-envelope"><MdEmail /></span><span className="text">info@yourdomain.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className='footer-text'>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              © {new Date().getFullYear()} All rights reserved | This template is made with <FaHeart /> by <a href="https://github.com/Ayham-Ibrahim" target="_blank" rel="noopener noreferrer">Ayham Ibrahim</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;