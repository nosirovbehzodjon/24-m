"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Faq() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is the student-to-teacher ratio?",
      answer:
        "We maintain a low student-to-teacher ratio of 15:1 to ensure personalized attention and optimal learning conditions for all students.",
    },
    {
      question: "What extracurricular activities are offered?",
      answer:
        "We offer a wide range of extracurricular activities including sports (basketball, soccer, swimming), arts (drama, music, visual arts), academic clubs (debate, robotics, science), and community service opportunities.",
    },
    {
      question: "How does the admission process work?",
      answer:
        "Our admission process includes an application form, previous academic records, an entrance assessment, and an interview. We evaluate students holistically, considering both academic potential and personal qualities.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes, we offer merit-based and need-based scholarships. Merit scholarships recognize academic excellence, while need-based financial aid ensures that qualified students can attend regardless of financial circumstances.",
    },
    {
      question: "What technology resources are available to students?",
      answer:
        "Our campus features state-of-the-art computer labs, a digital library, smart classrooms with interactive whiteboards, and a 1:1 device program for students in higher grades.",
    },
    {
      question: "How do you support students with different learning needs?",
      answer:
        "We have a dedicated learning support department that provides individualized assistance, accommodations, and enrichment opportunities based on each student's unique learning profile.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our programs, admission process, and campus facilities.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-blue-100 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-5 text-left bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                >
                  <span className="font-medium text-navy">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-lightblue transition-transform duration-300",
                      openIndex === index ? "transform rotate-180" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-96" : "max-h-0",
                  )}
                >
                  <div className="p-5 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-gray-600">
              Still have questions?{" "}
              <a href="#contact" className="text-navy font-medium hover:text-lightblue transition-colors duration-300">
                Contact us
              </a>{" "}
              for more information.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

