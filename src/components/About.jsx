import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Pursuing MS in Data Analytics Engineering at Northeastern University with hands-on experience deploying ML applications to production. Built LLM-powered analytics engines processing 500K+ data points, MLOps pipelines with 99.9% uptime serving 100K+ records daily, and medical imaging AI for clinical decision-making. Skilled in Python, FastAPI, React, and cloud platforms (AWS/GCP). Experienced in building end-to-end data pipelines using CI/CD, Airflow, MLflow, and Docker. Published researcher at AAAI-25 with expertise in computer vision, NLP, and explainable AI.
                        </p>
                        <div className="skills">
                            <h3>Technical Skills</h3>
                            <div className="skills-grid">
                                <div className="skill-category">
                                    <h4>Languages</h4>
                                    <div className="skill-tags">
                                        <span>Python</span><span>SQL</span><span>JavaScript</span><span>TypeScript</span><span>Java</span><span>MATLAB</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h4>ML/DL</h4>
                                    <div className="skill-tags">
                                        <span>PyTorch</span><span>TensorFlow</span><span>Scikit-learn</span><span>XGBoost</span><span>YOLOv5</span>
                                        <span>Computer Vision</span><span>Medical Imaging</span><span>NLP</span><span>XAI</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h4>Image Processing</h4>
                                    <div className="skill-tags">
                                        <span>OpenCV</span><span>PIL</span><span>DICOM</span><span>Image Segmentation</span>
                                        <span>Feature Extraction</span><span>Data Augmentation</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h4>MLOps & Cloud</h4>
                                    <div className="skill-tags">
                                        <span>Docker</span><span>Kubernetes</span><span>Apache Airflow</span><span>DVC</span><span>MLflow</span>
                                        <span>Weights & Biases</span><span>GitHub Actions</span><span>CI/CD</span><span>GCP</span><span>AWS</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h4>Frameworks</h4>
                                    <div className="skill-tags">
                                        <span>LangChain</span><span>FastAPI</span><span>Gradio</span><span>Flask</span><span>SQLAlchemy</span>
                                        <span>NumPy</span><span>Pandas</span><span>PySpark</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h4>Data & Tools</h4>
                                    <div className="skill-tags">
                                        <span>Data Pipelines</span><span>BigQuery</span><span>MySQL</span><span>ETL</span><span>PowerBI</span>
                                        <span>Tableau</span><span>Git</span><span>Jupyter</span><span>Experiment Tracking</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
