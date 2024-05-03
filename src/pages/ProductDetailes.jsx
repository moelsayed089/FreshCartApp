import { useParams } from "react-router-dom"
import instance from "../config/axios.config"
import { useQuery } from "react-query"
import { Loading } from "../components/ui/Loading"
import { useContext, useState } from "react"
import { cartContext } from "../context/cartContext"
import toast from "react-hot-toast"

export const ProductDetailes = () => {
    const { id } = useParams()

    function GetProductDetailes() {
        return instance.get(`/products/${id}`)

    }
    const { data, isLoading } = useQuery('productdetailes', GetProductDetailes)
    const ResponseProductDetailes = data?.data.data

    const [selectedImage, setSelectedImage] = useState("")
    const [isloading, setIsLoading] = useState(false)

    const HandelSelectImage = (imageUrl)=>{
        setSelectedImage(imageUrl)
    }

    const { AddProductToCart } = useContext(cartContext)
    const HandleAddProdct = async (productId) => {
        setIsLoading(true)
        const res = await AddProductToCart(productId)
        if (res.status === 'success') {
            toast.success("Product added successfully to your cart", {
                position: "bottom-right"
            })
        }
    
        setIsLoading(false)
    }

    const ResponseImageDesplay = ResponseProductDetailes?.images.slice(0,4)

    if (isLoading) return <Loading color={'#14B014'} width={"80"} />
    return <>
        <div className="mx-auto max-w-screen-xl md:pt-20 px-4 sm:px-6 lg:px-8">
            <div className=" grid grid-cols-1 md:grid-cols-12 gap-4 px-3 py-2 bg-slate-50 border-solid border-1 border-green-400 rounded-md ">
                    <div className="col-span-5">
                    <img className="w-full h-[500px] rounded-md object-cover " src={selectedImage ? selectedImage : ResponseProductDetailes?.imageCover} alt="" />
                    </div>

                <div className="grid grid-row-4 py-2">
                    {ResponseImageDesplay.map((imageUrl,idx)=>(
                            <img key={idx} onClick={() => HandelSelectImage(imageUrl)} className=" h-[110px] rounded-md cursor-pointer" 
                            src={imageUrl} alt="" />
                    ))}
                </div>

                    <div className="col-span-6 py-2 ">
                        <h4 className="flex items-center gap-2 mb-2">
                        <img className="h-[40px] w-[40px] rounded-full shadow-sm " src={ResponseProductDetailes.brand.image} alt={ResponseProductDetailes.brand.name} />
                        {ResponseProductDetailes.brand.name}
                        </h4>

                    <p className="text-green-600 font-normal text-sm">{ResponseProductDetailes.category.name}</p>
                        <h2 className="text-2xl font-semibold">{ResponseProductDetailes.title}</h2>
                    <p>{ResponseProductDetailes.description}</p>
                        <div className="flex justify-between items-center mt-2">
                        <p className="text-lg font-semibold">{ResponseProductDetailes.price} EGP</p>
                        <p className="text-sm "><i className="fa-sharp fa-solid fa-star pe-1" style={{ color: "#FFD43B" }}></i>{ResponseProductDetailes.ratingsAverage}</p>
                        </div>

                    <div className=" md:mt-[50px]">
                        <button onClick={()=> HandleAddProdct(ResponseProductDetailes.id)} className=" bg-green-600 w-full rounded-md py-1 mt-2 text-white text-sm font-semibold">
                            {isloading ? <Loading width={20} color={"#eeee"}/> : "Add To Cart"}
                        </button>
                    </div>
                    </div>
            
            </div>
            </div>
        
    </>
}
