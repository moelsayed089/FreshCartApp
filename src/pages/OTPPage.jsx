import { useFormik } from "formik"
import instance from "../config/axios.config"
import { ValditionRest } from "../validation"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Loading } from "../components/ui/Loading"
import toast from "react-hot-toast"
import OTPInput from "../components/ui/OTPInput"


export const OTPPage = () => {
    const UserInfornation = {
        resetCode: "",
    }
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const FormObject = useFormik({
        initialValues: UserInfornation,
        onSubmit: handellResat,
        validate: ValditionRest
    })

    async function handellResat(values) {
        setIsLoading(true)
        try {
            const { data } = await instance.post('/auth/verifyResetCode', values)
            if (data.status === 'Success') {
                toast.success("  Successfull", {
                    position: "bottom-right"
                })
            }
            setTimeout(() => {
                navigate('/newpassword')
            }, 1000)
        } catch (error) {
            toast.error(error.response.data.message, {
                position: "bottom-right"
            })
        }
        setIsLoading(false)
    }
    return <>

        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-semibold text-green-600 sm:text-3xl"></h1>
                <form onSubmit={FormObject.handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p className="text-center text-lg font-medium"> <span className="font-semibold  text-green-600 "> Fresh_Cart</span></p>
                    <p className="text-center font-medium text-sm text-red-600">Please Enter Your OTP Code Arrived On Email</p>

                    <div>

                        <OTPInput
                            length={6}
                            onComplete={(pinValue) => FormObject.setFieldValue('resetCode', pinValue)}
                            onBlur={FormObject.handleBlur('resetCode')}
                            value={FormObject.values.resetCode}
                        />
                        {FormObject.touched.resetCode && FormObject.errors.resetCode && (
                            <p className="text-red-500 text-sm">{FormObject.errors.resetCode}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        {isLoading ? <Loading color={'#eeee'} width={'20'} /> : "Sign in"}
                    </button>
                </form>
            </div>
        </div>

    </>
}
