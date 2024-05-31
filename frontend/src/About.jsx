import React from 'react';
import { Link } from 'react-router-dom';
import { CiShop } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { RiRedPacketLine } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

function About() {
    // Define CSS within the JavaScript file using template literals
    const styles = `
    .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: -100px;
        margin-top: -40px;
    }

    .about-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 50px;
    }

    .about-text {
        width: 50%;
        margin-right: 50px;
    }

    .about-text h2 {
        font-size: 45px;
        margin-bottom: 20px;
    }

    .about-text p {
        font-size: 27px;
        line-height: 1.5;
    }

    .about-image {
        width: 35%;
        height: auto;
    }

    .stats-container {
        display: flex;
        justify-content: space-between; /* Ensure space between each box */
        width: 100%;
        max-width: 1200px;
        margin-top: 20px;
        flex-wrap: nowrap; /* Ensure boxes stay in a single line */
    }

    .stat-box {
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        margin: 0 10px; /* Margin between boxes */
        text-align: center;
        width: calc(25% - 20px); /* Four boxes in one line with margins */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .stat-logo {
        width: 40px; /* Smaller logo size */
        height: 40px; /* Smaller logo size */
        margin-bottom: 10px;
    }

    .stat-text h3 {
        font-size: 16px; /* Smaller text size */
        margin-bottom: 5px;
        color: #333;
    }

    .stat-text p {
        font-size: 14px; /* Smaller text size */
        color: #555;
    }

    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #000; /* Black background */
        color: #fff; /* White text */
        padding: 10px 0; /* Increased padding */
        font-family: Arial, sans-serif;
    }
    
    .footer-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    
    .footer-section {
        flex: 1 1 200px; /* Slightly decreased flex basis */
        margin: 0 20px; /* Increased margin */
    }
    
    .footer-section h3 {
        font-size: 1.5rem; /* Increased font size */
        margin-bottom: 15px; /* Increased margin */
    }
    
    .footer-section p {
        font-size: 1.2rem; /* Increased font size */
    }
    
    .footer-section ul {
        list-style: none;
        padding: 0;
    }
    
    .footer-section li {
        margin-bottom: 8px; /* Increased margin */
    }
    
    .social-icons {
        display: flex;
    }
    
    .social-icons a {
        color: #fff;
        text-decoration: none;
        margin-right: 15px; /* Increased margin */
        font-size: 1.5rem; /* Increased font size */
        transition: color 0.3s ease;
    }
    
    .social-icons a:hover {
        color: #ffffff; /* Twitter blue */
    }
    
    .social-links {
        margin-top: 10px; /* Increased margin */
    }
    
    .social-links a {
        color: #fff;
        text-decoration: none;
        margin-right: 15px; /* Increased margin */
        font-size: 1.2rem; /* Increased font size */
    }
    
    .footer-bottom {
        background-color: #222;
        text-align: center;
        padding: 15px 0; /* Increased padding */
    }
    
    .footer-bottom p {
        margin: 0;
        font-size: 1rem; /* Increased font size */
        color: #fff; /* White text */
    }
    `;

    return (
        <div>
            <div className="about-container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            Launced in 2024, Exclusive is North Africa's premier online shopping <br /> marketplace with an active presence in Tunis. Supported <br />by a wide range of tailored marketing, data, and service solutions.<br/> Exclusive has 10,500 sellers and 300 brands and serves 3 million <br />customers across the region. <br />
                            <br /> Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion and lifestyle products.
                        </p>
                    </div>
                    <img className="about-image" src="https://img.freepik.com/premium-photo/portrait-her-she-nice-attractive-cheerful-cheery-girl-carrying-new-clothing-things-spending-holiday-isolated-bright-vivid-shine-vibrant-green-blue-turquoise-color-wall_274222-15637.jpg" alt="About us" />
                </div>
                <div className="stats-container">
                    <div className="stat-box">
                        {/* <img src="path/to/marketplace-logo.png" alt="Marketplace Logo" className="stat-logo" /> */}
                        <div className="stat-text">
                            
                            <h3> <CiShop />  <br />Sellers Active On Our Site</h3>
                            <p>10.5K</p>
                        </div>
                    </div>
                    <div className="stat-box">
                        {/* <img src="path/to/dollar-logo.png" alt="Dollar Logo" className="stat-logo" /> */}
                        <div className="stat-text">
                            <h3> <CiDollar /> <br />Monthly Product Sale</h3>
                            <p>33K</p>
                        </div>
                    </div>
                    <div className="stat-box">
                        {/* <img src="path/to/packets-logo.png" alt="Packets Logo" className="stat-logo" /> */}
                        <div className="stat-text">
                            <h3> <RiRedPacketLine /> <br />Customers Active On Our Site</h3>
                            <p>45K</p>
                        </div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-text">
                            <h3> <FaSackDollar /> <br />Annual Gross Sales</h3>
                            <p>Annual gross sales in our site</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Apply the styles */}
            <style>{styles}</style>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>Learn more about our company, mission, and values.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Customer Service</h3>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/returns">Returns</Link></li>
                            <li><Link to="/shipping">Shipping</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><LuInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default About;
