
import Input from "../components/ui/Input"
import { useContext, useState } from "react"
import Modal from "../components/ui/Modal";
import { useFormik } from "formik";
import { ValditionChagePaaword } from "../validation";
import instance from "../config/axios.config";
import { authContext } from "../context/auth";
import toast from "react-hot-toast";
import { Loading } from "../components/ui/Loading";

export const Profile = () => {
  const { setToken } = useContext(authContext)
  const [isLoading, setIsLoading] = useState(false)
  const changePasswordInfo = {
    currentPassword: "",
    password: "",
    rePassword: ""
  }


  const [isOpenToChangePassword, setIsOpenToChangePassword] = useState(false)
  //======>> Handler  <<=======
  const isOpenmodalChange = () => {
    setIsOpenToChangePassword(true)
  }
  const isClose = () => {
    setIsOpenToChangePassword(false)
  }


  const ChagePaasword = async (values, { resetForm }) => {
    setIsLoading(true)
    try {
      const { data } = await instance.put('/users/changeMyPassword', values, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      if (data.message === "success") {
        toast.success("Change Paasword Successfull", {
          position: "bottom-right"
        })
      }
      localStorage.setItem('token', data.token)
      setToken(data.token)
      isClose()
      setIsLoading(false)
      return data

    } catch (error) {
      toast.error(error.response.data.errors.msg, {
        position: "bottom-right"
      })
    }
    setIsLoading(false)
    resetForm();
  }

  const formChangePaawordObj = useFormik({
    initialValues: changePasswordInfo,
    onSubmit: ChagePaasword,
    validate: ValditionChagePaaword
  })




  return <>
    <div>
      <h1 className="text-center font-semibold text-3xl">{""}</h1>
    </div>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <div className="space-y-4">
          <p className="text-center text-2xl font-medium">Informations About You</p>

          

          <div className="mt-4 ">
            <button
              onClick={isOpenmodalChange}
              type="button"
              className="inline-block w-full me-2 mb-3 md:mb-0
              hover:bg-green-700 rounded-lg bg-green-600 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Change Password
            </button>

          </div>
        </div>
      </div>
    </div>


    <Modal isOpen={isOpenToChangePassword} isClose={isClose} title={"Change Your Password"}>

      <form onSubmit={formChangePaawordObj.handleSubmit} >
        <Input placeholder={"Current Password"} type={"password"} id={'currentPassword'} value={formChangePaawordObj.values.currentPassword} onChange={formChangePaawordObj.handleChange}
          onBlur={formChangePaawordObj.handleBlur} error={formChangePaawordObj.touched.currentPassword && formChangePaawordObj.errors.currentPassword} />

        <Input placeholder={"Password"} type={"password"} id={'password'} value={formChangePaawordObj.values.password} onChange={formChangePaawordObj.handleChange}
          onBlur={formChangePaawordObj.handleBlur} error={formChangePaawordObj.touched.password && formChangePaawordObj.errors.password} />

        <Input placeholder={"Confirm Password"} type={"password"} id={'rePassword'} value={formChangePaawordObj.values.rePassword} onChange={formChangePaawordObj.handleChange}
          onBlur={formChangePaawordObj.handleBlur} error={formChangePaawordObj.touched.rePassword && formChangePaawordObj.errors.rePassword} />

        <button type="submit" className=" cursor-pointer inline-block w-full me-2 mb-3 md:mb-0 mt-2
      hover:bg-green-700 rounded-lg bg-green-600 px-5 py-3 font-medium text-white sm:w-auto">{isLoading ? <Loading color={"#eee"} width={20} /> : "Confirm"}</button>
      </form>

    </Modal>
  </>
}
