"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

export default function Alumni() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const alumni = [
    {
      id: 1,
      name: "Jennifer Parker",
      graduation: "Class of 2010",
      position: "Software Engineer at Google",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        "The foundation I received at this school prepared me for the challenges of the tech industry. The teachers' dedication to excellence shaped my work ethic.",
    },
    {
      id: 2,
      name: "Marcus Williams",
      graduation: "Class of 2008",
      position: "Cardiothoracic Surgeon",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        "My science teachers inspired my passion for medicine. Their mentorship was instrumental in my journey to becoming a surgeon.",
    },
    {
      id: 3,
      name: "Sophia Chen",
      graduation: "Class of 2015",
      position: "Environmental Scientist",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        "The school's emphasis on critical thinking and global awareness led me to pursue a career focused on sustainability and environmental protection.",
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
    <section id="alumni" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Notable Alumni</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our graduates have gone on to achieve remarkable success in various fields, carrying forward the values
              and knowledge gained at our institution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {alumni.map((alum) => (
              <motion.div
                key={alum.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={alum.image || "/placeholder.svg"}
                        alt={alum.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy">{alum.name}</h3>
                      <p className="text-lightblue text-sm">{alum.graduation}</p>
                      <p className="text-gray-600 text-sm">{alum.position}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute top-0 left-0 text-gold opacity-20 w-10 h-10" />
                    <p className="text-gray-600 italic pl-6 pt-2">{alum.quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-block bg-navy text-white px-6 py-3 rounded-lg hover:bg-lightblue transition-colors duration-300 cursor-pointer">
              View More Alumni Stories
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

