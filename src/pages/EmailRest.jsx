import { useFormik } from "formik"
import instance from "../config/axios.config"
import { ValditionEmailForOTP, ValditionLoginUser } from "../validation"
import Input from "../components/ui/Input"
import { Link, useNavigate } from "react-router-dom"
import {  useState } from "react"
import { Loading } from "../components/ui/Loading"
import toast from "react-hot-toast"


const EmailRest = () => {

  const UserInfornation = {
    email: "",
  }
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const FormObject = useFormik({
    initialValues: UserInfornation,
    onSubmit: UserEnterEmailForForgetPaasword,
    validate: ValditionEmailForOTP
  })

  async function UserEnterEmailForForgetPaasword(values) {
    setIsLoading(true)
    try {
      const { data } = await instance.post('/auth/forgotPasswords', values)
      if (data.statusMsg === 'success') {
        toast.success("OTP Code Sended  Successfull", {
          position: "bottom-right"
        })
      }
      setTimeout(() => {
        navigate('/otppage')
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

          <div>
            <Input id={'email'} type={"text"} placeholder={'Enter Your Email'} value={FormObject.values.email} onChange={FormObject.handleChange}
              onBlur={FormObject.handleBlur} error={FormObject.touched.email && FormObject.errors.email} />
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

export default EmailRest;
