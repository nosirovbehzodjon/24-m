"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">About Our School</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Founded in 1985, our institution has been committed to academic excellence and holistic development of
              students for over three decades.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Mission & Vision */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    To provide a stimulating learning environment that enables each student to realize their full
                    potential, develop critical thinking skills, and become responsible global citizens.
                  </p>
                  <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To be recognized as a center of excellence in education, nurturing future leaders who are
                    innovative, compassionate, and equipped to face the challenges of tomorrow.
                  </p>
                </div>
                <div className="bg-blue-50 p-8 md:p-10 flex items-center justify-center">
                  <div className="relative w-full h-full max-h-80">
                    <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gold rounded-lg"></div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="School mission"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md relative z-10"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* History & Stats */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
              {/* School History */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy mb-4">Our History</h3>
                  <p className="text-gray-600 mb-4">
                    Founded in 1985, our institution has been committed to academic excellence and holistic development
                    of students for over three decades.
                  </p>
                  <p className="text-gray-600">
                    What began as a small school with just 50 students has grown into a premier educational institution
                    with state-of-the-art facilities and a reputation for excellence in academics, sports, and the arts.
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="w-12 h-1 bg-gold"></div>
                    <p className="ml-4 text-navy font-medium">Established 1985</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy text-white p-6 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
                  <h4 className="font-bold text-3xl mb-2">1200+</h4>
                  <p className="text-blue-100">Students</p>
                </div>
                <div className="bg-lightblue text-white p-6 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
                  <h4 className="font-bold text-3xl mb-2">95%</h4>
                  <p className="text-blue-50">Graduation Rate</p>
                </div>
                <div className="bg-gold text-navy p-6 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
                  <h4 className="font-bold text-3xl mb-2">120+</h4>
                  <p className="text-navy/80">Expert Faculty</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
                  <h4 className="font-bold text-3xl text-navy mb-2">50+</h4>
                  <p className="text-gray-600">Programs</p>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-navy mb-6 text-center">Our Core Values</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-navy text-2xl font-bold">01</span>
                    </div>
                    <h4 className="font-bold text-navy mb-2">Excellence</h4>
                    <p className="text-gray-600 text-sm">Striving for the highest standards in all endeavors</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-navy text-2xl font-bold">02</span>
                    </div>
                    <h4 className="font-bold text-navy mb-2">Integrity</h4>
                    <p className="text-gray-600 text-sm">Acting with honesty, ethics, and responsibility</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-navy text-2xl font-bold">03</span>
                    </div>
                    <h4 className="font-bold text-navy mb-2">Innovation</h4>
                    <p className="text-gray-600 text-sm">Embracing creativity and forward-thinking approaches</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-navy text-2xl font-bold">04</span>
                    </div>
                    <h4 className="font-bold text-navy mb-2">Community</h4>
                    <p className="text-gray-600 text-sm">Fostering a supportive and inclusive environment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

