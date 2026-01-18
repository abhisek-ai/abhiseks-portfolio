import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Junior Machine Learning Engineer",
            company: "Omdena",
            duration: "Jan 2023 - Mar 2024",
            location: "India",
            description: [
                "Built a Falcon LLM-powered analytics engine, processing 500K+ data points for real-time insights.",
                "Engineered a Deep Learning model for Hepatocellular Carcinoma (HCC) classification with 80% precision.",
                "Trained a machine learning model to predict autism risk in toddlers with 85% accuracy."
            ]
        },
        {
            id: 2,
            role: "AI Lab Intern",
            company: "Tech Mahindra",
            duration: "Feb 2023 - May 2023",
            location: "Bhubaneswar, India",
            description: [
                "Led development on Real-Time Detection and Tracking of Motorcycle Riders’ Traffic Violations (91% accuracy).",
                "Optimized detection speed by 20% and accuracy by 88% using YOLOv5 and RetinaNet.",
                "Enhanced CNN-based air pollution prediction model reducing inference time by 35%."
            ]
        },
        {
            id: 3,
            role: "Data Engineer Intern",
            company: "Hackveda",
            duration: "Feb 2023 - May 2023",
            location: "Delhi, India",
            description: [
                "Automated collection of NSE and BSE stock market data using Python and Alpha Vantage API.",
                "Engineered time-series datasets to support stock trend analysis.",
                "Built predictive models to forecast stock prices."
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experiences.map((exp) => (
                        <div className="timeline-item" key={exp.id}>
                            <div className="timeline-content">
                                <div className="exp-header">
                                    <h3>{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                </div>
                                <div className="exp-meta">
                                    <span className="duration">{exp.duration}</span>
                                    <span className="location">{exp.location}</span>
                                </div>
                                <ul className="exp-desc">
                                    {exp.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
