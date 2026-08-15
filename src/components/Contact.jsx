import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

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
        <section id="contact" className="pt-14 pb-16 relative overflow-hidden bg-slate-950 text-slate-300 dark:bg-slate-50 dark:text-slate-700">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">

                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-3">
                        Connect & Collaborate
                    </h2>
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-slate-900 tracking-tight">
                        Get In Touch
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Info Side Card */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="glass-card p-8 rounded-2xl shadow-xl space-y-6">
                            <h4 className="text-2xl font-bold text-white dark:text-slate-900">
                                Let's build something awesome together!
                            </h4>
                            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-600 leading-relaxed">
                                Whether you have an exciting project idea, a job opportunity, or just want to connect, feel free to drop a message!
                            </p>

                            <div className="space-y-4 pt-4 border-t border-slate-800 dark:border-slate-200">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center text-xl">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                                        <a href="mailto:rudranisenapati15@gmail.com" className="text-sm font-medium text-slate-200 hover:text-teal-400 dark:text-slate-800 transition-colors">
                                            rudranisenapati15@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-xl">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                                        <p className="text-sm font-medium text-slate-200 dark:text-slate-800">
                                            Bhubaneswar, Odisha, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="lg:col-span-7">
                        <div className="glass-card p-8 rounded-2xl shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-700 font-bold mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 bg-slate-900/70 dark:bg-slate-100 border border-slate-800 dark:border-slate-300 rounded-xl text-slate-200 dark:text-slate-900 placeholder-slate-600 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-700 font-bold mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 bg-slate-900/70 dark:bg-slate-100 border border-slate-800 dark:border-slate-300 rounded-xl text-slate-200 dark:text-slate-900 placeholder-slate-600 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-700 font-bold mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Hi Rudrani, I'd like to talk about..."
                                        className="w-full px-4 py-3 bg-slate-900/70 dark:bg-slate-100 border border-slate-800 dark:border-slate-300 rounded-xl text-slate-200 dark:text-slate-900 placeholder-slate-600 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold py-4 px-6 rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                                >
                                    <FaPaperPlane />
                                    <span>{status === 'loading' ? 'Sending Message...' : 'Send Message'}</span>
                                </button>
                            </form>

                            {status === 'success' && (
                                <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm">
                                    <FaCheckCircle className="text-xl flex-shrink-0" />
                                    <span>Message sent successfully! Thanks for reaching out.</span>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="mt-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center gap-3 text-sm">
                                    <FaExclamationCircle className="text-xl flex-shrink-0" />
                                    <span>Failed to send message. Please try again later.</span>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

