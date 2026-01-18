import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Agent Planner - Multi-Agent AI System",
            description: "Developed a multi-agent AI project planning system using Meta's Llama 3.3 70B. Orchestrate 3+ specialized agents (task decomposition, timeline estimation, tech stack recommendation) through LangChain, reducing planning time from hours to minutes for 50+ concurrent users on Google Cloud Run.",
            tags: ["LangChain", "FastAPI", "React", "GCP", "Llama 3.3"],
            link: "#"
        },
        {
            id: 2,
            title: "Hepatocellular Carcinoma Detection",
            description: "Deployed app using Deep Learning models to predict liver cancer from Whole Slide Histopathology Images (WSI). Achieves accurate classification of healthy vs. malignant tissues with integrated Explainable AI (XAI).",
            tags: ["Deep Learning", "MobileNetV3", "Grad-CAM", "XAI"],
            link: "#"
        },
        {
            id: 3,
            title: "Real-Time Traffic Violation Detection",
            description: "Real-time detection and tracking of motorcycle traffic violations using vehicle-mounted dashcams. Employed curriculum learning-based object detection and novel boundary representations to handle occlusions.",
            tags: ["YOLOv5", "Computer Vision", "Deep SORT"],
            link: "#"
        },
        {
            id: 5,
            title: "Skin Cancer Detection with DeepCNN",
            description: "Utilized Xception Deep CNN to detect skin cancer by identifying subtle lesion differences. leveraged depthwise separable convolutions for efficient feature learning to distinguish benign from malignant lesions.",
            tags: ["Deep Learning", "CNN", "Gradio", "Xception"],
            link: "#"
        },
        {
            id: 6,
            title: "Sports Celebrity Image Classification",
            description: "Image classification model for sports personalities using SVM and logistic regression. Implemented data cleaning with OpenCV face detection and feature engineering via wavelet transforms.",
            tags: ["OpenCV", "SVM", "Feature Engineering"],
            link: "#"
        },
        {
            id: 7,
            title: "Heart Attack Analysis & Prediction",
            description: "Predictive model analyzing 12 input features to determine heart attack risk, achieving 86% accuracy using SVM algorithms on Kaggle datasets.",
            tags: ["Machine Learning", "SVM", "Kaggle"],
            link: "#"
        }
    ];
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                                <a href={project.link} className="project-link">View Project →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
