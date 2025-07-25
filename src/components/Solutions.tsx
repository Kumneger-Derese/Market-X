import SolutionImage from '../assets/solution.png'
import { CgGoogle } from 'react-icons/cg'
import { HiStar } from 'react-icons/hi2'

const Solutions = () => {
  return (
    <div id='company' className="my-32 py-4 flex flex-col gap-8 sm:flex-row">
      {/* left section */}
      <section className="flex-1/2">
        <h3 className="font-bold text-gray-600">OUR SOLUTIONS</h3>
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-400 py-2">
          Lounch and scale your <br /> marketing campaigns
        </h2>

        <p className="my-4">
          We start with a kick-off call with the respective project
          owners, onboard the teams on the project management
          platforms and take off.
        </p>

        <button className="px-4 py-2 my-4 bg-blue-600 w-fit text-white font-medium  hover:bg-blue-700 transition duration-300 rounded-md">
          Learn more
        </button>
      </section>

      {/* Right section */}
      <section className="flex-1/2 md:py-8 lg:mx-8 relative">
        {/* about image */}
        <img className='size-full rounded-4xl object-cover' src={SolutionImage} alt="solutions" />
        {/* Small card */}
        <div className='bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 rounded-md flex flex-col gap-y-0.5  px-8 py-3 absolute -left-4 -top-24 sm:-top-3  shadow-md'>
          <p className='bg-slate-200 rounded-full w-fit'>
            <CgGoogle className='text-blue-800 size-8 p-1' />
          </p>
          <h1 className='to-slate-900 font-bold text-xl sm:text-2xl'>Google <br />ads</h1>
          <p className='flex items-center gap-x-1 text-gray-500 dark:text-gray-400'>
            <span><HiStar color='yellow'/></span>4.9
          </p>
          <p className='text-gray-400'>
            247 reviews
          </p>
        </div>
      </section>
    </div>
  )
}
export default Solutions