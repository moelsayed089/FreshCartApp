import { FallingLines } from "react-loader-spinner"

export const Loading = ({ color, width }) => {
    return <>
        <div className=" flex items-center justify-center">
            <FallingLines
                color={color}
                width={width}
                visible={true}
                ariaLabel="falling-circles-loading"
            />
        </div>
    </>
}
