import MegError from "./MegError"

 const Input = ({type,placeholder,id,value ,error,...rest}) => {
    return <>
        <input
            type={type}
            className="w-full my-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 border-gray-200 p-4 pe-12 text-sm shadow-md"
            placeholder={placeholder} id={id} value={value} {...rest}
        />
        {error ? <MegError msg={error}/> : null}
    </>
}
export default Input
