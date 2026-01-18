import React from 'react';
import photo from '../assets/photo.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="name">Abhisek Mallick</h1>
                    <h2 className="role">
                        Pursuing MS in Data Analytics at Northeastern | Built production ML apps, MLOps pipelines, LLM engines | Python, FastAPI, React, AWS/GCP | AAAI-25 published.
                    </h2>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="img-wrapper">
                        <img src={photo} alt="Profile" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
