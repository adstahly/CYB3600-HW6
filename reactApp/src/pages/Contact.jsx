import React from 'react';
import {NavLink} from "react-router-dom";
import {useState} from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: new Date().toLocaleDateString(),
        message: ''
    });

    const [errors, setErrors] = useState({});

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData({...formData, [id]: value});

        if (errors[id]) {
            setErrors({...errors, [id]: null});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name.trim().length) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim().length) {
            newErrors.email = 'Email is required';
        }
        if (!formData.message.trim().length) {
            newErrors.message = 'Message is required';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSubmittedData(null)
        } else {
            setErrors({});
            setSubmittedData(formData);
        }
    }
    return (
        <>
            <h2 className="mb-4">Contact</h2>
            <NavLink to="/">&larr; Back to Home</NavLink>
            <p className="text-muted mt-3"> Fill out this form with your information. This is a practice form only - it
                does not send real email.</p>

            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label className="form-label">Student Name</label>
                    <input className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" type="text"
                           value={formData.name} onChange={handleChange} placeholder="Your full name"/>
                    {errors.name && <div className="invalid-feedback"> {errors.name} </div>}
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Email Address</label>
                    <input className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" type="text"
                           value={formData.email} onChange={handleChange} placeholder="you@example.com"/>
                    {errors.email && <div className="invalid-feedback"> {errors.email} </div>}
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Date</label>
                    <input className="form-control" type="text" value={formData.date} onChange={handleChange} readOnly/>
                    <div className="form-text"> This is automatically set to today's date.</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Message</label>
                    <textarea className={`form-control ${errors.message ? 'is-invalid' : ''}`} id="message" rows="3"
                              value={formData.message} onChange={handleChange}
                              placeholder="Write your message here (at least 10 characters)"></textarea>
                    {errors.message && <div className="invalid-feedback"> {errors.message} </div>}
                    <div className="form-text">
                        {formData.message.length} / 300 characters
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit Contact Info</button>
            </form>

            {submittedData && (
                <div className="alert alert-success mt-4">
                    <h4 className="alert-heading">Submission Summary</h4>
                    <p className="mb-1"><strong>Name:</strong> {submittedData.name}</p>
                    <p className="mb-1"><strong>Email:</strong> {submittedData.email}</p>
                    <p className="mb-1"><strong>Date:</strong> {submittedData.date}</p>
                    <p className="mb-0"><strong>Message:</strong> {submittedData.message}</p>
                </div>
            )}
        </>
    );
}

export default Contact;