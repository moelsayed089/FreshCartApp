import { useFormik } from "formik"
import { TextareaField } from "../components/TextareaField"
import Input from "../components/ui/Input"
import { ValditionPaymentField } from "../validation"
import axios from "axios"
import instance from "../config/axios.config"
import { cartContext } from "../context/cartContext"
import { useContext, useState } from "react"
import { Loading } from "../components/ui/Loading"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const Payment = () => {

    const { cardId, setNumOfCartItems, setTotalCartPrice, setAllProducts } = useContext(cartContext)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const shippingAddress={
        details: "",
        phone: "",
        city: ""
    }

const FormObject = useFormik({
    initialValues:shippingAddress,
    onSubmit: (values)=>{
        if(values.payMethod === "cash"){
            CashPaymentMethod()
        }
        if (values.payMethod === "card") {
            CardPaymentMethod()
        }
    } ,

    validate: ValditionPaymentField
})


    async function CashPaymentMethod(values){
    setIsLoading(true)
    try {
        const { data } = await instance.post(`/orders/${cardId}`,values, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        if (data.status === "success"){
            toast.success("Order Confirmed(Cash) successfully", {
                position: "bottom-right"
            })
        }


        // change pass in future 
        setTimeout(()=>{
            navigate('/product')
        },1000)

        setNumOfCartItems(0)
        setTotalCartPrice(0)
        setAllProducts([])
        return data 

    } catch (error) {
        console.log()
        if (error.response.data.message ==="Can't find this route: /api/v1/orders/"){
            toast.error("Not Found Product List", {
                position: "bottom-right"
            })
        }
    }
        setIsLoading(false)
}




    const CardPaymentMethod = async (values) => {
        try {
            const { data } = await instance.post(`/orders/checkout-session/${cardId}?url=http://${window.location.host}`,values,{
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            if (data.status === "success"){
                window.open(data.session.url , "_blank")
            }
            setNumOfCartItems(0)
            setTotalCartPrice(0)
            setAllProducts([])
            return data 
        } catch (error) {
            console.log(error)
        }
    }




    return <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form onSubmit={FormObject.handleSubmit} className="space-y-4">
                        <p className="text-center text-lg font-medium ">
                            Payment Method on<span className="font-semibold text-green-600 "> Fresh_Cart</span></p>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                            <Input id={'city'} type={"text"} placeholder={'City'} value={FormObject.values.city} onChange={FormObject.handleChange}
                                onBlur={FormObject.handleBlur} error={FormObject.touched.city && FormObject.errors.city} />
                            </div>
                            <div>
                            <Input id={'phone'} type={"text"} placeholder={'Phone Number'} value={FormObject.values.phone} onChange={FormObject.handleChange}
                                onBlur={FormObject.handleBlur} error={FormObject.touched.phone && FormObject.errors.phone} />
                        
                            </div>
                        </div>

                        <div>
                        <TextareaField id={'details'} type={"text"} placeholder={'Detailes More from Your Adderss'} value={FormObject.values.details} onChange={FormObject.handleChange}
                            onBlur={FormObject.handleBlur} error={FormObject.touched.details && FormObject.errors.details} rows={8} />
                        
                        </div>

                        <div className="mt-4 ">
                            <button
                                type="submit"
                                onClick={() => FormObject.setFieldValue("payMethod","cash")}
                            
                                className="inline-block w-full me-2 mb-3 md:mb-0 hover:bg-green-700 rounded-lg bg-green-600 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                            {isLoading ? <Loading color={"#eee"} width={20} /> : " Order Cash Payment"}
                            </button>

                            <button
                                type="submit"
                            onClick={() => FormObject.setFieldValue("payMethod", "card")}
                                className="inline-block w-full hover:bg-green-700 rounded-lg bg-green-600 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Order Card Payment
                            </button>
                        </div>
                    </form>
                </div>
            </div>

    </>
}
