import { Link, useNavigate } from "react-router-dom"
import Logo from '../../images/freshcart-logo.svg'
import { useContext } from "react"
import { authContext } from "../../context/auth"
import { cartContext } from "../../context/cartContext"

export const Navbar = () => {
    const {token,setToken} = useContext(authContext)

    const { numOfCartItems  } = useContext(cartContext)
    const Navaigate =useNavigate()
    const HandleLogout =()=>{
        localStorage.removeItem('token')
        setToken(null)
        Navaigate('/')
    } 
    return <>
        <header className="bg-white">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <img src={Logo} alt="" />
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                       
                      {
                        token ? <>
                                <li>
                                    <Link className="text-gray-500 font-semibold transition hover:text-green-500" to={'product'}> Products </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 font-semibold transition hover:text-green-500" to={'categories'}> Categories </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 font-semibold transition hover:text-green-500" to={'brands'}> Brands </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 font-semibold transition hover:text-green-500" to={'cart'}> Card(<span className="text-red-600">{numOfCartItems ? numOfCartItems : 0}</span>) </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 transition font-semibold hover:text-green-500" to={'allorders'}> AllOrders </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 transition font-semibold hover:text-green-500" to={'profile'}> Profile </Link>
                                </li>
                        </> : ""
                      }
                    </ul>
                </nav>


                <div className="flex flex-1 items-center justify-end gap-4">
                    {token ? (
                        <ul className="hidden md:flex md:items-center md:gap-6 md:text-sm">
                            <li>
                                <button onClick={HandleLogout} className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700" to={'profile'}> Logout </button>
                            </li>
                        </ul>
                    ) : (
                        <>
                            <Link
                                className="block rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
                                to={'login'}
                            >
                                Login
                            </Link>
                            <Link
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-green-600 transition hover:text-green-600/75 sm:block"
                                to={'register'}
                            >
                                Register
                            </Link>
                        </>
                    )}

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

        </header>
    </>
}
