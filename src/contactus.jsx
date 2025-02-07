import React, { useState } from 'react';
import Confetti from 'react-confetti'; // Make sure to install this package
import africa1 from './Images/africa1.jpg';
import donation from './Images/donation.jpg';
import './contact.css';

const ContactDonation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const phoneNumber = '+256-753-842-678'; // Replace with your WhatsApp number in international format

  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank'); // Open WhatsApp chat in a new tab
  };

  const handleDonate = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setShowConfirmation(true); // Show the confirmation message
  };

  const handleConfirm = () => {
    setShowConfirmation(false); // Hide the confirmation message
    setShowConfetti(true); // Show confetti
    setTimeout(() => {
      setShowConfetti(false); // Hide confetti after a short duration
      window.location.reload(); // Refresh the page
    }, 3000); // Adjust duration as needed
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${donation})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSendMessage}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-amber-800 text-xl leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-amber-800 text-xl leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-amber-800 text-xl leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="bg-amber-500 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <h2 className="text-3xl font-bold text-white mt-10 mb-4">Make a Donation</h2>
        <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleDonate}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donorname">Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-amber-800 text-xl leading-tight focus:outline-none focus:shadow-outline"
              id="donorname"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donationAmount">Donation Amount</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-amber-800 text-xl leading-tight focus:outline-none focus:shadow-outline"
              id="donationAmount"
              type="number"
              placeholder="Amount in USD"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cause">Cause To Be Donated To</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-amber-800 text-xl leading-tight focus:outline-none focus:shadow-outline"
              id="cause"
              placeholder="Your Cause"
              required
            ></textarea>
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Donate
          </button>
        </form>

        {/* Confirmation Message */}
        {showConfirmation && (
          <div className="popup">
            <h2 className="text-lg font-bold text-amber-600">For more info on donations, please contact {phoneNumber}.</h2>
            <button
              className="mt-2 bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleConfirm}
            >
              OK
            </button>
          </div>
        )}

        {/* Confetti Effect */}
        {showConfetti && <Confetti />}
      </div>
    </div>
  );
};

export default ContactDonation;