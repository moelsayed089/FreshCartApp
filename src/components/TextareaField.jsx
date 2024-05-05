import React from 'react'
import MegError from './ui/MegError'

export const TextareaField = ({ type, placeholder, id, value, error,rows,cols, ...rest }) => {
    return <>
        <textarea type={type}
            className="w-full my-2 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-green-600 p-4 pe-12 text-sm shadow-md"
            placeholder={placeholder} id={id} value={value} cols={cols} rows={rows} {...rest} >
        </textarea>
        {error ? <MegError msg={error} /> : null}
    </>
}
