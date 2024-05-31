import React from 'react';
import { Link } from 'react-router-dom';
import { CiShop } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { RiRedPacketLine } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Footer from './Footer';

function About() {
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
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        margin-top: 20px;
        flex-wrap: nowrap;
    }

    .stat-box {
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        margin: 0 10px;
        text-align: center;
        width: calc(25% - 20px);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .stat-logo {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
    }

    .stat-text h3 {
        font-size: 16px;
        margin-bottom: 5px;
        color: #333;
    }

    .stat-text p {
        font-size: 14px;
        color: #555;
    }
    `;

    return (
        <div>
            <div className="about-container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            Launched in 2024, Exclusive is North Africa's premier online shopping marketplace with an active presence in Tunis. Supported by a wide range of tailored marketing, data, and service solutions. Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region. Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion and lifestyle products.
                        </p>
                    </div>
                    <img className="about-image" src="https://img.freepik.com/premium-photo/portrait-her-she-nice-attractive-cheerful-cheery-girl-carrying-new-clothing-things-spending-holiday-isolated-bright-vivid-shine-vibrant-green-blue-turquoise-color-wall_274222-15637.jpg" alt="About us" />
                </div>
                <div className="stats-container">
                    <div className="stat-box">
                        <div className="stat-text">
                            <h3><CiShop /> <br />Sellers Active On Our Site</h3>
                            <p>10.5K</p>
                        </div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-text">
                            <h3><CiDollar /> <br />Monthly Product Sale</h3>
                            <p>33K</p>
                        </div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-text">
                            <h3><RiRedPacketLine /> <br />Customers Active On Our Site</h3>
                            <p>45K</p>
                        </div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-text">
                            <h3><FaSackDollar /> <br />Annual Gross Sale</h3>
                            <p>$35M</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <style>{styles}</style>
        </div>
    );
}

export default About;
