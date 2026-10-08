import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Info } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]{6,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid contact phone number';
    }

    if (!formData.comments.trim()) {
      newErrors.comments = 'Comments / Enquiry message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/drtomsontv@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Patient Enquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Full Name': formData.name,
          'Address / City': formData.address || 'N/A',
          'Email Address': formData.email,
          'Phone Number': formData.phone,
          'Medical Enquiry / Comments': formData.comments
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          address: '',
          email: '',
          phone: '',
          comments: ''
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-100 shadow-soft">
      <div className="space-y-2 mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-emerald-950 flex items-center space-x-2">
          <MessageSquare className="w-6 h-6 text-emerald-700" />
          <span>Make an Enquiry</span>
        </h3>
        <p className="text-xs sm:text-sm text-emerald-800">
          Fill in your details below to inquire about admission, treatments, or yoga consultation.
        </p>
      </div>

      {/* Success Banner */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm space-y-1">
          <div className="flex items-center space-x-2 font-bold text-emerald-950">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>Enquiry Sent Successfully!</span>
          </div>
          <p className="text-xs text-emerald-800">
            Thank you for your enquiry. Your message has been sent directly to <strong>drtomsontv@gmail.com</strong>. Dr. Tomson T.V and our medical team will respond to you shortly.
          </p>
        </div>
      )}

      {/* Error Banner */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <span>An error occurred while sending your enquiry. Please try calling +91-9995006118 directly.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-emerald-950 uppercase tracking-wide mb-1">
            Full Name <span className="text-rose-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-emerald-950 bg-emerald-50/30 focus:outline-none focus:ring-2 transition ${
              errors.name ? 'border-rose-400 focus:ring-rose-500 bg-rose-50/20' : 'border-emerald-200 focus:ring-emerald-700'
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-rose-600 font-semibold mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Address Field */}
        <div>
          <label htmlFor="address" className="block text-xs font-bold text-emerald-950 uppercase tracking-wide mb-1">
            Address / City (Optional)
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="e.g. Aluva, Kochi"
            className="w-full px-4 py-2.5 rounded-xl border border-emerald-200 text-sm text-emerald-950 bg-emerald-50/30 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition"
          />
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-emerald-950 uppercase tracking-wide mb-1">
              Email Address <span className="text-rose-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-emerald-950 bg-emerald-50/30 focus:outline-none focus:ring-2 transition ${
                errors.email ? 'border-rose-400 focus:ring-rose-500 bg-rose-50/20' : 'border-emerald-200 focus:ring-emerald-700'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-rose-600 font-semibold mt-1 flex items-center space-x-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-emerald-950 uppercase tracking-wide mb-1">
              Phone Number <span className="text-rose-600">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9995006118"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-emerald-950 bg-emerald-50/30 focus:outline-none focus:ring-2 transition ${
                errors.phone ? 'border-rose-400 focus:ring-rose-500 bg-rose-50/20' : 'border-emerald-200 focus:ring-emerald-700'
              }`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-xs text-rose-600 font-semibold mt-1 flex items-center space-x-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

        </div>

        {/* Comments Field */}
        <div>
          <label htmlFor="comments" className="block text-xs font-bold text-emerald-950 uppercase tracking-wide mb-1">
            Comments / Medical Enquiry <span className="text-rose-600">*</span>
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            required
            value={formData.comments}
            onChange={handleChange}
            placeholder="Please detail your health condition, desired dates, or general questions..."
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-emerald-950 bg-emerald-50/30 focus:outline-none focus:ring-2 transition ${
              errors.comments ? 'border-rose-400 focus:ring-rose-500 bg-rose-50/20' : 'border-emerald-200 focus:ring-emerald-700'
            }`}
            aria-invalid={!!errors.comments}
            aria-describedby={errors.comments ? 'comments-error' : undefined}
          />
          {errors.comments && (
            <p id="comments-error" className="text-xs text-rose-600 font-semibold mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.comments}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-forest hover:bg-emerald-900 text-white font-bold text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-700 disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin text-emerald-300" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <>
              <span>Send Enquiry Message</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Developer / Integration Note */}
        <p className="text-[11px] text-emerald-700/80 italic text-center pt-2">
          Note: This form includes full validation. Replace submit handler with your API endpoint or email service integration.
        </p>

      </form>
    </div>
  );
}
