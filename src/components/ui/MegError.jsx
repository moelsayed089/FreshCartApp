
const MegError = ({msg,className='text-red-500 font-semibold text-sm'}) => {
  return <>
  <div className={className}>{msg}</div>
  </>
}

export default MegError;