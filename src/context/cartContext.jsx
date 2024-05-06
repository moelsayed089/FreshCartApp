import { createContext, useEffect, useState } from "react";
import instance from "../config/axios.config";



export const cartContext = createContext()

export function CartCintextProvider({children}){


    const [numOfCartItems, setNumOfCartItems]= useState(null)
    const [totalCartPrice, setTotalCartPrice]= useState(null)
    const [allProducts, setAllProducts]= useState([])
    const [cardId, setCardId]= useState([])

    async function AddProductToCart(productId) {
        try {
            const { data } = await instance.post('/cart',{
                "productId": productId
            } , {
                headers: {
                    token : localStorage.getItem('token')
                }
            } )
            setCardId(data.data._id)
            setNumOfCartItems(data.numOfCartItems)
            setTotalCartPrice(data.data.totalCartPrice)
        return data
        } catch (error) {
            return error
        }
    }




    async function GetProductToCart() {
        try {
            const { data } = await instance.get('/cart',  {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            
            setCardId(data.data._id)
            setNumOfCartItems(data.numOfCartItems)
            setTotalCartPrice(data.data.totalCartPrice)
            setAllProducts(data.data.products)
            return data
        } catch (error) {
           return error
        }
    }


    async function DeleteProductToCart(productId) {
        try {
            const { data } = await instance.delete(`/cart/${productId}`, {
                headers: {
                    token: localStorage.getItem('token')
                }
            })

            setNumOfCartItems(data.numOfCartItems)
            setTotalCartPrice(data.data.totalCartPrice)
            setAllProducts(data.data.products)

            return data
        } catch (error) {
            return error
        }
    }
    


    async function UpdataProductToCart(productId, count) {
        try {
            const { data } = await instance.put(`/cart/${productId}`, {
                "count": count
            } ,{
                headers: {
                    token: localStorage.getItem('token')
                }
            })

            setNumOfCartItems(data.numOfCartItems)
            setTotalCartPrice(data.data.totalCartPrice)
            setAllProducts(data.data.products)

            return data
        } catch (error) {
            return error
        }
    }


    async function ClearProductToCart() {
        try {
            const { data } = await instance.delete(`/cart`, {
                headers: {
                    token: localStorage.getItem('token')
                }
            })

            setNumOfCartItems(0)
            setTotalCartPrice(0)
            setAllProducts([])

            return data
        } catch (error) {
            return error
        }
    }




    useEffect(() => {
        GetProductToCart()
    }, [])


    return <cartContext.Provider value={{
        cardId, setNumOfCartItems, setTotalCartPrice, setAllProducts,
    ClearProductToCart, UpdataProductToCart, DeleteProductToCart, GetProductToCart, AddProductToCart, numOfCartItems, totalCartPrice, allProducts }}>
    {children}
    </cartContext.Provider>
}