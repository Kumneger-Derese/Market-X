const CTA = () => {
  return (
    <div id="contact" className="my-32 py-32 px-4 sm:px-16 rounded-md bg-blue-200">
      <h1 className="text-2xl sm:text-4xl mb-10 text-center sm:font-PoppinHeavy text-slate-900 py-2">
        Sign up for new Market-<i className="text-blue-500">X</i> content <br className="hidden sm:block" />
        updates, surveys and offers.
      </h1>

      <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-4 w-full sm:w-4/6  mx-auto items-center">
        <input
          type="text"
          className="bg-white text-sky-900 focus:outline-gray-600/70 w-full p-3 rounded-md border border-gray-300"
          placeholder="kumneger21@gmail.com"
          />

        <button className="px-6 py-3 bg-blue-600 w-full sm:w-fit text-white font-medium  hover:bg-blue-700 transition duration-300 rounded-md">Subscribe</button>
      </div>
    </div>
  )
}
export default CTA