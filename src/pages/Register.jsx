import { Link, useNavigate } from "react-router-dom"
import Input from "../components/ui/Input"
import { useFormik } from "formik"
import { ValditionRegisterNewUser } from "../validation"
import instance from "../config/axios.config"
import { useState } from "react"
import toast from "react-hot-toast"
import { Loading } from "../components/ui/Loading"

export const Register = () => {
  const UserInfornation={
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: ""
  }

  const [isLoading ,setIsLoading]=useState(false)
  const navigate = useNavigate()


  const FormObject = useFormik({
    initialValues: UserInfornation,
    onSubmit:RegisterNewUser,
    validate: ValditionRegisterNewUser
  })

  async function RegisterNewUser(values){
    setIsLoading(true)
    try {
      const { data } = await instance.post('/auth/signup', values)
      if (data.message === 'success') {
        toast.success("Account Created Successfull",{
          position:"bottom-right"
        })
      }
      setTimeout(() => {
        navigate('/login')
      },1000)
    } catch (error) {
      toast.error(error.response.data.message , {
        position: "bottom-right"
      })
    }
    setIsLoading(false)
  }

  return <>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 ></h1>
        <form onSubmit={FormObject.handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">Sign up to your account! <span className="font-semibold text-green-600 "> Fresh_Cart</span></p>
          <div>
            <Input id={'name'} type={"text"} placeholder={'Name'} value={FormObject.values.name} onChange={FormObject.handleChange}
              onBlur={FormObject.handleBlur} error={FormObject.touched.name && FormObject.errors.name} />

            <Input id={'email'} type={"text"} placeholder={'Email'} value={FormObject.values.email} onChange={FormObject.handleChange}
              onBlur={FormObject.handleBlur} error={FormObject.touched.email && FormObject.errors.email} />

            <Input id={'password'} type={"password"} placeholder={'Password'} value={FormObject.values.password} onChange={FormObject.handleChange}
              onBlur={FormObject.handleBlur} error={FormObject.touched.password && FormObject.errors.password} />

            <Input id={'rePassword'} type={"password"} placeholder={'RePassword'} value={FormObject.values.rePassword} onChange={FormObject.handleChange}
              onBlur={FormObject.handleBlur} error={FormObject.touched.rePassword && FormObject.errors.rePassword} />
            
            <Input id={'phone'} type={"text"} placeholder={'Phone'} value={FormObject.values.phone} onChange={FormObject.handleChange}
              onBlur={FormObject.handleBlur} error={FormObject.touched.phone && FormObject.errors.phone} />
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
          >
            {isLoading ? <Loading color={"#eeee"} width={"20"}/> : "Sign in"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Have you an account?
            <Link className="underline" to={'/login'}>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  </>
}
