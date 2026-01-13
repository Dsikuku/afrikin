import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert("Thanks for reaching out! Someone from the Toronto team will contact you soon.");
    // Here you would normally send the data to a backend service
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mt-4">Have a project idea for your neighborhood? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-sm">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-blue-600">Our Hub</h4>
                <p className="text-gray-600">123 Queen St West, Toronto, ON M5H 2M9</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-600">Email</h4>
                <p className="text-gray-600">hello@torontotogether.ca</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-600">Follow Along</h4>
                <p className="text-gray-600">@TorontoTogetherInitiative</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" name="name" required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="John Doe"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" name="email" required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="john@example.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                name="message" rows="4" required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Tell us about your initiative..."
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;