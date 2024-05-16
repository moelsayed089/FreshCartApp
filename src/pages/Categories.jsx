import { useQuery } from "react-query"
import { Loading } from "../components/ui/Loading"
import instance from "../config/axios.config"

export const Categories = () => {
  async function GetAllCategories() {
    return await instance.get('categories')
  }

  const { data, isLoading } = useQuery('Allcategories', GetAllCategories)
  const ResData = data?.data.data

  if (isLoading) return <Loading color={'#14B014'} width={"80"} />
  return <>
    <div className="mx-auto h-16 max-w-screen-xl py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">

        {ResData.map((item,idx) => {
          return <div key={idx} className="rounded-lg bg-gray-50">
            <div className="w-100 px-3 py-5 flex flex-col">
              <img src={item.image} className="w-100 h-[250px]  rounded-lg bg-slate-900" alt="" />
              <h1 className="text-center text-3xl font-medium py-3 text-green-600">{item.name}</h1>
            </div>
          </div>
        })}

      </div>
    </div>

  </>
}
