import { blogData } from "../constants/blog"

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-y-2 mb-16">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-400 py-2">
          From our Blog
        </h1>
        <h3 className="text-center">
          93% of traffic with a search query. Even with a high <br className="hidden sm:block" />
          number of searches being performed.
        </h3>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {
          blogData.map((blog) => (
            <div key={blog.id} className="p-4 rounded-md flex flex-col gap-y-2 border  border-slate-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">
              <div className="h-40">
                <img src={blog.image} alt={blog.title} className="rounded-md size-full object-cover" />
              </div>

              <h1 className="font-bold text-lg my-4">{blog.title}</h1>
              <p className="text-gray-500 dark:text-gray-400">{blog.content}</p>
            </div>
          ))
        }
      </ul>

      <button className="px-4 my-8 sm:px-4 py-3 w-full  bg-blue-600 sm:w-48 text-white sm:font-medium  hover:bg-blue-700 transition duration-300 rounded-md">
        Learn more
      </button>

    </div>
  )
}
export default Blog