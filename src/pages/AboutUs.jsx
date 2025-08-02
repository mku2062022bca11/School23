import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Award,
  Users,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Globe,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const AboutUs = () => {
  const { currentTheme } = useTheme();

  const timelineEvents = [
    {
      year: "2010",
      title: "Foundation",
      description: "Established with 50 students and a dream",
      image: "./About/AboutImg1.jpeg",
    },
    {
      year: "2015",
      title: "CBSE Affiliation",
      description: "Became fully affiliated CBSE school",
      image: "./About/AboutImg2.jpeg",
    },
    {
      year: "2018",
      title: "AI Lab Launch",
      description: "Launched India's first school-based AI lab",
      image: "./About/AboutImg3.jpeg",
    },
    {
      year: "2020",
      title: "Virtual Learning",
      description: "Pioneered virtual learning during pandemic",
      image: "./About/AboutImg4.jpeg",
    },
    {
      year: "2022",
      title: "National Award",
      description: "Won National Award for Innovation in Education",
      image: "./About/AboutImg5.jpeg",
    },
    {
      year: "2025",
      title: "15 Years of Excellence",
      description: "Celebrating 15 years of transformative education",
      image: "./About/AboutImg6.jpeg",
    },
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "INTEGRITY",
      description:
        "Building character through honest communication and ethical practices",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "INNOVATION",
      description: "Embracing change and fostering creative problem-solving",
      color: "from-yellow-400 to-orange-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "INCLUSIVITY",
      description:
        "Celebrating diversity and ensuring every student feels valued",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "IMPACT",
      description: "Making a positive difference in our community and beyond",
      color: "from-purple-400 to-pink-600",
    },
  ];

  const partnerships = [
    {
      name: "CBSE Board",
      logo: "./About/AboutImg7.jpeg",
    },
    {
      name: "Cambridge Assessment",
      logo: "./About/AboutImg8.jpeg",
    },
    {
      name: "MIT OpenCourseWare",
      logo: "./About/AboutImg9.jpeg",
    },
    {
      name: "National Geographic",
      logo: "./About/AboutImg10.jpeg",
    },
    {
      name: "Google Education",
      logo: "./About/AboutImg11.jpeg",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./About/AboutImg12.jpeg"
            alt="About Us Hero"
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
            Our Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            From Vision to Reality - Transforming Education Since 2010
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Our Journey Timeline
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${currentTheme.bgPrimary}`}
            ></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-gray-800 p-6 rounded-2xl shadow-lg ${
                      index % 2 === 0 ? "mr-8 text-right" : "ml-8 text-left"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3
                          className={`text-2xl font-bold ${currentTheme.primary}`}
                        >
                          {event.title}
                        </h3>
                        <p className="text-gray-400">{event.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`w-6 h-6 ${currentTheme.bgPrimary} rounded-full border-4 border-gray-900 z-10`}
                ></div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Target className={`h-8 w-8 ${currentTheme.primary} mr-4`} />
                <h3
                  className={`text-3xl font-bold ${currentTheme.primaryDark}`}
                >
                  Vision Statement
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To nurture globally competent, emotionally intelligent, and
                socially responsible citizens who will lead the world of
                tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Award className={`h-8 w-8 ${currentTheme.primary} mr-4`} />
                <h3
                  className={`text-3xl font-bold ${currentTheme.primaryDark}`}
                >
                  Mission Statement
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                We provide a transformative educational experience that combines
                academic rigor with character building, creativity with critical
                thinking, and innovation with integrity.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div
                    className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-white transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${currentTheme.primary}`}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-6 ${currentTheme.primaryDark}`}
                >
                  Leadership Message
                </h2>
                <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-6">
                  "Education is not preparation for life; education is life
                  itself. At OB365 School, we don't just teach subjects - we
                  inspire lifelong learners, critical thinkers, and
                  compassionate leaders."
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="./About/AboutImg13.jpeg"
                    alt="Dr. Meera Krishnan"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className={`font-semibold ${currentTheme.primary}`}>
                      Dr. Meera Krishnan
                    </p>
                    <p className="text-gray-400">Principal</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="./About/AboutImg14.jpeg"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Logos */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Our Partnerships
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-20 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-center text-gray-300 text-sm font-medium">
                    {partner.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
