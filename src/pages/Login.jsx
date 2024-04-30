import { useFormik } from "formik"
import instance from "../config/axios.config"
import { ValditionLoginUser } from "../validation"
import Input from "../components/ui/Input"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { Loading } from "../components/ui/Loading"
import toast from "react-hot-toast"
import { authContext } from "../context/auth"

export const Login = () => {
  const UserInfornation = {
    email: "",
    password: "",
  }

  const { setToken } = useContext(authContext)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const FormObject = useFormik({
    initialValues: UserInfornation,
    onSubmit: LoginUser,
    validate: ValditionLoginUser
  })

  async function LoginUser(values) {
    setIsLoading(true)
    try {
      const { data } = await instance.post('/auth/signin', values)
      console.log(data.token)
      if (data.message === 'success') {
        toast.success("Account Login Successfull", {
          position: "bottom-right"
        })
      }

      localStorage.setItem('token',data.token)
      setToken(data.token)

      setTimeout(() => {
        navigate('/product')
      },1000)
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
          <p className="text-center text-lg font-medium">Sign in to your account! <span className="font-semibold text-green-600 "> Fresh_Cart</span></p>
          <div>
          
            <Input id={'email'} type={"text"} placeholder={'Email'} value={FormObject.values.email} onChange={FormObject.handleChange}
              onBlur={FormObject.handleBlur} error={FormObject.touched.email && FormObject.errors.email} />

            <Input id={'password'} type={"password"} placeholder={'Password'} value={FormObject.values.password} onChange={FormObject.handleChange}
              onBlur={FormObject.handleBlur} error={FormObject.touched.password && FormObject.errors.password} />

          </div>

          <Link to={'/emailrest'} className="text-sm  underline text-green-600 hover:text-green-700"> Forget password</Link>

          <button
            type="submit"
            className="block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
          >
            {isLoading ? <Loading color={'#eeee'} width={'20'}/> : "Sign in"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Don't you an account?
            <Link className="underline" to={'/register'}>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  </>
}
