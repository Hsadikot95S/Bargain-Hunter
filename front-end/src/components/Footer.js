/*import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
           
            <div className="bargain-hunter-info"> 
                <ul>
                    <li><button onClick={() => {}}>Bargain Hunter</button></li>
                    <li><button onClick={() => {}}>Info</button></li>
                    <li><button onClick={() => {}}>About Us</button></li>
                    <li><button onClick={() => {}}>Terms of Use</button></li>
                    <li><button onClick={() => {}}>Join Us</button></li>
                    <li><button onClick={() => {}}>Privacy Policy</button></li>
                    <li><button onClick={() => {}}>Member Benefits</button></li>
                    <li><button onClick={() => {}}>Posting Policy</button></li>
                    <li><button onClick={() => {}}>Advertise on Bargain Hunter</button></li>
                    <li><button onClick={() => {}}>Support</button></li>
                    <li><button onClick={() => {}}>Help Desk</button></li>
                    <li><button onClick={() => {}}>Accessibility</button></li>
                </ul>
            </div> <p>&copy; 2024 Bargain Hunter</p>
        </footer>
    );
};

export default Footer;*/


import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../components/PageFooter.scss";

const PageFooter = () => {
  return (
    <section className='footer'>
        <footer className='footer--grid'>
            <div className="item">
                  <h1>support</h1>
                  <Link to={"/help-center"}>Help Center</Link>
                  <Link to={"/accessibility"}>Accessibility</Link>
            </div>
            
            <div className="item">
                  <h1>info</h1>
                  <Link to={"/Terms"}>Terms of Use</Link>
                  <Link to={"/Privacy"}>Privacy Policy</Link>
                  <Link to={"/posting"}>Posting Policy</Link>
                  
            </div>
            <div className="item">
                  <h1>Bargain Hunter</h1>
                  <Link to={"/join"}>Join Us</Link>
                  <Link to={"/aboutus"}>About Us</Link>
                  <Link to={"/Members"}>Member Benefits</Link>
                  
            </div>
        </footer>
        <div className="copyright--socials">
              <div className="copyright">
              <p>&copy; 2024 Bargain Hunter, Inc</p>
              
              
              </div>
              <div className="socials">
                  <p className='language'>
                    <AiOutlineGlobal />
                    English(US)
                  
                
                      US $
                  </p>
              </div>
        </div>
    </section>
  )
}

export default PageFooter