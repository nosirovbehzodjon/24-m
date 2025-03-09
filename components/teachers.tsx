"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export default function Teachers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Principal",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Ph.D. in Education with over 20 years of experience in academic leadership.",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      position: "Science Department Head",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Award-winning educator specializing in physics and environmental science.",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      position: "Mathematics Teacher",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Mathematics expert with innovative teaching methods for complex concepts.",
    },
    {
      id: 4,
      name: "Prof. David Wilson",
      position: "Literature & Arts",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Published author with a passion for inspiring creativity in students.",
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Expert Teachers</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated faculty members who are committed to providing exceptional education and guidance to
              our students.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher) => (
              <motion.div key={teacher.id} variants={itemVariants} className="group">
                <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={teacher.image || "/placeholder.svg"}
                      alt={teacher.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <a
                          href="#"
                          className="bg-white p-2 rounded-full text-navy hover:bg-lightblue hover:text-white transition-colors duration-300"
                        >
                          <Facebook size={18} />
                        </a>
                        <a
                          href="#"
                          className="bg-white p-2 rounded-full text-navy hover:bg-lightblue hover:text-white transition-colors duration-300"
                        >
                          <Twitter size={18} />
                        </a>
                        <a
                          href="#"
                          className="bg-white p-2 rounded-full text-navy hover:bg-lightblue hover:text-white transition-colors duration-300"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href="#"
                          className="bg-white p-2 rounded-full text-navy hover:bg-lightblue hover:text-white transition-colors duration-300"
                        >
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-1">{teacher.name}</h3>
                    <p className="text-lightblue font-medium mb-3">{teacher.position}</p>
                    <p className="text-gray-600 text-sm">{teacher.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

