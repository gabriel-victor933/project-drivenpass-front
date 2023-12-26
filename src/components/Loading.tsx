import React from 'react'
import { TailSpin } from 'react-loader-spinner'


const Loading: React.FC<{size: string | undefined}> = ({size}) => {
  return (
    <TailSpin
        height={size || "80"}
        width={size || "80"}
        color="#005985"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />
  )
}

export default Loading