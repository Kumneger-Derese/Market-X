import { HiGlobeAlt } from 'react-icons/hi2'
import AboutImage from '../assets/about.png'
import { GoArrowUpRight } from 'react-icons/go'

const AboutUs = () => {
  return (
    <div className="my-32 py-4 flex flex-col gap-8 sm:flex-row">
      {/* left section */}
      <section className="flex-1/2 md:py-8 lg:mx-8 order-2 sm:order-none relative">
        {/* about image */}
        <img className='size-full rounded-4xl object-cover' src={AboutImage} alt="about us" />

        {/* Small card */}
        <div className='bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 rounded-md flex flex-col gap-y-1 items-center justify-center px-10 py-4 absolute -right-4 -bottom-24 sm:-bottom-3 shadow-md'>
          <p className='bg-slate-200 rounded-full'>
            <HiGlobeAlt className='text-blue-800 size-8 p-1' />
          </p>
          <h1 className='to-slate-900 font-black text-xl sm:text-3xl font-PoppinHeavy'>21.7k</h1>
          <p className='text-gray-500 dark:text-gray-400'>Reach</p>
          <div className='flex items-center gap-x-1 text-slate-950 dark:text-gray-200'>
            <GoArrowUpRight /> <span>12.7%</span>
          </div>
        </div>
      </section>

      {/* Right section */}
      <section className="flex-1/2 order-1 sm:order-none">
        <h3 className="font-bold text-gray-600">ABOUT US</h3>
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-400 py-2">
          We strat with discovery <br /> call to understand
        </h2>

        <div className="mt-4">
          <p>
            We present you a proposal and discuss nitty-gritty like
            workflows, communication protocols apart from
            engagement models, pricing, billing and invoicing.
          </p>
          <br />
          <p>
            Backed by an experience of nearly two
            decades in digital marketing.
          </p>
        </div>

        <button className="px-4 py-2 my-4 bg-blue-600 w-fit text-white font-medium  hover:bg-blue-700 transition duration-300 rounded-md">
          Learn more
        </button>
      </section>
    </div>
  )
}
export default AboutUs