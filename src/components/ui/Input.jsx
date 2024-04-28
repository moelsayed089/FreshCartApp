
 const Input = ({type,placeholder,id,value,...rest}) => {
    return <>
        <input
            type={type}
            className="w-full my-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 border-gray-200 p-4 pe-12 text-sm shadow-md"
            placeholder={placeholder} id={id} value={value} {...rest}
        />
    </>
}
export default Input
