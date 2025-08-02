import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building,
  Wifi,
  Shield,
  Heart,
  Activity,
  Camera,
  MapPin,
  Clock,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const CampusLife = () => {
  const { currentTheme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const facilities = [
    {
      category: "Smart Classrooms",
      icon: <Wifi className="h-8 w-8" />,
      items: [
        "Interactive whiteboards in all rooms",
        "High-speed internet connectivity",
        "Air-conditioned learning environments",
        "Ergonomic furniture for comfort",
      ],
      image: "./Campus/CampusImg1.jpeg",
    },
    {
      category: "Advanced Laboratories",
      icon: <Building className="h-8 w-8" />,
      items: [
        "Physics Lab with advanced equipment",
        "Chemistry Lab with safety protocols",
        "AI & Robotics Lab for future skills",
        "Language Lab for communication",
      ],
      image: "./Campus/CampusImg2.jpeg",
    },
    {
      category: "Digital Library",
      icon: <Camera className="h-8 w-8" />,
      items: [
        "50,000+ books and journals",
        "Digital resources and e-books",
        "Quiet study and discussion zones",
        "24/7 online access to content",
      ],
      image: "./Campus/CampusImg3.jpeg",
    },
    {
      category: "Mental Wellness Studio",
      icon: <Heart className="h-8 w-8" />,
      items: [
        "Counseling rooms for private sessions",
        "Mindfulness and meditation spaces",
        "Art therapy areas",
        "Crisis intervention facilities",
      ],
      image: "./Campus/CampusImg4.jpeg",
    },
  ];

  const sportsImages = [
    {
      url: "./Campus/CampusImg5.jpeg",
      title: "Olympic-size Swimming Pool",
      description: "State-of-the-art aquatic facility",
    },
    {
      url: "./Campus/CampusImg6.jpeg",
      title: "Multi-purpose Sports Ground",
      description: "Football, Cricket, Athletics track",
    },
    {
      url: "./Campus/CampusImg7.jpeg",
      title: "Indoor Sports Complex",
      description: "Badminton, Basketball, Table Tennis",
    },
    {
      url: "./Campus/CampusImg8.jpeg",
      title: "Adventure Playground",
      description: "Safe play areas for younger students",
    },
  ];

  const safetyFeatures = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "24/7 CCTV Surveillance",
      description: "Complete campus monitoring",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Biometric Access Control",
      description: "Secure entry systems",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Medical Facilities",
      description: "Full-time nurse and medical room",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "GPS Tracking",
      description: "Real-time bus location monitoring",
    },
  ];

  const dailySchedule = [
    {
      time: "7:00 AM",
      activity: "Morning assembly and meditation",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      time: "8:00 AM",
      activity: "Academic classes begin",
      icon: <Building className="h-5 w-5" />,
    },
    {
      time: "10:30 AM",
      activity: "Healthy snack break",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      time: "12:30 PM",
      activity: "Lunch and recreational time",
      icon: <Activity className="h-5 w-5" />,
    },
    {
      time: "2:00 PM",
      activity: "Afternoon academic sessions",
      icon: <Building className="h-5 w-5" />,
    },
    {
      time: "4:00 PM",
      activity: "Co-curricular activities",
      icon: <Activity className="h-5 w-5" />,
    },
    {
      time: "5:30 PM",
      activity: "Study hall and homework time",
      icon: <Camera className="h-5 w-5" />,
    },
    {
      time: "7:00 PM",
      activity: "Dinner and family time",
      icon: <Heart className="h-5 w-5" />,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./Campus/CampusImg9.jpeg"
            alt="Campus Life Hero"
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
            Campus Life
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Experience Life at OB365 School - Where Learning Never Stops
          </motion.p>
        </div>
      </section>

      {/* Campus Walkthrough */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            World-Class Facilities
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={facility.image}
                  alt={facility.category}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${currentTheme.primary} mr-3`}>
                      {facility.icon}
                    </div>
                    <h3
                      className={`text-2xl font-bold ${currentTheme.primaryDark}`}
                    >
                      {facility.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {facility.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-gray-300"
                      >
                        <div
                          className={`w-2 h-2 ${currentTheme.bgPrimary} rounded-full mr-3`}
                        ></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Arena Slider */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Sports & Recreation Facilities
          </motion.h2>

          <div className="relative">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={sportsImages[currentImageIndex].url}
                alt={sportsImages[currentImageIndex].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8">
                  <h3
                    className={`text-3xl font-bold mb-2 ${currentTheme.primary}`}
                  >
                    {sportsImages[currentImageIndex].title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {sportsImages[currentImageIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {sportsImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? currentTheme.bgPrimary
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Sports Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              {
                number: "15+",
                label: "Sports Facilities",
                icon: <Activity className="h-6 w-6" />,
              },
              {
                number: "500+",
                label: "Student Athletes",
                icon: <Shield className="h-6 w-6" />,
              },
              {
                number: "25+",
                label: "Trophies Won",
                icon: <Camera className="h-6 w-6" />,
              },
              {
                number: "10+",
                label: "Sports Coaches",
                icon: <Heart className="h-6 w-6" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className={`${currentTheme.primary} flex justify-center mb-3`}
                >
                  {stat.icon}
                </div>
                <h4
                  className={`text-3xl font-bold ${currentTheme.primary} mb-2`}
                >
                  {stat.number}
                </h4>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Safety & Security Zone
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div
                  className={`${currentTheme.primary} flex justify-center mb-4 p-3 bg-gray-700 rounded-lg w-fit mx-auto`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Safety Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <h3
              className={`text-3xl font-bold text-center mb-8 ${currentTheme.primary}`}
            >
              Comprehensive Safety Measures
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4">Security Features</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Trained security personnel 24/7</li>
                  <li>• Fire safety equipment throughout</li>
                  <li>• Emergency evacuation procedures</li>
                  <li>• First aid stations on every floor</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Health & Medical</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Full-time school nurse</li>
                  <li>• Regular health check-ups</li>
                  <li>• Mental health support services</li>
                  <li>• Emergency medical protocols</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Transport Safety</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• GPS-enabled buses</li>
                  <li>• Trained drivers with clean records</li>
                  <li>• Air-conditioned vehicles</li>
                  <li>• Parent notification system</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Daily Life Rhythm */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            A Typical Day at Starlit
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${currentTheme.bgPrimary}`}
            ></div>

            {dailySchedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-gray-900 p-4 rounded-xl shadow-lg ${
                      index % 2 === 0 ? "mr-8 text-right" : "ml-8 text-left"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`${currentTheme.primary}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className={`font-bold ${currentTheme.primary}`}>
                          {item.time}
                        </h4>
                        <p className="text-gray-400 text-sm">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`w-4 h-4 ${currentTheme.bgPrimary} rounded-full border-2 border-gray-800 z-10`}
                ></div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Facilities Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Residential Life
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3
                  className={`text-2xl font-bold mb-4 ${currentTheme.primary}`}
                >
                  Modern Dormitories
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Separate wings for boys and girls</li>
                  <li>• 2-4 sharing rooms with attached bathrooms</li>
                  <li>• 24/7 warden supervision</li>
                  <li>• Study areas and recreation rooms</li>
                  <li>• Home-like environment with care</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3
                  className={`text-2xl font-bold mb-4 ${currentTheme.primary}`}
                >
                  Dining Facilities
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Spacious, hygienic dining hall</li>
                  <li>• Nutritious meals by dietitians</li>
                  <li>• Multi-cuisine options available</li>
                  <li>• Special dietary requirements support</li>
                  <li>• Fresh fruits and salads daily</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="./Campus/CampusImg10.jpeg"
                alt="Dormitory Room"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
              <img
                src="./Campus/CampusImg11.jpeg"
                alt="Study Room"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
              <img
                src="./Campus/CampusImg12.jpeg"
                alt="Dining Hall"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
              <img
                src="./Campus/CampusImg13.jpeg"
                alt="Recreation Area"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
