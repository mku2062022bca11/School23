import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Send,
  Filter,
  Star,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { currentTheme } = useTheme();
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [feedbackRating, setFeedbackRating] = useState(0);

  const contactInfo = [
    {
      title: "Main Campus",
      address: "123 Innovation Drive, Future City",
      city: "Educational District, Metro State 560001",
      phone: "+91 98765 43210",
      email: "info@starlitacademy.edu",
      hours: "Monday-Friday: 8:00 AM - 6:00 PM",
    },
  ];

  const departments = [
    {
      name: "Principal's Office",
      head: "Dr. Meera Krishnan",
      phone: "+91 98765 43211",
      email: "principal@starlitacademy.edu",
      hours: "Monday-Friday, 9:00 AM - 5:00 PM",
      department: "administration",
    },
    {
      name: "Admissions Office",
      head: "Ms. Priya Sharma",
      phone: "+91 98765 43212",
      email: "admissions@starlitacademy.edu",
      hours: "Monday-Saturday, 8:00 AM - 6:00 PM",
      department: "admissions",
    },
    {
      name: "Academic Coordinator",
      head: "Mr. Rajesh Kumar",
      phone: "+91 98765 43213",
      email: "academics@starlitacademy.edu",
      hours: "Monday-Friday, 9:00 AM - 5:00 PM",
      department: "academics",
    },
    {
      name: "Student Affairs",
      head: "Ms. Anitha Reddy",
      phone: "+91 98765 43214",
      email: "counselor@starlitacademy.edu",
      hours: "Monday-Friday, 8:00 AM - 4:00 PM",
      department: "student-affairs",
    },
    {
      name: "Transport & Logistics",
      head: "Mr. Suresh Nair",
      phone: "+91 98765 43215",
      email: "transport@starlitacademy.edu",
      hours: "Monday-Saturday, 7:00 AM - 6:00 PM",
      department: "transport",
    },
    {
      name: "Medical & Health",
      head: "Dr. Kavitha Menon",
      phone: "+91 98765 43216",
      email: "medical@starlitacademy.edu",
      hours: "Monday-Friday, 8:00 AM - 4:00 PM",
      department: "medical",
    },
  ];

  const emergencyContacts = [
    { service: "24/7 Emergency Helpline", number: "+91 98765 43200" },
    { service: "Campus Security", number: "+91 98765 43201" },
    { service: "Medical Emergency", number: "+91 98765 43202" },
    { service: "Transport Emergency", number: "+91 98765 43203" },
  ];

  const filteredDepartments =
    selectedDepartment === "all"
      ? departments
      : departments.filter((dept) => dept.department === selectedDepartment);

  const departmentCategories = [
    "all",
    "administration",
    "admissions",
    "academics",
    "student-affairs",
    "transport",
    "medical",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./Contact/ContactImg1.jpeg"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Get in touch with OB365 School - We're here to help
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Send Us a Message
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    className={`w-full pl-10 pr-4 py-3 bg-gray-700 border ${currentTheme.border} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${currentTheme.focusRing} focus:border-transparent transition-all duration-300`}
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    className={`w-full pl-10 pr-4 py-3 bg-gray-700 border ${currentTheme.border} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${currentTheme.focusRing} focus:border-transparent transition-all duration-300`}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    className={`w-full pl-10 pr-4 py-3 bg-gray-700 border ${currentTheme.border} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${currentTheme.focusRing} focus:border-transparent transition-all duration-300`}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Subject
                </label>
                <select
                  className={`w-full px-4 py-3 bg-gray-700 border ${currentTheme.border} rounded-lg text-white focus:outline-none focus:ring-2 ${currentTheme.focusRing} focus:border-transparent transition-all duration-300`}
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="academics">Academic Information</option>
                  <option value="transport">Transport Services</option>
                  <option value="fees">Fee Information</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <textarea
                  required
                  rows="5"
                  className={`w-full pl-10 pr-4 py-3 bg-gray-700 border ${currentTheme.border} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${currentTheme.focusRing} focus:border-transparent transition-all duration-300 resize-none`}
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full ${currentTheme.bgPrimary} ${currentTheme.bgPrimaryHover} text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center`}
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Campus Location & Map */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Visit Our Campus
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                <h3
                  className={`text-3xl font-bold mb-6 ${currentTheme.primary}`}
                >
                  Campus Information
                </h3>

                {contactInfo.map((info, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-start">
                      <MapPin
                        className={`h-6 w-6 ${currentTheme.primary} mr-3 mt-1`}
                      />
                      <div>
                        <h4 className="text-white font-semibold">
                          {info.title}
                        </h4>
                        <p className="text-gray-300">{info.address}</p>
                        <p className="text-gray-300">{info.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone
                        className={`h-5 w-5 ${currentTheme.primary} mr-3`}
                      />
                      <span className="text-gray-300">{info.phone}</span>
                    </div>

                    <div className="flex items-center">
                      <Mail
                        className={`h-5 w-5 ${currentTheme.primary} mr-3`}
                      />
                      <span className="text-gray-300">{info.email}</span>
                    </div>

                    <div className="flex items-center">
                      <Clock
                        className={`h-5 w-5 ${currentTheme.primary} mr-3`}
                      />
                      <span className="text-gray-300">{info.hours}</span>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                  <h4 className="text-white font-semibold mb-3">
                    How to Reach
                  </h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      • <strong>By Metro:</strong> Blue Line to Innovation
                      Station (Exit 2)
                    </p>
                    <p>
                      • <strong>By Bus:</strong> Routes 15, 22, 35, and 47
                    </p>
                    <p>
                      • <strong>By Car:</strong> MG Road → Innovation Highway →
                      Academy Signal
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl h-full">
                <div className="relative h-64 bg-gray-700">
                  <img
                    src="./Contact/ContactImg2.jpeg"
                    alt="Campus Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin
                        className={`h-12 w-12 ${currentTheme.primary} mx-auto mb-2`}
                      />
                      <p className="text-white font-semibold">
                        Interactive Campus Map
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-white font-bold mb-3">
                    Campus Landmarks
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Opposite Future Tech Park</li>
                    <li>• Next to City Central Library</li>
                    <li>• Near Innovation Metro Station</li>
                    <li>• 5 minutes from City Hospital</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Staff Directory
          </motion.h2>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {departmentCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedDepartment(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 capitalize text-sm ${
                  selectedDepartment === category
                    ? `${currentTheme.bgPrimary} text-white`
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category === "all"
                  ? "All Departments"
                  : category.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3
                  className={`text-xl font-bold mb-3 ${currentTheme.primary}`}
                >
                  {dept.name}
                </h3>
                <p className="text-white font-semibold mb-4">{dept.head}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Phone className="h-4 w-4 mr-2" />
                    {dept.phone}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Mail className="h-4 w-4 mr-2" />
                    {dept.email}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    {dept.hours}
                  </div>
                </div>

                <button
                  className={`w-full ${currentTheme.bgPrimary} ${currentTheme.bgPrimaryHover} text-white py-2 rounded-lg font-semibold transition-all duration-300`}
                >
                  Contact Department
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Emergency Contacts
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 text-center hover:bg-red-900/30 transition-all duration-300"
              >
                <Phone className="h-8 w-8 text-red-400 mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">{contact.service}</h3>
                <p className="text-red-400 font-semibold text-lg">
                  {contact.number}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold mb-8 ${currentTheme.primaryDark}`}
          >
            Stay Updated
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg mb-8"
          >
            Subscribe to our newsletter "Starlit Spotlight" for monthly updates
            on achievements, events, and educational insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className={`flex-1 px-4 py-3 bg-gray-700 border ${currentTheme.border} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${currentTheme.focusRing} focus:border-transparent transition-all duration-300`}
              />
              <button
                className={`${currentTheme.bgPrimary} ${currentTheme.bgPrimaryHover} text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                Subscribe
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                How would you rate your experience with us?
              </p>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setFeedbackRating(rating)}
                    className={`transition-all duration-300 ${
                      rating <= feedbackRating
                        ? currentTheme.primary
                        : "text-gray-600"
                    }`}
                  >
                    <Star className="h-8 w-8 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
