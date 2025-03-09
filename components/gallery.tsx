"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Campus main building",
      category: "Campus",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Science laboratory",
      category: "Facilities",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Sports field",
      category: "Sports",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Library",
      category: "Facilities",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Graduation ceremony",
      category: "Events",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Art exhibition",
      category: "Arts",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Computer lab",
      category: "Facilities",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Student performance",
      category: "Events",
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="gallery" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">School Gallery</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Take a visual tour of our campus, facilities, and student activities through our gallery of memorable
              moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-navy bg-opacity-70 px-3 py-1 rounded-full text-sm">{image.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-navy bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors duration-300"
            >
              <X size={24} />
            </button>
            <Image
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="text-white mt-4">
              <p className="text-lg">{images[selectedImage].alt}</p>
              <p className="text-sm text-blue-200">{images[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

