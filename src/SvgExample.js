import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={192}
            height={192}
            viewBox="0 0 256 256"
            {...props}
        >
            <Path fill="none" d="M0 0h256v256H0z" />
            <Path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={16}
                d="M160 104h80M160 136h80M160 168h80M72 200h168M126.515 131.615A48.005 48.005 0 1179.93 72M79.93 114.477l-.055 53.413"
            />
            <Path
                d="M111.93 52a20 20 0 010 40l-64-40a20.003 20.003 0 00-6.251 39.004"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={16}
            />
        </Svg>
    )
}

export default SvgComponent
