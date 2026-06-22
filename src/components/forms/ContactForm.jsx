import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl flex flex-col items-center justify-center text-center h-full min-h-[400px] animate-fade-in">
        <CheckCircle2 className="w-16 h-16 text-green-600 mb-4 animate-scale" />
        <h3 className="font-headline-subsection text-headline-subsection mb-2 text-on-surface">Message Sent</h3>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-sm mb-6">
          Thank you for reaching out. Elena will review your message and respond within 24-48 business hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="border border-outline-variant text-on-surface px-6 py-2.5 rounded-[14px] font-bold hover:bg-surface-container transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl">
      <h3 className="font-headline-subsection text-headline-subsection mb-6 text-on-surface">Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name-input" className="font-meta-info text-meta-info text-on-surface-variant font-medium">
              Your Name
            </label>
            <input
              id="contact-name-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none bg-surface-container-low text-on-surface"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email-input" className="font-meta-info text-meta-info text-on-surface-variant font-medium">
              Email Address
            </label>
            <input
              id="contact-email-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none bg-surface-container-low text-on-surface"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-subject-input" className="font-meta-info text-meta-info text-on-surface-variant font-medium">
            Subject
          </label>
          <input
            id="contact-subject-input"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Consulting Inquiry"
            required
            className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none bg-surface-container-low text-on-surface"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message-input" className="font-meta-info text-meta-info text-on-surface-variant font-medium">
            Message
          </label>
          <textarea
            id="contact-message-input"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            rows="6"
            className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none bg-surface-container-low text-on-surface resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 bg-primary text-on-primary py-4 rounded-xl font-headline-subsection text-[18px] font-bold hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
