import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Users, CreditCard, HelpCircle, CheckCircle, Clock, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Admissions = () => {
  const { currentTheme } = useTheme();
  const [activeAccordion, setActiveAccordion] = useState('eligibility');

  const admissionSteps = [
    {
      step: 1,
      title: 'Online Application',
      description: 'Fill complete application form and upload documents',
      details: ['Visit admission portal', 'Complete application form', 'Upload required documents', 'Pay application fee: ₹2,000'],
      image: './Admissions/AdmissionsImg1.jpeg'
    },
    {
      step: 2,
      title: 'Entrance Assessment',
      description: 'Written test and interaction session',
      details: ['Written test for Grades 1-12', 'Interaction session for Nursery-KG', 'Parent counseling session', 'School campus tour'],
      image: './Admissions/AdmissionsImg2.jpeg'
    },
    {
      step: 3,
      title: 'Merit List & Admission',
      description: 'Results and admission confirmation',
      details: ['Results announced within 7 days', 'Admission confirmation within 3 days', 'Fee payment and documentation', 'Welcome orientation program'],
      image: './Admissions/AdmissionsImg3.jpeg'
    }
  ];

  const feeStructure = [
    { grade: 'Nursery - KG-2', fee: '₹85,000', color: 'from-green-400 to-emerald-600' },
    { grade: 'Grades 1-5', fee: '₹95,000', color: 'from-blue-400 to-cyan-600' },
    { grade: 'Grades 6-8', fee: '₹1,05,000', color: 'from-purple-400 to-pink-600' },
    { grade: 'Grades 9-10', fee: '₹1,15,000', color: 'from-red-400 to-orange-600' },
    { grade: 'Grades 11-12', fee: '₹1,25,000', color: 'from-yellow-400 to-orange-600' }
  ];

  const scholarships = [
    { type: 'Merit Scholarship', discount: 'Up to 50%', criteria: 'Academic excellence', icon: <Award className="h-6 w-6" /> },
    { type: 'Sports Excellence', discount: 'Up to 30%', criteria: 'Outstanding sports performance', icon: <CheckCircle className="h-6 w-6" /> },
    { type: 'Economic Support', discount: 'Up to 25%', criteria: 'Financial need assessment', icon: <Users className="h-6 w-6" /> },
    { type: 'Sibling Discount', discount: '10%', criteria: '2nd child fee reduction', icon: <FileText className="h-6 w-6" /> }
  ];

  const accordionData = {
    eligibility: {
      title: 'Admission Eligibility',
      content: [
        'Nursery: Child should be 3+ years as of March 31st',
        'KG-1: Child should be 4+ years as of March 31st',
        'KG-2: Child should be 5+ years as of March 31st',
        'Grade 1: Child should be 6+ years as of March 31st',
        'Grades 2-12: Age appropriate with previous academic records'
      ]
    },
    documents: {
      title: 'Required Documents',
      content: [
        'Birth Certificate (Original + 2 copies)',
        'Previous school Transfer Certificate',
        'Previous year\'s Mark Sheet/Progress Report',
        'Passport size photographs (6 copies)',
        'Address proof (Utility bill/Aadhar card)',
        'Parent ID proofs (Aadhar/Passport/Driving License)',
        'Medical fitness certificate',
        'Caste certificate (if applicable)'
      ]
    },
    fees: {
      title: 'Fee Details',
      content: [
        'Admission Fee: ₹25,000 (one-time)',
        'Transport (optional): ₹18,000 per annum',
        'Meals (optional): ₹15,000 per annum',
        'Activity Fee: ₹5,000 per annum',
        'Bus fee payment required by 5th of each month',
        'Fee payment accepted online and offline'
      ]
    },
    process: {
      title: 'Admission Process',
      content: [
        'Online application submission with documents',
        'Entrance assessment for age-appropriate evaluation',
        'Parent counseling and school tour',
        'Merit list publication within 7 days',
        'Admission confirmation within 3 days',
        'Fee payment and final documentation',
        'Welcome orientation for new families'
      ]
    }
  };

  const faqs = [
    {
      question: 'What is the admission criteria?',
      answer: 'We assess academic potential, creativity, and overall personality development through age-appropriate evaluations.'
    },
    {
      question: 'Are there entrance coaching classes?',
      answer: 'We don\'t recommend coaching. Our assessment focuses on child\'s natural abilities and potential.'
    },
    {
      question: 'What if my child is from a different board?',
      answer: 'We welcome students from all boards with proper evaluation and bridge programs if needed.'
    },
    {
      question: 'Is transportation available from my area?',
      answer: 'We cover 25+ routes across the city. Check route details on our website or contact transport department.'
    }
  ];

  const importantDates = [
    { date: 'January 15, 2025', event: 'Application Opens', icon: <Calendar className="h-5 w-5" /> },
    { date: 'March 15, 2025', event: 'Last Date to Apply', icon: <Clock className="h-5 w-5" /> },
    { date: 'March 20-30, 2025', event: 'Entrance Tests', icon: <FileText className="h-5 w-5" /> },
    { date: 'April 5, 2025', event: 'Results Declaration', icon: <CheckCircle className="h-5 w-5" /> },
    { date: 'April 15, 2025', event: 'Admission Confirmation', icon: <Award className="h-5 w-5" /> }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./Admissions/AdmissionsImg4.jpeg"
            alt="Admissions Hero"
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
            Join the Starlit Family
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8"
          >
            Admissions 2025-26 - Transform Your Child's Future
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className={`${currentTheme.bgPrimary} ${currentTheme.bgPrimaryHover} text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg`}
          >
            Apply Now - Start Your Journey
          </motion.button>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            How to Apply - Illustrated Steps
          </motion.h2>

          <div className="space-y-16">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 ${currentTheme.bgPrimary} rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4`}>
                      {step.step}
                    </div>
                    <h3 className={`text-3xl font-bold ${currentTheme.primary}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-300">
                        <CheckCircle className={`h-5 w-5 ${currentTheme.primary} mr-3`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Accordion */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Admission Information
          </motion.h2>

          <div className="space-y-4">
            {Object.entries(accordionData).map(([key, data]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === key ? '' : key)}
                  className={`w-full p-6 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-300 ${
                    activeAccordion === key ? `${currentTheme.bgPrimary}` : ''
                  }`}
                >
                  <h3 className="text-xl font-bold text-white">{data.title}</h3>
                  <motion.div
                    animate={{ rotate: activeAccordion === key ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HelpCircle className="h-6 w-6 text-white" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: activeAccordion === key ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <ul className="space-y-3">
                      {data.content.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <div className={`w-2 h-2 ${currentTheme.bgPrimary} rounded-full mr-3 mt-2`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Fee Structure 2025-26
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {feeStructure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${item.color} h-2 rounded-full mb-4`}></div>
                <h3 className="text-white font-bold text-lg mb-2">{item.grade}</h3>
                <p className={`${currentTheme.primary} text-2xl font-bold`}>{item.fee}</p>
                <p className="text-gray-400 text-sm">per annum</p>
              </motion.div>
            ))}
          </div>

          {/* Scholarships */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className={`text-3xl font-bold text-center mb-8 ${currentTheme.primary}`}>
              Scholarships Available
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`${currentTheme.primary} flex justify-center mb-3`}>
                    {scholarship.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{scholarship.type}</h4>
                  <p className={`${currentTheme.primary} text-xl font-bold mb-2`}>{scholarship.discount}</p>
                  <p className="text-gray-400 text-sm">{scholarship.criteria}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Dates & Downloads */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Important Dates */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className={`text-3xl font-bold mb-8 ${currentTheme.primaryDark}`}>
                Important Dates
              </h3>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center bg-gray-900 p-4 rounded-xl shadow-lg"
                  >
                    <div className={`${currentTheme.primary} mr-4`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{item.event}</p>
                      <p className="text-gray-400">{item.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Downloads */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className={`text-3xl font-bold mb-8 ${currentTheme.primaryDark}`}>
                Download Documents
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'School Prospectus', size: '2.4 MB' },
                  { name: 'Fee Chart 2025-26', size: '1.2 MB' },
                  { name: 'Transfer Certificate Format', size: '856 KB' },
                  { name: 'Application Form', size: '1.8 MB' }
                ].map((doc, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full flex items-center justify-between bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <Download className={`h-5 w-5 ${currentTheme.primary} mr-3`} />
                      <div className="text-left">
                        <p className="text-white font-semibold">{doc.name}</p>
                        <p className="text-gray-400 text-sm">{doc.size}</p>
                      </div>
                    </div>
                    <div className={`${currentTheme.primary}`}>
                      <Download className="h-5 w-5" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.primaryDark}`}
          >
            Admission FAQs
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <h4 className={`text-lg font-bold mb-3 ${currentTheme.primary}`}>
                  Q: {faq.question}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  A: {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;