import React, { useState } from 'react';
import emailjs from "emailjs-com";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        emailjs.send(
            "service_z84ew0g",
            "template_sz43peu",
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            "JtP2DIUmjndZapw2Z"
        ).then(
            () => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(null), 5000);
            },
            () => {
                setStatus('error');
                setTimeout(() => setStatus(null), 5000);
            }
        );
    };

    return (
        <section id="contact" className="py-20 text-gray-300">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white dark:text-black mb-12 animate-fade-in-down">
                    Get In Touch
                </h2>
                <div className="max-w-xl mx-auto p-1 bg-gradient-to-tr from-teal-400 via-purple-500 to-pink-500 rounded-lg shadow-lg animate-fade-in-up">
                    <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-purple-900 
dark:bg-gradient-to-br dark:from-teal-200 dark:via-purple-300 dark:to-pink-300 font-semibold
p-8 rounded-lg">
                        <p className="text-center mb-6 text-gray-400 dark:text-blue-900 ">
                            Have a question or want to work together? Fill out the form below.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-400 font-bold mb-2 dark:text-blue-900">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 dark:bg-gradient-to-r dark:from-teal-100 dark:via-purple-100 dark:to-pink-100 dark:text-gray-800 bg-gradient-to-r from-slate-700 via-teal-700 to-purple-700 text-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-400 font-bold mb-2 dark:text-blue-900">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 dark:bg-gradient-to-r dark:from-teal-100 dark:via-purple-100 dark:to-pink-100 dark:text-gray-800 bg-gradient-to-r from-slate-700 via-teal-700 to-purple-700 text-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-400 font-bold mb-2 dark:text-blue-900">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 dark:bg-gradient-to-r dark:from-teal-100 dark:via-purple-100 dark:to-pink-100 dark:text-gray-800 bg-gradient-to-r from-slate-700 via-teal-700 to-purple-700 text-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300 transform hover:-translate-y-1 shadow-md disabled:bg-gray-700 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                        {status === 'success' && (
                            <p className="mt-4 text-center text-green-500">
                                Message sent successfully! Thanks for reaching out.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-center text-red-500">
                                Failed to send message. Please try again later.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
