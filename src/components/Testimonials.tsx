import { FaQuoteLeft } from "react-icons/fa6"
import { testimonialData } from "../constants/testimonial"
import { useCallback, useEffect, useState } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0)
  const windowSize = 3

  const currentTestimonials = testimonialData.slice(startIndex, startIndex + windowSize)

  // handle next btn
  const handleNext = useCallback(() => {
    if (startIndex + windowSize < testimonialData.length) {
      setStartIndex(startIndex + 1)
    } else {
      setStartIndex(0)
    }
  }, [startIndex,windowSize])

  // automatically change window
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext()
    }, 2000)

    return () => clearTimeout(timer)
  }, [handleNext])

  // handle prev btn
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    } else if (startIndex === 0) {
      setStartIndex(testimonialData.length - 1)
    }
  }


  return (
    <div className="my-32">
      <h1 className="text-4xl mb-16 text-center font-bold text-slate-900 dark:text-slate-400 py-2">
        Happy clients about us
      </h1>

      {/* list of testimonial */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {
          currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col p-4 bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-500  rounded-md">
              <img src={testimonial.image} alt="testimonial" className="size-16 rounded-full -mt-8 border-2 border-gray-400 self-center" />
              <div className="self-center my-4 text-primary"><FaQuoteLeft size={28} /></div>
              <p className="text-gray-500 dark:text-gray-400">{testimonial.content}</p>

              <div className="flex mt-8 pb-2 text-sm justify-center  gap-x-2">
                <h3 className="font-bold text-slate-900 dark:text-slate-400">{testimonial.name},</h3>
                <h4 className="dark:text-slate-300">{testimonial.title}</h4>
              </div>
            </div>
          ))
        }
      </ul>

      {/* Pagination and dots */}
      <div className="flex flex-col sm:flex-row gap-y-8 items-center justify-between gap-x-8 mt-12 text-primary dark:text-white mx-32">

        <div className="flex gap-x-4 items-center">
          {
            [...Array(5)].map((_, index) => (
              <div className={`size-4 rounded-full ${startIndex === index ? 'bg-secondary' : 'bg-gray-400'} `}></div>
            ))

          }
        </div>

        <div className="flex gap-x-8 items-center">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full dark:bg-gray-700 border border-blue-300 dark:border-gray-500  bg-blue-100 ">
            <HiChevronLeft strokeWidth={1} size={24} />
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-full dark:bg-gray-700 border border-blue-300 dark:border-gray-500 bg-blue-100 y">
            <HiChevronRight strokeWidth={1} size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Testimonials