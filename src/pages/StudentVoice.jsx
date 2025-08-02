import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Trophy,
  Heart,
  Code,
  Mic,
  Award,
  ChevronLeft,
  ChevronRight,
  Users,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const StudentVoice = () => {
  const { currentTheme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const studentCouncil = [
    {
      name: "Arjun Kapoor",
      position: "Head Boy",
      grade: "Grade 12 Science",
      quote:
        "Leading by example, I believe every student's voice matters. This year, we're launching the 'Student Innovation Challenge'.",
      image: "./Student/StudentImg1.jpeg",
      icon: <Star className="h-6 w-6" />,
    },
    {
      name: "Sneha Patel",
      position: "Head Girl",
      grade: "Grade 12 Commerce",
      quote:
        "My focus is on mental health awareness and peer support systems. Creating a more inclusive environment.",
      image: "./Student/StudentImg2.jpeg",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      name: "Karthik Nair",
      position: "Vice Head Boy",
      grade: "Grade 11 Science",
      quote:
        "Technology enthusiast working on digitizing student feedback systems and school processes.",
      image: "./Student/StudentImg3.jpeg",
      icon: <Code className="h-6 w-6" />,
    },
    {
      name: "Ananya Singh",
      position: "Vice Head Girl",
      grade: "Grade 11 Humanities",
      quote:
        "Passionate about environmental conservation, leading sustainability initiatives and eco-friendly practices.",
      image: "./Student/StudentImg4.jpeg",
      icon: <Trophy className="h-6 w-6" />,
    },
  ];

  const houseCaptains = [
    {
      name: "Rohan Sharma",
      house: "Akash House",
      grade: "Grade 10",
      color: "from-blue-400 to-cyan-600",
    },
    {
      name: "Maya Gupta",
      house: "Prithvi House",
      grade: "Grade 10",
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "Dev Malhotra",
      house: "Vayu House",
      grade: "Grade 10",
      color: "from-purple-400 to-pink-600",
    },
    {
      name: "Ishita Raj",
      house: "Jal House",
      grade: "Grade 10",
      color: "from-red-400 to-orange-600",
    },
  ];

  const blogPosts = [
    {
      title: "My Journey from Introvert to Leader",
      author: "Priya Menon",
      grade: "Grade 9",
      excerpt:
        "When I first joined OB365 School, I barely spoke in class. Today, I'm the editor of our school magazine...",
      image: "./Student/StudentImg5.jpeg",
      category: "Personal Growth",
    },
    {
      title: "Coding Changed My Life",
      author: "Amit Kumar",
      grade: "Grade 12",
      excerpt:
        "The AI lab at Starlit opened a world of possibilities. I've developed three mobile apps and won a national hackathon...",
      image: "./Student/StudentImg6.jpeg",
      category: "Technology",
    },
    {
      title: "Finding Balance: Sports and Studies",
      author: "Kavya Reddy",
      grade: "Grade 11",
      excerpt:
        "Being basketball team captain while maintaining academic excellence taught me time management and leadership...",
      image: "./Student/StudentImg7.jpeg",
      category: "Sports",
    },
    {
      title: "Mental Health Matters",
      author: "Anonymous Student",
      grade: "Grade 10",
      excerpt:
        "The counseling support at Starlit helped me overcome anxiety. Now I'm part of the peer support group...",
      image: "./Student/StudentImg8.jpeg",
      category: "Wellness",
    },
  ];

  const achievers = [
    {
      category: "Academic Excellence",
      students: [
        {
          name: "Tanvi Agarwal",
          achievement: "All India CBSE Topper in Computer Science (2024)",
          icon: <Award className="h-5 w-5" />,
        },
        {
          name: "Vikram Singh",
          achievement: "National Science Olympiad Gold Medalist",
          icon: <Trophy className="h-5 w-5" />,
        },
        {
          name: "Shruti Jain",
          achievement: "International Mathematics Competition Winner",
          icon: <Star className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "Sports Champions",
      students: [
        {
          name: "Aditya Nair",
          achievement: "State Swimming Championship - 3 Gold Medals",
          icon: <Trophy className="h-5 w-5" />,
        },
        {
          name: "Riya Kapoor",
          achievement: "National Badminton Under-19 Semifinalist",
          icon: <Award className="h-5 w-5" />,
        },
        {
          name: "Kabir Shah",
          achievement: "District Chess Champion for 2 consecutive years",
          icon: <Star className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "Creative Artists",
      students: [
        {
          name: "Neha Reddy",
          achievement: "National Art Competition First Prize",
          icon: <Mic className="h-5 w-5" />,
        },
        {
          name: "Aryan Gupta",
          achievement: "All India Music Competition - Classical Vocals Winner",
          icon: <Heart className="h-5 w-5" />,
        },
        {
          name: "Pooja Sharma",
          achievement: "State Drama Festival Best Actress Award",
          icon: <Trophy className="h-5 w-5" />,
        },
      ],
    },
  ];

  const testimonials = [
    {
      text: "The teachers here don't just teach subjects; they mentor us for life. The personalized attention helps every student discover their potential.",
      author: "Grade 12 Student",
      emoji: "🎓",
    },
    {
      text: "Mental health support is incredible. Having counselors who understand teenage challenges makes such a difference in our daily lives.",
      author: "Grade 10 Student",
      emoji: "💚",
    },
    {
      text: "The innovation labs give us hands-on experience with cutting-edge technology. We're not just studying about the future; we're creating it.",
      author: "Grade 11 Student",
      emoji: "🚀",
    },
    {
      text: "House system creates healthy competition and lifelong friendships. My housemates are like family to me.",
      author: "Grade 9 Student",
      emoji: "🏠",
    },
    {
      text: "Leadership opportunities here are endless. From student council to club presidencies, everyone gets a chance to lead.",
      author: "Grade 12 Student",
      emoji: "👑",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./Student/StudentImg9.jpeg"
            alt="Student Voice Hero"
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
            Student Voice
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Empowering students to lead, innovate, and make their voices heard
          </motion.p>
        </div>
      </section>

      {/* Student Council */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Student Council 2024-25
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {studentCouncil.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className={`${currentTheme.primary} mr-2`}>
                      {member.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold ${currentTheme.primaryDark}`}
                      >
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{member.grade}</p>
                    </div>
                  </div>
                  <p className={`font-semibold mb-3 ${currentTheme.primary}`}>
                    {member.position}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* House Captains */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <h3
              className={`text-3xl font-bold text-center mb-8 ${currentTheme.primary}`}
            >
              House Captains
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {houseCaptains.map((captain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${captain.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {captain.name.charAt(0)}
                  </div>
                  <h4 className="text-white font-bold">{captain.name}</h4>
                  <p
                    className={`${currentTheme.primary} text-sm font-semibold`}
                  >
                    {captain.house}
                  </p>
                  <p className="text-gray-400 text-sm">{captain.grade}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Stories & Blogs */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Student Stories & Blogs
          </motion.h2>

          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <span
                        className={`${currentTheme.bgPrimary} text-white px-3 py-1 rounded-full text-sm font-semibold mr-3`}
                      >
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {post.grade}
                      </span>
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-3 ${currentTheme.primary}`}
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      By {post.author}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <button
                      className={`${currentTheme.primary} hover:text-white transition-colors font-semibold`}
                    >
                      Read Full Story →
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievers' Wall */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Achievers' Wall
          </motion.h2>

          <div className="space-y-12">
            {achievers.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
              >
                <h3
                  className={`text-3xl font-bold mb-8 text-center ${currentTheme.primary}`}
                >
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.students.map((student, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className={`${currentTheme.primary} mr-3 p-2 bg-gray-700 rounded-lg`}
                        >
                          {student.icon}
                        </div>
                        <h4 className="text-white font-bold">{student.name}</h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {student.achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Feedback Slider */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            What Students Say
          </motion.h2>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-2xl text-center"
            >
              <div className="text-6xl mb-6">
                {testimonials[currentTestimonial].emoji}
              </div>
              <blockquote className="text-xl text-gray-300 italic leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <p className={`font-semibold ${currentTheme.primary}`}>
                - {testimonials[currentTestimonial].author}
              </p>
            </motion.div>

            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${currentTheme.bgPrimary} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${currentTheme.bgPrimary} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? currentTheme.bgPrimary
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Day in the Life Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Day in the Life - Student Perspectives
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <img
                  src="./Student/StudentImg10.jpeg"
                  alt="Rahul"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className={`text-2xl font-bold ${currentTheme.primary}`}>
                    Rahul's Day
                  </h3>
                  <p className="text-gray-400">Grade 8 Student</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>• 6:30 AM: Wake up in hostel, morning meditation</p>
                <p>
                  • 8:15 AM: Assembly - environmental initiative presentation
                </p>
                <p>• 10:30 AM: Computer Science - coding assignment</p>
                <p>• 4:30 PM: Basketball practice for tournament</p>
                <p>• 6:00 PM: Study hall with peer support</p>
                <p>• 8:30 PM: Free time - video call with parents</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <img
                  src="./Student/StudentImg1.jpeg"
                  alt="Meera"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className={`text-2xl font-bold ${currentTheme.primary}`}>
                    Meera's Day
                  </h3>
                  <p className="text-gray-400">Grade 11 Student</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>• 7:00 AM: Morning jog around campus</p>
                <p>
                  • 9:00 AM: Student Council meeting - cultural fest planning
                </p>
                <p>• 11:30 AM: Mathematics - competitive exam patterns</p>
                <p>• 4:00 PM: Debate club practice - public speaking</p>
                <p>• 5:30 PM: Community service planning</p>
                <p>• 8:00 PM: Study time - board exam preparation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentVoice;
