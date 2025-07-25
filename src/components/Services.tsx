import { servicesData } from "../constants/services"

const Services = () => {
  return (
    <div id="services" className="my-32 py-8 ">
      <h3 className="text-center font-bold text-gray-600">OUR SERVICES</h3>
      <h2 className="text-center text-4xl font-bold text-slate-900 dark:text-slate-400 py-2">
        We're digital marketing pro
      </h2>
      <p className="text-center antialiased">
        No matter what you're looking for, we can create a <br className="hidden sm:block" /> custom solution for your bussiness.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-16">
        {
          servicesData.map(({ id, icon: Icon, title, content, color }) => (
            <div key={id} className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 text-center border hover:shadow-lg dark:shadow-gray-700/40 transition-shadow duration-300 dark:border-slate-600 dark:text-gray-300 border-slate-300 p-4 rounded-md">
              <div style={{ backgroundColor: color }} className={`rounded-full text-white p-2 mb-2`}>
                <Icon className="size-8" />
              </div>
              <h2 className="font-bold text-lg my-2">{title}</h2>
              <p>{content}</p>
            </div>
          ))
        }
      </ul>
    </div>
  )
}
export default Services