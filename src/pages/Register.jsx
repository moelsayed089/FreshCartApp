import { Link } from "react-router-dom"
import Input from "../components/ui/Input"

export const Register = () => {
  return <>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-semibold text-green-600 sm:text-3xl">Fresh Cart</h1>

       

        <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">Sign up to your account</p>

        

          <div>
            <Input placeholder={'Name'}/>
            <Input placeholder={'Email'}/>
            <Input placeholder={'Password'}/>
            <Input placeholder={'RePassword'}/>
            <Input placeholder={'Phone'}/>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
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
