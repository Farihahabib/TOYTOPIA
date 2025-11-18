import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-10">
        Contact ToyTopia
      </h1>

      <p className="text-lg text-gray-700 text-center mb-10">
        Have questions, suggestions, or need assistance?  
        We're here to help! Feel free to reach out to us.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📍 Our Store Address
          </h2>
          <p className="text-gray-700 mb-6">
            ToyTopia – Local Toy Store <br />
            123 Joy Street, Playtown <br />
            Dhaka, Bangladesh
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ☎️ Contact Details
          </h2>
          <p className="text-gray-700">
            Phone: +880 1234-567890 <br />
            Email: support@toytopia.com <br />
            Facebook: fb.com/toytopia
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ✉️ Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold "
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
