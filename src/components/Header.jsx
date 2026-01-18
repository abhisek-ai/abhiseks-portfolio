import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo" onClick={() => window.location.reload()} style={{ cursor: 'pointer' }}>AM<span>.</span></div>
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#publications" onClick={() => setMenuOpen(false)}>Publications</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
                <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
