import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Palette, Music, Globe, Trophy, Star, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Academics = () => {
  const { currentTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('primary');

  const sections = {
    primary: {
      title: 'Primary Section (Grades 1-5)',
      description: 'Foundation building through play-based learning',
      subjects: [
        { name: 'English', icon: <BookOpen className="h-6 w-6" />, image: './Academics/AcademicsImg1.jpeg' },
        { name: 'Hindi', icon: <BookOpen className="h-6 w-6" />, image: './Academics/AcademicsImg2.jpeg' },
        { name: 'Mathematics', icon: <Star className="h-6 w-6" />, image: './Academics/AcademicsImg3.jpeg' },
        { name: 'EVS', icon: <Globe className="h-6 w-6" />, image: './Academics/AcademicsImg4.jpeg' },
        { name: 'Computer Science', icon: <Code className="h-6 w-6" />, image: './Academics/AcademicsImg5.jpeg' },
        { name: 'Art & Craft', icon: <Palette className="h-6 w-6" />, image: './Academics/AcademicsImg6.jpeg' }
      ],
      features: [
        'Activity-based learning with smart classrooms',
        'Phonics and Vedic Maths programs',
        'Creative expression through arts and music',
        'Play-based learning methodology'
      ]
    },
    middle: {
      title: 'Middle Section (Grades 6-8)',
      description: 'Bridge between primary and secondary education',
      subjects: [
        { name: 'English', icon: <BookOpen className="h-6 w-6" />, image: './Academics/AcademicsImg7.jpeg' },
        { name: 'Hindi', icon: <BookOpen className="h-6 w-6" />, image: './Academics/AcademicsImg8.jpeg' },
        { name: 'Mathematics', icon: <Star className="h-6 w-6" />, image: './Academics/AcademicsImg9.jpeg' },
        { name: 'Science', icon: <Trophy className="h-6 w-6" />, image: './Academics/AcademicsImg10.jpeg' },
        { name: 'Social Science', icon: <Globe className="h-6 w-6" />, image: './Academics/AcademicsImg11.jpeg' },
        { name: 'Computer Science', icon: <Code className="h-6 w-6" />, image: './Academics/AcademicsImg12.jpeg' }
      ],
      features: [
        'Project-based learning and STEM integration',
        'Sanskrit/French language options',
        'Life skills development programs',
        'Comprehensive assessment methods'
      ]
    },
    secondary: {
      title: 'Secondary Section (Grades 9-10)',
      description: 'CBSE Board preparation with comprehensive support',
      subjects: [
        { name: 'English', icon: <BookOpen className="h-6 w-6" />, image: './Academics/AcademicsImg13.jpeg' },
        { name: 'Hindi', icon: <BookOpen className="h-6 w-6" />, image: './Academics/AcademicsImg14.jpeg' },
        { name: 'Mathematics', icon: <Star className="h-6 w-6" />, image: './Academics/AcademicsImg15.jpeg' },
        { name: 'Science', icon: <Trophy className="h-6 w-6" />, image: './Academics/AcademicsImg16.jpeg' },
        { name: 'Social Science', icon: <Globe className="h-6 w-6" />, image: './Academics/AcademicsImg17.jpeg' },
        { name: 'Physical Education', icon: <Users className="h-6 w-6" />, image: './Academics/AcademicsImg18.jpeg' }
      ],
      features: [
        'Career guidance and skill development',
        'Board exam preparation with mock tests',
        'Computer Applications and Art Education options',
        'Competitive exam foundation'
      ]
    },
    senior: {
      title: 'Senior Secondary (Grades 11-12)',
      description: 'Stream specialization for career readiness',
      subjects: [
        { name: 'Science Stream', icon: <Trophy className="h-6 w-6" />, image: './Academics/AcademicsImg19.jpeg' },
        { name: 'Commerce Stream', icon: <Star className="h-6 w-6" />, image: './Academics/AcademicsImg20.jpeg' },
        { name: 'Humanities Stream', icon: <BookOpen className="h-6 w-6" />, image: './Academics/AcademicsImg21.jpeg' },
        { name: 'Computer Science', icon: <Code className="h-6 w-6" />, image: './Academics/AcademicsImg22.jpeg' },
        { name: 'Economics', icon: <Globe className="h-6 w-6" />, image: './Academics/AcademicsImg23.jpeg' },
        { name: 'Psychology', icon: <Users className="h-6 w-6" />, image: './Academics/AcademicsImg24.jpeg' }
      ],
      features: [
        'Specialized stream preparation',
        'University admission guidance',
        'Advanced research projects',
        'International curriculum integration'
      ]
    }
  };

  const enrichmentPrograms = [
    {
      title: 'Coding & AI Lab',
      icon: <Code className="h-8 w-8" />,
      description: 'Python programming from Grade 6, Machine Learning basics, Robotics and IoT projects',
      image: './Academics/AcademicsImg25.jpeg',
      features: ['Python Programming', 'Machine Learning', 'App Development', 'Robotics Projects']
    },
    {
      title: 'Design Thinking Studio',
      icon: <Palette className="h-8 w-8" />,
      description: 'Creative problem-solving methodologies, Innovation challenges, Prototype development',
      image: './Academics/AcademicsImg26.jpeg',
      features: ['Creative Problem-Solving', 'Innovation Challenges', 'Prototype Development', 'Entrepreneurship']
    },
    {
      title: 'Music & Performing Arts',
      icon: <Music className="h-8 w-8" />,
      description: 'Indian classical and western music, Dance forms, Drama and theater productions',
      image: './Academics/AcademicsImg27.jpeg',
      features: ['Classical & Western Music', 'Dance Forms', 'Theater Productions', 'Cultural Festivals']
    },
    {
      title: 'International Programs',
      icon: <Globe className="h-8 w-8" />,
      description: 'SAT preparation, IELTS coaching, Student exchange programs, Model UN participation',
      image: './Academics/AcademicsImg28.jpeg',
      features: ['SAT Preparation', 'IELTS Coaching', 'Exchange Programs', 'Model UN']
    }
  ];

  const achievements = [
    { text: '100% Board exam pass rate (last 5 years)', icon: <Trophy className="h-6 w-6" /> },
    { text: '15 students scored 95%+ in Class 12 (2024)', icon: <Star className="h-6 w-6" /> },
    { text: 'State topper in Computer Science (2023)', icon: <Code className="h-6 w-6" /> },
    { text: 'National Science Olympiad winners', icon: <BookOpen className="h-6 w-6" /> }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./Academics/AcademicsImg29.jpeg"
            alt="Academics Hero"
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
            Academic Excellence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Comprehensive CBSE curriculum enhanced with 21st-century skills
          </motion.p>
        </div>
      </section>

      {/* Academic Sections Tabs */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Academic Programs
          </motion.h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 space-x-2">
            {Object.keys(sections).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 mb-2 ${
                  activeTab === tab
                    ? `${currentTheme.bgPrimary} text-white`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {sections[tab].title.split(' ')[0]} {sections[tab].title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className={`text-3xl font-bold mb-4 ${currentTheme.primary}`}>
                  {sections[activeTab].title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {sections[activeTab].description}
                </p>
                <ul className="space-y-2">
                  {sections[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className={`w-2 h-2 ${currentTheme.bgPrimary} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src={sections[activeTab].subjects[0]?.image}
                  alt={sections[activeTab].title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Subjects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections[activeTab].subjects.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className={`${currentTheme.primary} mr-3`}>
                      {subject.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {subject.name}
                    </h4>
                  </div>
                  <img
                    src={subject.image}
                    alt={subject.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enrichment Programs */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Enrichment Programs
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {enrichmentPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${currentTheme.primary} mr-3`}>
                      {program.icon}
                    </div>
                    <h3 className={`text-2xl font-bold ${currentTheme.primaryDark}`}>
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className={`w-1.5 h-1.5 ${currentTheme.bgPrimary} rounded-full mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Academic Achievements
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
                <div className={`${currentTheme.primary} mr-4 p-3 bg-gray-700 rounded-lg`}>
                  {achievement.icon}
                </div>
                <p className="text-gray-300 text-lg font-medium">
                  {achievement.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Study Abroad Pathway */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className={`text-3xl font-bold text-center mb-8 ${currentTheme.primary}`}>
              Study Abroad Preparation Timeline
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 'Grade 9-10', title: 'Foundation', desc: 'English proficiency building' },
                { step: 'Grade 11', title: 'SAT Prep', desc: 'Standardized test preparation' },
                { step: 'Grade 12', title: 'Applications', desc: 'University application support' },
                { step: 'Post-Graduation', title: 'Success', desc: 'Global university admission' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${currentTheme.bgPrimary} rounded-full flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <h4 className={`font-bold mb-2 ${currentTheme.primary}`}>{item.step}</h4>
                  <h5 className="text-white font-semibold mb-1">{item.title}</h5>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Academics;