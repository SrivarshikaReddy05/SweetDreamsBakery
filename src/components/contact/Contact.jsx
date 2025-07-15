import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-amber-50 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700">
          Ready to place an order or have questions? We'd love to hear from you.
          <br />
          Contact us today and let's make something delicious together!
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side: Contact Info and Map */}
        <div className="space-y-6">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:text-orange-600 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-200 p-3 rounded-full">
                  <MapPin className="text-orange-700" />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">123 Baker Street, Downtown City, DC 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-200 p-3 rounded-full">
                  <Phone className="text-orange-700" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">(555) 123-BAKE</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-200 p-3 rounded-full">
                  <Mail className="text-orange-700" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">hello@sweetdreamsbakery.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-200 p-3 rounded-full">
                  <Clock className="text-orange-700" />
                </div>
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-gray-600">Mon–Sat: 6AM–8PM, Sun: 7AM–6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:text-orange-600 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Find Us</h3>
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=123%20Baker%20Street,%20Downtown%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:text-amber-600 transition duration-300 self-start">
          <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
          <form className="space-y-4 text-gray-700">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email *</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Service Interest</label>
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>Select a service</option>
                  <option>Custom Cake</option>
                  <option>Wedding Order</option>
                  <option>Wholesale Inquiry</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Message *</label>
              <textarea
                rows="4"
                maxLength="500"
                placeholder="Tell us about your needs, special requests, or any questions you have..."
                className="w-full border rounded-lg px-4 py-2"
              ></textarea>
              <p className="text-right text-sm text-gray-500 mt-1">0/500 characters</p>
            </div>
            <button
  type="submit"
  className="w-full bg-amber-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transform hover:scale-105 transition-all duration-300"
>
  Send Message
</button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
