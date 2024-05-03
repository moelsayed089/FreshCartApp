import { createContext, useEffect, useState } from "react";
import instance from "../config/axios.config";
import toast from "react-hot-toast";


export const cartContext = createContext()

export function CartCintextProvider({children}){


    const [numOfCartItems, setNumOfCartItems]= useState(null)
    const [totalCartPrice, setTotalCartPrice]= useState(null)
    const [allProducts, setAllProducts]= useState([])

    async function AddProductToCart(productId) {
        try {
            const { data } = await instance.post('/cart',{
                "productId": productId
            } , {
                headers: {
                    token : localStorage.getItem('token')
                }
            } )
            setNumOfCartItems(data.numOfCartItems)
            setTotalCartPrice(data.data.totalCartPrice)
        return data
        } catch (error) {
            console.log(error.response.data.message)
        }
    }




    async function GetProductToCart() {
        try {
            const { data } = await instance.get('/cart',  {
                headers: {
                    token: localStorage.getItem('token')
                }
            })

            // console.log(data.data.products)
            setNumOfCartItems(data.numOfCartItems)
            setTotalCartPrice(data.data.totalCartPrice)
            setAllProducts(data.data.products)
            return data
        } catch (error) {
            console.log(error.response.data.message)
        }
    }



    useEffect(()=>{
        GetProductToCart()
    },[])



    return <cartContext.Provider value={{ GetProductToCart, AddProductToCart, numOfCartItems, totalCartPrice, allProducts }}>
    {children}
    </cartContext.Provider>
}