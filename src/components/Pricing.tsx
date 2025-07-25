import { pricingData } from "../constants/pricing"

const Pricing = () => {
  return (
    <div className="flex flex-col my-32">
      <div className="flex flex-col items-center justify-center gap-y-2 mb-16">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-400 py-2">Pricing Plan

        </h1>
        <h3 className="text-center">
          Stop wasting time and money designing and manging a website <br className="hidden sm:block" />
          that does'nt get results. Happiness guaranted!
        </h3>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
        {
          pricingData.map(
            ({ id, icon: Icon, title, subtitle, checkIcon: Check, color: colorId, contents, number, btnTxt }) => (
              <div key={id} className="px-4 py-8 border border-slate-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800">
                {/* sec 1 heading */}
                <div className="flex items-center gap-x-4 mb-8">
                  <p className=" bg-blue-50 dark:bg-blue-400 dark:text-white text-blue-600 p-4 rounded-md"><Icon size={24} /></p>
                  <div>
                    <h2 className="font-bold text-lg">{title}</h2>
                    <h3 className="font-medium">{subtitle}</h3>
                  </div>
                </div>

                {/* sec 2 content */}
                <div className="flex flex-col gap-y-3.5 mb-10">
                  {
                    contents.map((content) => (
                      <div key={content.id} className="flex items-center gap-2">
                        <p className=" bg-blue-50 dark:bg-gray-600 dark:text-blue-500 text-blue-600 p-2 rounded-full"><Check /></p>
                        <p>{content.text}</p>
                      </div>
                    ))
                  }
                </div>

                <hr className="h-4 text-gray-300 dark:text-gray-700" />

                {/* sec 3 footer */}
                <div className="flex flex-col gap-y-8  items-center mt-12 justify-center">
                  <h1 className="text-4xl dark:text-gary-300 font-PoppinHeavy">{number}</h1>
                  <button
                    style={{ backgroundColor: colorId ? colorId : '', color: colorId && 'white' }}
                    className="w-full border-1 text-slate-900 dark:text-white rounded-md border-primary px-4 py-2 font-bold">
                    {btnTxt}
                  </button>
                </div>

              </div>
            ))
        }
      </div>
    </div>
  )
}
export default Pricing