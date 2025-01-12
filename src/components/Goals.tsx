import React from 'react';
import { Target, GraduationCap, Heart, Globe, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const goals = [
  {
    icon: Target,
    title: "Annual Beauty Pageants",
    text: "Host successful annual beauty pageants that empower women to become confident leaders and change-makers in their communities.",
    color: "text-pink-600",
    gradient: "from-pink-500/20 to-transparent"
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    text: "Provide scholarships and educational grants to deserving women, supporting their academic and professional pursuits worldwide.",
    color: "text-purple-600",
    gradient: "from-purple-500/20 to-transparent"
  },
  {
    icon: Heart,
    title: "Global Partnerships",
    text: "Partner with organizations and charities, promoting women empowerment, education, and healthcare initiatives globally.",
    color: "text-red-600",
    gradient: "from-red-500/20 to-transparent"
  },
  {
    icon: Globe,
    title: "Cultural Exchange",
    text: "Foster international understanding through cultural exchange programs and cross-border collaborations.",
    color: "text-blue-600",
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    icon: Award,
    title: "Leadership Development",
    text: "Develop the next generation of women leaders through mentorship programs and leadership workshops.",
    color: "text-emerald-600",
    gradient: "from-emerald-500/20 to-transparent"
  },
  {
    icon: Users,
    title: "Community Impact",
    text: "Create lasting positive change in communities through social initiatives and volunteer programs.",
    color: "text-amber-600",
    gradient: "from-amber-500/20 to-transparent"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const GoalCard = ({ icon: Icon, title, text, color, gradient, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative bg-white p-8 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1">
        <div className="flex flex-col items-center text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className={`rounded-full p-4 bg-gray-50 mb-4 ${color}`}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
          <motion.h3
            className="text-xl font-semibold mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <p className="text-gray-600">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Goals() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="goals" className="py-20 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Goals
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            At Miss Bloom Global, we are committed to creating meaningful impact through these key objectives
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {goals.map((goal, index) => (
            <GoalCard key={index} {...goal} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}