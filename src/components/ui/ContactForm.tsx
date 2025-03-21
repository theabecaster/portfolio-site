"use client";

import React from "react";

interface ContactFormProps {
  predefinedSubject?: string;
  showSubjectField?: boolean;
}

export default function ContactForm({ 
  predefinedSubject, 
  showSubjectField = false 
}: ContactFormProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: predefinedSubject || '',
    message: ''
  });
  
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

  // Update subject if predefinedSubject prop changes
  React.useEffect(() => {
    if (predefinedSubject) {
      setFormData(prev => ({ ...prev, subject: predefinedSubject }));
    }
  }, [predefinedSubject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please provide a valid email address';
        isValid = false;
      }
    }

    if (showSubjectField && !formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormData({ 
          name: '', 
          email: '', 
          subject: predefinedSubject || '',
          message: '' 
        });
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Your message has been sent successfully!' }
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus(prevStatus => ({
            ...prevStatus,
            submitted: false,
            info: { error: false, msg: null }
          }));
        }, 5000);
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.error || 'Something went wrong. Please try again later.' }
        });
      }
    } catch {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-background p-8 rounded-lg border border-gray-200">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input 
          type="text" 
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md bg-background transition-colors
            ${errors.name ? 'border-red-500' : 'border-input'} 
            focus:outline-none focus:ring-2 focus:ring-primary/50`}
          placeholder="Your Name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500 text-left">{errors.name}</p>}
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md bg-background transition-colors
            ${errors.email ? 'border-red-500' : 'border-input'} 
            focus:outline-none focus:ring-2 focus:ring-primary/50`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500 text-left">{errors.email}</p>}
      </div>
      
      {showSubjectField && (
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <input 
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md bg-background transition-colors
              ${errors.subject ? 'border-red-500' : 'border-input'} 
              focus:outline-none focus:ring-2 focus:ring-primary/50`}
            placeholder="Message Subject"
          />
          {errors.subject && <p className="mt-1 text-sm text-red-500 text-left">{errors.subject}</p>}
        </div>
      )}
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md bg-background transition-colors h-32
            ${errors.message ? 'border-red-500' : 'border-input'} 
            focus:outline-none focus:ring-2 focus:ring-primary/50`}
          placeholder="Your message..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500 text-left">{errors.message}</p>}
      </div>

      {status.info.msg && (
        <div className={`mb-6 p-3 rounded ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {status.info.msg}
        </div>
      )}
      
      <button 
        type="submit"
        disabled={status.submitting}
        className={`w-full py-2 rounded-md transition-colors
          ${status.submitting 
            ? 'bg-primary/70 text-white/70 cursor-not-allowed' 
            : 'bg-primary text-white hover:bg-primary/90'}`}
      >
        {status.submitting 
          ? 'Sending...' 
          : status.submitted 
            ? 'Sent!' 
            : 'Send Message'}
      </button>
    </form>
  );
} 