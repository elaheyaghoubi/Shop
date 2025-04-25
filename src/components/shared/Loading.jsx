import { ClipLoader } from "react-spinners";
import React from 'react'

function Loading({loading}) {
    return (
        <div className={"text-center"}>
            <ClipLoader
                color={"#000"}
                loading={loading}
                cssOverride={{
                    borderWidth: "3px",
                    borderColor: "#2a0eaa #2a0eaa transparent",
                    animation: "1s linear 0s infinite normal both running react-spinners-ClipLoader-clip"
                }}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loading
