import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Contact</h2>

                <div className="contact-wrapper">
                    {/* Left Side: Info */}
                    <div className="contact-left">
                        <h3 className="contact-heading">Let's build something <br /> <span className="highlight">amazing together.</span></h3>
                        <p className="contact-text">
                            I'm always open to discussing product design work or partnership opportunities.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="label">Email</span>
                                <a href="mailto:abhisek.mallick217@gmail.com" className="value">abhisek.mallick217@gmail.com</a>
                            </div>
                            <div className="detail-item">
                                <span className="label">Location</span>
                                <span className="value">United States</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-right">
                        <form
                            className="contact-form"
                            action="https://formspree.io/f/YOUR_FORM_ID"
                            method="POST"
                            target="_blank"
                        >
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="email@example.com" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary form-submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
