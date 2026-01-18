import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="social-links">
                    <a href="https://github.com/abhisek-ai" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/abhisek-ai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:abhisek.mallick217@gmail.com">Email</a>
                </div>
                <p className="copyright">© {new Date().getFullYear()} Abhisek Mallick. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
