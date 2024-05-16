import { useQuery } from "react-query"
import instance from "../config/axios.config"
import { Loading } from "../components/ui/Loading"

export const Brands = () => {
  async function GetAllBrands(){
    return await instance.get('brands')
  }

  const { data, isLoading } = useQuery('AllBarnds', GetAllBrands)
  const ResData = data?.data.data

  if (isLoading) return <Loading color={'#14B014'} width={"80"} />
  return <>
    <div className="mx-auto h-16 max-w-screen-xl py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8">

        {ResData.map((item,idx)=>{
          return <div key={idx} className="rounded-lg bg-gray-50">
            <div className="w-100 px-3 py-5">
              <img src={item.image} className="w-full  object-cover  rounded-lg bg-slate-900" alt="" />
              <h1 className="text-center text-3xl font-medium py-3 text-green-600">{item.name}</h1>
            </div>
          </div>
        })}

      </div>
  </div>
    
  </>
}
