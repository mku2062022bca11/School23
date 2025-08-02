import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Camera,
  Music,
  Trophy,
  Lightbulb,
  Filter,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Events = () => {
  const { currentTheme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const upcomingEvents = [
    {
      date: "January 15, 2025",
      title: "Republic Day Celebration",
      category: "National",
      time: "9:00 AM - 12:00 PM",
      location: "Main Auditorium",
      description: "Cultural program showcasing patriotic performances",
      image:
        "./Event/EventsImg1.jpeg",
    },
    {
      date: "January 22, 2025",
      title: "Inter-House Science Exhibition",
      category: "Academic",
      time: "10:00 AM - 4:00 PM",
      location: "Science Complex",
      description: "Students showcase innovative science projects",
      image:
        "./Event/EventsImg2.jpeg",
    },
    {
      date: "February 5, 2025",
      title: "Annual Sports Day",
      category: "Sports",
      time: "8:00 AM - 5:00 PM",
      location: "Sports Ground",
      description: "Athletic meet with track and field competitions",
      image:
        "./Event/EventsImg3.jpeg",
    },
    {
      date: "February 18, 2025",
      title: "Entrepreneurship Fair",
      category: "Innovation",
      time: "9:00 AM - 3:00 PM",
      location: "Innovation Hub",
      description: "Student start-up showcase and business plan presentations",
      image:
        "./Event/EventsImg4.jpeg",
    },
    {
      date: "March 8, 2025",
      title: "International Women's Day",
      category: "Special",
      time: "11:00 AM - 2:00 PM",
      location: "Conference Hall",
      description: "Celebrating achievements of women leaders",
      image:
        "./Event/EventsImg5.jpeg",
    },
    {
      date: "March 29, 2025",
      title: "Dance Drama Competition",
      category: "Cultural",
      time: "2:00 PM - 6:00 PM",
      location: "Performing Arts Center",
      description: "Inter-school dance and drama competitions",
      image:
        "./Event/EventsImg6.jpeg",
    },
  ];

  const galleryImages = [
    {
      title: "CBSE Toppers of 2024",
      category: "Academic",
      description: "Celebrating excellence - 15 students scored above 95%",
      image:
        "./Event/EventsImg7.jpeg",
    },
    {
      title: "Diwali Festival Celebration",
      category: "Cultural",
      description: "Community unity through traditional celebrations",
      image:
        "./Event/EventsImg8.jpeg",
    },
    {
      title: "Swimming Championship Glory",
      category: "Sports",
      description: "12 gold medals at inter-school district championship",
      image:
        "./Event/EventsImg9.jpeg",
    },
    {
      title: "Environmental Conservation Drive",
      category: "Community",
      description: "500 saplings planted across the city by eco-club",
      image:
        "./Event/EventsImg10.jpeg",
    },
    {
      title: "Science Fair Innovation",
      category: "Academic",
      description: "Award-winning projects on AI and renewable energy",
      image:
        "./Event/EventsImg11.jpeg",
    },
  ];

  const guestLectures = [
    {
      speaker: "Dr. Kiran Mazumdar-Shaw",
      topic: "Biotechnology and Innovation",
      date: "December 15, 2024",
      role: "Biocon Founder",
      image:
        "./Event/EventsImg12.jpeg",
    },
    {
      speaker: "Capt. Rakesh Sharma",
      topic: "Reaching for the Stars",
      date: "November 20, 2024",
      role: "First Indian Astronaut",
      image:
        "./Event/EventsImg13.jpeg",
    },
    {
      speaker: "Ms. Sudha Murthy",
      topic: "Values and Education",
      date: "October 10, 2024",
      role: "Author & Philanthropist",
      image:
        "./Event/EventsImg14.jpeg",
    },
  ];

  const upcomingWorkshops = [
    {
      title: "Digital Citizenship and Cyber Safety",
      date: "February 10, 2025",
      instructor: "Cybersecurity Professionals",
      description:
        "Online safety, digital ethics, and responsible internet usage",
    },
    {
      title: "Creative Writing Masterclass",
      date: "February 17, 2025",
      instructor: "Renowned Authors",
      description: "Storytelling, poetry, and journalism for aspiring writers",
    },
    {
      title: "Entrepreneurship Bootcamp",
      date: "March 3, 2025",
      instructor: "Startup Founders",
      description:
        "Business development, innovation, and turning ideas into reality",
    },
  ];

  const achievements = [
    {
      competition: "National Science Olympiad",
      result: "5 Gold, 8 Silver, 12 Bronze medals",
      icon: <Trophy className="h-6 w-6" />,
    },
    {
      competition: "All India Mathematics Competition",
      result: "3 students in top 100 ranks",
      icon: <Award className="h-6 w-6" />,
    },
    {
      competition: "International Robotics Competition",
      result: "Represented India in Singapore",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      competition: "State Art Competition",
      result: "1st Prize in Digital Art category",
      icon: <Camera className="h-6 w-6" />,
    },
  ];

  const filteredEvents =
    selectedFilter === "all"
      ? upcomingEvents
      : upcomingEvents.filter(
          (event) => event.category.toLowerCase() === selectedFilter
        );

  const categories = [
    "all",
    "academic",
    "sports",
    "cultural",
    "innovation",
    "special",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./Event/EventsImg15.jpeg"
            alt="Events Hero"
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
            Events & Happenings
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Experience the vibrant pulse of our school community
          </motion.p>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Upcoming Events Calendar
          </motion.h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                  selectedFilter === category
                    ? `${currentTheme.bgPrimary} text-white`
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category === "all" ? "All Events" : category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`${currentTheme.bgPrimary} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      {event.category}
                    </span>
                    <span className="text-gray-400 text-sm">{event.date}</span>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${currentTheme.primaryDark}`}
                  >
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STARLITE Annual Day */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            STARLITE - Our Mega Annual Day
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src=" ./Event/EventsImg16.jpeg"
                  alt="Annual Day"
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${currentTheme.bgPrimary} text-white p-4 rounded-full shadow-lg`}
                  >
                    <Camera className="h-8 w-8" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className={`text-3xl font-bold mb-6 ${currentTheme.primary}`}>
                A Spectacular Three-Day Celebration
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 p-4 rounded-xl">
                  <h4 className="text-white font-bold mb-2">
                    Day 1: Academic Excellence
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Science fair, Math olympiad, AI projects, and literary
                    events
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-xl">
                  <h4 className="text-white font-bold mb-2">
                    Day 2: Cultural Extravaganza
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Dance performances, musical concerts, drama productions, and
                    art exhibitions
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-xl">
                  <h4 className="text-white font-bold mb-2">
                    Day 3: Sports & Community
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Athletic competitions, community service presentations, and
                    alumni meet
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-300 text-lg mb-6">
              Over 2000 attendees including parents, alumni, and dignitaries
              witness this grand celebration
            </p>
            <button
              className={`${currentTheme.bgPrimary} ${currentTheme.bgPrimaryHover} text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg`}
            >
              Watch Highlights Video
            </button>
          </motion.div>
        </div>
      </section>

      {/* Moments Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Moments that Matter
          </motion.h2>

          <div className="relative">
            <motion.div
              key={currentGalleryIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={galleryImages[currentGalleryIndex].image}
                alt={galleryImages[currentGalleryIndex].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8">
                  <span
                    className={`${currentTheme.bgPrimary} text-white px-3 py-1 rounded-full text-sm font-semibold mr-3`}
                  >
                    {galleryImages[currentGalleryIndex].category}
                  </span>
                  <h3
                    className={`text-3xl font-bold mb-2 ${currentTheme.primary}`}
                  >
                    {galleryImages[currentGalleryIndex].title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {galleryImages[currentGalleryIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentGalleryIndex
                      ? currentTheme.bgPrimary
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentGalleryIndex
                    ? "ring-2 ring-blue-400"
                    : "hover:scale-105"
                }`}
                onClick={() => setCurrentGalleryIndex(index)}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Lectures */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Distinguished Guest Lectures
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {guestLectures.map((lecture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={lecture.image}
                  alt={lecture.speaker}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${currentTheme.primary}`}
                  >
                    {lecture.speaker}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{lecture.role}</p>
                  <h4 className="text-white font-semibold mb-2">
                    "{lecture.topic}"
                  </h4>
                  <p className="text-gray-400 text-sm">{lecture.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 rounded-2xl p-8 shadow-2xl"
          >
            <h3
              className={`text-3xl font-bold text-center mb-8 ${currentTheme.primary}`}
            >
              Upcoming Workshop Series
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingWorkshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-white font-bold mb-3">
                    {workshop.title}
                  </h4>
                  <p className={`${currentTheme.primary} text-sm mb-2`}>
                    {workshop.date}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    By {workshop.instructor}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {workshop.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitions & Achievements */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Competitions & Achievements
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`${currentTheme.primary} mr-4 p-3 bg-gray-700 rounded-lg`}
                >
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {achievement.competition}
                  </h3>
                  <p className="text-gray-400">{achievement.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold mb-16 ${currentTheme.primaryDark}`}
          >
            Follow Our Live Updates
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                platform: "Instagram",
                handle: "@starlit_academy",
                followers: "5.2K",
                color: "from-pink-400 to-purple-600",
              },
              {
                platform: "YouTube",
                handle: "OB365 School Official",
                followers: "12K",
                color: "from-red-400 to-red-600",
              },
              {
                platform: "Facebook",
                handle: "@StarlitAcademyOfficial",
                followers: "8.5K",
                color: "from-blue-400 to-blue-600",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-r ${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {social.platform}
                </h3>
                <p className="text-gray-400 mb-2">{social.handle}</p>
                <p className={`${currentTheme.primary} font-semibold`}>
                  {social.followers} followers
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
