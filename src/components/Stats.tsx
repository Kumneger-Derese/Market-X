import { statsData } from "../constants/stats"

const Stats = () => {
  return (
    <div className="my-32 text-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
      {
        statsData.map((stat) => (
          <div style={{ backgroundColor: stat.color }} 
          className="text-center py-4 px-8 rounded-md">
            <h1 className="font-PoppinHeavy text-3xl">{stat.number}</h1>
            <h3 className="font-bold py-1">{stat.title}</h3>
            <p className="text-gray-200">{stat.content}</p>
          </div>
        ))
      }
    </div>
  )
}
export default Stats