import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Lightbulb,
  Trophy,
  Heart,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const StartHere = () => {
  const { currentTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSuccess, setCurrentSuccess] = useState(0);

  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const whyStarlitSlides = [
    {
      title: "State-of-the-Art AI Labs",
      description: "Cutting-edge technology meets hands-on learning",
      image:
        "./Start/StartImg1.jpeg",
    },
    {
      title: "Mental Wellness Programs",
      description: "Dedicated counselors and mindfulness practices",
      image:
        "./Start/StartImg2.jpeg",
    },
    {
      title: "100% College Placement",
      description: "Top universities worldwide recognize our excellence",
      image:
        "./Start/StartImg3.jpeg",
    },
    {
      title: "Award-Winning Leadership",
      description: "Student-led initiatives that change communities",
      image:
        "./Start/StartImg4.jpeg",
    },
  ];

  const successStories = [
    {
      quote:
        "From struggling with confidence to leading the school debate team - OB365 School transformed my daughter's life.",
      author: "Parent of Ananya Sharma",
      grade: "Grade 12",
      image:
        "./Start/StartImg5.jpeg",
    },
    {
      quote:
        "The coding program here got me into MIT. The teachers believed in me when I didn't believe in myself.",
      author: "Rohan Patel",
      grade: "Alumni, Class of 2024",
      image:
        "./Start/StartImg6.jpeg",
    },
    {
      quote:
        "Mental wellness support helped me overcome anxiety. Now I'm the head of student council!",
      author: "Priya Reddy",
      grade: "Grade 11",
      image:
        "./Start/StartImg7.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % whyStarlitSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSuccess((prev) => (prev + 1) % successStories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Animated Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url(./Start/StartImg8.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated Stars Background */}
        <div className="absolute inset-0 bg-gray-900/70">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${currentTheme.primary} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
          >
            Welcome to OB365 School
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Where Innovation Meets Excellence
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Transform your child's future at India's most progressive CBSE
            school, where cutting-edge technology meets holistic education.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${currentTheme.bgPrimary} ${currentTheme.bgPrimaryHover} text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:shadow-2xl`}
          >
            Discover Our Magic ✨
          </motion.button>
        </div>
      </motion.section>

      {/* Why Starlit Carousel */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Why Choose OB365 School?
          </motion.h2>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {whyStarlitSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-900 p-8">
                      <div>
                        <h3
                          className={`text-3xl font-bold mb-4 ${currentTheme.primary}`}
                        >
                          {slide.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                      <div>
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) =>
                    (prev - 1 + whyStarlitSlides.length) %
                    whyStarlitSlides.length
                )
              }
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${currentTheme.bgPrimary} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % whyStarlitSlides.length)
              }
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${currentTheme.bgPrimary} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {whyStarlitSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? currentTheme.bgPrimary
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Intro Video */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gray-800 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="relative">
                <img
                  src=" ./Start/StartImg9.jpeg"
                  alt="School Video Thumbnail"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${currentTheme.bgPrimary} text-white p-6 rounded-full shadow-lg`}
                  >
                    <Play className="h-12 w-12" />
                  </motion.button>
                </div>
              </div>
              <h3 className={`text-2xl font-bold mt-6 ${currentTheme.primary}`}>
                Experience OB365 School
              </h3>
              <p className="text-gray-400 mt-2">
                Take a virtual tour of our campus and see innovation in action
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flip Cards Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Our Core Pillars
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-12 w-12" />,
                title: "Academics",
                description:
                  "Advanced CBSE curriculum with international exposure",
                image:
                  "./Start/StartImg10.jpeg",
              },
              {
                icon: <Lightbulb className="h-12 w-12" />,
                title: "Creativity",
                description: "Arts, music, and design thinking workshops",
                image:
                  "./Start/StartImg11.jpeg",
              },
              {
                icon: <Trophy className="h-12 w-12" />,
                title: "Innovation",
                description: "Robotics, AI, and entrepreneurship programs",
                image:
                  "./Start/StartImg12.jpeg",
              },
              {
                icon: <Heart className="h-12 w-12" />,
                title: "Mentorship",
                description:
                  "1:10 teacher-student ratio for personalized attention",
                image:
                  "./Start/StartImg13.jpeg",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group perspective-1000"
              >
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg">
                    <div className={`${currentTheme.primary} mb-4`}>
                      {card.icon}
                    </div>
                    <h3
                      className={`text-2xl font-bold ${currentTheme.primaryDark}`}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-900 rounded-2xl p-6 flex flex-col justify-center shadow-lg">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-300 text-center leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Spotlight */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Student Success Stories
          </motion.h2>

          <div className="relative">
            <motion.div
              key={currentSuccess}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <blockquote className="text-xl text-gray-300 italic leading-relaxed mb-6">
                    "{successStories[currentSuccess].quote}"
                  </blockquote>
                  <div>
                    <p className={`font-semibold ${currentTheme.primary}`}>
                      {successStories[currentSuccess].author}
                    </p>
                    <p className="text-gray-400">
                      {successStories[currentSuccess].grade}
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={successStories[currentSuccess].image}
                    alt={successStories[currentSuccess].author}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSuccess(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSuccess
                      ? currentTheme.bgPrimary
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${currentTheme.primaryDark}`}
            >
              Join 2000+ Families
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Who chose excellence. Admissions open for 2025-26.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`${currentTheme.bgPrimary} ${currentTheme.bgPrimaryHover} text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300`}
            >
              Apply Now - Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StartHere;
