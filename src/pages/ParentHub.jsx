import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bus, Utensils, Calendar, Users, Phone, Mail, Download, Clock, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ParentHub = () => {
  const { currentTheme } = useTheme();
  const [activeDay, setActiveDay] = useState('monday');

  const dashboardFeatures = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Daily Attendance',
      description: 'Real-time attendance and punctuality records'
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: 'Assignments & Grades',
      description: 'Track homework submissions and academic progress'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Teacher Communication',
      description: 'Direct messaging with class and subject teachers'
    },
    {
      icon: <Bus className="h-6 w-6" />,
      title: 'Transport Tracking',
      description: 'Live GPS tracking of school buses'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Emergency Alerts',
      description: 'Instant notifications for important updates'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Health Updates',
      description: 'Medical visits and health monitoring reports'
    }
  ];

  const schoolRules = [
    {
      category: 'Academic Standards',
      rules: [
        'Regular attendance is mandatory (minimum 85%)',
        'Homework completion is expected daily',
        'Parent supervision of study time recommended',
        'Academic integrity and honesty valued',
        'Respect for teachers and staff required'
      ]
    },
    {
      category: 'Behavioral Expectations',
      rules: [
        'Respectful communication with peers and adults',
        'Proper school uniform and grooming standards',
        'Mobile phone usage as per school policy',
        'Bullying of any kind is strictly prohibited',
        'Environmental responsibility and cleanliness'
      ]
    },
    {
      category: 'Safety Protocols',
      rules: [
        'Follow all safety guidelines during activities',
        'Report any safety concerns immediately',
        'Maintain discipline during transport',
        'Emergency procedures must be followed',
        'Health protocols to be strictly observed'
      ]
    }
  ];

  const transportRoutes = [
    {
      route: 'Route 1: City Center',
      departure: '7:00 AM',
      return: '4:30 PM',
      stops: ['Central Mall', 'City Hospital', 'Metro Station', 'Park Avenue'],
      color: 'from-blue-400 to-cyan-600'
    },
    {
      route: 'Route 2: North District',
      departure: '6:45 AM',
      return: '4:15 PM',
      stops: ['North Plaza', 'Sports Complex', 'Tech Park', 'Riverside'],
      color: 'from-green-400 to-emerald-600'
    },
    {
      route: 'Route 3: South Zone',
      departure: '7:15 AM',
      return: '4:45 PM',
      stops: ['South Mall', 'University Area', 'Medical Center', 'Garden City'],
      color: 'from-purple-400 to-pink-600'
    },
    {
      route: 'Route 4: East Suburbs',
      departure: '6:30 AM',
      return: '4:00 PM',
      stops: ['East Gate', 'Industrial Area', 'Housing Complex', 'Lake View'],
      color: 'from-red-400 to-orange-600'
    }
  ];

  const weeklyMenu = {
    monday: {
      breakfast: { name: 'Poha & Fresh Fruit', image: './ParentHub/ParentHubImg1.jpeg' },
      lunch: { name: 'Rajma Rice & Roti', image: './ParentHub/ParentHubImg2.jpeg' },
      snack: { name: 'Homemade Cookies', image: './ParentHub/ParentHubImg3.jpeg' }
    },
    tuesday: {
      breakfast: { name: 'Upma & Buttermilk', image: './ParentHub/ParentHubImg4.jpeg' },
      lunch: { name: 'Dal Tadka & Jeera Rice', image: './ParentHub/ParentHubImg5.jpeg' },
      snack: { name: 'Sprouts Chaat', image: './ParentHub/ParentHubImg6.jpeg' }
    },
    wednesday: {
      breakfast: { name: 'Paratha & Curd', image: './ParentHub/ParentHubImg7.jpeg' },
      lunch: { name: 'Chole & Mixed Vegetable', image: './ParentHub/ParentHubImg8.jpeg' },
      snack: { name: 'Fresh Sandwich', image: './ParentHub/ParentHubImg9.jpeg' }
    },
    thursday: {
      breakfast: { name: 'Dosa & Sambar', image: './ParentHub/ParentHubImg10.jpeg' },
      lunch: { name: 'Paneer Curry & Pulao', image: './ParentHub/ParentHubImg11.jpeg' },
      snack: { name: 'Dhokla & Green Tea', image: './ParentHub/ParentHubImg12.jpeg' }
    },
    friday: {
      breakfast: { name: 'Stuffed Paratha', image: './ParentHub/ParentHubImg13.jpeg' },
      lunch: { name: 'Vegetable Biryani', image: './ParentHub/ParentHubImg14.jpeg' },
      snack: { name: 'Fruit Salad', image: './ParentHub/ParentHubImg15.jpeg' }
    }
  };

  const ptmSchedule = [
    { date: 'January 28, 2025', grades: 'Grades 6-8', time: '9:00 AM - 1:00 PM' },
    { date: 'February 15, 2025', grades: 'Grades 1-5', time: '9:00 AM - 1:00 PM' },
    { date: 'March 10, 2025', grades: 'Grades 9-12', time: '9:00 AM - 1:00 PM' },
    { date: 'April 5, 2025', grades: 'All Grades', time: '2:00 PM - 6:00 PM' }
  ];

  const contactInfo = [
    { department: 'Main Office', number: '+91 98765 43210', email: 'info@starlitacademy.edu' },
    { department: 'Principal\'s Office', number: '+91 98765 43211', email: 'principal@starlitacademy.edu' },
    { department: 'Transport', number: '+91 98765 43215', email: 'transport@starlitacademy.edu' },
    { department: 'Medical Room', number: '+91 98765 43214', email: 'medical@starlitacademy.edu' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./ParentHub/ParentHubImg16.jpeg"
            alt="Parent Hub Hero"
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
            Parent Info Hub
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Your comprehensive guide to staying connected with your child's educational journey
          </motion.p>
        </div>
      </section>

      {/* Parent Dashboard Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Parent Dashboard Preview
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${currentTheme.primary} mb-4 p-3 bg-gray-700 rounded-lg w-fit`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${currentTheme.primaryDark}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <button className={`${currentTheme.bgPrimary} ${currentTheme.bgPrimaryHover} text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
              <Smartphone className="h-5 w-5 inline mr-2" />
              Download Parent App
            </button>
          </motion.div>
        </div>
      </section>

      {/* School Rules & Guidelines */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            School Rules & Guidelines
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {schoolRules.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className={`text-2xl font-bold mb-6 ${currentTheme.primary}`}>
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start text-gray-300">
                      <div className={`w-2 h-2 ${currentTheme.bgPrimary} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                      <span className="text-sm leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Transport Schedule & Routes
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {transportRoutes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${route.color} h-2`}></div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-4 ${currentTheme.primary}`}>
                    {route.route}
                  </h3>
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-gray-400 text-sm">Departure</p>
                      <p className="text-white font-semibold">{route.departure}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Return</p>
                      <p className="text-white font-semibold">{route.return}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Major Stops:</p>
                    <div className="flex flex-wrap gap-2">
                      {route.stops.map((stop, stopIndex) => (
                        <span
                          key={stopIndex}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                        >
                          {stop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className={`text-3xl font-bold text-center mb-8 ${currentTheme.primary}`}>
              Transport Safety Features
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <Bus className="h-6 w-6" />, title: 'GPS Tracking', desc: 'Real-time location monitoring' },
                { icon: <Shield className="h-6 w-6" />, title: 'Trained Drivers', desc: 'Experienced & verified staff' },
                { icon: <Users className="h-6 w-6" />, title: 'Bus Attendants', desc: 'Student supervision & safety' },
                { icon: <Phone className="h-6 w-6" />, title: 'Parent Alerts', desc: 'SMS & app notifications' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`${currentTheme.primary} flex justify-center mb-3`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* School Lunch Program */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            School Lunch Program
          </motion.h2>

          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-gray-900 rounded-full p-2">
              {Object.keys(weeklyMenu).map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                    activeDay === day
                      ? `${currentTheme.bgPrimary} text-white`
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {Object.entries(weeklyMenu[activeDay]).map(([meal, details]) => (
              <motion.div
                key={meal}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={details.image}
                  alt={details.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h4 className={`font-bold mb-2 capitalize ${currentTheme.primary}`}>
                    {meal}
                  </h4>
                  <p className="text-gray-300 text-sm">{details.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-gray-900 rounded-2xl p-6 shadow-lg"
          >
            <h3 className={`text-2xl font-bold mb-4 ${currentTheme.primary}`}>
              Nutritional Standards
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-300">
                <li>• Balanced diet with all food groups represented</li>
                <li>• Fresh ingredients from certified vendors</li>
                <li>• Hygienic preparation in modern kitchen facilities</li>
              </ul>
              <ul className="space-y-2 text-gray-300">
                <li>• Nutritionist-approved meal planning</li>
                <li>• Special dietary requirements accommodated</li>
                <li>• No outside food policy for health standards</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parent-Teacher Connect */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Parent-Teacher Connect
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className={`text-3xl font-bold mb-8 ${currentTheme.primary}`}>
                Meeting Schedule
              </h3>
              <div className="space-y-4">
                {ptmSchedule.map((meeting, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 p-4 rounded-xl shadow-lg flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-white font-semibold">{meeting.grades}</h4>
                      <p className="text-gray-400 text-sm">{meeting.date}</p>
                    </div>
                    <div className="text-right">
                      <div className={`${currentTheme.primary} flex items-center`}>
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{meeting.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className={`text-3xl font-bold mb-8 ${currentTheme.primary}`}>
                Communication Channels
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h4 className="text-white font-bold mb-3">Regular Communication</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• WhatsApp groups for class-specific updates</li>
                    <li>• Email newsletters with school news</li>
                    <li>• SMS alerts for important notifications</li>
                    <li>• Parent app with real-time information</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h4 className="text-white font-bold mb-3">Involvement Opportunities</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Parent volunteer programs</li>
                    <li>• School event planning committees</li>
                    <li>• Educational trip supervision</li>
                    <li>• Career guidance sessions</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Important Contact Information
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h4 className={`text-lg font-bold mb-3 ${currentTheme.primary}`}>
                  {contact.department}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{contact.number}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{contact.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className={`text-2xl font-bold mb-4 ${currentTheme.primary}`}>
                Emergency Contacts
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center">
                  <Phone className={`h-5 w-5 ${currentTheme.primary} mr-2`} />
                  <span className="text-white font-semibold">24/7 Helpline: +91 98765 43200</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className={`h-5 w-5 ${currentTheme.primary} mr-2`} />
                  <span className="text-white font-semibold">Campus Security: +91 98765 43201</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ParentHub;