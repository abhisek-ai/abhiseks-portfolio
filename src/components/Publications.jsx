import React from 'react';
import './Publications.css';

const Publications = () => {
    const publications = [
        {
            id: 1,
            title: "Ensuring Class-Conditional Coverage for Pathological Workflows",
            conference: "AAAI",
            year: "2025",
            description: "Research focusing on improving reliability in pathological AI workflows through class-conditional coverage guarantees.",
            link: "#"
        },
        {
            id: 2,
            title: "Predicting the Fluctuations and Flow of Cryptocurrency Using ML Algorithms",
            conference: "IJSREM",
            year: "2024",
            description: "A comprehensive study on applying various machine learning algorithms to forecast cryptocurrency market trends and volatility.",
            link: "#"
        }
    ];

    return (
        <section id="publications" className="publications">
            <div className="container">
                <h2 className="section-title">Publications</h2>
                <div className="publications-grid">
                    {publications.map((pub) => (
                        <div className="pub-card" key={pub.id}>
                            <div className="pub-header">
                                <span className="pub-conf">{pub.conference}</span>
                                <span className="pub-year">{pub.year}</span>
                            </div>
                            <h3 className="pub-title">{pub.title}</h3>
                            <p className="pub-desc">{pub.description}</p>
                            <div className="pub-link-wrapper">
                                <a href={pub.link} className="pub-link">Read Paper <span className="arrow">→</span></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
