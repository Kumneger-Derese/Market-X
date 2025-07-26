import { CgBolt, CgPlayButton } from "react-icons/cg"
import HeroImage from '../assets/Marketx-Hero.png'


const LightLine = ({ percent }: { percent: number }) => {
  return <div style={{ width: `${percent}%` }} className={`bg-blue-200 rounded-md h-2.5`} />
}
const LightLineColor = ({ percent }: { percent: number }) => {
  return (
    <div className="relative pb-4">
      <div style={{ width: '100%' }} className={`bg-blue-200 absolute rounded-md h-2.5`} />
      <div style={{ width: `${percent}%` }} className={`bg-primary absolute rounded-md h-2.5`} />
    </div>
  )
}

const Hero = () => {
  return (
    <div className="mb-32 gap-y-16 flex flex-col sm:flex-row items-center">
      {/* Left Section */}
      <section className="flex-1/2 flex flex-col gap-y-4 mt-16">
        <h1 className="text-4xl font-PoppinHeavy sm:text-5xl font-black text-slate-900 dark:text-slate-200 mb-4">Professional <br /> marketing copy <br /> for anyone
          <span className="text-blue-500">.</span></h1>

        <div className="flex gap-x-3 items-center mr-16 w-full">
          <span className="hidden sm:block bg-yellow-600 text-gray-300 p-2 rounded-full">
            ✍
          </span>

          <p className="dark:text-gray-400">
            We blend insights and strategy to create digital products for forward-thinking organisations.
          </p>
        </div>

        <div className="flex gap-x-2 sm:gap-x-6 items-center mt-4">
          <button className="px-2 sm:px-4 py-2 bg-blue-600 w-fit text-white sm:font-medium  hover:bg-blue-700 transition duration-300 rounded-md">Learn more</button>

          <div className="flex items-center gap-x-4 font-medium">
            <button className=" bg-gray-300 dark:bg-gray-600 p-1.5 border-2 border-secondary rounded-full">
              <CgPlayButton size={24} strokeWidth={1.5} />
            </button>
            <p className="dark:text-gray-300">How it works</p>
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="flex-1/2 mt-12 sm:mt-0 flex justify-center items-center relative">
        <img src={HeroImage} alt={'hero image'} className="lg:p-8 sm:mt-8" />

        {/* Performance */}
        <div className="absolute -top-14 sm:top-4 lg:top-12 -left-4 sm:-left-2 p-1 sm:p-2 sm:w-36 lg:w-48 rounded-md bg-white dark:bg-gray-700 border border-slate-200 dark:border-gray-500">
          <h1 className="font-bold mb-2 flex items-center gap-x-1">
            <CgBolt size={28} className="text-secondary dark:text-rose-500 dark:bg-gray-500 rounded-full p-1" /> Performance</h1>

          <div className="flex flex-col gap-y-1.5 lg:gap-y-2.5">
            <LightLine percent={40} />
            <LightLineColor percent={50} />

            <LightLine percent={20} />
            <LightLineColor percent={30} />

            <LightLine percent={50} />
            <LightLineColor percent={70} />
          </div>
        </div>

        {/* Micro stat */}
        <div className="flex flex-col text-white gap-y-3 absolute md:-bottom-16 lg:bottom-0 -left-4 -bottom-14 bg-secondary p-2 rounded-md">
          <div>
            <h1 className="font-PoppinHeavy text-3xl">2M+</h1>
            <p className="text-sm font-bold">Trusted Users</p>
          </div>

          <div>
            <h1 className="font-PoppinHeavy text-3xl">95%</h1>
            <p className="text-sm font-bold">Return Customers</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Hero