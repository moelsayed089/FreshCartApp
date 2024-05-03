import React, { useContext, useEffect } from 'react'
import { cartContext } from '../context/cartContext'
import { Loading } from '../components/ui/Loading'

export const Cart = () => {
  const { GetProductToCart, numOfCartItems, totalCartPrice, allProducts } = useContext(cartContext)

  console.log(allProducts)

  useEffect(() => {
    GetProductToCart()
  }, [])

  if (allProducts === null) return <Loading color={'#14B014'} width={"80"} />

  return <>
    <div className="mx-auto max-w-screen-xl  px-4 sm:px-6 lg:px-8">
      <div className='py-2 px-3'>
        <h1 className='text-3xl font-medium mb-3'>Shop Card</h1>
        <p className='text-lg'>numOfCartItems: {numOfCartItems}</p>
        <p className='text-lg mb-1'>totalCartPrice: {totalCartPrice}</p>
      </div>

      {allProducts.map((item, idx) => {
        return <div key={idx} className=" grid grid-cols-1 md:grid-cols-12 mb-2  px-3 py-2 bg-slate-50 border-solid border-1 border-green-400 rounded-md border-b-4  ">

          <div className="col-span-1 py-2">
            <img className=" h-[100px] rounded-md object-cover " src={item.product.imageCover} alt="" />
          </div>

          <div className="col-span-9 py-2 ">
            <p className="text-green-600 font-normal text-sm">{item.product.category.name}</p>
            <h2 className="text-xl font-semibold">{item.product.title}</h2>
            <p className="text-lg font-semibold">{item.price} EGP</p>
            <button className=" mt-2 border-2 py-1 rounded-md px-4 border-red-500 hover:text-white hover:bg-red-600 duration-200 " >Delete</button>
          </div>

          <div className="col-span-1 flex items-center justify-between mt-3 md:mt-0 ">
            <button className="border-2  py-1 rounded-md px-3 border-green-400  " >-</button>
            <p className="text-lg font-semibold mx-4">{item.count}</p>
            <button className="border-2 py-1 rounded-md px-3 border-green-400  ">+</button>
          </div>
        </div>
      })}






    </div>
  </>



}
